import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
import Header from "./subHeader";

const About = () => {
  return (
    <div>
      <Header />
      {/* Main Content */}
      <div className="main">
        {/* Education Section */}
        <section className="learning">
          <div className="learning-head">
            <h2>Education & Work Experience</h2>
          </div>
          <div className="learning-body">
            <div className="learning-1">
              <h2>Education</h2>
              <div className="education-1 edustyle">
                <h3>BS in Computer Software</h3>
                <h5>Foundation University</h5>
                <span>September 2024</span>
              </div>
              <div className="education-2 edustyle">
                <h3>Intermediate in Computer Science</h3>
                <h5>Mccs College</h5>
                <span>September-2018</span>
              </div>
            </div>

            <div className="learning-2">
              <h2>Experience</h2>
              <div className="experience edustyle">
                <h3>Front-End Development</h3>
                <h5>HTML, CSS, JavaScript</h5>
                <span>July-2024</span>
              </div>
              <div className="experience edustyle">
                <h3>User Interface</h3>
                <h5>Design enhancements</h5>
                <span>September-2024</span>
              </div>
              <div className="experience edustyle">
                <h3>Collaborative Reviews</h3>
                <h5>Code evaluations</h5>
                <span>September-2024</span>
              </div>
              <div className="experience edustyle">
                <h3>Web Developer Intern</h3>
                <h5>Product Designer</h5>
                <span>October-2024</span>
              </div>
            </div>

            <div className="learning-3">
              <h2>Past Role</h2>
              <div className="past-role edustyle">
                <h3>Web Developer Intern</h3>
                <h5>Worked with HTML, CSS, Java, and React.js</h5>
                <span>June-2024</span>
              </div>
              <div className="past-role edustyle">
                <h3>Web Developer Intern</h3>
                <h5>Assisted in web development and UI design</h5>
                <span>August-2024</span>
              </div>
              <div className="past-role edustyle">
                <h3>Web Developer Intern</h3>
                <h5>Collaborated on code reviews and problem-solving</h5>
                <span>September-2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills">
          <div className="skills-1">
            <h2>My skills</h2>
            <p>Offered Services</p>
          </div>
          <div className="skills-2">
            {/* Skill Blocks */}
            <div className="skills-image">
              <img src="images/html.jpeg" alt="HTML" />
              <h2>92%</h2>
              <p>HTML</p>
            </div>
            <div className="skills-image">
              <img src="images/js.svg" alt="JavaScript" />
              <h2>92%</h2>
              <p>JavaScript</p>
            </div>
            <div className="skills-image">
              <img src="images/react.svg" alt="React.js" />
              <h2>50%</h2>
              <p>React.js</p>
            </div>
            <div className="skills-image">
              <img src="images/css.png" alt="CSS" />
              <h2>92%</h2>
              <p>CSS</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
