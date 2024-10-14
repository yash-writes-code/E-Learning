import React from 'react';
import { Link } from 'react-router-dom';
import classesData from '../data/classes';

function Classes() {
  return (
    <div className="flex flex-col space-y-2 ml-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3">
        {classesData.map((cls) => (
          <Link to={`/teacher/classes/${cls.id}`} key={cls.id} className="bg-white rounded-md shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                {cls.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold">{cls.name}</h3>
                <p className="text-gray-600">No. of Students: {cls.students}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Classes;