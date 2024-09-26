import React from 'react'
import './About.css'
import about_img from '../../assets/about2.jpg'
function About() {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} className='about-img'></img>
        </div>
        <div className='about-right'>
        <h3>ABOUT DIGIKRAFTERS</h3>
        <h2>We Drive Results That Matter!</h2>
        <p>At DigiKrafters, we specialize in helping businesses of all sizes establish and grow their online presence.
           Whether you’re a small startup looking to make your mark or a well-established brand seeking to optimize 
           your digital strategy, we’re here to guide you every step of the way.Our mission is simple: to craft 
           impactful digital experiences that drive real-world results.</p>
        <p>With a team of passionate digital marketing experts,
            we leverage the power of Google and Meta ad campaigns, SEO, and cutting-edge digital strategies 
            to maximize your brand’s visibility and engagement. Our web design and development services focus 
            on creating websites that not only captivate visitors but also perform seamlessly across all devices.
            We also provide comprehensive social media management and social media marketing services to help you 
            build a strong online community, engage with your audience, and run targeted paid campaigns across
             platforms like Facebook, Instagram, and LinkedIn.Our focus is not just on gaining clicks and followers 
             but on converting them into loyal customers and measurable growth.</p>
             </div>
    </div>
  )
}

export default About
