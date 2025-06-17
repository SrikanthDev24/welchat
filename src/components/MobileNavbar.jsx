// MobileNavbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Track', path: '/track' },
    { name: 'Community', path: '/community' },
    { name: 'Feed', path: '/feed' },
    { name: 'Chat', path: '/chat' },
    { name: 'Profile', path: '/profile' },
  ];

  return (
    <div className="sm:hidden fixed top-0 left-0 right-0 z-50 bg-black text-white border-b border-gray-700">
      <div className="flex items-center justify-between p-4">
        <span className="text-xl font-bold">Welchat</span>
        <button onClick={() => setOpen(!open)} className="text-white">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-gray-700 bg-zinc-900">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 text-sm ${
                  isActive ? 'bg-white text-black font-semibold' : 'text-gray-300 hover:bg-gray-800'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
};

export default MobileNavbar;
