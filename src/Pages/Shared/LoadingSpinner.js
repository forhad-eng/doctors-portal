import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div
                style={{ borderTopColor: 'transparent' }}
                class="w-10 h-10 border-4 border-blue-400 border-solid rounded-full animate-spin"
            ></div>
        </div>
    )
}

export default LoadingSpinner
