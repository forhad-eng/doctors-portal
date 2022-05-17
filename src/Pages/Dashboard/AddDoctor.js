import React from 'react'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import LoadingSpinner from '../Shared/LoadingSpinner'

const AddDoctor = () => {
    const { data: services, isLoading } = useQuery('service-names', () =>
        fetch('http://localhost:5000/service', {
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        }).then(res => res.json())
    )
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm()

    const imageStorageKey = 'd800159038f19c6082b61b82f9683f6c'

    const onSubmit = data => {
        const { name, image: photo, specialty, email } = data
        const image = photo[0]
        const fromData = new FormData()
        fromData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${imageStorageKey}`, {
            method: 'POST',
            body: fromData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const imageUrl = result.data.url
                    const doctor = {
                        name: name,
                        image: imageUrl,
                        specialty: specialty,
                        email: email
                    }
                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.success) {
                                reset()
                                toast.success(data.message)
                            }
                        })
                }
            })
    }

    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <div>
            <h2 className="text-2xl">Add a Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full lg:max-w-lg mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered"
                        {...register('name', {
                            required: {
                                value: true,
                                message: 'Name is required'
                            }
                        })}
                    />
                    {errors.name?.type === 'required' && <p className="text-red-500">{errors.name.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Email"
                        className="input input-bordered"
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' }
                        })}
                    />
                    {errors.email?.type === 'required' && <p className="text-red-500">{errors.email.message}</p>}
                    {errors.email?.type === 'pattern' && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} class="select select-bordered">
                        {services?.result?.map(service => (
                            <option key={service._id} value={service.name}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered"
                        {...register('image', {
                            required: {
                                value: true,
                                message: 'Photo is required'
                            }
                        })}
                    />
                    {errors.image?.type === 'required' && <p className="text-red-500">{errors.image.message}</p>}
                </div>
                <div className="form-control mt-3">
                    <button type="submit" className="btn btn-accent">
                        ADD
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddDoctor
