// Navbar.js
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
      closeMenu();
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
    { name: 'Features', scrollTo: 2500 },
    { name: 'Pricing', scrollTo: 6100 },
    { name: 'FAQ', scrollTo: 8400 },
    { name: 'Affiliates', link: '/leaderboard' },
    { name: 'Contact Us', link: '/contactus' },
  ];

  return (
    <nav className={`navbar Container ${isSmallScreen ? 'small-screen scrolled' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className='navbar-header'>
        <Logo />
        {isSmallScreen && (
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            ☰
          </div>
        )}
      </div>
      <div className={`nav-content ${isMenuOpen ? 'open' : ''}`}>
        <ul className="nav-links hover-effect-links">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <NavLink exact to={item.link} onClick={closeMenu}>{item.name}</NavLink>
              ) : (
                <a onClick={() => { scrollToSection(item.scrollTo); closeMenu(); }}>{item.name}</a>
              )}
            </li>
          ))}
    
            <li className='nav-buttons-small glow-text-test nav-buttons-small'>
              Login 
            </li>
        </ul>
    
      </div>
      {!isSmallScreen && (
        <div className="nav-buttons">
          <button className="register-btn glow-text-test">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;