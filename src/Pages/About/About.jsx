import React from 'react';
import './About.css'
import WhoIAmAbout from './WhoIAmAbout';
import SkillsetAbout from './SkillsetAbout';
import ExperienceAbout from './ExperienceAbout';
import CertificatesAbout from './CertificatesAbout';

function About() {
  return (
    <div>
      <WhoIAmAbout />
      <SkillsetAbout />
      <ExperienceAbout />
      <CertificatesAbout />
    </div>
  )
}

export default About
