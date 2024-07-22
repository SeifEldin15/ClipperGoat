import React, { useState, useEffect } from 'react';
import './Footer.css';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png'
const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (!showBackToTop && window.pageYOffset > 400) {
        setShowBackToTop(true);
      } else if (showBackToTop && window.pageYOffset <= 400) {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [showBackToTop]);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer Container-Spacing">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <img src={Logo} />
            </div>
            <p className="footer-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
              cum itaque neque.
            </p>
            <div className="social-icons">
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-tiktok"></i>
            </div>
          </div>
          {showBackToTop && (
            <button onClick={handleBackToTop} className="back-to-top">
              <span className="sr-only">Back to top</span>
              <i className="fa-solid fa-chevron-up"></i>
            </button>
          )}
        </div>

        <ul className="footer-links hover-effect-links">
        <NavLink exact to="/leaderboard" activeClassName="active" className="nav-item">Leaderboard</NavLink>
          <NavLink exact to="/terms" activeClassName="active" className="nav-item">Terms of Conditions</NavLink>
          <NavLink exact to="/privacy" activeClassName="active" className="nav-item">Privacy Policy</NavLink>
          <NavLink exact to="/pricing" activeClassName="active" className="nav-item"><li><a href="#">Pricing</a></li></NavLink>
          <NavLink exact to="/refund" activeClassName="active" className="nav-item"><li><a href="#">Refunds</a></li></NavLink>
          </ul>
        <p className="footer-copyright">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;