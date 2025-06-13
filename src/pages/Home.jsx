import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-red-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-orange-600 mb-4">Welcome to Welchat</h1>
      <p className="text-lg text-gray-700 text-center max-w-md">
        Track your wellness, join challenges, and connect with the community — all in one app!
      </p>
      <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Home;
