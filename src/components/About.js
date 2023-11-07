import React from 'react';

function About() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>About My App</h1>
      <p> This is a web application that allows you to view information about various dog breeds.
        It's features include:
           viewing a list of dog breeds,
           selecting a breed to view its details and
           displaying breed information, including description, life expectancy, and weight.</p>
      <div>
        <img 
          src="https://media.giphy.com/media/U5dPt0qZ7F1ks/giphy.gif" 
          alt="dog giphy" 
          style={{ width: '600px', height: '600px' }}
        />
      </div>
    </div>
  );
}

export default About;