import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../App.css'; // Import the CSS file for styling
import Image1 from '../images/syed.jpg'
const About = () => {
  return (
    <section className="profile">
      <div className="profile-1">
        <img src={Image1} alt="syedimage" />
      </div>
      <div className="profile-2">
        <h1>
          Hi, I am Web <br /> Designer + Developer
        </h1>
        <p>
          I design and code beautifully simple things and I love <br /> what I do. Just simple like that!
        </p>
        <button>
          <a to="/contact">Find Me On Internet</a> {/* Using Link for internal navigation */}
        </button>

        <div className="profile-icons">
          <a
            href="https://x.com/Murtjiz_Naqvi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Twitter profile"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/syedmurtjiz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/syed-murtjiz-naqvi-190035185/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="https://syedmurtjiz.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my personal website"
          >
            <i className="fa-solid fa-globe"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
