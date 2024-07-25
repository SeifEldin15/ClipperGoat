import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../Logo/Logo'
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
      <div className='navbar-phone-header'>
      <Logo />
      <div className={`hamburger ${isNavActive ? 'active' : ''}`} onClick={toggleNav}>
        ☰
      </div>
      </div>
      <ul className={`nav-links hover-effect-links ${isNavActive ? 'nav-links-phone active' : ''}`}>
        <li><a onClick={() => scrollToSection(500)}>About</a></li>
        <li><a onClick={() => scrollToSection(1000)}>Programs</a></li>
        <li><a onClick={() => scrollToSection(5100)}>Pricing</a></li>
        <li><a onClick={() => scrollToSection(6200)}>FAQ</a></li>
        <li><a onClick={() => scrollToSection(2500)}>Affiliates</a></li>
        <li className={'login-phone'}><a onClick={() => scrollToSection(2500)}>Login</a></li>
      </ul>
      <div className={`nav-buttons ${isNavActive ? '' : ''}`}>
        <button className="register-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;