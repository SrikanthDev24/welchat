import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const ChatPanel = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Chat Toggle Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-xl z-50"
      >
        <MessageSquare size={24} />
      </button>

      {/* Sliding Chat Panel */}
      {open && (
        <div className="fixed bottom-20 right-4 w-80 bg-white border rounded-2xl shadow-xl z-40 overflow-hidden">
          <div className="bg-orange-500 text-white px-4 py-2 flex justify-between items-center">
            <span>Chat</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>
          <div className="p-4 h-60 overflow-y-auto space-y-2">
            {/* Static example messages */}
            <div className="text-sm bg-gray-100 p-2 rounded-lg">👋 Hi! How can I help?</div>
            <div className="text-sm text-right bg-orange-100 p-2 rounded-lg">I’m exploring Welchat!</div>
          </div>
          <div className="flex border-t p-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 rounded-lg border text-sm focus:outline-none"
            />
            <button className="ml-2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg text-sm">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatPanel;
