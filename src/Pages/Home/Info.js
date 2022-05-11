import React from 'react'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard from './InfoCard'

const Info = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-36">
            <InfoCard
                image={clock}
                title="Opening Hours"
                des="Lorem Ipsum is simply dummy text of the pri"
                bgClass="bg-primary"
            />
            <InfoCard
                image={marker}
                title="Visit our location"
                des="Brooklyn, NY 10036, United States"
                bgClass="bg-accent"
            />
            <InfoCard image={phone} title="Contact us now" des="+000 123 456789" bgClass="bg-primary" />
        </div>
    )
}

export default Info
