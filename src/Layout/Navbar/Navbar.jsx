import React, { useState, useEffect } from 'react';
import { NavLink , Link } from 'react-router-dom';
import logo from '../../../public/img/ad.png';
import './Navbar.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const closeNavbarOnClickOutside = (event) => {
      if (showNavbar && !event.target.closest('.navbar')) {
        setShowNavbar(false);
      }
    };
    document.addEventListener('click', closeNavbarOnClickOutside);

    return () => {
      document.removeEventListener('click', closeNavbarOnClickOutside);
    };
  }, [showNavbar]);

  const handleNavLinkClick = () => {
    setShowNavbar(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to='/home'>
            <img src={logo} alt="logo" className='logo' />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger active={showNavbar} />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/home" onClick={handleNavLinkClick} className={location.pathname === '/' ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleNavLinkClick}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={handleNavLinkClick}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" onClick={handleNavLinkClick}>
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleNavLinkClick}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Hamburger = ({ active }) => (
  <div className={`hamburger ${active ? 'active' : ''}`}>
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  </div>
);

export default Navbar;
