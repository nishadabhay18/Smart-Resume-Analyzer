import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { toast } from 'react-toastify'
import { RiArrowLeftLongLine } from "@remixicon/react";


const Register = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { loading, handleRegister } = useAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const success = await handleRegister({ username, email, password })

        if (success) {
            toast.success("User Registered Successful")
            navigate("/")
        }
    }

    if (loading) {
        return (<main><h1>Loading.......</h1></main>)
    }

    return (
        <main>
            <div className='flex items-center justify-center flex-col gap-3 '>
                <div className="w-full back  rounded-sm flex justify-start">
                    <RiArrowLeftLongLine className=' border-slate-300 px-2 rounded-sm h-7 w-9 hover:bg-red-500 ' onClick={() => navigate('/start')} />
                </div>
                <div className="form-container">
                    <h1>Register</h1>

                    <form onSubmit={handleSubmit}>

                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input
                                onChange={(e) => { setUsername(e.target.value) }}
                                type="text" id="username" name='username' placeholder='Enter username' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email" id="email" name='email' placeholder='Enter email address' />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={(e) => { setPassword(e.target.value) }}
                                type="password" id="password" name='password' placeholder='Enter password' />
                        </div>

                        <button className='button primary-button' >Register</button>

                    </form>

                    <p>Already have an account? <Link to={"/login"} >Login</Link> </p>
                </div>
            </div>
        </main>
    )
}

export default Register