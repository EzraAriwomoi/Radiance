import React from "react";
import "../../css/landingcss/navbar.css";

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <h1>Radiance Star</h1>
          </div>
          <ul className="navbar-links">
            <li><a href="#home" className="navbar-link">Home</a></li>
            <li><a href="#about" className="navbar-link">About Us</a></li>
            <li><a href="#experience" className="navbar-link">Experience</a></li>
            <li><a href="#contact" className="navbar-link">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;