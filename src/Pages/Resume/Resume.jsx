import React, { useRef } from 'react';
import cv from '../../../public/img/Ayaz-Demirov-CV.jpg';
import './Resume.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const resumeRef = useRef();
  const pdf = new jsPDF();

  const downloadResume = () => {
    html2canvas(resumeRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpg');
      pdf.addImage(imgData, 'jpg', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
      pdf.save('Ayaz-Demirov-CV.pdf');
    });
  };

  return (
    <div className='container'>
      <div className='resume-container'>
        <div className='resume-download'>
          <button onClick={downloadResume}><AiOutlineDownload />Download CV</button>
        </div>
        <div className='resume' ref={resumeRef}>
          <div className='resume-img'>
            <img src={cv} alt="Resume" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
