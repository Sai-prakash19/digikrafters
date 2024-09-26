import React from 'react'
import './Contactus.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
const Contactus = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "62e1cf2d-cc9e-4139-8bcf-99963056efbf");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    
  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
            <p>Let's collaborate and bring your digital vision to life. 
                Reach out to Digikrafters and start your journey with us today!</p>
            <ul>
                <li> <img src={mail_icon}/>digikraftersindia@gmail.com</li>
                <li><img src={phone_icon}/>+91 62811 49621</li>
                <li><img src={location_icon}/>Hyderabad, Telangana<br/>India </li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label> Your Name</label>
                <input type='text' name='name' placeholder='Enter Your Name' required/>
                <label> Email Address</label>
                <input type='email' id='email' name='email' placeholder='Enter Your email' required/>
                <label> Write Your Message here</label>
                <textarea name='message' rows='6' placeholder='Enter Your Message' required/>
                <button type='submit'className='btn'> Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contactus
