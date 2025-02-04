import React from "react";
import "../../css/landingcss/footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-left">
          <h3>RADIANCE STAR LEGISLATIVE CONSULT LTD</h3>
          <p>Shaping Legislative Minds</p>
          <img
            src="/logo.png"
            alt="Radiance Star Logo"
            className="footer-logo"
          />
        </div>
        <div className="footer-middle">
          <h4>how to find us</h4>
          <ul>
            <li>
              <i class="fa-solid fa-phone"></i>
              <a href="tel:+254701265414">+254 701 265414</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:radiancestel@gmail.com">radiancestel@gmail.com</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:ariwomoi@gmail.com">ariwomoi@gmail.com</a>
            </li>
            <li>
              <i class="fa-solid fa-location-dot"></i>
              <a
                href="https://www.google.com/maps?q=Machakos,+Athi+River"
                target="_blank"
                rel="noopener noreferrer"
              >
                Machakos, Athi River
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#experience">Training Experience</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          <div className="social-icons">
            <p>Let's Socialize</p>
            <a
              href="https://wa.me/254701265414"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="mailto:radiancestel@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-facebook"></i>
            </a>
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
