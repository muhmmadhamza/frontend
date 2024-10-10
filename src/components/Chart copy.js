import React from 'react';
import {
  Search,
  MoreVertical,
  Paperclip,
  Smile,
  Send,
  ChevronDown,
  MessageSquare,
  Phone
} from 'lucide-react';

const MessagingUI = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r border-gray-200">
        <div className="p-4">

        
          {/* Gradient Button */}
          <div className="flex justify-between">
            <button
              className="w-full text-white rounded-full py-2 px-4 flex items-center justify-center"
              style={{
                background: 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)'
              }}
            >
              Messages
            </button>
            <button
              className="ml-2 w-full text-white rounded-full py-2 px-4 flex items-center justify-center"
              style={{
                background: 'linear-gradient(180deg, #4D72F8 0%, #D92CC1 100%)'
              }}
            >
              Calls
            </button>
          </div>
          {/* Search Bar */}
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search" className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300" />
          </div>
          {/* Filters */}
          <div className="flex mt-4 space-x-2">
            <button
              className="text-white rounded-full px-4 py-1"
              style={{
                background: 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)'
              }}
            >
              All
            </button>
            <button className="bg-white text-gray-600 rounded-full px-4 py-1 border border-gray-300">Missed</button>
            <button className="bg-white text-gray-600 rounded-full px-4 py-1 border border-gray-300">Incoming</button>
          </div>
        </div>

        {/* Contact/Message List */}
        <div className="overflow-y-auto h-[calc(100vh-200px)]">
          {['Kim Williamson', 'Shane Watson', 'Hazelwood', 'Zunaira Butt', 'Kamran Masood'].map((name, index) => (
            <div key={index} className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
              {/* Profile Icon with Gradient */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3"
                style={{
                  background: 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)'
                }}
              >
                {name.split(' ').map(n => n[0]).join('')}
              </div>
              {/* Name and Status */}
              <div className="flex-grow">
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">Outgoing</p>
              </div>
              <span className="text-xs text-gray-400">2:34pm</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex-grow flex flex-col">
        <div className="bg-white p-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold mr-3">
              KW
            </div>
            <div>
              <h2 className="font-semibold">Kim Williamson</h2>
              <p className="text-sm text-gray-500">Last seen at 2:34pm</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Phone className="text-gray-600" size={24} />
            <MessageSquare className="text-gray-600" size={24} />
            <MoreVertical className="text-gray-600" size={24} />
          </div>
        </div>

        {/* Message History */}
        <div className="flex-grow p-4 overflow-y-auto bg-gray-100">
          <div className="bg-white rounded-lg p-3 mb-2 max-w-xs">
            Hello, are you available for a meeting?
            <div className="text-xs text-right text-gray-400 mt-1">9:30 AM</div>
          </div>
          <div className="flex justify-end mb-2">
            <div className="bg-purple-500 text-white rounded-lg p-3 max-w-xs">
              Yes, sure.
              <div className="text-xs text-right text-purple-200 mt-1">9:31 AM</div>
            </div>
          </div>
        </div>

        {/* Input Bar */}
        <div className="bg-white p-4 border-t border-gray-200">
          <div className="flex items-center bg-gray-100 rounded-full">
            <button className="p-2 text-gray-600">
              <Paperclip size={20} />
            </button>
            <input type="text" placeholder="Type Message here" className="flex-grow bg-transparent px-4 py-2 focus:outline-none" />
            <button className="p-2 text-gray-600">
              <Smile size={20} />
            </button>
            <button className="bg-purple-500 text-white rounded-full p-2 ml-2">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Contacts Sidebar */}
      <div className="w-1/4 bg-white border-l border-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Recent Contacts</h2>
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input type="text" placeholder="Search Contact" className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300" />
        </div>
        <div className="overflow-y-auto h-[calc(100vh-200px)]">
          {['Alina', 'Anna', 'Brown', 'Ben', 'Carol'].map((name, index) => (
            <div key={index} className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold mr-3">
                {name[0]}
              </div>
              <div>
                <h3 className="font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">+1 234 567 890</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MessagingUI;
