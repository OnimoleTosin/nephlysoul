'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/components/logo';

export default function FinishSetup() {
  const router = useRouter();

  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleInterest = () => {
    // Validate inputs if needed
    router.push('/Interest');
  };

  const locations = ['Lagos', 'Abuja', 'Ibadan', 'Kano', 'Port Harcourt'];

  return (
    <>
      {/* Header */}
      <div className="p-4 px-6 sm:px-10 shadow-md bg-[#FAFAFA] font-sans">
        <div className="flex items-center space-x-2">
          <Logo/>
          {/* <div className="w-10 h-10 bg-black rounded-full"></div>
          <div className="h-3 w-28 bg-black rounded-md"></div> */}
        </div>
      </div>


      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-md sm:max-w-lg text-center py-10 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#645674]">Finishing Setup</h2>

          <p className="text-sm sm:text-base text-[#333333]">
            Fill the spaces below to complete setting up your profile to have full access to the platform.
          </p>

          {/* Location Dropdown */}
          <div>
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
          <div>
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

          {/* Date of Birth */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Day */}
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-full sm:w-1/3 px-3 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
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
              className="w-full sm:w-1/3 px-3 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
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
              className="w-full sm:w-1/3 px-3 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
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
            className="w-full bg-[#3566A0] transition-transform duration-300 hover:scale-105 cursor-pointer text-white font-semibold py-3 rounded-md hover:bg-[#2c5384]"
          >
            Finish Setting Up
          </button>
        </div>
      </div>
    </>
  );
}
