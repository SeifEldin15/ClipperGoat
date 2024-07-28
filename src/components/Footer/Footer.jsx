import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.webp'

const Footer = () => {
  const handleBackToTop = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback if navbar is not found
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer Container-Spacing">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <img src={Logo} alt="Logo" />
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
          <button onClick={handleBackToTop} className="back-to-top">
            <span className="sr-only">Back to top</span>
            <i className="fa-solid fa-chevron-up"></i>
          </button>
        </div>

        <ul className="footer-links hover-effect-links">
          <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
          <li><NavLink to="/terms">Terms of Conditions</NavLink></li>
          <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
          <li><NavLink to="/pricing">Pricing</NavLink></li>
          <li><NavLink to="/refund">Refunds</NavLink></li>
          <li><NavLink to="/contactus">Contact Us</NavLink></li>
        </ul>
        <p className="footer-copyright">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;