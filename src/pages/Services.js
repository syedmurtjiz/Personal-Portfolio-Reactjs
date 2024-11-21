import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import SubHeader from './subHeader'; // Assuming SubHeader component exists
import '../App.css';

const Services = () => {
  return (
    <div>
      <SubHeader />
      <section className="specialization">
        <div className="specialization-heading">
          <h2>My Specialization</h2>
        </div>
        <div className="specialization-up">
          <div className="specialization-1">
            <div className="specialization-up-icon">
              <i className="fa-solid fa-code"></i>
            </div>
            <Link to="#">Website Design</Link>  {/* Replace a with Link */}
            <p>Designs and develops visually appealing websites using HTML, CSS, and JavaScript.</p>
            <span>5 projects</span>
          </div>
          <div className="specialization-1">
            <div className="specialization-up-icon">
              <i className="fa-solid fa-bezier-curve"></i>
            </div>
            <Link to="#">Front-End Development</Link>  {/* Replace a with Link */}
            <p>Creates dynamic, responsive web applications with React.js for seamless user interactions.</p>
            <span>22 projects</span>
          </div>
        </div>
        <div className="specialization-down">
          <div className="specialization-1">
            <div className="specialization-up-icon">
              <i className="fa-regular fa-window-restore"></i>
            </div>
            <Link to="#">React Development</Link>  {/* Replace a with Link */}
            <p>Executes complex projects like Booking.com replica swiftly & efficiently with a focus on precision.</p>
            <span>10 projects</span>
          </div>
          <div className="specialization-1">
            <div className="specialization-up-icon">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <Link to="#">API Development</Link>  {/* Replace a with Link */}
            <p>Crafts intuitive, engaging interfaces to enhance user experience and ensure brand consistency.</p>
            <span>3 projects</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
