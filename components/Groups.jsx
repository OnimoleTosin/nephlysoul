'use client';

import React, { useState } from "react";
import Image from 'next/image';
import { groups } from '@/Data/Dummydata';
import { FaCheckCircle } from "react-icons/fa";

export default function Groups() {
  const [joinedGroups, setJoinedGroups] = useState([]);
  const [showAll, setShowAll] = useState(false); // 🔥 control to show more or less

  const handleJoin = (index) => {
    setJoinedGroups((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const visibleGroups = showAll ? groups : groups.slice(0, 6); // 🔥 limit to 6 or show all

  return (
    <section className="text-center px-4 md:px-32 py-8 bg-[#FAFAFA]">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2 text-[#645674]">Popular Groups To Join</h2>
        <p className="text-[#333333] md:text-lg font-semibold max-w-2xl mx-auto mb-10">
          Curated reflections on faith, connection, healing, and hope, written to gently meet you where you are. Stories that speak softly. Words that hold you close.
        </p>
      </div>

      {/* Groups Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleGroups.map((group, index) => {
          const isJoined = joinedGroups.includes(index);

          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-xl transition-transform duration-300 hover:scale-105"
            >
              {/* Group Avatar */}
            <div className="flex justify-center mb-4">
                <Image
                  src={group.image}
                  alt={group.name}
                  className="rounded-full object-cover w-25 h-25 transition-transform duration-300 hover:scale-102"
                />
              </div>

              {/* Group Info */}
              <h3 className="text-black font-semibold text-md mb-2">{group.name}</h3>
              <p className="text-[#333333] text-sm mb-2">{group.members} members</p>

              {/* Avatars + Friends */}
              <div className="flex justify-center items-center -space-x-2 mb-4 ">
                {[1, 2, 3].map((i) => (
                  <Image
                    key={i}
                    src={`/assets/groups/${i}.png`}
                    alt={`friend ${i}`}
                    width={20}
                    height={20}
                    className="rounded-full border-2 border-white w-5 h-5 transition-transform duration-300 hover:scale-110"
                  />
                ))}
                <p className="text-xs text-gray-500 ml-3">20 friends are members</p>
              </div>

              {/* Join Button */}
              <button
                onClick={() => handleJoin(index)}
                className={`text-white text-sm px-4 py-2 rounded transition-all duration-300 ${
                  isJoined ? 'bg-white' : 'bg-[#3566A0] hover:bg-blue-700'
                }`}
              >
                {isJoined ? <FaCheckCircle className="text-blue-700 text-[30px]" /> : 'Join →'}
              </button>
            </div>
          );
        })}
      </div>

      {/* See More Button */}
      <button
        onClick={() => setShowAll((prev) => !prev)}
        className="mt-10 bg-[#3566A0] text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        {showAll ? 'See less ←' : 'See more groups →'}
      </button>
    </section>
  );
}
