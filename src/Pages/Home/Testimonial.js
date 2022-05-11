import React from 'react'
import quote from '../../assets/icons/quote.svg'
import person1 from '../../assets/images/people1.png'
import person2 from '../../assets/images/people2.png'
import person3 from '../../assets/images/people3.png'

const Testimonial = () => {
    const testimonials = [
        { _id: 1, image: person1, name: 'Winson Herry', location: 'California' },
        { _id: 2, image: person2, name: 'Winson Herry', location: 'California' },
        { _id: 3, image: person3, name: 'Winson Herry', location: 'California' }
    ]

    return (
        <div className="mb-10">
            <div className="flex justify-between">
                <div>
                    <h5 className="text-secondary font-bold">Testimonial</h5>
                    <h3 className="text-3xl">What Our Patients Says</h3>
                </div>
                <img src={quote} className="w-48" alt="" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
                {testimonials.map(testimonial => (
                    <div className="shadow-xl rounded-lg p-10">
                        <p>
                            It is a long established fact that by the readable content of a lot layout. The point of
                            using Lorem a more-or-less normal distribu to using Content here, content
                        </p>
                        <div className="flex gap-5 items-center mt-10">
                            <div class="avatar">
                                <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={testimonial.image} alt="" />
                                </div>
                            </div>
                            <div>
                                <h5>{testimonial.name}</h5>
                                <h6>{testimonial.location}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial
