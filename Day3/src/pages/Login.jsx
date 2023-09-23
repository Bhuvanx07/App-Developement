import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Login.css';
export const Login = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        toast.success('Login Sucessful');
    }
    const handleRoute = () => {
        nav('/Register')
    }
    return (
        <>
            <div className="auth-form-container">
            <h1>ZIPCART</h1>
                <div className="formbox">
                    <form onSubmit={handleSubmit}>
                        <h1>LOGIN</h1>
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email" id="email" name="email" autoFocus required />
                        <label htmlFor="password">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" required />
                        <div className="lbutton"><button type="submit" className="button" disabled={!password} >Log In</button></div>
                    </form>
                </div>
                <h5>Don't have an account? <span className="text-link" onClick={handleRoute}>Register here.</span></h5>
            </div>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </>
    )
}