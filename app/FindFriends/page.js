"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import friendsbg from "@/assets/friendsbg.png";
import Footer from "@/components/Footer";
import { IoClose } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";

const friends = new Array(20).fill(null).map((_, index) => ({
  id: index,
  name: "John Doe",
  gender: index % 2 === 0 ? "Male" : "Female",
  age: index % 2 === 0 ? "62yrs" : "56yrs",
  avatarBg: index % 3 === 0 ? "bg-orange-200" : "bg-slate-800",
}));

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const handleFindFriend = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
    }, 1000);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        className="h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${friendsbg.src})` }}
      >
        <div className="text-center pt-[100px] px-4 md:pt-[166px]">
          <h3 className="text-3xl md:text-[56px] font-semibold text-white leading-tight">
            Find A Friend Near You.
          </h3>
          <p className="text-lg md:text-[28px] text-white max-w-2xl mx-auto mt-3">
            Fill the form below to connect with a friend just near you and talk.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:items-center gap-3 pt-10 pb-20 px-4">
          <input
            placeholder="Enter zip code, city, LG, state"
            className="w-full md:w-[300px] h-[48px] bg-[#FDFDFD] text-[#A1A1A1] rounded-[8px] pl-[16px] outline-none"
          />
          <button
            className="w-full md:w-[119px] h-[48px] bg-[#3566A0] text-[#FAFAFA] rounded-[8px]"
            onClick={handleFindFriend}
          >
            Find friend
          </button>
        </div>
      </div>

      {/* How It Works Section */}
      <section className="px-4 bg-white text-center mt-10 md:mt-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#645674] mb-2">
          How It Works?
        </h2>
        <p className="text-[black] max-w-xl mx-auto mb-10 text-base md:text-lg">
          Connecting with someone shouldn’t be complicated. Here’s how to find a
          friendly voice — in just 3 gentle steps.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 my-18">
          {[
            {
              step: 1,
              color: "#8C766A",
              text: "Type your ZIP code, city, LGA, or state. This helps us connect you with someone nearby who wants to make friends.",
            },
            {
              step: 2,
              color: "#4600A9",
              text: "We'll search our community for a warm, trusted person close to you — someone who is also willing to speak with a friend.",
            },
            {
              step: 3,
              color: "#AC6828",
              text: "Once found, you can give them a call. It's safe, simple, and built for companionship.",
            },
          ].map(({ step, color, text }) => (
            <div
              key={step}
              className={`border rounded-lg p-4 sm:p-6 shadow-sm relative w-full mx-auto transform transition-transform duration-300 hover:scale-105`}
              style={{ borderColor: color }}
            >
              <div
                className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold absolute -top-14 text-white"
                style={{ backgroundColor: color }}
              >
                {step}
              </div>
              <p className="mt-[60px] text-gray-700 text-sm sm:text-[18px]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Loader with Spinner Icon */}
      {loading && (
        <div className="fixed inset-0 flex flex-col items-center justify-center backdrop-blur-md bg-black/20 z-50">
          <FiLoader className="w-16 h-16 sm:w-20 sm:h-20 text-[white] animate-spin" />
          <p className="mt-2 text-sm text-[white]">50%...</p>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/20 z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-6xl h-[90vh] overflow-y-auto relative">
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                  <input
                    type="text"
                    placeholder="Enter zip code, city, LG, state"
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none text-sm lg:w-[300px] sm:w-[200px] text-[#A1A1A1]"
                  />
                  <button className="w-full sm:w-auto px-4 py-2 bg-[#3566A0] hover:bg-[blue] text-white text-sm rounded">
                    Search
                  </button>
                </div>
                <button
                  className="text-gray-600 hover:text-black text-xl self-end sm:self-auto"
                  onClick={closeModal}
                >
                  <IoClose size={24} />
                </button>
              </div>

              <h2 className="text-[#2F80ED] font-semibold mb-4 text-sm sm:text-base bg-[#EDF4FC] w-full p-2 rounded">
                120 friends found
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {friends.map((friend) => (
                  <div
                    key={friend.id}
                    className="bg-white border rounded-lg p-3 sm:p-4 text-center shadow-sm"
                  >
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center text-white font-semibold text-sm ${friend.avatarBg}`}
                    >
                      {friend.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <p className="mt-2 font-semibold text-gray-800 text-sm sm:text-base">
                      {friend.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {friend.gender}, {friend.age}
                    </p>
                    <button className="mt-3 w-8 h-8 mx-auto flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600">
                      <FaPhoneAlt size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Page;