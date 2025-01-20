import React from "react";
import "../../css/landingcss/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>RADIANCE STAR LEGISLATIVE CONSULT LTD</h3>
          <p>Shaping Legislative Minds</p>
        </div>
        <div className="footer-middle">
          <h4>How to find us</h4>
          <ul>
            <li>📞 +254 701 265414</li>
            <li>📧 <a href="mailto:radiancestc@gmail.com">radiancestc@gmail.com</a></li>
            <li>📧 <a href="mailto:ariwomc@gmail.com">ariwomc@gmail.com</a></li>
            <li>📍 Machakos, Athi River</li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Company</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#experience">Training Experience</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <div className="social-icons">
            <p>Let's Socialize</p>
            <span>🔗</span>
            <span>✉️</span>
            <span>📘</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 Radiance Star Legislative Consult Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
