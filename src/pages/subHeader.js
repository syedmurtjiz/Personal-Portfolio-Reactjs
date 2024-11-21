import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import Image from '../images/mylogo.png'
const SubHeader = () => {
  const location = useLocation(); // Get the current location

  // Function to determine the heading based on the current route
  const getHeading = () => {
    switch (location.pathname) {
      case '/about':
        return 'About Us';
      case '/services':
        return 'Our Services';
      case '/portfolio':
        return 'Portfolio';
      case '/contact':
        return 'Contact Us';
        case '/hire':
            return 'Hire ME!';
      default:
        return 'Welcome'; // Default heading
    }
  };

  return (
    <div>
      <section className="sub-header">
        <div className="sub-header-body">
          <div className="sub-header-left">
            <img src={Image} alt="xyz" />
            <h2>murtjiznaqvi@gmail.com</h2>
          </div>
          <div className="sub-header-right">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/hire" className="hire-button">HireMe!</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="sub-header-center">
          <div className="sub-header-center-heading">
            <h2>{getHeading()}</h2> {/* Dynamically rendered heading */}
          </div>
          <div className="sub-header-center-body">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-arrow-right"></i>
            <p>{location.pathname.replace('/', '') || 'Home'}</p> {/* Display current route name */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SubHeader;
