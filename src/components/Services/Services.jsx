import React from 'react'
import './Services.css'
import services1 from '../../assets/services1.jpg'
import services2 from '../../assets/services2.jpg'
import services3 from '../../assets/services3.jpg'
import services4 from '../../assets/services4.jpg'
const Services = () => {
  return (
    <div className='services'>
      <div className='service'>
        <img src={services1}></img>
        <div className="caption">
            <p>Web Development</p>
            <p>Custom Web Designs</p>
            <p>Website maintenace</p>
            <p>E-commerce solutions</p>
        </div>
      </div>
      <div className='service'>
        <img src={services2}></img>
        <div className="caption">
            <p>Content Creation</p>
            <p>Community Management</p>
            <p>Social Media Advertising</p>
            <p>Analytics & Reporting</p>
        </div>
      </div>
      <div className='service'>
        <img src={services3}></img>
        <div className="caption">
            <p>Search Engine Optimization</p>
            <p>Technical SEO</p>
            <p>Keyword Research</p>
            <p>On-Page Optimization</p>
        </div>
      </div>
      <div className='service'>
        <img src={services4}></img>
        <div className="caption">
            <p>Personalized Strategy</p>
            <p>Campaign Management</p>
            <p>Performance Analysis </p>
            <p>Support & Optimization</p>
        </div>
      </div>
    </div>
  )
}

export default Services
