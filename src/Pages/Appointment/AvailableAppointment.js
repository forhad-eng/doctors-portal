import { format } from 'date-fns'
import React, { useState } from 'react'
import { useQuery } from 'react-query'
import LoadingSpinner from '../Shared/LoadingSpinner'
import AppointmentCard from './AppointmentCard'
import AppointmentModal from './AppointmentModal'

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null)

    const formattedDate = format(date, 'PP')
    const {
        data: services,
        isLoading,
        refetch
    } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res => res.json())
    )

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div>
            <h3 className="text-secondary text-2xl text-center">Available Appointments on {format(date, 'PP')}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-24">
                {services.result.map(service => (
                    <AppointmentCard key={service._id} service={service} setTreatment={setTreatment} />
                ))}
            </div>
            {treatment && (
                <AppointmentModal treatment={treatment} setTreatment={setTreatment} date={date} refetch={refetch} />
            )}
        </div>
    )
}

export default AvailableAppointment
