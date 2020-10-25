import React from 'react';
import './About.scss';

const About = () => {
  return (
    <div className="About" id="About">
      <div className="About__left-item">
        <img src="/bgphoto.jpg" alt="background" />
        <div className="About__left-container">
          <h2>About</h2>
        </div>
      </div>
      <div className="About__right-item">
        <div className="About__left-container">
          <h3>Skills</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
