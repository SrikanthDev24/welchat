import React from 'react';

const challenges = [
  {
    id: 1,
    title: "7-Day Water Intake Challenge",
    description: "Drink 8 glasses of water every day for a week.",
  },
  {
    id: 2,
    title: "Morning Walk Challenge",
    description: "Walk at least 5,000 steps every morning for 5 days.",
  },
  {
    id: 3,
    title: "Mindfulness Meditation",
    description: "Practice 10 minutes of meditation daily for 10 days.",
  },
];

const Challenge = () => {
  return (
    <div className="min-h-screen bg-orange-50 py-10 px-4">
      <h2 className="text-4xl font-bold text-center text-orange-600 mb-10">Join a Challenge</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-red-500 mb-2">{challenge.title}</h3>
            <p className="text-gray-600 mb-4">{challenge.description}</p>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
              Join Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenge;
