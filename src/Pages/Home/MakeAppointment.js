import React from 'react'
import { Link } from 'react-router-dom'
import appointment from '../../assets/images/appointment.png'
import doctor from '../../assets/images/doctor-small.png'
import PrimaryButton from '../Shared/PrimaryButton'

const MakeAppointment = () => {
    return (
        <div className="flex justify-center items-center mt-28 mb-20" style={{ background: `url(${appointment})` }}>
            <div className="flex-1 hidden lg:block mt-[-80px]">
                <img src={doctor} className="w-[90%]" alt="doctor" />
            </div>
            <div className="flex-1 p-10 md:p-0">
                <h5 className="text-secondary font-bold">Appointment</h5>
                <h3 className="text-3xl text-white">Make an appointment Today</h3>
                <p className="my-5 md:pr-20 text-secondary">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal
                    distribution of letters,as opposed to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web page
                </p>
                <Link to="/appointment">
                    <PrimaryButton>Make Appointment</PrimaryButton>
                </Link>
            </div>
        </div>
    )
}

export default MakeAppointment
