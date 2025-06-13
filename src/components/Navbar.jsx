import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/login', label: 'Login' },
    { path: '/challenge', label: 'Challenge' },
    { path: '/community', label: 'Community' },
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-red-500">Welchat</h1>
      <div className="space-x-6">
        {navLinks.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`text-lg font-medium ${
              pathname === path ? 'text-orange-500' : 'text-gray-600 hover:text-red-500'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
