import React from 'react'
import "./Navbar.css"
import Shop from "./shop.jsx"
import Herotab from "./herotab.jsx"
import { Link, Routes, Route } from 'react-router-dom'
const Navbar = () => {
  const  [homecta,setHomecta] = React.useState(false);
  const [shopDropdown, setShopDropdown] = React.useState(false);
  const [productDropdown, setProductDropdown] = React.useState(false);
  const [blogDropdown, setBlogDropdown] = React.useState(false);
  return (
    <>
    <nav className='navbar'>
        <div className="navbar-container">
        <div className="navbar-logo">
            <a href="/">
            <span className='logo-text'>milano</span>
            </a>

        </div>
        <ul className="navbar-menu">
            <li className='navbar-item'>
                <Link onMouseEnter={() => setHomecta(!homecta)} className='navbar-link' to="/">home</Link>
                {homecta && <ul className="dropdown-menu"><li><a href="/">Submenu Item 1</a></li><li><a href="/">Submenu Item 2</a></li>
            <li><a href="/">Submenu Item 3</a></li>
            <li><a href="/">Submenu Item 4</a></li>
            <li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li>
            </ul>}
            </li>
            <li className='navbar-item'>
                <Link onMouseEnter={() => setShopDropdown(!shopDropdown)}   className='navbar-link' to="/shop">Shop</Link>
                {/* <a href='/' className='navbar-link'>shop </a> */}
                {shopDropdown && <ul className="dropdown-menu"><li><a href="/">Submenu Item 1</a></li><li><a href="/">Submenu Item 2</a></li>
            <li><a href="/">Submenu Item 3</a></li>
            <li><a href="/">Submenu Item 4</a></li>
            <li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li>
            </ul>}
                </li>
            <li className='navbar-item'>
                <Link onMouseEnter={() => setProductDropdown(!productDropdown)} className='navbar-link' to='/product'>Product</Link>
                {productDropdown && <ul className="dropdown-menu"><li><a href="/">Submenu Item 1</a></li><li><a href="/">Submenu Item 2</a></li>
            <li><a href="/">Submenu Item 3</a></li>
            <li><a href="/">Submenu Item 4</a></li>
            <li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li>
            </ul>}
            </li>
            <li className='navbar-item'>
              <Link onMouseEnter={() => setBlogDropdown(!blogDropdown)} className='navbar-link' to='/blog'>Blog</Link>
                 </li>
                 {blogDropdown && <ul className="dropdown-menu"><li><a href="/">Submenu Item 1</a></li><li><a href="/">Submenu Item 2</a></li>
            <li><a href="/">Submenu Item 3</a></li>
            <li><a href="/">Submenu Item 4</a></li>
            <li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li><li><a href="/">Submenu Item 4</a></li>
            </ul>}
        </ul>
        <div className="navbar-icons">
            <button className='icon-btn search-btn'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            </button>
            <button className='icon-btn search-btn'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            </button>
            <button className='icon-btn search-btn'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            </button>
            <button className='icon-btn search-btn'>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            </button>
            <p></p>
        </div>
        </div>

    </nav>
    
    </>


  )
}

export default Navbar