import React from 'react';
import './about.css';

import image3 from '../images/about3.jpg'; // Correct path

function About() {
  return (
    <div id="about" className="about-section">
    <div className="container">
    <div className="image1"><img src={image3} alt="Event" /></div>
    <div className="text-content">
      <h1 className="h1">We are Evently!</h1>
      <p>Planning your event shouldn't be stressful. That's why we built a comprehensive platform that connects you with the perfect vendors and simplifies the entire process.</p>
    </div>
  </div>
  </div>
  );
}

export default About;


