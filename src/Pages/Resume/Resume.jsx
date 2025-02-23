import React from 'react';
import './Resume.css';
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const pdfUrl = '/img/Ayaz_Damirov_CV2.pdf'; // Relative path from public/

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Ayaz_Damirov_CV2.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='container'>
      <div className='resume-container'>
        <div className='resume-download'>
          <button onClick={downloadResume}>
            <AiOutlineDownload /> Download CV
          </button>
        </div>
        <div className='resume-preview'>
          <iframe 
            src={pdfUrl} 
            title="Resume"
            width="100%"
            height="auto"
            className='responsive-iframe'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Resume;
