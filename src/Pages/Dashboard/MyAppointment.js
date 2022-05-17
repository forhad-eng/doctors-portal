import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useQuery } from 'react-query'
import { auth } from '../../firebase.init'
import LoadingSpinner from '../Shared/LoadingSpinner'

const MyAppointment = () => {
    const [user] = useAuthState(auth)
    const { data, isLoading } = useQuery('bookings', () =>
        fetch(`http://localhost:5000/booking?patient=${user.email}`, {
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        }).then(res => res.json())
    )

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div class="overflow-x-auto mt-3">
            <table class="table table-compact w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Slot</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((book, index) => (
                        <tr>
                            <th>{index + 1}</th>
                            <td>{book?.treatment}</td>
                            <td>{book?.date}</td>
                            <td>{book?.slot}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default MyAppointment
