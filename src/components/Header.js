import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      const response = await fetch('http://localhost:3000/subscribers', {
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
    <header className="header-container">
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/data" className="nav-link">Data</Link></li>
        </ul>
      </nav>
      <section className="subscribe-section">
        <h2 className="subscribe-heading">Subscribe to Our Newsletter</h2>
        <form onSubmit={handleSubscribe} className="subscribe-form">
          <input type="email" name="email" placeholder="Enter your email" className="subscribe-input" />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
      </section>
    </header>
  );
}
export default Header;