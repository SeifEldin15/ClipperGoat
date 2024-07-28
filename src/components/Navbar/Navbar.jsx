import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo';
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (pixelY) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        slowScrollTo(pixelY, 1500); // 1.5 seconds duration for scrolling
      }, 1000);
    } else {
      slowScrollTo(pixelY, 1500); // 1.5 seconds duration for scrolling
    }

    if (isSmallScreen) {
      setIsSidebarOpen(false);
    }
  };

  const slowScrollTo = (targetY, duration) => {
    const startY = window.scrollY;
    const diffY = targetY - startY;
    let startTime;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + diffY * easeInOutCubic(progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const easeInOutCubic = (t) => {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const navItems = [
    { name: 'About', scrollTo: 500 },
    { name: 'Programs', scrollTo: 1000 },
    { name: 'Pricing', scrollTo: 1500 },
    { name: 'FAQ', scrollTo: 2000 },
    { name: 'Affiliates', link: '/leaderboard' },
    { name: 'Contact Us', link: '/contactus' },
  ];

  return (
    <nav className={`navbar Container-Width Container ${isSmallScreen ? 'small-screen' : ''}`}>
      <div className='navbar-header'>
        <Logo />
        {isSmallScreen && (
          <div className={`hamburger ${isSidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}>
            ☰
          </div>
        )}
      </div>
      <div className={`nav-content ${isSidebarOpen ? 'open' : ''}`}>
        <ul className="nav-links hover-effect-links">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <NavLink exact to={item.link}>{item.name}</NavLink>
              ) : (
                <a onClick={() => scrollToSection(item.scrollTo)}>{item.name}</a>
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
