import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import '../App.css'; 
import Image1 from '../images/syed.jpg';

const About = () => {
  // Function to handle external navigation
  const handleExternalLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
        <div className="profile-icons">
        <button>
          <Link to="/contact">Find Me On Internet</Link>
        </button>


          <Link
            onClick={() => handleExternalLink('https://x.com/Murtjiz_Naqvi')}
            aria-label="Visit my Twitter profile"
          >
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link
            onClick={() => handleExternalLink('https://github.com/syedmurtjiz')}
            aria-label="Visit my GitHub profile"
          >
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link
            onClick={() =>
              handleExternalLink(
                'https://www.linkedin.com/in/syed-murtjiz-naqvi-190035185/'
              )
            }
            aria-label="Visit my LinkedIn profile"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link
            onClick={() =>
              handleExternalLink('https://syedmurtjiz.github.io/')
            }
            aria-label="Visit my personal website"
          >
            <i className="fa-solid fa-globe"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
