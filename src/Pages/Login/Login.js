import React from 'react'
import {
    useSendPasswordResetEmail,
    useSignInWithEmailAndPassword,
    useSignInWithGoogle
} from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase.init'
import LoadingSpinner from '../Shared/LoadingSpinner'

const Login = () => {
    const [signInWithEmailAndPassword, eUser, eLoading, eErr] = useSignInWithEmailAndPassword(auth)
    const [signInWithGoogle, gUser, gLoading, gErr] = useSignInWithGoogle(auth)
    const [sendPasswordResetEmail, sending, sErr] = useSendPasswordResetEmail(auth)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const navigate = useNavigate()
    const location = useLocation()

    let errorMessage
    const from = location.state?.from?.pathname || '/'

    if (eErr || gErr) {
        errorMessage = <p className="text-red-500">{eErr?.message || gErr?.message}</p>
    }

    if (eLoading || gLoading) {
        return <LoadingSpinner />
    }

    if (eUser || gUser) {
        navigate(from, { replace: true })
    }

    const onSubmit = (data, e) => {
        signInWithEmailAndPassword(data.email, data.pass)
        e.target.reset()
    }

    const passResetHandle = () => {
        const email = window.prompt('Enter your email')
        if (email) {
            if (/\S+@\S+\.\S+/.test(email)) {
                sendPasswordResetEmail(email)
                alert('Email sent!')
            } else {
                alert('Invalid email!')
            }
        } else {
            alert('Please enter your email!')
        }
    }

    return (
        <div class="min-h-screen flex justify-center items-center">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="text-2xl text-center text-accent">Login</h3>
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
                            <label class="label">
                                <span onClick={passResetHandle} class="label-text-alt link link-hover">
                                    Forgot password?
                                </span>
                            </label>
                        </div>
                        {errorMessage}
                        <div class="form-control">
                            <button class="btn btn-accent">Login</button>
                        </div>
                        <p className="text-center">
                            <small>
                                New to Doctor's Portal?{' '}
                                <Link to="/register" className="text-primary cursor-pointer">
                                    Create an account
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

export default Login
