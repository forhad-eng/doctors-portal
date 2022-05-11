import React from 'react'

const InfoCard = ({ image, title, des, bgClass }) => {
    return (
        <div class={`card lg:card-side shadow-xl text-white px-5 py-5 md:py-0 ${bgClass}`}>
            <figure>
                <img src={image} alt="Album" />
            </figure>
            <div class="px-6 py-8">
                <h2 class="card-title">{title}</h2>
                <p>{des}</p>
            </div>
        </div>
    )
}

export default InfoCard
