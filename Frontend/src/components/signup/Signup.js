import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'; // Shared CSS file for styling

const Signup = () => {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <Link to="/login" className="auth-link">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
