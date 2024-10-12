import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar bg-white w-64 h-screen shadow-lg fixed top-17 left-0 flex flex-col p-6">
      <h2 className="sidebar-title text-2xl font-semibold text-gray-800 mb-8 text-center">
        MENU
      </h2>
      <div className="flex flex-col space-y-4">
        <div className="sidebar-item bg-white hover:bg-gray-100 transition duration-200 rounded-lg p-4 cursor-pointer text-gray-800 font-medium">
          Classes
        </div>
        <div className="sidebar-item bg-white hover:bg-gray-100 transition duration-200 rounded-lg p-4 cursor-pointer text-gray-800 font-medium">
          Assignments
        </div>
        <div className="sidebar-item bg-white hover:bg-gray-100 transition duration-200 rounded-lg p-4 cursor-pointer text-gray-800 font-medium">
          Doubts
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
