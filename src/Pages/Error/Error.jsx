import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';
import astronaut from '../../../public/img/error-astronaut.png'

function Error() {
  return (
    <div className="container">
      <div className='error-container'>
        <div className='error-texts'>
            <div className='error-header'>
                <h2>Error 404</h2>
            </div>
            <div className='error-subtitle'>
                <h3>Page Not Found</h3>
            </div>
            <Link to="/"><button className='error-button'>Back To Home</button></Link>
        </div>
        <div className='error-img'>
            <img src={astronaut} alt="error" />
        </div>
      </div>
    </div>
  );
}

export default Error;
