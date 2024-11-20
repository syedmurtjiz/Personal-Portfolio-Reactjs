import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="App">

      {/* Specialization Section */}
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

      {/* Education & Experience Section */}
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
              <h5>HTML,CSS,JavaScript,React.js</h5>
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
              <h5>Worked with HTML, CSS, Java and React.js</h5>
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

      {/* Work Together Section */}
      <section className="work-togather">
        <div className="work-togather-head">
          <h2>Let’s work together!</h2>
          <p>I design and code beautifully simple things and I love what I do. Just simple like that!</p>
        </div>
        <div className="work-togather-body">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-1">
              <input 
                type="text" 
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <hr width="100%" size="1" className="hr" />
            </div>

            <div className="form-1">
              <input 
                type="text" 
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <hr width="100%" size="1" className="hr" />
            </div>

            <div className="form-1">
              <input 
                type="text" 
                placeholder="Email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <hr width="100%" size="1" className="hr" />
            </div>

            <div className="form-1">
              <input 
                type="text" 
                placeholder="Phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <hr width="100%" size="1" className="hr" />
            </div>

            <div className="form-1">
              <textarea 
                name="message" 
                placeholder="Message"
                className="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="work-togather-button">
              <button type="submit">Send Message</button>
            </div>
          </form>

          <div className="info">
            <div className="phone-head">
              <h3>I’m currently available for new projects. Feel free to reach out with any inquiries or ideas. You can contact me anytime, 24/7..</h3>
            </div>
            <div className="phone">
              <a href="#">+923028809748</a>
            </div>
            <div className="phone">
              <a href="#">Murtjiznaqvi@gmail.com</a>
            </div>
            <div className="address">
              <a href="#">Saddar-Rawalpindi</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;
