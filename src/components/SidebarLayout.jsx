import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const SidebarLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <div className="sticky top-0 h-screen flex-shrink-0 z-10">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* Scrollable Page Content */}
      <div
        className={`transition-all duration-300 ease-in-out flex-1 overflow-y-auto bg-orange-50 
          ${collapsed ? 'ml-16' : 'ml-56'}
        `}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
