import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo/WebSenor-removebg-preview.webp'

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="logo">
        <img src={logo} alt="Logo" />
        </div>
        <div className="options">
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/hire'>Hire developer</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/clients'>Clientele</Link></li>
            <li><Link to='/careers'>Careers</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/quote'>Get a Quote</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
