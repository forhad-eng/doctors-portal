import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../Shared/LoadingSpinner'
import CheckoutForm from './CheckoutForm'

const Payment = () => {
    const { id } = useParams()
    const stripePromise = loadStripe(
        'pk_test_51L0VcfAnKHpPDONQvKZOdQdxd6pmUAxkviJRpt94NGZyOn1jVgDBdg6aGIjrP8gw4E5oGLGTpMHhjW2Jjacaroie00lZkaxl0c'
    )

    const { data, isLoading } = useQuery(['service', id], () =>
        fetch(`http://localhost:5000/booking/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )

    if (isLoading) {
        return <LoadingSpinner />
    }

    const { patientName, treatment, price } = data.booking

    return (
        <div className="pl-10">
            <div class="card max-w-md w-1/2 bg-base-100 shadow-xl my-10">
                <div class="card-body">
                    <p className="text-lg text-success font-bold">Hello, {patientName}</p>
                    <h2 class="card-title">Pay for {treatment}</h2>
                    <p>
                        Amount to pay <span className="text-warning">${price}</span>
                    </p>
                </div>
            </div>
            <div class="card max-w-md w-1/2 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={data.booking} />
                    </Elements>
                </div>
            </div>
        </div>
    )
}

export default Payment
