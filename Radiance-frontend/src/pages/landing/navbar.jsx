import React, { useEffect, useState } from "react";
import "../../css/landingcss/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <div className={`navbar-logo ${scrolled ? "visible" : ""}`}>
            <img src="/logo.png" alt="Radiance Star Logo" className="navbar-logo-img" />
            <h1>Radiance Star</h1>
          </div>
          <ul className="navbar-links">
            <li><a href="#home" className="navbar-link">Home</a></li>
            <li><a href="#about" className="navbar-link">About Us</a></li>
            <li><a href="#experience" className="navbar-link">Training experience</a></li>
            <li><a href="#contact" className="navbar-link">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Fixed Logo */}
      <div className={`fixed-logo ${scrolled ? "hidden" : ""}`}>
        <img src="/logo.png" alt="Radiance Star Logo" className="landing-logo-img" />
        <h1 className="landing-logo-text">Radiance Star</h1>
      </div>
    </>
  );
};

export default Navbar;
