import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Projects.css'
import data from '../../../public/json/data.json'
import { FaRegEye } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Project() {
  return (
    <div className='container'>
      <div className='projects-container'>
        <div className='projects-header'>
          <h2>My <span style={{ color: '#1bd5e1' }}>Works</span></h2>
          <h3>Here are a few projects I`ve worked</h3>
        </div>
        <div className='projects-items'>
          {data[3].projects.map((project, index) => (
            <div className='projects-item' key={index}>
              <div className='projects-item-img'>
                <LazyLoadImage
                    src={project.img}
                    alt={project.name}
                    effect="blur"
                    height="auto"
                    width="100%"
                />
              </div>
              <div className='projects-item-texts'>
                <div className='projects-item-header'>
                  <h3>{project.name}</h3>
                </div>
                <div className='projects-item-explanation'>
                  <p>{project.explanation}</p>
                </div>
                <div className='projects-item-buttons'>
                  <Link to={project['github-link']} target='_blank'><button><FiGithub />Github</button></Link>
                  <Link to={project['preview-link']} target='_blank'><button><FaRegEye />Preview</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
