import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
//  import App5 from './login1'
import { BrowserRouter } from 'react-router-dom'
import App6 from './index'
import App7 from './login2'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <BrowserRouter>
      <App6 />
    </BrowserRouter>
    

  </div>
)
