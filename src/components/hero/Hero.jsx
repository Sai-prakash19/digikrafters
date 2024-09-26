import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll';
const hero = () => {
  return (
    <div className='hero container'>
    <div className='hero-text'>
        <h1>Crafting Digital Legacies That Last</h1>
        <p>Maximize Your Online Potential with
          Digital Marketing That Fuels Your Growth!</p>
        <Link to='contact' smooth={true} offset={-260} duration={500}>
        <button className='btn'>Contact Us</button>
        </Link>
    </div>
    </div>
  )
}

export default hero
