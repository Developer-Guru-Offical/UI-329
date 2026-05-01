import { useState } from 'react'
import {Routes, Route,} from "react-router-dom";
import dgLogo from './assets/DG-New-Logo.jpeg'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Service from './Pages/Service'
import ProductMoreDetails from './Components/ProductMoreDetails';
// import Gallery from './Pages/Gallery'
// import Placement from './Pages/Placement'
// import Blog from './Pages/Blog'

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Product" element={<Product />} />
          <Route path="Service" element={<Service />} />
          <Route path="productMoreDetails" element={<ProductMoreDetails />} />

          {/* <Route path="Gallery" element={<Gallery />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Placement" element={<Placement />} /> */}
        </Routes>
    </>
  )
}

export default App
