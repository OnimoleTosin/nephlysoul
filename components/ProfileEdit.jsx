"use client"
import React, { useState } from "react";
import Image from "next/image";
import Profile from "@/assets/profile.png"
import Cover from "@/assets/coverpics.png"

const ProfileEdit = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#FAFAFA] min-h-screen p-6">
      {/* Cover & Profile Section */}
      <div className="relative w-full h-60">
        <Image
          src={Cover}
          alt="Cover Photo"
          layout="fill"
          objectFit="cover"
          className="rounded-b-lg"
        />
        <div className="absolute flex items-center -bottom-12 left-10">
          <Image
            src={Profile}
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full object-cover border-4 border-white shadow-md"
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold text-black">
              John Doe{" "}
              <span className="text-gray-500 text-xs ml-3">@john2doe</span>
            </h2>
            <p className="text-sm mt-1 text-black">
              I love singing. I love nature
            </p>
          </div>
        </div>
      </div>

      {/* Edit Button */}
      <div className="mt-20 text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#3566A0] text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Edit Profile
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Form */}
            <form className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block font-bold text-black">First Name</label>
                <input
                  className="w-full px-4 py-3 border rounded-md text-black border-gray-400 bg-white"
                  placeholder="First Name"
                />
              </div>

              <div>
                <label className="block font-bold text-black">Last Name</label>
                <input
                  className="w-full px-4 py-3 border rounded-md text-black border-gray-400 bg-white"
                  placeholder="Last Name"
                />
              </div>

              <div>
                <label className="block font-bold text-black">UserName</label>
                <input
                  className="w-full px-4 py-3 border rounded-md text-black border-black bg-white"
                  placeholder="UserName"
                />
              </div>

              <div>
                <label className="block font-bold text-black">Email</label>
                <input
                  className="w-full px-4 py-3 border rounded-md text-black border-gray-400 bg-white"
                  placeholder="Email"
                />
              </div>

              <div>
                <label className="block font-bold text-black">Phone Number</label>
                <input
                  className="w-full px-4 py-3 border rounded-md text-black border-gray-400 bg-white"
                  placeholder="Phone Number"
                />
              </div>

              <div>
                <label className="block font-bold text-black">Gender</label>
                <select className="w-full px-4 py-3 border rounded-md text-black border-gray-400 bg-white">
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-black">Location</label>
                <select className="w-full px-4 py-3 border rounded-md text-black border-gray-400 bg-white">
                  <option>Select Location</option>
                  <option>Lagos</option>
                  <option>Abuja</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-black">Birth Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border rounded-md text-black border-gray-400 bg-white"
                  placeholder="Birth Date"
                />
              </div>

              <div className="col-span-2">
                <label className="block font-bold text-black">Bio</label>
                <textarea
                  className="w-full border rounded-md text-black border-gray-400 bg-white p-2"
                  placeholder="Something About Me..."
                  rows="3"
                />
              </div>

              <button className="col-span-2 bg-[#3566A0] text-white p-2 rounded hover:bg-blue-600">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileEdit;
