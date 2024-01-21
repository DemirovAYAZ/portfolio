import React, { useState, useEffect } from 'react';
import { ClockLoader } from 'react-spinners';
import Background from './Utils/Background';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Error from './Pages/Error/Error';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
          }}
        >
          <Background numStars={200} />
          <ClockLoader size={125} color={'#1bd5e1'} loading={isLoading} />
        </div>
      ) : (
        <>
          <Background numStars={200} />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='*' element={<Error />} />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
