import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-orange-600">Welchat</div>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium">Home</Link>
        <Link to="/community" className="text-gray-700 hover:text-orange-500 font-medium">Community</Link>
        <Link to="/challenge" className="text-gray-700 hover:text-orange-500 font-medium">Challenge</Link>
        {!user ? (
          <Link to="/login" className="text-orange-600 font-semibold">Login</Link>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-orange-500 text-white px-4 py-1 rounded-lg hover:bg-orange-600 font-semibold"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
