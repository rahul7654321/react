import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FormControl } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import './login.css'
import { Link } from 'react-router-dom';

export default function App5() {
    const [count, setCount] = useState(0)
  
    return (
      <div className='main'>


  <div className="login-wrapper">
    <form action="" className="form">
      <img src="../img2/avatar.png" alt=""/>
      <h2>Login</h2>
      <div className="input-group">
        <input type="text" name="loginUser" id="loginUser" required/>
        <label for="loginUser">User Name</label>
      </div>
      <div className="input-group">
        <input type="password" name="loginPassword" id="loginPassword" required/>
        <label for="loginPassword">Password</label>
      </div>
      {/* <input type="submit" value="Login" className="submit-btn"/> */}
      <Link  to='/' className='submit-btn'>Login</Link><br/><br/><br/>
      <Link to="/App7" className="forgot">Create New Account</Link><br/><br/><br/>
      <a href="#forgot-pw" className="forgot">Forgot Password?</a>
    </form>

    <div id="forgot-pw">
      <form action="" className="form">
        <a href="#" className="close">&times;</a>
        <h2>Reset Password</h2>
        <div className="input-group">
          <input type="email" name="email" id="email" required/>
          <label for="email">Email</label>
        </div>
        <input type="submit" value="Submit" className="submit-btn"/>
      </form>
    </div>
  </div>

        
    



      </div>
     
    )
}