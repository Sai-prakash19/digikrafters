import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'; // Import Link from react-scroll
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [mobileMenu, setMobileMenu]=useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }
  return (
    <nav className='container light-nav'>
     <img src={logo} alt=''className='logo'/>
     <ul className={mobileMenu? '': 'mobile-hide-menu'}>
        <li> <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='services' smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
     </ul>
     <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
