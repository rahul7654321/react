import { useState } from 'react'

import './login.css'
import {Link,Route, Routes} from "react-router-dom"

import App1 from './App1'
import App5 from './login1'

export default function App7() {
  const [count, setCount] = useState(0)

  return (
    <div>
          <div class="login-wrapper">
    <form action="index.html" class="form">
      <img src="../img2/avatar.png" alt=""/>
      <h2>Create an Account</h2>
      <div class="input-group">
        <input type="text" name="loginUser" id="loginUser" required/>
        <label for="loginUser">User Name</label>
      </div>



      <div class="input-group">
        <input type="text" name="loginUser" id="loginUser" required/>
        <label for="loginUser">E-mail</label>
      </div>



      <div class="input-group">
        <input type="password" name="loginPassword" id="loginPassword" required/>
        <label for="loginPassword">Set-Password</label>
      </div>
     
      {/* <input type="submit" value="Create-Account" class="submit-btn"/> */}
      <Link  to='/App5' className='submit-btn'>Create New Account</Link><br/><br/><br/>
    </form>

    <div id="forgot-pw">
      <form action="" class="form">
        <a href="#" class="close">&times;</a>
        <h2>Reset Password</h2>
        <div class="input-group">
          <input type="email" name="email" id="email" required/>
          <label for="email">Email</label>
        </div>
        <input type="submit" value="Submit" class="submit-btn"/>
      </form>
    </div>
  </div>



    </div>
  )
}