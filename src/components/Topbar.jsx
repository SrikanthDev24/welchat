import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Topbar = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-between bg-white px-6 py-4 shadow-md border-b">
      <h1 className="text-2xl font-bold text-orange-600">Welchat</h1>
      
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</Link>
        <Link to="/track" className="text-gray-700 hover:text-orange-600 font-medium">Track</Link>
        <Link to="/challenge" className="text-gray-700 hover:text-orange-600 font-medium">Challenge</Link>
        <Link to="/community" className="text-gray-700 hover:text-orange-600 font-medium">Community</Link>
      </div>

      <div className="text-gray-600">
        {user ? (
          <span>👋 {user.email}</span>
        ) : (
          <Link to="/login" className="text-orange-600 hover:underline">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Topbar;
