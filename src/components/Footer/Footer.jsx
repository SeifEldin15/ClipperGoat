import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer Container-Spacing">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <Logo />
            </div>
            <p className="footer-description">
              Clippergoat is an AI-powered software company specializing in editing social media content to enable seamless reposting without detection, helping creators maintain originality and engagement while efficiently managing content reuse.
            </p>

            <div className="social-icons social-icons-normal">
              <a href="https://www.instagram.com/officialclippergoat" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61563942300945" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.tiktok.com/@clippergoat.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://x.com/TheClipperGoat" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <ul className="footer-links hover-effect-links">
          <li>
            <Link to="/leaderboard">
              <ScrollToTop>Affiliates</ScrollToTop>
            </Link>
          </li>
          <li>
            <Link to="/pricing">
              <ScrollToTop>Investors</ScrollToTop>
            </Link>
          </li>
          <li>
            <Link to="/terms">
              <ScrollToTop>Terms & Conditions</ScrollToTop>
            </Link>
          </li>
          <li>
            <Link to="/privacy">
              <ScrollToTop>Privacy Policy</ScrollToTop>
            </Link>
          </li>
          <li>
            <Link to="/refund">
              <ScrollToTop>Refund Policy</ScrollToTop>
            </Link>
          </li>
          <li>
            <Link to="/contactus">
              <ScrollToTop>Contact Us</ScrollToTop>
            </Link>
          </li>
        </ul>

        <div className="footer-links">
          <br />
          <p className="contact-info-footer">Email: support@clippergoat.com</p>
          <br />
          <p className="contact-info-footer">Phone: +1 (480) 236-4263</p>
        </div>

        <div className="social-icons social-icons-phone">
          <a href="https://www.instagram.com/officialclippergoat" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61563942300945" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.tiktok.com/@clippergoat.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://x.com/TheClipperGoat" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>

        <p className="footer-copyright">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
