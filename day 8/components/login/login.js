import React, { useState } from 'react';
import './login.css'; // Import the CSS file
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleformSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
    setErrorMessage('');
  };

  return (
    <div className="full">
      <div className="outer" id="login-full">
        <h1 id="title"></h1>
        <h1 id="head">LOGIN</h1>
        <div className="fields">
          <label htmlFor="email">User email</label>
          <br />
          <input
            id="email"
            label="user"
            type="email"
            required
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />

          <label htmlFor="password">Password</label>
          <br />
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
