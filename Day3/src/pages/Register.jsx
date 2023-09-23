import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Register.css'
export const Register = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, name);
        toast.success('Sucessfully registered!');
    }
    const err = () => {
        toast.error('Enter the credentials');
    }
    const handleRoute = () => {
        nav('/Login')
    }
    return (
        <>
            <div className="auth-form-container">
            <h1>ZIPCART</h1>
                <div className="formbox">
                    <form onSubmit={handleSubmit}>
                        <h1>REGISTER</h1>
                        <label htmlFor="name">Name</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="your name" id="name" name="name" onEmptiedCapture={err} autoFocus required />
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email" id="email" name="email" onEmptiedCapture={err} required />
                        <label htmlFor="password">Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password" onEmptiedCapture={err} required />
                        <div className="lbutton"><button type="submit" className="button" disabled={!password}>Register</button></div>
                    </form>
                </div>
                <h5>Already have an account?<span className="text-link" onClick={handleRoute}>Log in here.</span></h5>
            </div>
            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </>
    )
}