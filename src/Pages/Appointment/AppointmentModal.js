import { format } from 'date-fns'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { toast } from 'react-toastify'
import { auth } from '../../firebase.init'

const AppointmentModal = ({ treatment, setTreatment, date, refetch }) => {
    const [user] = useAuthState(auth)
    const { name, slots, price } = treatment

    const formHandle = e => {
        e.preventDefault()

        const booking = {
            patient: e.target.email.value,
            patientName: e.target.name.value,
            treatment: name,
            treatmentId: treatment._id,
            date: e.target.date.value,
            slot: e.target.slot.value,
            phone: e.target.phone.value,
            price
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message)
                    refetch()
                } else {
                    toast.error(data.message)
                }
                setTreatment(null)
            })
    }

    return (
        <div>
            <input type="checkbox" id="book-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="book-modal" class="btn btn-sm btn-circle absolute right-2 top-2">
                        ✕
                    </label>
                    <h3 class="font-bold text-lg">{name}</h3>
                    <form onSubmit={e => formHandle(e)} className="grid grid-cols-1 gap-3 justify-items-center mt-2">
                        <input
                            type="text"
                            name="date"
                            disabled
                            value={format(date, 'PP')}
                            class="input input-bordered w-full max-w-xs"
                        />
                        <select name="slot" class="input input-bordered w-full max-w-xs">
                            {slots.map(slot => (
                                <option value={slot}>{slot}</option>
                            ))}
                        </select>
                        <input
                            type="text"
                            name='name'
                            disabled
                            value={user?.displayName}
                            class="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="email"
                            name="email"
                            disabled
                            value={user?.email}
                            class="input input-bordered w-full max-w-xs"
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone number"
                            class="input input-bordered w-full max-w-xs"
                        />
                        <input type="submit" value="Submit" class="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AppointmentModal
