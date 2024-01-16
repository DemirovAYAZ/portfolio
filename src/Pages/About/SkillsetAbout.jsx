import React from 'react';
import './About.css';
import data from '../../../public/json/data.json';

function SkillsetAbout() {
    return (
        <div className='container'>
            <div className='skillset-container'>
                <div className='skillset-header'>
                    <h2>Skillset</h2>
                </div>
                <div className='skillset-item'>
                    {data[0].skillsets.map(skill => (
                        <div key={skill.id} className='skill'>
                            <img src={skill.img} alt={skill.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SkillsetAbout;
