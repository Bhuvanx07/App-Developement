import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use 'useNavigate' instead of 'Navigate'
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  const dispatch=useDispatch();

  const handleSubmit = async (e) => {
    dispatch({type:"POSTNAME",payload:name})
    e.preventDefault();

    // Name validation: Check if the name is not empty
    if (!name) {
      setErrorMessage('Please enter your name.');
      return;
    }

    // Email validation: Check if the email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Contact number validation: Ensure that the contact number contains only numbers
    const contactRegex = /^\d+$/;
    if (!contactRegex.test(contact)) {
      setErrorMessage('Please enter a valid contact number.');
      return;
    }

    // Password validation: Ensure that the password has a minimum length
    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters long.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/register', {
        name,
        email,
        contact,
        password,
      });

      if (response.status === 200) {
        navigate('/');
        setName('');
        setContact('');
        setPassword('');
        setEmail('');
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <div className="full">
      <div className="outer">
        <h1 id="head">Register your Account</h1>
        <form className="fields" onSubmit={handleSubmit}>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <label htmlFor="name">Name</label>
          <br/>
          <input
            id="usrnm"
            type="text"
            required
            placeholder="Enter your name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          
          <label htmlFor="email">Email</label>
          <br/>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="email">Password</label>
          <br/>
          <input
            id="password"
            type="password"
            required
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          
          <label htmlFor="phone">Phone number</label>
          <br/>
          <input
            id="mob"
            type="number"
            pattern="[0-9]*"
            required
            placeholder="Enter your mobile number here"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <br />
          <br />
          <button id="submit">REGISTER</button>
          <br />
        </form>
      </div>
    </div>
  );
}

export default Signup;