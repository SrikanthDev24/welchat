import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Challenge from '../pages/Challenge';
import Community from '../pages/Community';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/challenge" element={<Challenge />} />
      <Route path="/community" element={<Community />} />
    </Routes>
  );
};

export default AppRoutes;
