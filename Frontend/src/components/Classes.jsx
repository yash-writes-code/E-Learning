import React from 'react';
import { Link } from 'react-router-dom';
import classesData from '../data/classes';
import './Classes.css';

function Classes() {
  return (
    <div className="classes">
      <h2>Your Classes</h2>
      <ul className="class-list">
        {classesData.map((cls) => (
          <li key={cls.id} className="class-item">
            <Link to={`/teacher/classes/${cls.id}`}>{cls.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Classes;
