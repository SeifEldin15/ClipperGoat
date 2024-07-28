import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Check if we've just navigated to the home page with a hash
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home page first
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If already on home page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (isSmallScreen) {
      setIsSidebarOpen(false);
    }
  };

  const navItems = [
    { name: 'About', sectionId: 'about' },
    { name: 'Programs', sectionId: 'programs' },
    { name: 'Pricing', sectionId: 'pricing' },
    { name: 'FAQ', sectionId: 'faq' },
    { name: 'Affiliates', link: '/leaderboard' },
    { name: 'Contact Us', link: '/contactus' },
  ];

  return (
    <nav id="navbar" className={`navbar Container-Width Container ${isSmallScreen ? 'small-screen' : ''}`}>
      <div className='navbar-header'>
        <Logo />
        {isSmallScreen && (
          <div className={`hamburger ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
            ☰
          </div>
        )}
      </div>
      <div className={`nav-content ${isSidebarOpen ? 'open' : ''}`}>
        {isSmallScreen && (
          <button className="close-sidebar" onClick={toggleSidebar}>
            ×
          </button>
        )}
        <ul className="nav-links hover-effect-links">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <NavLink to={item.link}>{item.name}</NavLink>
              ) : (
                <a onClick={() => scrollToSection(item.sectionId)}>{item.name}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
      {!isSmallScreen && (
        <div className="nav-buttons">
          <button className="register-btn glow-text-test">Login</button>
        </div>
      )}
      {isSmallScreen && isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}
    </nav>
  );
};

export default Navbar;