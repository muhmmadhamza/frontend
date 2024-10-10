import { useState } from 'react';
import { AiOutlinePlus, AiOutlineDown } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

const ContactList = () => {
  const [contacts] = useState([
    { name: 'Alina', phone: '0923456784521' },
    { name: 'Anna', phone: '0923456784521' },
    { name: 'Brown', phone: '0923456784521' },
    { name: 'Ben', phone: '0923456784521' },
    { name: 'Cutting', phone: '0923456784521' },
    { name: 'Carol', phone: '0923456784521' },
  ]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Contact</h2>
        <AiOutlinePlus size={24} className="text-purple-600 cursor-pointer" />
      </div>

      {/* Search Bar */}
      <div className="relative mb-4">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search Contact"
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Contact List */}
      <div className="overflow-y-auto h-[calc(100vh-300px)] mb-4">
        <div className="mb-6">
          {contacts.map((contact, index) => (
            <div key={index} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3"
                  style={{
                    background: 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)',
                  }}
                >
                  {contact.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{contact.name}</p>
                  <p className="text-xs text-gray-500">{contact.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent and Favourites Sections */}
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Recent</h3>
          <AiOutlineDown size={20} className="text-gray-500 cursor-pointer" />
        </div>
        <div className="mt-2 border-t border-gray-300"></div>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Favourites</h3>
          <AiOutlineDown size={20} className="text-gray-500 cursor-pointer" />
        </div>
        <div className="mt-2 border-t border-gray-300"></div>
      </div>
    </div>
  );
};

export default ContactList;
