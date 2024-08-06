// components/Footer.js
import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.webp";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Footer = () => {
  // const handleBackToTop = () => {
  //   const navbar = document.getElementById("navbar");
  //   if (navbar) {
  //     navbar.scrollIntoView({ behavior: "smooth" });
  //   } else {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <footer className="footer Container-Spacing">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <img src={Logo} alt="Logo" />
            </div>
            <p className="footer-description">
            Clippergoat is an AI-powered software company specializing in editing social media content to enable seamless reposting without detection, helping creators maintain originality and engagement while efficiently managing content reuse
            </p>
        
            <div className="social-icons social-icons-normal">
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-tiktok"></i>
            </div>
          </div>
          {/* <button onClick={handleBackToTop} className="back-to-top back-to-top-normal">
            <span className="sr-only">Back to top</span>
            <i className="fa-solid fa-chevron-up"></i>
          </button> */}
        </div>
   
        <ul className="footer-links hover-effect-links">
          <li>
            <ScrollToTop to="/leaderboard">Affiliates</ScrollToTop>
          </li>
          <li>
            <ScrollToTop to="/pricing">Investors  </ScrollToTop>
          </li>
          <li>
            <ScrollToTop to="/terms">Terms & Conditions</ScrollToTop>
          </li>
          <li>
            <ScrollToTop to="/privacy">Privacy Policy</ScrollToTop>
          </li>
          <li>
            <ScrollToTop to="/refund">Refund Policy</ScrollToTop>
          </li>
          <li>
            <ScrollToTop to="/contactus">Contact Us</ScrollToTop>
          </li>
          
        </ul>
        <div className="footer-links ">
        <br />
            <p className="contact-info-footer">Email: support@clippergoat.com </p>
            <br />
            <p className="contact-info-footer">Phone:  +1 (480) 236-4263</p>
        </div>
        <div className="social-icons social-icons-phone">
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-tiktok"></i>
            </div>
        <p className="footer-copyright">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
// when refreshing videos don't play 