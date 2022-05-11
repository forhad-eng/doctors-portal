import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import AppointmentCard from './AppointmentCard'
import AppointmentModal from './AppointmentModal'

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h3 className="text-secondary text-2xl text-center">Available Appointments on {format(date, 'PP')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-24">
                {services.map(service => (
                    <AppointmentCard key={service._id} service={service} setTreatment={setTreatment} />
                ))}
            </div>
            {treatment && <AppointmentModal treatment={treatment} setTreatment={setTreatment} date={date} />}
        </div>
    )
}

export default AvailableAppointment
