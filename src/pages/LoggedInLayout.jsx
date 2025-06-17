import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const LoggedInLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-60 w-full min-h-screen bg-orange-50 p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default LoggedInLayout;
