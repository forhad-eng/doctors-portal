import React from 'react'
import banner from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton'

const ExtraInfo = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img src={banner} class="lg:max-w-sm rounded-lg shadow-2xl" alt="extra info" />
                <div className="lg:w-1/2 lg:pl-20">
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal
                        distribution of letters,as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages and web page
                    </p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default ExtraInfo
