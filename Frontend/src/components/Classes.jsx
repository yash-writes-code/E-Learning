import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classesData from '../data/classes';

function Classes() {
  const [newClassName, setNewClassName] = useState('');
  const [newClassStudents, setNewClassStudents] = useState('');
  const [classes, setClasses] = useState(classesData);
  const [showForm, setShowForm] = useState(false);

  const handleAddClass = () => {
    if (newClassName && newClassStudents) {
      const newClass = {
        id: classes.length + 1,
        name: newClassName,
        students: newClassStudents,
      };
      setClasses([...classes, newClass]);
      setNewClassName('');
      setNewClassStudents('');
      setShowForm(false);
    }
  };

  return (
    <div className="flex flex-col space-y-4 ml-4">
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-600 m-3"
      >
        {showForm ? 'Cancel' : 'Create New Class'}
      </button>

      {showForm && (
        <div className="bg-white rounded-md shadow-md p-4 mb-4">
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="class-name">
              Class Name
            </label>
            <input
              type="text"
              id="class-name"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter class name"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="students">
              No. of Students
            </label>
            <input
              type="number"
              id="students"
              value={newClassStudents}
              onChange={(e) => setNewClassStudents(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter number of students"
            />
          </div>
          <button
            onClick={handleAddClass}
            className="bg-gradient-to-r from-green-500 to-green-700 text-white py-2 px-6 rounded-full shadow-md hover:from-green-600 hover:to-green-800 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Add Class
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3">
        {classes.map((cls) => (
          <Link
            to={`/teacher/classes/${cls.id}`}
            key={cls.id}
            className="bg-white rounded-md shadow-md p-4 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
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