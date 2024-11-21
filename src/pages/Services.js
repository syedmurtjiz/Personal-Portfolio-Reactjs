import React from 'react';
import SubHeader from './subHeader'; // Assuming SubHeader component exists
import '../App.css'

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
            <a href="#">Website Design</a>
            <p>Designs and develops visually appealing websites using HTML, CSS, and JavaScript.</p>
            <span>5 projects</span>
          </div>
          <div className="specialization-1">
            <div className="specialization-up-icon">
              <i className="fa-solid fa-bezier-curve"></i>
            </div>
            <a href="#">Front-End Development</a>
            <p>Creates dynamic, responsive web applications with React.js for seamless user interactions.</p>
            <span>22 projects</span>
          </div>
        </div>
        <div className="specialization-down">
          <div className="specialization-1">
            <div className="specialization-up-icon">
              <i className="fa-regular fa-window-restore"></i>
            </div>
            <a href="#">React Development</a>
            <p>Executes complex projects Booking.com replica swiftly & efficiently with focus on precision</p>
            <span>10 projects</span>
          </div>
          <div className="specialization-1">
            <div className="specialization-up-icon">
              <i className="fa-solid fa-mobile-screen-button"></i>
            </div>
            <a href="#">API Development</a>
            <p>Crafts intuitive, engaging interfaces to enhance user experience and ensure brand consistency.</p>
            <span>3 projects</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
