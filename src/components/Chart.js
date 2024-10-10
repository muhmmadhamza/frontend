// import React from 'react';
// import { Search, MoreVertical, Paperclip, Smile, Send, ChevronDown, MessageSquare, Phone } from 'lucide-react';

// const MessagingUI = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <div className="w-1/4 bg-white border-r border-gray-200">
//       <button
//             className="w-full  text-white rounded-full py-2 px-4 flex items-center justify-between"
//             style={{
//               background: 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)'
//             }}
//           >
//             <span>All Numbers</span>
//             <ChevronDown size={20} />
//           </button>

//         <div className="p-4">


//           <div className="flex justify-between">
//             <button
//               className="w-full text-white rounded-full py-2 px-4 flex items-center justify-center"
//               style={{
//                 background: 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)'
//               }}
//             >
//               Messages
//             </button>
//             <button
//               className="ml-2 w-full text-white rounded-full py-2 px-4 flex items-center justify-center"
//               style={{
//                 background: 'linear-gradient(180deg, #4D72F8 0%, #D92CC1 100%)'
//               }}
//             >
//               Calls
//             </button>
//           </div>
//           <div className="mt-4 relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//             <input type="text" placeholder="Search" className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300" />
//           </div>
//           <div className="flex mt-4 space-x-2">
//             <button className="text-white rounded-full px-4 py-1"
//                style={{
//               background: 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)'
//             }}
//             >All</button>
//             <button className="bg-white text-gray-600 rounded-full px-4 py-1 border border-gray-300">Scheduled</button>
//             <button className="bg-white text-gray-600 rounded-full px-4 py-1 border border-gray-300">Broadcast</button>
//           </div>
//         </div>
//         <div className="overflow-y-auto h-[calc(100vh-200px)]">
//           {['Mishal Irfan', 'Zunaira Butt', 'Kamran Masood', 'Asad Najam', 'Brown', 'Kim Williamson', 'Shane Watson', 'Hazellwood'].map((name, index) => (
//             <div key={index} className="flex items-center p-4 hover:bg-gray-100 cursor-pointer">
//               <div

//                className="w-10 h-10 rounded-full  flex items-center justify-center text-white font-bold mr-3"
//                style={{
//               background: 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)'
//             }}
//                >
//                 {name.split(' ').map(n => n[0]).join('')}
//               </div>
//               <div className="flex-grow">
//                 <h3 className="font-semibold">{name}</h3>
//                 <p className="text-sm text-gray-500">Are You available for meeting?</p>
//               </div>
//               <span className="text-xs text-gray-400">2:34pm</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex-grow flex flex-col">
//         <div className="bg-white p-4 flex items-center justify-between border-b border-gray-200">
//           <div className="flex items-center">
//             <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold mr-3">
//               MI
//             </div>
//             <div>
//               <h2 className="font-semibold">Mishal Irfan</h2>
//               <p className="text-sm text-gray-500">Last seen at 2:34pm</p>
//             </div>
//           </div>
//           <div className="flex space-x-4">
//             <Phone className="text-gray-600" size={24} />
//             <MessageSquare className="text-gray-600" size={24} />
//             <MoreVertical className="text-gray-600" size={24} />
//           </div>
//         </div>
//         <div className="flex-grow p-4 overflow-y-auto bg-gray-100">
//           <div className="bg-white rounded-lg p-3 mb-2 max-w-xs">
//             Hello, how are you available for meeting
//             <div className="text-xs text-right text-gray-400 mt-1">9:30AM</div>
//           </div>
//           <div className="flex justify-end mb-2">
//             <div className="bg-purple-500 text-white rounded-lg p-3 max-w-xs">
//               Hello
//               <div className="text-xs text-right text-purple-200 mt-1">9:30AM</div>
//             </div>
//           </div>
//           <div className="flex justify-end mb-2">
//             <div className="bg-purple-500 text-white rounded-lg p-3 max-w-xs">
//               Hello, how are you available for meeting
//               <div className="text-xs text-right text-purple-200 mt-1">9:31AM</div>
//             </div>
//           </div>
//           <div className="flex justify-end mb-2">
//             <div className="bg-purple-500 text-white rounded-lg p-3 max-w-xs">
//               Hello, how are you available for meeting
//               <div className="text-xs text-right text-purple-200 mt-1">9:31AM</div>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg p-3 mb-2 max-w-xs">
//             Hello, how are you available for meeting
//             <div className="text-xs text-right text-gray-400 mt-1">9:34AM</div>
//           </div>
//           <div className="flex justify-end mb-2">
//             <div className="bg-purple-500 text-white rounded-lg p-3 max-w-xs">
//               Hello
//               <div className="text-xs text-right text-purple-200 mt-1">9:30AM</div>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg p-3 mb-2 max-w-xs">
//             Hello, how are you available for meeting
//             <div className="text-xs text-right text-gray-400 mt-1">9:34AM</div>
//           </div>
//         </div>
//         <div className="bg-white p-4 border-t border-gray-200">
//           <div className="flex items-center bg-gray-100 rounded-full">
//             <button className="p-2 text-gray-600">
//               <Paperclip size={20} />
//             </button>
//             <input type="text" placeholder="Type Message here" className="flex-grow bg-transparent px-4 py-2 focus:outline-none" />
//             <button className="p-2 text-gray-600">
//               <Smile size={20} />
//             </button>
//             <button className="bg-purple-500 text-white rounded-full p-2 ml-2">
//               <Send size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="w-1/4 bg-white border-l border-gray-200 p-4">
//         <h2 className="text-xl font-bold mb-4">Contact</h2>
//         <div className="relative mb-4">
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//           <input type="text" placeholder="Search Contact" className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300" />
//         </div>
//         <div className="overflow-y-auto h-[calc(100vh-200px)]">
//           {['Alina', 'Anna', 'Brown', 'Ben', 'Cutting', 'Carol'].map((name, index) => (
//             <div key={index} className="flex items-center mb-4">
//               <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold mr-3">
//                 {name[0]}
//               </div>
//               <div>
//                 <h3 className="font-semibold">{name}</h3>
//                 <p className="text-sm text-gray-500">092345678421</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <h2 className="text-xl font-bold mb-4 mt-8">Recent</h2>
//         <h2 className="text-xl font-bold mb-4 mt-8">Favourites</h2>
//       </div>
//     </div>
//   );
// };

// export default MessagingUI;




import React, { useState } from 'react';
import {
  Search,
  MoreVertical,
  Paperclip,
  Smile,
  Send,
  ChevronDown,
  MessageSquare,
  Phone,
  Plus
} from 'lucide-react';
import Sidebar from './LeftSideBar';
import setting from './setting.png';
import vector from './Vector.png';

const MessagingUI = () => {
  const [activeSection, setActiveSection] = useState('Calls');
  const [contacts] = useState([
    { name: 'Alina', phone: '0923456784521' },
    { name: 'Anna', phone: '0923456784521' },
    { name: 'Brown', phone: '0923456784521' },
    { name: 'Ben', phone: '0923456784521' },
    { name: 'Cutting', phone: '0923456784521' },
    { name: 'Carol', phone: '0923456784521' },
  ]);
  return (
    <div className="flex h-screen">
      {/* Sidebar for Messages and Calls */}
      <div className="w-1/4   border-r border-gray-200">
        {/* Top Button (All Numbers) */}
        <div className='flex items-center justify-between border-b border-gray-200'
        style={{padding:"1.1rem 1rem"}}
        >
          <button
            className="text-white rounded-full py-2 px-4 flex items-center justify-between"
            style={{
              background: 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)'
            }}
          >
            <span>All Numbers</span>
            <ChevronDown size={20} />
          </button>
          <Phone className="text-gray-600" size={24} />
         </div>
 

        <div style={{ padding: "2rem 1rem" }} className='bg-gray-100'>
          {/* Messages and Calls Buttons */}

          <div
            className="flex  bg-white rounded-full p-1 ml-16"
            style={{
              width: '200px',
              height: '40px',
              position: 'relative'
            }}
          >
            {/* Background for active section */}
            <div
              className="absolute top-0 bottom-0 left-0 right-0 rounded-full"
              style={{
                width: '50%',
                background: 'linear-gradient(180deg, #4D72F8 0%, #D92CC1 100%)',
                transition: 'all 0.3s ease',
                transform: activeSection === 'Calls' ? 'translateX(100%)' : 'translateX(0%)'
              }}
            ></div>

            {/* Messages Button */}
            <button
              className="flex-1 z-10  text-center font-medium"
              style={{
                color: activeSection === 'Messages' ? 'white' : 'black',
                transition: 'color 0.3s ease'
              }}
              onClick={() => setActiveSection('Messages')}
            >
              Messages
            </button>

            {/* Calls Button */}
            <button
              className="flex-1 z-10 text-center font-medium"
              style={{
                color: activeSection === 'Calls' ? 'white' : 'black',
                transition: 'color 0.3s ease'
              }}
              onClick={() => setActiveSection('Calls')}
            >
              Calls
            </button>
          </div>

          {/* Search Bar */}
          <div className="mt-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300"
            />
          </div>

          {/* Filters: All, Scheduled, Broadcast */}
          <div className="flex mt-4 space-x-2">
            <button
              className="text-white rounded-full px-4 py-1"
              style={{
                background: 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)'
              }}
            >
              All
            </button>
            <button className="bg-white text-gray-600 rounded-full px-4 py-1 border border-gray-300">
              Scheduled
            </button>
            <button className="bg-white text-gray-600 rounded-full px-4 py-1 border border-gray-300">
              Broadcast
            </button>
          </div>
        </div>

        {/* Chat List */}
        <Sidebar />
      </div>

      {/* Main Chat Window */}
      <div className="flex-grow flex flex-col">
        {/* Chat Header */}
        <div className="bg-white  flex items-center justify-between border-b border-gray-200"
          style={{ padding: "1rem" }}
        >
          <div className="flex items-center">
            <div
              className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold mr-3"
            >
              MI
            </div>
            <div>
              <h2 className="font-semibold">Mishal Irfan</h2>
              <p className="text-sm text-gray-500">Last seen at 2:34pm</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Phone className="text-gray-600" size={24} />
            <MessageSquare className="text-gray-600" size={24} />
            <MoreVertical className="text-gray-600" size={24} />
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-grow p-4 ">
          {/* Received Message */}
          <div className="rounded-lg p-3 mb-2 max-w-xs" style={{ background: 'rgba(233, 239, 244, 1)' }}>
            Hello, how are you available for meeting
            <div className="text-xs text-right text-gray-400 mt-1">9:30AM</div>
          </div>


          <div className="flex flex-col items-end">
            <div className="flex justify-end mb-2">
              <div
                className="text-white p-3 w-40 shadow-lg"
                style={{
                  background: 'linear-gradient(180deg, #4D72F8 0%, #D92CC1 100%)',
                  borderTopLeftRadius: "9999px",  /* Fully round left top */
                  borderBottomLeftRadius: "9999px", /* Fully round left bottom */
                  borderTopRightRadius: "9999px", /* Oval-like on the top right */
                  borderBottomRightRadius: "0px"  /* Square on the bottom right */
                }}
              >
                Hello
                <div className="text-xs text-right text-purple-200 mt-1">9:30AM</div>
              </div>
            </div>

            <div className="flex justify-end mb-2">
              <div
                className="text-white rounded-l-full rounded-r-none p-3 max-w-xs"
                style={{
                  background: 'linear-gradient(180deg, #4D72F8 0%, #D92CC1 100%)',
                }}
              >
                Hello, how are you available for meeting
                <div className="text-xs text-right text-purple-200 mt-1">9:32AM</div>
              </div>
            </div>
            <div className="flex justify-end mb-2">
              <div
                className="text-white p-3 max-w-xs"
                style={{
                  background: 'linear-gradient(180deg, #4D72F8 0%, #D92CC1 100%)',
                  borderTopLeftRadius: "9999px",
                  borderBottomLeftRadius: "9999px",
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "9999px"
                }}
              >
                Hello, how are you available for meeting
                <div className="text-xs text-right text-purple-200 mt-1">9:32AM</div>
              </div>
            </div>






          </div>

          {/* More message bubbles... */}
          <div className="rounded-lg p-3 mb-2 max-w-xs" style={{ background: 'rgba(233, 239, 244, 1)' }}>
            Hello, how are you available for meeting
            <div className="text-xs text-right text-gray-400 mt-1">9:30AM</div>
          </div>


          <div className="flex flex-col items-end">
            <div className="flex justify-end mb-2">
              <div
                className="text-white p-3 w-40 shadow-lg"
                style={{
                  background: 'linear-gradient(180deg, #4D72F8 0%, #D92CC1 100%)',
                  borderTopLeftRadius: "9999px",  /* Fully round left top */
                  borderBottomLeftRadius: "9999px", /* Fully round left bottom */
                  borderTopRightRadius: "9999px", /* Oval-like on the top right */
                  borderBottomRightRadius: "0px"  /* Square on the bottom right */
                }}
              >
                Hello
                <div className="text-xs text-right text-purple-200 mt-1">9:30AM</div>
              </div>
            </div>











          </div>


          <div className=" rounded-lg p-3 mb-2 max-w-xs" style={{ background: 'rgba(233, 239, 244, 1)' }}>
            Hello, how are you available for meeting
            <div className="text-xs text-right text-gray-400 mt-1">9:30AM</div>
          </div>
        </div>

        {/* Message Input Box */}
        <div className="bg-white p-4 border-t border-gray-200">
          <div className="flex items-center bg-gray-100 rounded-full">
            <button className="p-2 text-gray-600">
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              placeholder="Type Message here"
              className="flex-grow bg-transparent px-4 py-2 focus:outline-none"
            />
            <button className="p-2 text-gray-600">
              <Smile size={20} />
            </button>
            <button className="text-white rounded-full p-2 ml-2"
              style={{
                background: 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)'
              }}
            >
              <Send size={20} />
            </button>
          </div>
        </div>



      </div>

      {/* Contact Sidebar */}

      <div className="w-1/4 bg-white border-l border-gray-200">
        <div className='bg-white p-4 flex items-center justify-end border-b border-gray-200' 
         >


<div style={{padding:"12px 0px", display:"flex", gap:"1rem"}}>
  
<img src={setting} width={20} height={20} />

<img src={vector} width={20} height={20} />
</div>
         </div>

        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold ">Contact</h2>
            {/* Add button */}
            <button className=" bg-gradient-to-r  to-blue-500 text-white rounded-full"
              style={{
                background: 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)'
              }}
            >
              <Plus size={20} />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search Contact"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300"
            />
          </div>

          {/* Contacts List */}
          <div className="relative">
            <div className="pr-4">
              {contacts?.map((contact, index) => (
                <div key={index} className="flex items-center mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3"
                    style={{
                      background: 'linear-gradient(180deg, #D92CC1 0%, #4D72F8 100%)'
                    }}
                  >
                    {contact.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{contact.name}</p>
                    <p className="text-xs text-gray-500">{contact.phone}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Alphabetical Index */}
            <div className="absolute top-0 right-0 flex flex-col ">
              {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map((letter, index) => (
                <button key={index} className="text-gray-500 hover:text-black py-1">
                  {letter}
                </button>
              ))}
            </div>
          </div>



        </div>
        <div className="flex  justify-between w-full items-center border-t border-b border-gray-300 py-2 px-2"

        >
          <h3 className="text-lg font-semibold">Recent</h3>
          <ChevronDown size={20} className="text-gray-500" />
        </div>

        <div className="flex justify-between w-full items-center border-b border-gray-300 py-2 px-2">
          <h3 className="text-lg font-semibold">
            Favourites
          </h3>
          <ChevronDown size={20} className="text-gray-500" />
        </div>

      </div>
    </div>
  );
};

export default MessagingUI;

