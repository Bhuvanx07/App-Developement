import React,{ useState } from "react";
import './login.css'; // Import the CSS file
import {Link} from "react-router-dom";
function Login()
{   
      const [email, setemail] = useState('');
      const [password, setpassword] = useState('');
  
      const handleEmailChange = (e) => {
        setemail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setpassword(e.target.value);
      };

     const handleSubmit=(e)=>{
      e.preventDefault();
      
      const data = {

        email:email,
        password:password

      };

      fetch('http://localhost:8080/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
      
        .then((responseData) => {
          console.log('Success:', responseData);
        
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      
    
    };

    return(
        <div className="full">
            <div className="outer" id="login-full">
                <h1 id="title"></h1>
                <h1 id="head">LOGIN</h1>
                <div className="fields">

                {/* onChange={(e) => setFname(e.target.value)}
                  validation={errors.fname ? false : true}
                  errorMessage={errors.fname} */}
<br></br>
<br></br>
<input id="email" type="email" required placeholder="Enter your email here" value={email}  
onChange={handleEmailChange}></input>

 {/* <input type="text" id="new-username" name="new-username" required placeholder="   Enter your emailid"/> */}
<br></br>
<br></br>
<br></br>
<input id="password" type="password" required placeholder="Enter your password here"  value={password}  onChange={handlePasswordChange} />
<br></br>
<br></br>
<br></br>
<button id="submit" onClick={handleSubmit} type="submit"><Link to='/home'>LOGIN</Link></button>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
           <h4 id="lower">Dont have an account?{" "}<Link to='/reg'>Register</Link></h4>
                </div>
            </div>
        </div>
    )
}

export default Login;