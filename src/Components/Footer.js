import React from "react";
import { Link } from "react-router-dom";
import Image7 from "../images/mylogo.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
        <img src={Image7} alt="logo" />
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/profile">Portfolios</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>
            © 2024 All rights reserved by{" "}
            <Link to="/">Syed Murtjiz Hussain Naqvi</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
