import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Welcome, Teacher!</h2>
      <div className="stats">
        <div className="stat-card">
          <h3>Classes</h3>
          <p>5</p>
        </div>
        <div className="stat-card">
          <h3>Assignments</h3>
          <p>12</p>
        </div>
        <div className="stat-card">
          <h3>Students</h3>
          <p>150</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
