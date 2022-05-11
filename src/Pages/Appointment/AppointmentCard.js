import React from 'react'

const AppointmentCard = ({ service, setTreatment }) => {
    const { name, slots } = service

    return (
        <div class="card lg:max-w-lg shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-secondary">{name}</h2>
                <p>{slots.length ? slots[0] : <span className="text-red-500">Try another day</span>}</p>
                <p>{slots.length} Service available</p>
                <div class="card-actions">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        for="book-modal"
                        class="btn modal-button text-white font-bold bg-gradient-to-r from-secondary to-primary"
                    >
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    )
}

export default AppointmentCard
