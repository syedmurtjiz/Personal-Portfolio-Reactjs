import React from 'react';
import SubHeader from './subHeader';
import { Link } from 'react-router-dom';
import '../index.css';  // Import the CSS file
import Image1 from '../images/booking.png';
import Image2 from '../images/spotify.png';
import Image3 from '../images/jamming.png';
import Image4 from '../images/portfolio.png';

const Portfolio = () => {
  return (
    <div>
      <SubHeader />
      <section className="portfolio-section">
        <div className="portfolio-heading">
          <h2>My Recent Works</h2>
          <p>
            We put your ideas and thus your wishes in the form of a unique web project <br />
            that inspires you and your customers.
          </p>
        </div>
        <div className="portfolio-nav">
          <ul>
            <li className="portfolio-nav-item">
              <Link to="#">All</Link>
            </li>
            <li className="portfolio-nav-item">
              <Link to="#">UX/UI</Link>
            </li>
            <li className="portfolio-nav-item">
              <Link to="#">Branding</Link>
            </li>
            <li className="portfolio-nav-item">
              <Link to="#">App</Link>
            </li>
          </ul>
        </div>
        <div className="portfolio-images-top">
          <div className="portfolio-item-left">
            <div className="portfolio-image-left">
              <img src={Image1} alt="Booking.com" />
            </div>
            <div className="portfolio-item-details">
              <h3>Booking.com</h3>
              <p>Project was about Booking.com Replica</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="portfolio-item-right">
            <div className="portfolio-image-right">
              <img src={Image2} alt="Spotify Clone" />
            </div>
            <div className="portfolio-item-details">
              <h3>Spotify Clone</h3>
              <p>Project was about Spotify Clone</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
        <div className="portfolio-images-bottom">
          <div className="portfolio-item-bottom">
            <div className="portfolio-image-bottom">
              <img src={Image3} alt="Jamming" />
            </div>
            <div className="portfolio-item-details">
              <h3>Jamming</h3>
              <p>Project was about Jamming</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="portfolio-item-bottom-right">
            <div className="portfolio-image-bottom-right">
              <img src={Image4} alt="My Portfolio" />
            </div>
            <div className="portfolio-item-details">
              <h3>My Portfolio</h3>
              <p>Project was about My Portfolio</p>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
