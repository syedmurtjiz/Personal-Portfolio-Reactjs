import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the global styles
import Images from "../images/logo.webp";

const Header = () => {
  return (
    <section className="header">
      <div className="header-1">
        <Link to="/">
          <img src={Images} alt="logo" />
        </Link>
        <h2>murtjiznaqvi@gmail.com</h2>
      </div>
      <div className="header-2">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume" className="back">Resume</Link></li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
