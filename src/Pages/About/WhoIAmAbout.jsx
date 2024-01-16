import React from 'react'
import './About.css'
import whoiam from '../../../public/img/whoiam.png'

function WhoIAmAbout() {
    return (
        <div className='container'>
            <div className='who-i-am-container'>
                <div className='who-i-am-texts'>
                    <div className='who-i-am-header'>
                        <h2>Know Who <span style={{ color: '#1bd5e1' }}>I'M</span></h2>
                    </div>
                    <div className='who-i-am-text'>
                        <p>Hi Everyone, I am <span style={{ color: '#1bd5e1' }}>Ayaz Damirov</span> from <span  style={{ color: '#1bd5e1' }}>Baku, Azerbaijan.</span></p>
                        <p>I am currently employed as a software developer at 4Digital.</p>
                        <p>I have completed Integrated MSc (IMSc) in Maths and Computing at BIT Mesra.</p>
                    </div>
                    <div className='who-i-am-hobby'>
                        <h3>Apart from coding, some other activities that I love to do!</h3>
                        <ul>
                            <li>Playing Games</li>
                            <li>Learn New Knowledge</li>
                        </ul>
                    </div>
                </div>
                <div className='who-i-am-img'>
                    <img src={whoiam} alt="who-i-am" />
                </div>

            </div>


        </div>
    )
}

export default WhoIAmAbout
