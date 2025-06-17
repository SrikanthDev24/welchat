import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Home,
  Activity,
  Users,
  Heart,
  MessageCircle,
  User,
  LogOut,
} from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Sidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const menuItems = [
    { name: 'Home', icon: <Home size={18} />, path: '/' },
    { name: 'Track', icon: <Activity size={18} />, path: '/track' },
    { name: 'Community', icon: <Users size={18} />, path: '/community' },
    { name: 'Likes', icon: <Heart size={18} />, path: '/likes' },
    { name: 'Post Feed', icon: <MessageCircle size={18} />, path: '/feed' },
    { name: 'Chat', icon: <MessageCircle size={18} />, path: '/chat' },
    { name: 'Friends List', icon: <Users size={18} />, path: '/friends' },
    { name: 'Friend Requests', icon: <Users size={18} />, path: '/requests' },
    { name: 'Profile Page', icon: <User size={18} />, path: '/profile' },
  ];

  return (
    <div
      className={`h-screen fixed top-0 left-0 z-50 transition-all duration-300 ease-in-out
        flex flex-col justify-between shadow-lg border-r border-gray-800
        ${collapsed ? 'w-16' : 'w-56'} bg-black text-white`}
    >
      {/* Logo + Collapse */}
      <div>
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
          {!collapsed && (
            <span className="text-xl font-bold tracking-wide">Welchat</span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white hover:text-gray-400 transition"
          >
            {collapsed ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1 mt-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 mx-2 rounded-lg transition-all font-medium text-sm
                ${
                  isActive
                    ? 'bg-white text-black font-semibold'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`
              }
            >
              {item.icon}
              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm 
            text-red-500 hover:bg-gray-900 hover:text-red-400 transition-all"
        >
          <LogOut size={18} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
