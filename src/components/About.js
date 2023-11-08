import React from 'react';
import './About.css'; // Import your CSS file

function About() {
  return (
    <div className="about-container">
      <img
        src="https://media.giphy.com/media/cLcxtL1z8t8oo/giphy.gif"
        alt="dog giphy"
        className="about-image"
      />
      <div className="about-description">
        <h1>Dog Breed App</h1>
        <p>
        "The Dog Breed App is a user-friendly web application designed for dog enthusiasts and curious minds alike. With this app, you can explore a vast array of dog breeds, each with its unique characteristics and charm. Browse through a comprehensive list of breeds, select one that piques your interest, and delve into detailed descriptions, including life expectancy and weight ranges. It's your one-stop source for canine knowledge, helping you make informed decisions about your future furry companions. Whether you're a seasoned dog lover or just beginning your journey into the world of canines, the Dog Breed App is your trusted companion for all things dog-related."
        </p>
      </div>
    </div>
  );
}

export default About;
