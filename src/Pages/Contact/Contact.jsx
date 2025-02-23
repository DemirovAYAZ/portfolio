import React from 'react'
import './Contact.css'
import contact from '../../../public/img/contact.png'
import { Link } from 'react-router-dom'
import { FaLinkedinIn , FaWhatsapp} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { SiGmail } from 'react-icons/si';

function Contact() {
  return (
    <div className='container'>
      <div className='contact-container'>
        <div className='contact-img'>
          <img src={contact} alt="contact" />
        </div>
        <div className='contact-texts'>
          <h2 className='contact-texts-h2'>Contact Me</h2>
          <p className='contact-texts-p'>I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.</p>
          <div className='social-medias'>
            <Link style={{ color: 'white' }} to={'https://www.linkedin.com/in/ayaz-damirov/'} target='_blank'>
              <div>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link style={{ color: 'white' }} to={'https://github.com/DemirovAYAZ'} target='_blank'>
              <div>
                <FiGithub />
              </div>
            </Link>
            <Link style={{ color: 'white' }} to={'tel:+994559014435'} target='_blank'>
              <div>
                <FaWhatsapp />
              </div>
            </Link>
            <Link style={{ color: 'white' }} to={'https://www.instagram.com/ayazdamirov_/'} target='_blank'>
              <div>
                <FaInstagram />
              </div>
            </Link>
            <Link style={{ color: 'white' }} to={'mailto:ayazdemirov123@gmail.com'} target='_blank'>
              <div>
                <SiGmail />
              </div>
            </Link>
          </div>
          <Link to='/resume'><button className='contact-button'>See My Resume</button></Link>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
