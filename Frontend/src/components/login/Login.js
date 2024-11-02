import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/signup" className="auth-link">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
