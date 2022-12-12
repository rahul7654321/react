import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FormControl } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import './front.css'
import App2 from './App2'
import { Link } from 'react-router-dom';

export default function App4() {
  const [count, setCount] = useState(0)

  return (
    <div>
       
       <section className="cta">
            <h1>For Construction And Any queries</h1>
            <a href="./App2" className="cta-btn">CONTACT US</a>
        </section>
        {/* -------------------footer ---------------------------- */}
        
  <div class="footer">
    <div class="main-footer">
      <div class="footer-inner-content">
        <h2>Our office</h2>
        <p>B1 - 101 ,Marathon Innova,</p>
        <p>Lower Parel, Mumbai-4001013</p>
      </div>

      <div class="footer-inner-content">
        <h2>Important links</h2>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Our services</a>
        <a href="#">Contact Us</a>
      </div>

      <div class="footer-inner-content">
        <h2>Office hours</h2>
        <p>Monday to Saturday</p>
        <p>9:00 AM to 6:00  PM</p>
        <p>Sunday - Off</p>
      </div>
      <div class="footer-inner-content">
        <h2>Contact Deatils</h2>
        
        <h4>phone No</h4>
        <p>+91-93603 39845</p> <h4>E-mail</h4> <p>teamwebuild@bulid.com</p>
      </div>
      <div class="footer-inner-content">
        <h2>Our Branches</h2>
         <ul>
          <li>
            Coimbatore
          </li>
          <li>
            Chennai
          </li>
          <li>
            Califonia
          </li>
          <li>
            China
          </li>
          <li>
            Chennasellampathii
          </li>
         </ul>
      </div>
      <div class="footer-inner-content">
        <h2>Our Partners</h2>
        
        <ul>
          <li>Sri krishna Institution</li>
          <li>Adhani Sons</li>
          <li>MK Stalin</li>
          <li>TATA Manufactures</li>
        </ul>
      </div>
       
       
      
      </div>
      </div>

        {/* -------------------footer ---------------------------- */}
        




    </div>
  )
}