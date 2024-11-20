import React from "react";
import Image4 from '../images/syed.jpg';
import Image5 from '../images/booking.png';

const RecentProjects = () => {
  return (
    <section className="recent-projects">
      <div className="recent-projects-head">
        <h2>Recent Projects</h2>
      </div>

      <div className="recent-projects-main">
        {/* Left Side */}
        <div className="recent-projects-left">
          <div className="recent-projects-1">
            <a href="#">Booking.com Replica</a>
            <p>
              Designed and developed a website replica focusing on precision and
              clarity. This project features a comprehensive search and filter
              system for destinations, detailed accommodation listings, and user
              reviews. The design emphasizes user experience and effective
              presentation of travel information.
            </p>
          </div>

          <div className="recent-projects-2">
            <a href="#">HTML</a>
            <a href="#">CSS</a>
            <a href="#">JavaScript</a>
            <p>
              “The service was excellent. Template example is the next killer
              app.”
            </p>
          </div>

          <div className="recent-projects-3">
            <div className="recent-projects-3-left">
              <img src={Image4} alt="project1" />
            </div>
            <div className="recent-projects-3-right">
              <h3>Syed Murtjiz</h3>
              <p>Web Designer</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="recent-projects-right">
          <div className="recent-projects-5">
            <img src={Image5} alt="project2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
