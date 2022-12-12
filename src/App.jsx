import { useState } from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import './front.css'
import App5 from './login1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        {/*------------------------------------------------------ we madde header */}
      <div>
      <header className="header">
        <img src='./logo1.png' alt='(*)'/>
        <a href="#" id="logo">WE bUILD</a>
        <navbar className="nav">
            {/* <a href="#">Contact us</a> */}
            <Link to='./App5'>Home</Link>
            <Link to='./App5'>About us</Link>
            <Link to='./App5'>Our servces</Link>
            <Link to='./App5'>Client project</Link>
            <Link to='./App5'>Login in</Link>
        </navbar>

       
    </header>
  {/*------------------------------- Header is over---------------------------------------------------- */}
    
   {/*--------------------- back ground image---------------------------------- */}
    
     
<div className="background-image">
    <div class="inner-back-text">
    
    <h1>Construction Designers<br></br>
          <span>Experience is Our Success</span></h1>
        <p>
        Get latest insights from the construction sector investment avenues, and more from our thought leaders.
        
             </p>
            <div class="inner-back-btn">
                <a href="" className="sec-btn">view projects</a>
            </div>

            </div>
</div>

   {/*--------------------- back ground image---------------------------------- */}

    

        </div>
        
    </div>
    
  )
}

export default App
