import React from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import HeroTab from './components/herotab.jsx'
// import Swier from './components/swier.jsx'
import Shop from'./components/shop.jsx'
import { Route,Routes } from 'react-router-dom'
import Product from './components/product.jsx'
import Blog from './components/blog.jsx'
function App() {

  return (
    <>
      <Navbar />
      {/* <HeroTab /> */}
      {/* <Swier /> */}
      {/* <Shop /> */}
      <Routes>
                    <Route path="/" element={<HeroTab />}/>
      
                    <Route path='/Shop' element={<Shop/>}/>
                    <Route path='/Product' element={<Product/>}/>
                    <Route path='/Blog' element={<Blog/>}/>
                  </Routes>
    </>
  )
}

export default App
