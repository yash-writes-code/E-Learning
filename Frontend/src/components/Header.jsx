import React from 'react';

function Header() {
  return (
    <div className="header bg-white text-gray-800 p-4 flex items-center sticky top-0 z-50 shadow-md">
      <h1 className="header-title text-2xl font-semibold flex-grow text-center text-gray-800">
        Teacher Dashboard
      </h1>
      <div className="user-info flex items-center ml-4">
        <span className="user-name text-gray-600 mr-2 font-medium">Teacher Name</span>
        <div className="avatar bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-md">
          👤
        </div>
      </div>
    </div>
  );
}

export default Header;
