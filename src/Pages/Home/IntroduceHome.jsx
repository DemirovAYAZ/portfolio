import React from 'react'
import './Home.css'
import avatar from '../../../public/img/avatar.png'

function IntroduceHome() {
  return (
    <div className='container'>
      <div className='introduce-container'>
        <div className='introduce-texts'>
            <div className='introduce-header'>
                <h2>LET ME <span style={{ color: '#1bd5e1' }}>INTRODUCE</span> MYSELF</h2>
            </div>
            <div className='introduce-text'>
                <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
                <p><span style={{ color: '#1bd5e1' , fontStyle: 'italic' , fontWeight: '600' }}>My portfolio</span> is a testament to my dedication and expertise, showcasing my projects, competitions, and contributions to the tech</p>
                <p>I thrive on creating new web technologies and products by constantly looking for the next problem to solve. Leveraging the power of modern <span style={{ color: '#1bd5e1' , fontStyle: 'italic' , fontWeight: '600' }}>JavaScript</span> frameworks like <span style={{ color: '#1bd5e1' , fontStyle: 'italic' , fontWeight: '600' }}>React.js</span>, <span style={{ color: '#1bd5e1' , fontStyle: 'italic' , fontWeight: '600' }}>Vue.js</span>, and <span style={{ color: '#1bd5e1' , fontStyle: 'italic' , fontWeight: '600' }}>Next.js</span>, I'm always eager to learn and apply new technologies to my work.</p>
            </div>
        </div>
        <div className='introduce-avatar'>
            <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  )
}

export default IntroduceHome
