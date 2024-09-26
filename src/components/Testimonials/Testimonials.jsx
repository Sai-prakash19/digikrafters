import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform= `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform= `translateX(${tx}%)`;
}
  return (
    <div className='testimonial'>
      <img src={next_icon} className='next-btn' onClick={slideForward}/>
      <img src={back_icon} className='back-btn' onClick={slideBackward}/>
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1}/>
                        <div>
                            <h3>Aaron Smith</h3>
                            <span>Hair Canvas Salon, Texas</span>
                        </div>
                    </div>
                    <p>"Digikrafters has been instrumental in our growth. Their tailored Meta ad campaigns 
                        not only improved our visibility but also drove measurable results. 
                        I would recommend them to anyone looking to enhance their digital strategy!"</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2}/>
                        <div>
                            <h3>Emily Johnson</h3>
                            <span>CakeBox, Manchester</span>
                        </div>
                    </div>
                    <p>"I had a fantastic experience with Digikrafters. They developed a 
                        customized website for us that beautifully showcased our brand. 
                        Their attention to detail made all the difference!"</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3}/>
                        <div>
                            <h3>Narayan Gouda</h3>
                            <span>Veda Ayurveda Hospital, Karnataka</span>
                        </div>
                    </div>
                    <p>"Digikrafters transformed our online presence with their exceptional Google ad campaign services! 
                        Their expertise helped us reach our target audience effectively. Highly recommended!"</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4}/>
                        <div>
                            <h3>Ankit Sharma</h3>
                            <span>Skin care, Mumbai</span>
                        </div>
                    </div>
                    <p>"Working with Digikrafters was a game-changer for our business.
                         Their innovative social media marketing strategies 
                        increased our engagement significantly and brought in new customers. Truly invaluable!"</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
