import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router'
import "../auth.form.scss"
import { useAuth } from '../hooks/useAuth'
import { toast } from 'react-toastify'
import { RiArrowLeftLongLine } from "@remixicon/react";

const Login = () => {

    const { loading, handleLogin } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     await handleLogin({ email, password })
    //     toast.success("User LoggedIn Successful")
    //     setTimeout(()=>{
    //         navigate("/")
    //     }, 1000)
    // }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const success = await handleLogin({ email, password })

        if (success) {
            toast.success("User LoggedIn Successful")
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
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
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
                        <button className='button primary-button' >Login</button>
                    </form>
                    <p>Don't have an account? <Link to={"/register"} >Register</Link> </p>
                </div>
            </div>
        </main>
    )
}

export default Login