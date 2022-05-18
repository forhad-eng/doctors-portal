import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const CheckoutForm = ({ booking }) => {
    const stripe = useStripe()
    const elements = useElements()
    const [cardErr, setCardErr] = useState('')
    const [success, setSuccess] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    const { _id, price, patient, patientName } = booking

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price])

    const handleSubmit = async event => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        setCardErr(error?.message || '')

        const { paymentIntent, error: intentErr } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: patientName,
                    email: patient
                }
            }
        })

        if (intentErr) {
            setCardErr(intentErr.message)
        } else {
            setCardErr('')
            setSuccess('Congrats! Your payment is confirmed.')
            setTransactionId(paymentIntent.id)

            const payment = {
                treatment: _id,
                transactionId: paymentIntent.id
            }

            fetch(`http://localhost:5000/booking/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        toast.success('Payment done!')
                    }
                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4'
                                }
                            },
                            invalid: {
                                color: '#9e2146'
                            }
                        }
                    }}
                />
                <button
                    className="btn btn-sm btn-primary mt-4 px-6"
                    disabled={!stripe || !clientSecret || transactionId}
                >
                    Pay
                </button>
            </form>
            {cardErr && <p className="text-red-500">{cardErr}</p>}
            {success && (
                <div>
                    <p className="text-green-500">{success}</p>
                    <p className="text-green-500">
                        Transaction Id: <span className="text-orange-600 font-semibold">{transactionId}</span>
                    </p>
                </div>
            )}
        </>
    )
}

export default CheckoutForm
