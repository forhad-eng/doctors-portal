import React from 'react'
import appointment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor.png'
import PrimaryButton from '../Shared/PrimaryButton'

const MakeAppointment = () => {
    return (
        <div className="flex justify-center items-center mt-28 mb-20" style={{ background: `url(${appointment})` }}>
            <div className="flex-1 mt-[-150px]">
                <img src={doctor} alt="doctor" />
            </div>
            <div className="flex-1">
                <h5 className="text-secondary font-bold">Appointment</h5>
                <h3 className="text-3xl text-white">Make an appointment Today</h3>
                <p className="my-5 pr-20 text-secondary">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal
                    distribution of letters,as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page
                </p>
                <PrimaryButton>Make Appointment</PrimaryButton>
            </div>
        </div>
    )
}

export default MakeAppointment
