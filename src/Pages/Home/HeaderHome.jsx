// HeaderHome.js

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';
import HeaderHomeAnimation from '../../Utils/HeaderHomeAnimation';

function HeaderHome() {
  return (
    <div className='header-home container'>
      <div className='header-home-texts'>
        <h3>
          Hi There <span role="img" className='wave' aria-label="waving-hand">👋🏻</span>!
        </h3>
        <h2>
          I'm <p>Ayaz Damirov</p>
        </h2>
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            'Front-End Developer',
            1000,
            'Co-Founder of 4Digital',
            1000,
            'Responsive Web Developer',
            1000,
            'Website Builder',
            500,
          ]}
          speed={50}
          style={{ fontSize: '2.7em', fontWeight: 600, color: '#1bd5e1' }}
          repeat={Infinity}
        />
      </div>
      <div className='header-home-img'>
        <HeaderHomeAnimation />
      </div>
    </div>
  );
}

export default HeaderHome;
