import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faSuitcase, faBars, faCrown } from '@fortawesome/free-solid-svg-icons';
import Image3 from "../images/about-1.webp"

const Achievements = () => {
  return (
    <section className="achive">
      <h1>Achievements</h1>
      <div className="achivements">
        <div className="achivement">
          <FontAwesomeIcon icon={faTrophy} />
          <h3>KelvinWeather<br />Project</h3>
          <h2>100%</h2>
        </div>

        <div className="achivement">
          <FontAwesomeIcon icon={faSuitcase} />
          <h3>SpotifyClone<br />Project</h3>
          <h2>100%</h2>
        </div>

        <div className="achivement">
          <FontAwesomeIcon icon={faBars} />
          <h3>Booking.com<br />Replica</h3>
          <h2>90%</h2>
        </div>

        <div className="achivement">
          <FontAwesomeIcon icon={faCrown} />
          <h3>Portfolio<br />Website</h3>
          <h2>100%</h2>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="about">
      <div className="about-1">
        <h1>Achievements in my <br />professional life..</h1>
        <p>
          I built features with HTML, CSS, JavaScript, and React.js, refined user
          interfaces, and improved code quality through reviews. This role provided me with key
          hands-on experience in web development.
        </p>
        <a href="#">Contact Me</a>
      </div>
      <div className="about-2">
        <h2>Web Designer</h2>
        <p>As a web designer, I focus on understanding user needs and goals to create effective and visually appealing websites.</p>
        <img src={Image3} alt="About" />
      </div>
    </section>
  );
};


const main = () => {
  return (
    <div>
      <Achievements />
      <About />
    </div>
  );
};

export default main;
