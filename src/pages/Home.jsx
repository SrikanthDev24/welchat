import React, { useState, useEffect, useRef } from 'react';
import useDragScroll from '../hooks/useDragScroll';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import postImage from '../assets/post-1.png';
import story1 from '../assets/story-1.png';

const Home = () => {
  const posts = [
    {
      id: 1,
      user: 'User 1',
      time: '2 hours ago',
      text: 'Today I completed my 5K run challenge! Feeling amazing! 🏃‍♂️💪',
      image: postImage,
    },
    {
      id: 2,
      user: 'User 2',
      time: '4 hours ago',
      text: 'Loving the meditation challenge! 🧘‍♀️🌼',
      image: postImage,
    },
    {
      id: 3,
      user: 'User 3',
      time: '6 hours ago',
      text: 'Hydration goal complete! 💧 Stay healthy!',
      image: postImage,
    },
  ];

  const stories = new Array(11).fill(story1);
  const dragScrollRef = useDragScroll();

  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const [showStoryPopup, setShowStoryPopup] = useState(false);
  const [currentStory, setCurrentStory] = useState(null);
  const [showAddStoryPopup, setShowAddStoryPopup] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex justify-center items-start gap-6 px-4 py-6 bg-black text-white min-h-screen">
      {/* Center Feed */}
      <div className="w-full max-w-[600px]">

        {/* Stories */}
        <div
          ref={dragScrollRef}
          className="flex gap-4 mb-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
        >
          {/* Add New Story */}
          <button
            onClick={() => setShowAddStoryPopup(true)}
            className="w-16 h-16 flex-shrink-0 border-2 border-white rounded-full bg-zinc-700 text-white flex items-center justify-center text-2xl font-bold hover:bg-zinc-600"
          >
            +
          </button>

          {/* Existing Stories */}
          {stories.map((img, i) => (
            <div
              key={i}
              onClick={() => {
                setCurrentStory(img);
                setShowStoryPopup(true);
              }}
              className="w-16 h-16 flex-shrink-0 border-2 border-white rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-400"
            >
              <img src={img} alt={`story-${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search for wellness tips, friends, or challenges..."
          className="w-full p-3 rounded-xl border border-gray-600 focus:outline-none mb-6 bg-zinc-900 text-white placeholder-gray-400"
        />

        {/* Posts */}
        {posts.map((post) => (
          <div key={post.id} className="bg-zinc-900 rounded-xl shadow-md p-4 mb-6">
            {/* Post Header */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <img
                  src="https://source.unsplash.com/40x40/?user"
                  alt="user"
                  className="rounded-full w-10 h-10"
                />
                <div>
                  <h3 className="font-semibold text-white text-base">{post.user}</h3>
                  <p className="text-xs text-gray-500">{post.time}</p>
                </div>
              </div>

              {/* Follow & Dropdown */}
              <div className="flex items-center gap-2 relative" ref={dropdownRef}>
                <button className="text-sm text-gray-300 border border-gray-500 px-3 py-1 rounded-full hover:bg-zinc-800">
                  Follow
                </button>
                <button
                  className="text-xl font-bold text-white"
                  onClick={() =>
                    setOpenDropdown((prev) => (prev === post.id ? null : post.id))
                  }
                >
                  ⋯
                </button>
                {openDropdown === post.id && (
                  <div className="absolute right-0 top-8 bg-zinc-800 rounded-xl shadow-lg p-4 w-60 z-20">
                    <h4 className="font-semibold text-white mb-2">User Profile</h4>
                    <p className="text-sm text-gray-300 mb-1">👣 Steps today: 6,784</p>
                    <p className="text-sm text-gray-300 mb-1">🔥 Calories: 300 kcal</p>
                    <p className="text-sm text-gray-300 mb-3">🗓️ Streak: 5 days</p>
                    <button className="text-sm text-orange-400 hover:underline">Save Post</button>
                  </div>
                )}
              </div>
            </div>

            {/* Post Image */}
            <img
              src={post.image}
              alt="post"
              className="w-full h-72 object-cover rounded-xl mb-2"
            />
            <p className="mb-2 text-gray-200 text-sm">{post.text}</p>

            {/* Post Footer */}
            <div className="flex items-center justify-between text-sm text-gray-400 mt-2">
              <div className="flex gap-4">
                <button className="flex items-center gap-1 hover:text-white">
                  <Heart size={16} /> Like
                </button>
                <button className="flex items-center gap-1 hover:text-white">
                  <MessageCircle size={16} /> Comment
                </button>
                <button className="flex items-center gap-1 hover:text-white">
                  <Share2 size={16} /> Share
                </button>
              </div>
              <div className="text-xs text-orange-400">
                🏃‍♂️ Today: <span className="font-semibold">7,456 steps</span>
              </div>
            </div>
          </div>
        ))}
      </div>

     {/* Right Side Panel */}
  <div className="hidden xl:block w-[360px] mt-2 sticky top-6 space-y-5">

  {/* Weekly Goal Progress */}
  <div className="bg-zinc-900 rounded-2xl shadow-md p-5">
    <h2 className="text-lg font-bold text-white mb-2">🎯 Weekly Goal</h2>
    <p className="text-sm text-gray-400 mb-3">You’ve completed <span className="text-orange-400 font-medium">5/7</span> days this week!</p>
    <div className="w-full bg-zinc-700 rounded-full h-3 overflow-hidden mb-2">
      <div className="bg-orange-500 h-3 rounded-full" style={{ width: '71%' }}></div>
    </div>
    <button className="text-xs text-orange-400 hover:underline mt-2">View All Challenges</button>
  </div>

  {/* Notifications */}
  <div className="bg-zinc-900 rounded-2xl shadow-md p-5">
    <h2 className="text-lg font-bold text-white mb-3">🔔 Recent Notifications</h2>
    <ul className="space-y-4 text-sm">
      <li className="flex items-start gap-3">
        <div className="text-xl">💬</div>
        <div>
          <p className="text-gray-300">New comment from <span className="font-semibold text-white">User2</span> on your post.</p>
          <p className="text-xs text-gray-500 mt-1">2h ago</p>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <div className="text-xl">❤️</div>
        <div>
          <p className="text-gray-300"><span className="font-semibold text-white">User5</span> liked your story.</p>
          <p className="text-xs text-gray-500 mt-1">5h ago</p>
        </div>
      </li>
      <li className="flex items-start gap-3">
        <div className="text-xl">🔥</div>
        <div>
          <p className="text-gray-300">You completed your daily step goal!</p>
          <p className="text-xs text-gray-500 mt-1">Today</p>
        </div>
      </li>
    </ul>
    <button className="text-xs text-orange-400 hover:underline mt-4">See All Notifications</button>
  </div>

  {/* Friend Requests */}
  <div className="bg-zinc-900 rounded-2xl shadow-md p-5">
    <h2 className="text-lg font-bold text-white mb-3">👥 Friend Requests</h2>

    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <img
          src="https://source.unsplash.com/40x40/?face&sig=1"
          alt="user"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm text-white font-medium">Alice</p>
          <p className="text-xs text-gray-500">Wants to connect</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="bg-green-500 text-xs px-3 py-1 rounded hover:bg-green-600 text-white">Accept</button>
        <button className="bg-gray-700 text-xs px-3 py-1 rounded hover:bg-gray-600 text-white">Ignore</button>
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="https://source.unsplash.com/40x40/?face&sig=2"
          alt="user"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm text-white font-medium">Rahul</p>
          <p className="text-xs text-gray-500">Sent a request</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="bg-green-500 text-xs px-3 py-1 rounded hover:bg-green-600 text-white">Accept</button>
        <button className="bg-gray-700 text-xs px-3 py-1 rounded hover:bg-gray-600 text-white">Ignore</button>
      </div>
    </div>

    <button className="text-xs text-orange-400 hover:underline mt-4 block">View All Requests</button>
  </div>

  </div>


      {/* Story Viewer Popup */}
      {showStoryPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setShowStoryPopup(false)}
        >
          <div className="bg-zinc-900 rounded-xl overflow-hidden max-w-sm w-full p-4">
            <img src={currentStory} alt="story-full" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}

      {/* Add Story Popup */}
      {showAddStoryPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setShowAddStoryPopup(false)}
        >
          <div
            className="bg-zinc-900 rounded-xl p-6 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-white mb-4">Add a New Story</h2>
            <input type="file" accept="image/*" className="text-sm text-gray-300 mb-4" />
            <div className="flex justify-end">
              <button
                onClick={() => setShowAddStoryPopup(false)}
                className="bg-orange-500 px-4 py-2 rounded-md text-white hover:bg-orange-600"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
