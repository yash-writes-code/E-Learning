import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Classes from '../components/Classes.jsx';
import ClassDetails from '../components/ClassDetails.jsx';
import './Teacher.css';
// import Dashboard from '../components/Dashboard';
// import Assignments from '../components/Assignments';

function Teacher() {
  return (
    <div className="teacher-container">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Navigate to="classes" />} />
            <Route path="classes" element={<Classes />} />
            <Route path="classes/:id" element={<ClassDetails />} />
          </Routes>
         {/* <Routes>
            <Route path="/" element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="assignments" element={<Assignments />} />
          </Routes>*/}
        </div>
      </div>
    </div>
  );
}

export default Teacher;
