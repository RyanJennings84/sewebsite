import React, { useRef } from 'react'; 
import './contact.css'; 
import FacebookIcon from '../../Assets/facebook-icon.png'; 
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qhq9kgg', 'template_zul4edw', form.current, 'qrNG4zgz-27vgN60A',
          )
          .then((result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            },);
        };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='from_name' />
                    <input type="tel" className="phone" placeholder='Your Number' name='from_phone'/>
                    <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className="submitBtn">Submit</button>
                    <div className="links">  
                        <a href="http://facebook.com">
                            <img src={FacebookIcon} alt="Facebook" className="link" />
                            </a>    
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact; 