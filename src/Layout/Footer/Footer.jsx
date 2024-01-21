import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';
import { FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-bg'>
      <div className='container'>
        <div className='footer-columns'>
          <div className='footer-column'>
            <h5>
              Designed and Developed by{' '}
              <Link style={{ color: 'white' }} to={'https://www.linkedin.com/in/ayaz-damirov/'} target='_blank'>
                <b>Ayaz Damirov</b>
              </Link>
            </h5>
          </div>
          <div className='footer-column'>
            <h5>Copyright © 2024</h5>
          </div>
          <div className='footer-column'>
            <div className='footer-social-media'>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
