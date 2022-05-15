import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate } from 'react-router-dom'
import { auth } from '../../firebase.init'
import useAdmin from '../../hooks/useAdmin'
import LoadingSpinner from '../Shared/LoadingSpinner'

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user)

    if (loading || adminLoading) {
        return <LoadingSpinner />
    }

    if (!admin) {
        signOut(auth)
        localStorage.removeItem('accessToken')
        return <Navigate to="/login" />
    }

    return children
}

export default RequireAdmin
