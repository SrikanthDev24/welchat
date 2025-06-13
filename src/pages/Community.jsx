import React from 'react';

const posts = [
  {
    id: 1,
    name: "Aarav",
    time: "2h ago",
    message: "Just completed my 5km morning walk 💪 Feeling great!",
  },
  {
    id: 2,
    name: "Priya",
    time: "5h ago",
    message: "Day 3 of water challenge ✔️ Stay hydrated everyone 💧",
  },
  {
    id: 3,
    name: "Ravi",
    time: "1d ago",
    message: "Loving the mindfulness challenge 🧘‍♂️ It helps me stay calm.",
  },
];

const Community = () => {
  return (
    <div className="min-h-screen bg-red-50 p-6">
      <h2 className="text-4xl font-bold text-center text-red-500 mb-10">Community Feed</h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-orange-500">{post.name}</span>
              <span className="text-sm text-gray-400">{post.time}</span>
            </div>
            <p className="text-gray-700">{post.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
