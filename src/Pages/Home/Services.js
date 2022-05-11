import React from 'react'
import service2 from '../../assets/images/cavity.png'
import service1 from '../../assets/images/fluoride.png'
import service3 from '../../assets/images/whitening.png'
import Service from './Service'

const Services = () => {
    return (
        <div className="mb-36">
            <h4 className="text-secondary text-center uppercase font-bold">Our Services</h4>
            <h3 className="text-2xl text-center">Services We Provide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                <Service image={service1} title="Fluoride Treatment" />
                <Service image={service2} title="Cavity Filling" />
                <Service image={service3} title="Teeth Whitening" />
            </div>
        </div>
    )
}

export default Services
