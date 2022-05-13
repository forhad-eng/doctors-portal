import React from 'react'
import chair from '../../assets/images/chair.png'
import landingBg from '../../assets/images/landing-bg.png'
import PrimaryButton from '../Shared/PrimaryButton'

const Banner = () => {
    return (
        <div
            class="hero min-h-screen"
            style={{ background: `url(${landingBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="lg:max-w-lg rounded-lg shadow-2xl" alt="banner" />
                <div className="lg:w-1/2 mr-auto">
                    <h1 class="text-5xl text-accent font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6 text-accent">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default Banner
