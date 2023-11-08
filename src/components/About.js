import React from 'react';
import './About.css'; // Import your CSS file

function About() {
  return (
    <div className="about-container">
      <img
        src="https://media.giphy.com/media/U5dPt0qZ7F1ks/giphy.gif"
        alt="dog giphy"
        className="about-image"
      />
      <div className="about-description">
        <h1>About My App</h1>
        <p>
          This is a web application that allows you to view information about various dog breeds.
          Its features include:
          viewing a list of dog breeds,
          selecting a breed to view its details, and
          displaying breed information, including description, life expectancy, and weight.
        </p>
      </div>
    </div>
  );
}

export default About;
