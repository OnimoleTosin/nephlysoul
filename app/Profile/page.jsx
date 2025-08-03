'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Profile from "@/assets/profile.png"
import { FaBell, FaExclamationCircle, FaFont, FaLock, FaUser } from 'react-icons/fa';
import { CiCircleAlert } from 'react-icons/ci';
import { PiTextAUnderline } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";




export default function ProfilePage() {
  const [activeSection, setActiveSection] = useState('Personal Info');

  const [alerts, setAlerts] = useState({
    "Daily devotional reminders": true,
    "Prayer room invites": false,
    "Story celebrations": true,
    "Articles category": true,
    "Daily quotes": true,
    "Books": false,
    "Prayer group reminder": true,
    "Tags": false,
    "Comments": true,
    "Friend Request": false,
    "Messages": true,
    "Missed calls": false,
    "Birthdays": true,
  });

  const toggleAlert = (label) => {
    setAlerts((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const [fontSize, setFontSize] = useState(16); // default size (px)
  const [background, setBackground] = useState("Everyone");
  const [messagePermission, setMessagePermission] = useState("Everyone");
  const [msgApproval, setMsgApproval] = useState("Yes");
  const [lastSeen, setLastSeen] = useState("Connections Only");
  const [tagging, setTagging] = useState("Everyone");
  const [searchEngine, setSearchEngine] = useState("Yes");



  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const sections = [
    { name: 'Personal Info', icon: <FaRegUser /> },
    {
      name: 'Security', icon: <CiLock />
    },
    {
      name: 'Alerts', icon: <FaRegBell />
    },
    {
      name: 'Display', icon: <PiTextAUnderline />
    },
    { name: 'Privacy', icon: <CiCircleAlert className="text-bold" /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'Personal Info':
        return (
          <div className=" bg-[#FAFAFA]">
            <div className="w-full h-48 relative">
              <Image
                src={Profile} // change this to your cover image path
                alt="Cover Photo"
                layout="fill"
                objectFit="cover"
                className="rounded-b-lg"
              />
            </div>

            <div className="flex flex-col items-center text-center -mt-16">
              <Image
                src={Profile}
                alt="Profile"
                className="rounded-full object-cover w-32 h-32 border-4 border-white shadow-md"
              />
              <h2 className="text-xl font-semibold mt-2 text-black">
                John Doe <span className="text-gray-500 text-xs">@john2doe</span>
              </h2>
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
              <div>
                <label className="block font-medium text-black">Bio</label>
                <textarea className="w-full border rounded-md text-black border-black bg-white p-2" placeholder="Something About Me..." rows="3" />
              </div>
              <button className="col-span-2 bg-[#3566A0] text-white p-2 rounded w-30 hover:bg-blue-600 ">Save Changes</button>
            </form>
          </div>
        );

      case 'Security':
        return (
          <div className="p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 text-black ">Security</h2>
            <p className="text-black mb-6">Adjust security settings</p>

            <div className="flex items-center py-2">
              <hr className="flex-grow border-black" />
            </div>

            {/* Password Settings */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4 text-black">Password Settings</h3>
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
              <h3 className="text-lg font-semibold mb-2 text-black">Connected accounts</h3>
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                  <Image src="/assets/Google-icon.png" alt="Google" width={30} height={30} />
                  <div className='flex flex-col'>
                    <p className="text-gray-800 text-md text-semibold">Google</p>
                    <p className="text-gray-800">abc@gmail.com</p>
                  </div>
                </div>
                <button className="text-[#E80000] hover:underline cursor-pointer">Disconnect</button>
              </div>
            </div>

            <div className="flex items-center py-2">
              <hr className="flex-grow border-black" />
            </div>
            {/* Restore Security Settings */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-black">Restore security settings</h3>
              <div className="flex items-center justify-between p-3 ">
                <p className="text-gray-700">Restore to default security settings</p>
                <button className="text-[#E80000] hover:underline cursor-pointer">Restore</button>
              </div>
            </div>
          </div>
        );

      case 'Alerts':
        return (
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-1 text-black">Alerts</h2>
            <p className=" mb-6 text-black">Adjust notification settings</p>

            <div className="flex items-center py-2">
              <hr className="flex-grow border-black" />
            </div>

            <h3 className="text-lg font-semibold mb-4 text-black">In-app notifications</h3>

            <div className="flex items-center py-2">
              <hr className="flex-grow border-black" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              {Object.entries(alerts).map(([label, value]) => (
                <label
                  key={label}
                  className="flex items-center justify-between p-1 hover:shadow transition "
                >
                  <span className="text-gray-800 hover:text-blue-700">{label}</span>

                  <button
                    onClick={() => toggleAlert(label)}
                    className={`w-12 h-6 flex items-center rounded-full transition-colors duration-300 ${value ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${value ? 'translate-x-6' : 'translate-x-1'
                        }`}
                    />
                  </button>
                </label>
              ))}
            </div>
          </div>
        );

      case 'Display':
        return (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 text-black">Display</h2>
            <p className=" mb-6 text-black">Adjust display settings</p>

            {/* Font Size */}
            {/* Font Size */}
            <div className="mb-8">
              <label className="font-medium block mb-2 text-black">Font size</label>

              <input
                type="range"
                min={0}
                max={4}
                step={1}
                value={[12, 17, 22, 27, 32].indexOf(fontSize)}
                onChange={(e) => {
                  const values = [12, 17, 22, 27, 32];
                  setFontSize(values[e.target.value]);
                }}
                className="w-full h-1 bg-gray-300 rounded-lg appearance-none slider-thumb"
              />

              {/* Checkpoints */}
              <div className="relative w-full h-4 mt-2">
                <div className="absolute top-1/2 w-full h-[2px] bg-gray-300 transform -translate-y-1/2"></div>
                <div className="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-white border-2 border-gray-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>



            {/* Background Theme */}
            <div>
              <label className="font-medium block mb-2 text-black">Background</label>
              <div className="space-y-2">
                {["system", "light", "dark"].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="background"
                      value={option}
                      checked={background === option}
                      onChange={() => setBackground(option)}
                    />
                    <span className="capitalize">{option === "system" ? "System default" : option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 'Privacy':
        return (
          <div className="space-y-8">
            {/* Header */}
            <h2 className="text-2xl font-bold mb-2 text-black">Privacy Settings</h2>
            <p className="text-black mb-6">Adjust who can interact with you and see your information</p>

            {/* Divider */}
            <div className="flex items-center py-2">
              <hr className="flex-grow border-black" />
            </div>

            {/* Section 1: Who can see my profile */}
            <div>
              <label className="block mb-2 text-black font-semibold">Who can see my profile</label>
              <div className="space-y-2">
                {["Everyone", "Connections Only", "No one"].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="profileVisibility"
                      value={option}
                      checked={background === option}
                      onChange={() => setBackground(option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 2: Who can message me */}
            <div>
              <label className="block mb-2 text-black font-semibold">Who can message me</label>
              <div className="space-y-2">
                {["Everyone", "Connections Only", "No one"].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="messagePermission"
                      value={option}
                      checked={messagePermission === option}
                      onChange={() => setMessagePermission(option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 3: Message request approval needed */}
            <div>
              <label className="block mb-2 text-black font-semibold">Message request approval needed?</label>
              <div className="space-y-2">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="msgApproval"
                      value={option}
                      checked={msgApproval === option}
                      onChange={() => setMsgApproval(option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 4: Who can see my last seen */}
            <div>
              <label className="block mb-2 text-black font-semibold">Show when i'm online</label>
              <div className="space-y-2">
                {["Everyone", "Connections Only", "No one"].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="lastSeen"
                      value={option}
                      checked={lastSeen === option}
                      onChange={() => setLastSeen(option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 5: Who can tag me */}
            <div>
              <label className="block mb-2 text-black font-semibold">Show my profile picture to</label>
              <div className="space-y-2">
                {["Everyone", "Connections Only", "No one"].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="tagging"
                      value={option}
                      checked={tagging === option}
                      onChange={() => setTagging(option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Section 6: Show in search engines */}
            <div>
              <label className="block mb-2 text-black font-semibold">Allow people to tag me in posts</label>
              <div className="space-y-2">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center gap-2 text-black">
                    <input
                      type="radio"
                      name="searchEngine"
                      value={option}
                      checked={searchEngine === option}
                      onChange={() => setSearchEngine(option)}
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row h-full min-h-screen bg-[#FAFAFA]">
        {/* Sidebar */}
        {/* Navigation (Responsive) */}
        <div className="md:w-1/4 w-full md:fixed bg-[#FAFAFA] md:h-full md:block hidden p-4">
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

        {/* Mobile Tab Navigation */}
        <div className="md:hidden w-full bg-white sticky top-0 z-10 border-b border-gray-300 overflow-x-auto whitespace-nowrap flex gap-2 px-2 py-3">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => setActiveSection(section.name)}
              className={`flex items-center gap-1 px-4 py-2 rounded-full border ${activeSection === section.name
                ? 'bg-[#3566A0] text-white border-[#3566A0]'
                : 'text-black border-gray-300'
                }`}
            >
              {section.icon}
              <span className="text-sm">{section.name}</span>
            </button>
          ))}
        </div>


        {/* Main Content */}
        <div className="flex-1 p-4 md:ml-[25%]">
          {renderContent()}
        </div>
      </div>
    </>
  );
};


