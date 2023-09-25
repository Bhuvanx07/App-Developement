import React, { useState } from 'react';
import {Link} from 'react-router-dom';
function Signup()
{

     const [name, setname] = useState('');
  const [password, setpassword] = useState('');

  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  

  const handleNameChange = (e) => {
    setname(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
  };
 
  const handleEmailChange = (e) => {
    setemail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setphone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform sign-up logic here, such as making an API call to create a new user
    console.log('Name:', name);
    console.log('Password:', password);
    
    console.log('Email', email);
    console.log('Phone', phone);
    // Reset form fields
    setname('');
    setpassword('');
   
    setemail('');
    setphone('');
  };



    return(
        <div className="full">
            <div className="outer">
               
                <h1 id="head">Register your Account</h1>
                <div className="fields" onSubmit={handleSubmit}>

<input id="usrnm" type="name" required placeholder="Enter your name here" onChange={handleNameChange}></input>
<br></br>
<br></br>
<br></br>
<input id="email" type="email" required placeholder="Enter your email here" value={email} onChange={handleEmailChange}></input>
<br></br>
<br></br>
<br></br>
<input id="password" type="password" required placeholder="Enter your password here" value={password} onChange={handlePasswordChange}></input>
<br></br>
<br></br>
<br></br>
<input id="mob" type="number" pattern='[0-9]*' required placeholder="Enter your mobile number here" value={phone} onChange={handlePhoneChange}></input>
<br></br>
<br></br>
<Link to='/'><button id="submit">REGISTER</button></Link>
<br></br>
           <h4 id="lower">Already have an account?<Link to='/'>Login</Link></h4>
           
                </div>
            </div>
        </div> 
    )
}

export default Signup;