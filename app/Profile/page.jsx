// 'use client';
// import Navbar from '@/components/Navbar';
// import { useState } from 'react';

// export default function ProfilePage() {
//   const [activeTab, setActiveTab] = useState('Personal Info');

//   const menuItems = ['Personal Info', 'Security', 'Alerts', 'Display', 'Privacy settings'];

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'Personal Info':
//         return (
//           <div className="w-full p-6 bg-white rounded-lg shadow-md">
//             <div className="flex flex-col items-center mb-6">
//               <img
//                 src="https://i.pravatar.cc/100"
//                 alt="Profile"
//                 className="w-24 h-24 rounded-full mb-2"
//               />
//               <div className="w-full max-w-xl">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input placeholder="First Name" className="input" />
//                   <input placeholder="Last Name" className="input" />
//                   <input placeholder="Username" className="input" />
//                   <input placeholder="Email" className="input" />
//                   <input placeholder="Phone number" className="input" />
//                   <select className="input">
//                     <option>Select Gender</option>
//                     <option>Male</option>
//                     <option>Female</option>
//                   </select>
//                   <select className="input">
//                     <option>Select Location</option>
//                     <option>Lagos</option>
//                     <option>Abuja</option>
//                     <option>Others</option>
//                   </select>
//                   <input type="date" className="input" />
//                 </div>
//                 <button className="bg-blue-600 text-white mt-6 px-6 py-2 rounded hover:bg-blue-700">
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
//       default:
//         return (
//           <div className="w-full p-6 bg-white rounded-lg shadow-md">
//             <p className="text-gray-500">Content for {activeTab} goes here...</p>
//           </div>
//         );
//     }
//   };

//   return (
//     <>
//             <Navbar/>

//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-[300px] bg-transperent pt-6">
//         <ul className="space-y-2 pl-4">
//           {menuItems.map((item) => (
//             <li
//               key={item}
//               className={`cursor-pointer p-2 rounded ${
//                 activeTab === item ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700'
//               }`}
//               onClick={() => setActiveTab(item)}
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="ml-[240px] w-full p-8">{renderContent()}</div>
//     </div>
//     </>
//   );
// }

// // Tailwind Input Class
// const inputClass = `
//   input
// `;

'use client';
import Image from 'next/image';
import { useState } from 'react';
import img1 from '@/assets/img1.png';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProfilePage() {
  const locations = ['Lagos', 'Abuja', 'Ibadan', 'Kano', 'Port Harcourt'];
  const [location, setLocation] = useState('');


  const [activeTab, setActiveTab] = useState('Personal Info');

  const menuItems = ['Personal Info', 'Security', 'Alerts', 'Display', 'Privacy settings'];

  const renderContent = () => {

    switch (activeTab) {
      case 'Personal Info':
        return (

          <>
            <div className="w-full p-6 bg-white rounded-lg shadow-md">
              <div className="flex flex-col items-center mb-6">
                < Image
                  src={img1}
                  alt="Profile"
                  className="w-24 h-24 rounded-full mb-2"
                />
                <div className="w-full max-w-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-medium text-black">First Name</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full px-4 py-3 border rounded-md text-black border-black bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-black">Last Name</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-4 py-3 border rounded-md text-black border-black bg-white"
                        required
                      />
                    </div>   <div>
                      <label className="block font-medium text-black">UserName</label>
                      <input
                        type="text"
                        placeholder="UserName"
                        className="w-full px-4 py-3 border rounded-md text-black border-black bg-white"
                        required
                      />
                    </div>   <div>
                      <label className="block font-medium text-black">Email</label>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 border rounded-md text-black border-black bg-white"
                        required
                      />
                    </div>   <div>
                      <label className="block font-medium text-black">Phone Number</label>
                      <input
                        type="number"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 border rounded-md text-black border-black bg-white"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block font-medium text-black">Gender</label>

                      <select
                        className="w-full px-4 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label className="block font-medium text-black">Location</label>

                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-4 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
                      >
                        <option value="">Select Location</option>
                        {locations.map((loc, index) => (
                          <option key={index} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-6">
                      <label className="block font-medium text-black">Birth Date</label>
                      <input type="date" className="h-14 input w-full px-4 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
                      /></div>
                  </div>
                  <button className="bg-blue-600 text-white mt-6 px-6 py-2 rounded hover:bg-blue-700">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
            );
            default:
            return (
            <div className="w-full p-6 bg- rounded-lg shadow-md">
              <p className="text-gray-500">Content for {activeTab} goes here...</p>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-[240px] fixed h-full bg-white border-r shadow-sm pt-6">
          <ul className="space-y-2 pl-4">
            {menuItems.map((item) => (
              <li
                key={item}
                className={`cursor-pointer p-2 rounded ${activeTab === item ? 'bg-blue-100 text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="ml-[240px] w-full p-8">{renderContent()}</div>
      </div>
    </>


  );
  <Footer />
}

// Tailwind Input Class
const inputClass = `
  input
`;

