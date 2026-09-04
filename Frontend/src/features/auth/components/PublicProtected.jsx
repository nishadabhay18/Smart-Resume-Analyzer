import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router'

const PublicProtected = ({ children }) => {

    const { loading, user } = useAuth()

    if (loading) {
        return (
            <main className="flex h-screen items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
            </main>
        )
    }

    if (user) {
        return <Navigate to="/" replace />
    }

    return children
}

export default PublicProtected