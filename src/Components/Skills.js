import React from "react";
import "../App.css"; // Adjust the path to your CSS file
import htmlImage from "../images/html.jpeg";
import jsImage from "../images/js.svg";
import reactImage from "../images/react.svg";
import cssImage from "../images/css.png";
import websiteImage from "../images/wesite.jpeg";
import compSciImage from "../images/compsc.png";

const Skills = () => {
  const skillsData = [
    { image: htmlImage, percentage: "92%", name: "HTML" },
    { image: jsImage, percentage: "50%", name: "JavaScript" },
    { image: reactImage, percentage: "50%", name: "React" },
    { image: cssImage, percentage: "92%", name: "CSS" },
    { image: websiteImage, percentage: "39%", name: "Website Design" },
    { image: compSciImage, percentage: "30%", name: "Computer Science" },
  ];

  return (
    <section className="skills">
      <div className="skills-1">
        <h2>My Skills</h2>
        <p>
          I put your ideas and thus your wishes in the form of a unique web project 
          that inspires you and your customers.
        </p>
      </div>

      <div className="skills-2">
        {skillsData.map((skill, index) => (
          <div key={index} className="skills-image">
            <img src={skill.image} alt={skill.name.toLowerCase()} />
            <h2>{skill.percentage}</h2>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
