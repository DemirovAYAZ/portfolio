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
                <p>I am fluent in classics like <span style={{ color: '#1bd5e1' , fontStyle: 'italic' , fontWeight: '600' }}>C++, Javascript and Go.</span></p>
                <p>My field of Interest's are building new <span style={{ color: '#1bd5e1' , fontStyle: 'italic' , fontWeight: '600' }}>Web Technologies</span> and Products and also in areas related to <span style={{ color: '#1bd5e1' , fontStyle: 'italic' , fontWeight: '600' }}>Blockchain.</span></p>
                <p>Whenever possible, I also apply my passion for developing products with <span style={{ color: '#1bd5e1' , fontStyle: 'italic' , fontWeight: '600' }}>Node.js</span> and <span style={{ color: '#1bd5e1' , fontStyle: 'italic' , fontWeight: '600' }}>Modern Javascript Library and Frameworks</span>  like <span style={{ color: '#1bd5e1' , fontStyle: 'italic' , fontWeight: '600' }}>React.js and Next.js</span></p>
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
