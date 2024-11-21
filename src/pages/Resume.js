import React from 'react';
import { Link } from 'react-router-dom'; 
import Header from '../Components/Header';
import '../App.css'

const Resume = () => {
  // Function to handle downloading the resume
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/myresume.pdf'; // Path to the resume in the public folder
    link.download = 'Murtjiz_Naqvi_Resume.pdf'; // Filename for download
    link.click(); // Simulate a click to trigger the download
  };

  return (
    <div>
      <Header />
      <div className="resume-actions">
        {/* View Resume Button - Opens PDF in a new tab */}
        <button 
          onClick={() => window.open('/myresume.pdf', '_blank')} 
          className="view-resume-action"
        >
          View Resume
        </button>

        {/* Download Resume Button - Initiates download using Link */}
        <Link to="#" onClick={handleDownload} className="download-resume-action">
          <button>Download Resume</button>
        </Link>
      </div>
    </div>
  );
}

export default Resume;
