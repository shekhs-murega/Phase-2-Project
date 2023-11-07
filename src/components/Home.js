import React from 'react';

function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to My App!</h1>
      <a href="https://www.example.com/about">
        <img 
          src="https://media.giphy.com/media/f3qJsJ6C3F1X51OwsQ/giphy.gif" 
          alt="Dog giphy" 
          style={{ width: '900px', height: '900px' }}
        />
      </a>
    </div>
  );
}

export default Home;