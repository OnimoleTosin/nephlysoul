'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function FinishSetup() {
  const router = useRouter();

  const handleinterest = () => {
    router.push('/Interest');
  };

  return (
    <>
      <div className="p-4 px-[40px] shadow-md bg-[#FAFAFA] font-sans">
        <div className="flex  items-center space-x-2">
          <div className="w-[48px] h-[48px] bg-black rounded-full "></div>
          <div className="h-[12px] w-[108px] bg-black rounded-[8px] "></div>
        </div>
      </div>

      <div className="min-h-screen flex items-center  justify-center bg-blue-50">
        <div className="mb-[400px] w-full max-w-md text-center">
          <h2 className="mt-4 text-[24px] font-bold mb-4 text-[#645674]">Finishing SetUp</h2>
          <p className="text-lg text-[#333333] mb-15">
            Fill the spaces below to complete setting up your profile to have full access to the platform.
          </p>

          {/* Location Dropdown */}
          <div className="mb-10">
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
              placeholder="Enter your location"
            />
          </div>


          {/* Gender Dropdown */}
          <select className="w-full px-4 py-3 border mb-10 rounded-md text-black border-[#A1A1A1] bg-white  ">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          {/* Date of Birth Dropdown */}
          <div className="mb-10">

            <input
              type="date"
              className="w-full px-4 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
              placeholder="Select your date of birth"
            />
          </div>


          {/* Submit Button */}

          <button
            onClick={handleinterest}
            className="w-full bg-[#3566A0] cursor-pointer  text-white font-semibold py-2 rounded-md hover:bg-[#2c5384]">
            Finish setting up
          </button>
        </div>
      </div>
    </>
  );
}



