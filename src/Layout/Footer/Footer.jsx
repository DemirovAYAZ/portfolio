import React from 'react'
import './Footer.css'
import { FaLinkedinIn , FaWhatsapp} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from 'react-icons/fa6';

function Footer() {
  return (
    <div className='footer-bg'>
        <div className='container'>
            <div className='footer-columns'>
                <div className='footer-column'>
                    <h5>Designed and Developed by <b>Ayaz Damirov</b></h5>
                </div>
                <div className='footer-column'>
                    <h5>Copyright © 2024</h5>
                </div>
                <div className='footer-column'>
                    <div className='footer-social-media'>
                        <div>
                            <FaLinkedinIn />
                        </div>
                        <div>
                            <FiGithub />
                        </div>
                        <div>
                            <FaWhatsapp />
                        </div>
                        <div>
                            <FaInstagram />
                        </div>
                        <div>
                            <SiGmail/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
