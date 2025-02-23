import React from 'react';
import './About.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import data from '../../../public/json/data.json';
import { Link } from 'react-router-dom';

const renderMultilineText = (text) => {
  return text.split('\n').map((line, index) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = line.split(urlRegex);

    return (
      <p key={index}>
        {parts.map((part, idx) => (
          urlRegex.test(part) ? (
            <Link key={idx} className='experience-link' to={part} target="_blank" rel="noopener noreferrer">
              {part}
            </Link>
          ) : (
            part
          )
        ))}
      </p>
    );
  });
};

function ExperienceAbout() {
  return (
    <div className='container'>
      <div className='experience-container'>
        <div className='experience-header'>
          <h2>Experience</h2>
        </div>
        <VerticalTimeline>
          {data[1].experiences.map((experience, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element"
              contentStyle={{ background: '#1d1836', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid #232631' }}
              date={experience.date}
              iconStyle={{ background: experience.logo }}
              icon={<div><img src={experience.logo} alt={experience.name} /></div>}
              key={index}
            >
              <div>
                <h3>{experience.position}</h3>
                <h4>{experience.name}</h4>
                {renderMultilineText(experience.text)}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default ExperienceAbout;
