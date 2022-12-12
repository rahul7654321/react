import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FormControl } from '@mui/material';
import { TextField } from '@mui/material';
import './front.css'
import { Link } from 'react-router-dom';


export default function App3() {
    const [count, setCount] = useState(0)
  
    return (
        <div>
            {/* -----------------Gallery in bulidings ------------- */}


          <div class="our-gallery">
    <h1>Our <span>Dedication </span> And<span> love</span> </h1>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <div class="main-gallery">
        <div class="inner-gallery">
            <img src="./g1 (4).jpg" alt=""/>
        </div>

        <div class="inner-gallery">
            <img src="./g1 (2).jpg" alt=""/>
        </div>

        <div class="inner-gallery">
            <img src="./g1 (3).jpg" alt=""/>
        </div>

        <div class="inner-gallery">
            <img src="./g1 (7).jpg" alt=""/>
        </div>

        <div class="inner-gallery">
            <img src="./g1 (6).jpg" alt=""/>
        </div>

        <div class="inner-gallery">
            <img src="./g1 (1).jpg" alt=""/>
        </div>
        <div class="inner-gallery">
            <img src="./g1 (1).jpg" alt=""/>
        </div>
        <div class="inner-gallery">
            <img src="./g1 (1).jpg" alt=""/>
        </div>
    </div>
</div>

{/* customer review ---------------------------- */}

<div class="customer-review">
    <h1>customer <span>review</span></h1>
    <div class="main-review">
        <div class="inner-review">
          
            <img src="./user2.jpg" alt=""/>
            <p>I have had the privilege to work with John and Blue Ribbon for the last few years now. As a subcontractor it is nice to know when you arrive to a job site knowing the place is ready for you and everything is done correctly. There are no shortcuts taken and all work is completed to the highest standard. I recommend Blue Ribbon for all my customers that are in need of a general contractor.</p>
        </div>

        <div class="inner-review">
           
            <img src="./user5.jpg" alt=""/>
            <p> work with Traditions In Tile in Raleigh and have had the pleasure to work with Blue Ribbon on several projects. Blue Ribbon is extremely organized as well as easy to work with. I have also referred them to several homeowners looking for a quality, dependable remodeling company.</p>
        </div>

        <div class="inner-review">
            
            <img src="./user4.jpg" alt=""/>
            <p>During this year, I have also been able to learn from John professionally as we are both in Sales. His process driven systems and work ethic are commendable. The care and enthusiasm he has for his craft and his clients is something I seek to duplicate in my own.</p>
        </div>
        <div class="inner-review">
            
            <img src="./user1.jpg" alt=""/>
            <p>During this year, I have also been Blue Ribbon for the last few years now. As a subcontractor able to learn from John professionally as we are both in Sales. His process driven systems and work ethic are commendable. The care and enthusiasm he has for his craft and his clients is something I seek to duplicate in my own.</p>
        </div>
    </div>
</div>



{/* customer review ---------------------------- */}







        </div>
    )
}