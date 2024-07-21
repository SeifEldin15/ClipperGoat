import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const scrollToSection = (pixelY) => {
    window.scrollTo({
      top: pixelY,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar Container-Width Container">
      <div className="logo">ClipperGoat</div>
      <div className={`hamburger ${isNavActive ? 'active' : ''}`} onClick={toggleNav}>
        ☰
      </div>
      <ul className={`nav-links hover-effect-links ${isNavActive ? 'active' : ''}`}>
        <li><a onClick={() => scrollToSection(500)}>About</a></li>
        <li><a onClick={() => scrollToSection(1000)}>Programs</a></li>
        <li><a onClick={() => scrollToSection(5100)}>Pricing</a></li>
        <li><a onClick={() => scrollToSection(6200)}>FAQ</a></li>
        <li><a onClick={() => scrollToSection(2500)}>Affiliates</a></li>
      </ul>
      <div className={`nav-buttons ${isNavActive ? 'active' : ''}`}>
        <button className="register-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;