import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      const response = await fetch('https://your-server-endpoint.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });

      if (response.ok) {
        console.log('User subscribed successfully:', email);
        // Optionally, you can show a success message to the user
      } else {
        console.error('Failed to subscribe user:', response.status, response.statusText);
        // Optionally, you can show an error message to the user
      }
    } catch (error) {
      console.error('Failed to subscribe user:', error.message);
      // Optionally, you can show an error message to the user
    }

    e.target.reset();
  };

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/data">Data</Link></li>
        </ul>
      </nav>
      <section>
        <h2>Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubscribe}>
          <input type="email" name="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </header>
  );
}

export default Header;