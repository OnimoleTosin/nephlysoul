'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Profile from "@/assets/profile.png"
import { FaBell, FaBiohazard, FaFont, FaLock, FaUser } from 'react-icons/fa';

export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState('Personal Info');

  const [alerts, setAlerts] = useState({
    'In-app notifications': false,
    'Daily devotional reminders': true,
    'Prayer room invites': false,
    'Story celebrations': false,
    'Articles category': false,
    'Daily quotes': true,
    'Books': false,
    'Prayer group reminder': false,
    'Tags': false,
    'Comments': true,
    'Friend Request': true,
    'Messages': true,
    'Missed calls': true,
    'Birthdays': true,
  });

  const toggleAlert = (key) => {
    setAlerts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const sections = [
    { name: 'Personal Info', icon: <FaUser /> },
    { name: 'Security', icon: <FaLock /> },
    { name: 'Alerts', icon: <FaBell /> },
    { name: 'Display', icon: <FaFont /> },
    { name: 'Privacy', icon: <FaBiohazard /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'Personal Info':
        return (
          <div className=" bg-[#FAFAFA]">
            <div className="flex flex-col items-center text-center">
              <Image
                src={Profile}
                alt="Profile"
                className="rounded-full object-cover w-25 h-25 transition-transform duration-300 hover:scale-102"
              />
              <h2 className="text-xl font-semibold mt-2 text-black">John Doe <span className="text-gray-500 text-xs">@john2doe</span></h2>
              <p className="text-sm mt-1 text-black">I love singing. I love nature</p>
            </div>

            <form className="grid grid-cols-2 gap-4 mt-6 max-w-3xl mx-auto">
              <div>
                <label className="block font-medium text-black">First Name</label>
                <input
                  className="w-full px-4 py-3 border rounded-md text-black border-black bg-white"
                  placeholder="First Name" />
              </div>

              <div>
                <label className="block font-medium text-black">Last Name</label>
                <input
                  className="w-full px-4 py-3 border rounded-md text-black border-black bg-white"
                  placeholder="Last Name" />
              </div>

              <div>
                <label className="block font-medium text-black">UserName</label>
                <input
                  className="w-full px-4 py-3 border rounded-md text-black border-black bg-white"
                  placeholder="UserName" />
              </div>

              <div>
                <label className="block font-medium text-black">Email</label>
                <input
                  className="w-full px-4 py-3 border rounded-md text-black border-black bg-white"
                  placeholder="Email" />
              </div>

              <div>
                <label className="block font-medium text-black">Phone Number</label>
                <input
                  className="w-full px-4 py-3 border rounded-md text-black border-black bg-white"
                  placeholder="Phone Number" />
              </div>

              <div>
                <label className="block font-medium text-black">Gender</label>
                <select
                  className="w-full px-4 py-3 border rounded-md text-black border-black bg-white">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-black">Location</label>
                <select
                  className="w-full px-4 py-3 border rounded-md text-black border-black bg-white">
                  <option>Select Location</option>
                  <option>Lagos</option>
                  <option>Abuja</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-black">Birth Date</label>
                <input type="date"
                  className="w-full px-4 py-3 border rounded-md text-black border-black bg-white"
                  placeholder="Birth Date" />
              </div>
              <label className="block font-medium text-black">Bio</label>
              <textarea className="col-span-2 border w-[100] rounded-md text-black border-black bg-white p-2 rounded" placeholder="Something About Me..." rows="3" />
              <button className="col-span-2 bg-[#3566A0] text-white p-2 rounded w-30 ">Save Changes</button>
            </form>
          </div>
        );

      case 'Security':
        return (
          <div className="p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2">Security</h2>
            <p className="text-black mb-6">Adjust security settings</p>

            <div className="flex items-center py-2">
              <hr className="flex-grow border-black" />
            </div>

            {/* Password Settings */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Password Settings</h3>
              <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-black">Current Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
                  placeholder="Current Password" />
              </div>

              <div>
                <label className="block font-medium text-black">New Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
                  placeholder="New Password" />
              </div>

              <div>
                <label className="block font-medium text-black">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border rounded-md text-black border-[#A1A1A1] bg-white"
                  placeholder="Confirm Password" />
              </div>

              </div>
              <button className="mt-4 bg-[#3566A0] text-white px-4 py-2 rounded hover:bg-blue-800">
                Save Changes
              </button>
            </div>

            <div className="flex items-center py-2">
              <hr className="flex-grow border-black" />
            </div>

            {/* Connected Accounts */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Connected accounts</h3>
              <div className="flex items-center justify-between p-3">          
                <div className="flex items-center gap-3">
                  <Image src="/assets/Google-icon.png" alt="Google" width={30} height={30} />
                  <div className='flex flex-col'>
                  <p className="text-gray-800 text-md text-semibold">Google</p>
                  <p className="text-gray-800">abc@gmail.com</p>
                  </div>
                </div>
                <button className="text-[#E80000] hover:underline">Disconnect</button>
              </div>
            </div>

            <div className="flex items-center py-2">
              <hr className="flex-grow border-black" />
            </div>
            {/* Restore Security Settings */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Restore security settings</h3>
              <div className="flex items-center justify-between p-3 ">
                <p className="text-gray-700">Restore to default security settings</p>
                <button className="text-[#E80000] hover:underline">Restore</button>
              </div>
            </div>
          </div>
        );

      case 'Alerts':
        return (
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Alerts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(alerts).map(([label, value]) => (
                <label
                  key={label}
                  className="flex items-center justify-between border p-3 rounded shadow-sm"
                >
                  <span>{label}</span>
                  <input
                    type="checkbox"
                    checked={value}
                    onChange={() => toggleAlert(label)}
                    className="w-4 h-4"
                  />
                </label>
              ))}
            </div>
          </div>
        );

      case 'Display':
        return (
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Display</h2>
            <p>This is your display settings section.</p>
          </div>
        );

      case 'Privacy':
        return (
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Privacy</h2>
            <p>This is your privacy settings section.</p>
          </div>
        );


      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen p-3 bg-[#FAFAFA] ">
        {/* Sidebar */}
        <div className="w-1/4 bg-[#FAFAFA] p-4  fixed h-full">
          <h2 className="text-lg font-semibold mb-4 text-black">Settings</h2>
          <ul>
            {sections.map((section) => (
              <li
                key={section.name}
                className={`flex items-center gap-2 p-2 cursor-pointer rounded mb-4 text-black ${activeSection === section.name ? 'bg-[#3566A0] text-white' : 'hover:bg-gray-200'
                  }`}
                onClick={() => setActiveSection(section.name)}
              >
                {section.icon}
                <span>{section.name}</span>
              </li>
            ))}

          </ul>
        </div>

        {/* Main Content */}
        <div className="ml-1/4 w-3/4 ml-[25%] overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </>
  );
};