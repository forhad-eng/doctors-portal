import React from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import chair from '../../assets/images/chair.png'

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="grid md:grid-cols-2 gap-5 my-14 md:my-28">
            <div className="order-2 md:order-1">
                <DayPicker
                    className="shadow-xl w-fit rounded-lg mx-auto p-4"
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
            </div>
            <div className="order-1 md:order-2">
                <img className="lg:max-w-lg" src={chair} alt="" />
            </div>
        </div>
    )
}

export default AppointmentBanner
