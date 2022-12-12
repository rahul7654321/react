import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FormControl } from '@mui/material';
import { TextField } from '@mui/material';
import './front.css'
import { Link } from 'react-router-dom';

function App2() {
    const [count, setCount] = useState(0)
  
    return (
        <div>
            {/*---------------------- welcome message------------------------------------ */}

            
<div className="welcome">
    <div className="main-welcome">
        <div className="inner-welcome">
            <div className="welcome-text">
                <h1>One of <span>the World Class</span> Construction</h1>
                <p> firm is known to be the famous organization engaged in providing Architecture and layout Services. Our skilled and experienced professionals are eminent in meeting the requirements of our clients and provide the services as per their needs.</p>
                <a href="#" class="wel-btn">About Us</a>
            </div>
        </div>
        <div className="inner-welcome">
            <img src="./wel1.jpg" alt="(*)"/>
        </div>
    </div>
</div>
    
     {/* our services page is on--------------------------------------------------- */}
          
<div className="our-services">
<h1>our <span>services</span></h1>
        
        <div class="row">
            <div class="facilities-col">
            <img src="./resd.jpg" className='img1'/>
            <h2>Residential Building Construction</h2>
            <p>These designs meet multi-gen households' needs for independence and privacy while also offering communal gathering spaces for family members to come together</p>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                     <a href="#" className="service-btn">Read more</a>
            </div>
            <div class="facilities-col">
            <img src="./it.jpg" className='img1'/>
            <h2>Commercial Building Construction</h2>
            <p>Commercial buildings are an important part of doing business, both for those who own them and for those who rent them. A commercial building could contain one or more of many types of businesses, including retailers, restaurants, offices or manufacturing.</p>
            <br/><br/><br/><br/><br/>
            <a href="#" className="service-btn">Read more</a> 
            </div>
            <div class="facilities-col">
            <img src="./indus2.jpg"  className='img1'/>
            <h2>Industiral Building Construction</h2>
            <p>A building directly used in manufacturing or technically productive enterprises. Industrial buildings are not generally or typically accessible to other than workers. Industrial buildings include buildings used directly in the production of power, the manufacture of products,</p>
            <br/><br/><br/>
            <a href="#" className="service-btn">Read more</a>
            </div>
        </div>
        </div>


  {/* over services ------------------------------------------ */}
    
</div>

   
     

        )
      }


      
      export default App2
      