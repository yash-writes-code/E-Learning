import React from 'react';
import assignmentsData from '../data/assignments';
import './Assignments.css';

function Assignments() {
  return (
    <div className="assignments">
      <h2>Your Assignments</h2>
      <ul className="assignment-list">
        {assignmentsData.map((assignment) => (
          <li key={assignment.id} className="assignment-item">
            <h3>{assignment.title}</h3>
            <p>Due: {assignment.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;
