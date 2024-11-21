// HireMeButton.js
import React from "react";

const HireMeButton = () => {
  const handleDownload = () => {
    // Path to your file in the public folder
    const fileUrl = process.env.PUBLIC_URL + "/path-to-your-file.pdf"; 
    window.open(fileUrl, "_blank"); // Opens the file in a new tab
  };

  return (
    <button onClick={handleDownload} className="hire-button">
      HireMe!
    </button>
  );
};

export default HireMeButton;
