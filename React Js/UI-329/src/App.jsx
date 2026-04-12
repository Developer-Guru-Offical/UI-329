import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import dgLogo from './assets/DG-New-Logo.jpeg'
import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header/>
       <Home/>
       <Footer/>
    </>
  )
}

export default App
