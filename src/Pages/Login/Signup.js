import React from 'react'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase.init'
import useToken from '../../hooks/useToken'
import LoadingSpinner from '../Shared/LoadingSpinner'

const Signup = () => {
    const [createUserWithEmailAndPassword, eUser, eLoading, eErr] = useCreateUserWithEmailAndPassword(auth)
    const [signInWithGoogle, gUser, gLoading, gErr] = useSignInWithGoogle(auth)
    const [updateProfile, updateLoading] = useUpdateProfile(auth)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const navigate = useNavigate()
    const [token] = useToken(eUser || gUser)

    let errorMessage
    if (eErr || gErr) {
        errorMessage = <p className="text-red-500">{eErr?.message || gErr?.message}</p>
    }

    if (eLoading || gLoading || updateLoading) {
        return <LoadingSpinner />
    }

    if (token) {
        navigate('/')
    }

    const onSubmit = async (data, e) => {
        await createUserWithEmailAndPassword(data.email, data.pass)
        await updateProfile({ displayName: data.name })
        e.target.reset()
    }

    return (
        <div class="min-h-screen flex justify-center items-center">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="text-2xl text-center text-accent">Sign Up</h3>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input
                                {...register('name', {
                                    required: { value: true, message: 'Name is required' }
                                })}
                                type="text"
                                placeholder="Your name"
                                class="input input-bordered"
                            />
                            {errors?.email?.type === 'required' && (
                                <p className="text-red-500">{errors.email.message}</p>
                            )}
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                {...register('email', {
                                    required: { value: true, message: 'Email is required' },
                                    pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' }
                                })}
                                type="email"
                                placeholder="Email"
                                class="input input-bordered"
                            />
                            {errors?.email?.type === 'required' && (
                                <p className="text-red-500">{errors.email.message}</p>
                            )}
                            {errors?.email?.type === 'pattern' && (
                                <p className="text-red-500">{errors.email.message}</p>
                            )}
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                {...register('pass', {
                                    required: { value: true, message: 'Password is required' },
                                    minLength: { value: 6, message: 'Password must be 6 characters' }
                                })}
                                type="password"
                                placeholder="Password"
                                class="input input-bordered"
                            />
                            {errors?.pass?.type === 'required' && <p className="text-red-500">{errors.pass.message}</p>}
                            {errors?.pass?.type === 'minLength' && (
                                <p className="text-red-500">{errors.pass.message}</p>
                            )}
                        </div>
                        {errorMessage}
                        <div class="form-control mt-3">
                            <button class="btn btn-accent">Sign Up</button>
                        </div>
                        <p className="text-center">
                            <small>
                                Already have an account?{' '}
                                <Link to="/login" className="text-primary cursor-pointer">
                                    Login
                                </Link>
                            </small>
                        </p>
                    </form>
                    <div class="divider">OR</div>
                    <div class="form-control">
                        <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-accent">
                            Continue with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
