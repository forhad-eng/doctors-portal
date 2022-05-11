import React from 'react'
import Footer from '../Shared/Footer'
import Banner from './Banner'
import ContactUs from './ContactUs'
import ExtraInfo from './ExtraInfo'
import Info from './Info'
import MakeAppointment from './MakeAppointment'
import Services from './Services'
import Testimonial from './Testimonial'

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <ExtraInfo />
            <MakeAppointment />
            <Testimonial />
            <ContactUs />
            <Footer />
        </div>
    )
}

export default Home
