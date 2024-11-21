import React from 'react';
import SubHeader from './subHeader';
import { Link } from 'react-router-dom';
import '../index.css';

const Contact = () => {
  return (
    <div>
      <SubHeader />
      <section className="contact-section">
        <div className="contact-form-container">
          <div className="contact-form">
            <div className="contact-header">
              <h2>
                Let’s work
                <br /> together!
              </h2>
              <p>
                I design and code beautifully simple things and I love what I do.
                <br /> Just simple like that!
              </p>
            </div>
            <div className="contact-form-group">
              <div className="contact-form-item">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="contact-form-item">
                <input type="text" placeholder="Last Name" />
              </div>
            </div>

            <br />
            <div className="contact-form-group">
              <div className="contact-form-item">
                <input type="text" placeholder="Email address" />
              </div>

              <div className="contact-form-item">
                <input type="text" placeholder="Phone number" />
              </div>
            </div>
            <br />
            <div className="contact-form-item services-select">
              <select id="design" name="services">
                <option value="services">Choose Services</option>
                <option value="ui">UI/UX</option>
                <option value="app">App</option>
                <option value="design">Branding Design</option>
              </select>
            </div>
            <br />
            <div className="contact-form-item">
              <textarea name="conMessage" placeholder="Message"></textarea>
            </div>
            <div className="contact-submit-button">
              <button type="submit">Send Message</button>
            </div>
          </div>

          <div className="contact-info">
            <div className="contact-phone">
              <i className="fa-solid fa-phone"></i>
              <h3>Phone:</h3>
              <Link to="tel:+923028809748">+923028809748</Link>
            </div>
            <div className="contact-email">
              <i className="fa-regular fa-envelope"></i>
              <h3>Email:</h3>
              <Link to="mailto:Murtjiznaqvi@gmail.com">Murtjiznaqvi@gmail.com</Link>
            </div>
            <div className="contact-address">
              <i className="fa-regular fa-address-book"></i>
              <h3>Address:</h3>
              <Link to="#">Saddar-Rawalpindi</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
