import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import MyComponent from './MyComponent/index.jsx'
import Home from './Pages/Home/index.jsx'
import About from './Pages/About/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <MyComponent/> */}
    {/* <Home/> */}
    {/* <About/> */}
  </StrictMode>,
)
