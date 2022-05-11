import React from 'react'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton'

const ContactUs = () => {
    return (
        <div style={{ background: `url(${appointment})` }}>
            <div class="card flex-shrink-0 w-full lg:max-w-lg mx-auto my-28 py-10">
                <div class="card-body">
                    <h5 className="text-secondary text-center font-bold">Contact Us</h5>
                    <h3 className="text-3xl text-white text-center mb-5">Stay connected with us</h3>
                    <div class="form-control">
                        <input type="text" placeholder="Email address" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <input type="text" placeholder="Subject" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <textarea rows="5" className="rounded-lg pl-3 pt-2" placeholder="Your message"></textarea>
                    </div>
                    <div class="mt-6 mx-auto">
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
