import React, { useState } from 'react';
import './login.css'; // Import the CSS file
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

// ... (previous imports and code) ...

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleformSubmit = async (e) => {
    e.preventDefault();

    // Email validation: Check if the email is in a valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Password validation: Ensure that the password has a minimum length
    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters long.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', {
        email,
        password,
      });

      navigate('/home');

      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Error: ', error);
      setErrorMessage('Password is Incorrect');
    }
  };

  return (
    <div className="full">
      <div className="outer" id="login-full">
        <h1 id="title"></h1>
        <h1 id="head">LOGIN</h1>
        <div className="fields">
          <label htmlFor="email">User email</label>
          <br/>
          <input
            id="email"
            label='user'
            type="email"
            required
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
          <br/>

          <label htmlFor="password">Password</label>
          <br/>
          <input
            id="password"
            type="password"
            required
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button id="submit" onClick={handleformSubmit} type="submit">
            LOGIN
          </button>

          <h4 id="lower">
            Don't have an account? <Link to="/reg">Register</Link>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Login;
