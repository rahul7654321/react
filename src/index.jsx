import { useState } from 'react'


import {Link,Route, Routes} from "react-router-dom"

import App1 from './App1'
import App5 from './login1'
import App7 from './login2'

function App6() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
     {/* <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/App5">Login</Link></li>
      </ul>
     </nav> */}


     <Routes>
      <Route path='/' element={<App1 />} />
      <Route path='/App5' element={<App5 />} />
      <Route path='/App7' element={<App7 />} />
     </Routes>
    </div>
  )
}

export default App6
