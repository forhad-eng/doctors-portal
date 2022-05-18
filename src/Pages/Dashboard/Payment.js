import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import LoadingSpinner from '../Shared/LoadingSpinner'

const Payment = () => {
    const { id } = useParams()

    const { data, isLoading } = useQuery(['service', id], () =>
        fetch(`http://localhost:5000/booking/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )

    const { patientName, treatment, price } = data?.booking

    if (isLoading) {
        return <LoadingSpinner />
    }

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
                <div class="card-body"></div>
            </div>
        </div>
    )
}

export default Payment
