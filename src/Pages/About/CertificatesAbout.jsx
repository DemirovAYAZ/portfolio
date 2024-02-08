import React, { useState, useRef, useEffect } from 'react';
import './About.css';
import data from '../../../public/json/data.json';
import Slider from 'react-slick';
import './About.css'; 
import { IoMdClose } from "react-icons/io";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function CertificatesAbout() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const modalOverlayRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: 40,
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    setModalOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === modalOverlayRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    if (modalOpen) {
      document.addEventListener('click', handleOverlayClick);
    }

    return () => {
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [modalOpen]);

  return (
    <div className='container'>
      <div className='certificate-container'>
        <div className='certificate-header'>
          <h2>Certificates</h2>
        </div>
        {window.innerWidth < 768 ? (
          <Slider {...settings}>
            {data[2].certificates.map((certificate, index) => (
              <div
                className='certificate-image'
                key={index}
                onClick={() => openModal(certificate)}
              >
                <LazyLoadImage
                  src={certificate.img}
                  alt={certificate.alt}
                  effect="blur"
                  height="auto"
                  width="100%"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className='certificate-images'>
            {data[2].certificates.map((certificate, index) => (
              <div
                className='certificate-image'
                key={index}
                onClick={() => openModal(certificate)}
              >
                <img src={certificate.img} alt={certificate.alt} />
              </div>
            ))}
          </div>
        )}
        {modalOpen && (
          <div className='modal-overlay' ref={modalOverlayRef}>
            <div className='modal'>
              <span className='close' onClick={closeModal}>
                <IoMdClose />
              </span>
              <img
                src={selectedCertificate.img}
                alt={selectedCertificate.alt}
                className='modal-image'
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CertificatesAbout;
