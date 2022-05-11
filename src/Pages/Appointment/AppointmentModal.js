import { format } from 'date-fns'
import React from 'react'

const AppointmentModal = ({ treatment, setTreatment, date }) => {
    const { name, slots } = treatment

    const formHandle = e => {
        e.preventDefault()
        // const slot = e.target.slot.value
        setTreatment(null)
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
                            disabled
                            value={format(date, 'PP')}
                            class="input input-bordered w-full max-w-xs"
                        />
                        <select class="input input-bordered w-full max-w-xs" name="slot">
                            {slots.map(slot => (
                                <option value={slot}>{slot}</option>
                            ))}
                        </select>
                        <input type="email" placeholder="Your email" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Phone number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AppointmentModal
