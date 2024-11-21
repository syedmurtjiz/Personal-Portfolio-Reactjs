import React from 'react';
import SubHeader from './subHeader';

const Hireme = () => {
  return (
    <div>
      <SubHeader />
      

        
        <div className="resume-buttons">
          {/* View Resume Button - Opens PDF in a new tab */}
          <button 
            onClick={() => window.open('/myresume.pdf', '_blank')} 
            className="view-resume-button"
          >
            View Resume
          </button>

          {/* Download Resume Button - Initiates download */}
          <a 
            href="/myresume.pdf" 
            download="Murtjiz_Naqvi_Resume.pdf" 
            className="download-resume-button"
          >
            <button>Download Resume</button>
          </a>
        </div>
      </div>
  );
};

export default Hireme;
