// 'use client';

// import React from 'react';
// import { useRouter } from 'next/navigation';

// export default function FinishSetup() {
//   const router = useRouter();

//   const handleinterest = () => {
//     router.push('/Interest');
//   };

//   return (
//     <>
//       <div className="p-4 px-[40px] shadow-md bg-[#FAFAFA] font-sans">
//         <div className="flex  items-center space-x-2">
//           <div className="w-[48px] h-[48px] bg-black rounded-full "></div>
//           <div className="h-[12px] w-[108px] bg-black rounded-[8px] "></div>
//         </div>
//       </div>

//       <div className="min-h-screen flex items-center  justify-center bg-blue-50">
//         <div className="mb-[400px] w-full max-w-md text-center">
//           <h2 className="mt-4 text-[24px] font-bold mb-4 text-[#645674]">Finishing SetUp</h2>
//           <p className="text-lg text-[#333333] mb-15">
//             Fill the spaces below to complete setting up your profile to have full access to the platform.
//           </p>

//           {/* Location Dropdown */}
//           <div className="mb-10">
//             <input
//               type="text"
//               className="w-full px-4 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
//               placeholder="Enter your location"
//             />
//           </div>


//           {/* Gender Dropdown */}
//           <select className="w-full px-4 py-3 border mb-10 rounded-md text-black border-[#A1A1A1] bg-white  ">
//             <option>Select Gender</option>
//             <option>Male</option>
//             <option>Female</option>
//             <option>Other</option>
//           </select>

//           {/* Date of Birth Dropdown */}
//           <div className="mb-10">

//             <input
//               type="date"
//               className="w-full px-4 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
//               placeholder="Select your date of birth"
//             />
//           </div>


//           {/* Submit Button */}

//           <button
//             onClick={handleinterest}
//             className="w-full bg-[#3566A0] cursor-pointer  text-white font-semibold py-2 rounded-md hover:bg-[#2c5384]">
//             Finish setting up
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }



'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function FinishSetup() {
  const router = useRouter();

  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleInterest = () => {
    // Optionally validate before redirect
    router.push('/Interest');
  };

  // Example static location list
  const locations = ['Lagos', 'Abuja', 'Ibadan', 'Kano', 'Port Harcourt'];

  return (
    <>
      <div className="p-4 px-[40px] shadow-md bg-[#FAFAFA] font-sans">
        <div className="flex items-center space-x-2">
          <div className="w-[48px] h-[48px] bg-black rounded-full"></div>
          <div className="h-[12px] w-[108px] bg-black rounded-[8px]"></div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="mb-[400px] w-full max-w-md text-center">
          <h2 className="mt-4 text-[24px] font-bold mb-4 text-[#645674]">Finishing Setup</h2>
          <p className="text-lg text-[#333333] mb-10">
            Fill the spaces below to complete setting up your profile to have full access to the platform.
          </p>

          {/* Location Dropdown */}
          <div className="mb-6">
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

          {/* Gender Dropdown */}
          <div className="mb-6">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Date of Birth Dropdown */}
          <div className="flex gap-2 mb-10">
            {/* Day */}
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-1/3 px-3 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
            >
              <option value="">Day</option>
              {[...Array(31)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>

            {/* Month */}
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-1/3 px-3 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
            >
              <option value="">Month</option>
              {[
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December',
              ].map((m, i) => (
                <option key={i} value={m}>
                  {m}
                </option>
              ))}
            </select>

            {/* Year */}
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-1/3 px-3 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
            >
              <option value="">Year</option>
              {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleInterest}
            className="w-full bg-[#3566A0] transition-transform duration-300 hover:scale-102 cursor-pointer text-white font-semibold py-3 rounded-md hover:bg-[#2c5384]"
          >
            Finish Setting Up
          </button>
        </div>
      </div>
    </>
  );
}
