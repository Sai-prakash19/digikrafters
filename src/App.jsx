import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/hero/Hero'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Contactus from './components/Contactus/Contactus'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
          <Title subTitle='Our Services' title='What We Offer'/>
          <Services/>
          <About/>
          <Title subTitle='TESTIMONIALS' title='Hear From Our Happy Clients!'/>
          <Testimonials/>
          <Title subTitle='Contact us' title='Get in Touch with Digikrafters'/>
          <Contactus/>
          <Footer/>
      </div>
    </div>
  )
}

export default App
