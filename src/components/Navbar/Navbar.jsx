// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <nav className="navbar Container-Width Container">
      <div className="logo">ClipperGoat</div>
      <div className={`hamburger ${isNavActive ? 'active' : ''}`} onClick={toggleNav}>
        ☰
      </div>
      <ul className={`nav-links ${isNavActive ? 'active' : ''}`}>
        <li><a href="#features">About</a></li>
        <li><a href="#features">Programs</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#blog">FAQ</a></li>
        <li><a href="#contact">Affiliates</a></li>
      </ul>
      <div className={`nav-buttons ${isNavActive ? 'active' : ''}`}>
        <button className="register-btn">Login</button>
        <button className="demo-btn box-custom-shadow">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;