'use client';

import React, { useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaCheck, FaCheckCircle } from 'react-icons/fa';
import { groups } from '@/Data/Dummydata';

export default function Groupie() {
  const [joinedGroups, setJoinedGroups] = useState([]);
  const [showWelcome, setShowWelcome] = useState(false);
  const router = useRouter();

  const handleJoin = (index) => {
    if (!joinedGroups.includes(index)) {
      setJoinedGroups((prev) => [...prev, index]);
    }
  };

  const handleSeeMore = () => {
    setShowWelcome(true);
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-blue-50 pb-10 font-sans">
      {/* Top Bar */}
      <div className="p-4 px-6 md:px-[40px] shadow-md bg-[#FAFAFA]">
        <div className="flex items-center space-x-2">
          <div className="w-[48px] h-[48px] bg-black rounded-full" />
          <div className="h-[12px] w-[108px] bg-black rounded-[8px]" />
        </div>
      </div>

      {/* Main Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-[#645674] mb-3">Popular Groups To Join</h2>
          <p className="text-[#333333] md:text-lg font-semibold max-w-2xl mx-auto">
            Curated reflections on faith, connection, healing, and hope, written to gently meet you where you are. Stories that speak softly. Words that hold you close.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {groups.map((group, index) => {
            const isJoined = joinedGroups.includes(index);

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              >
               <div className="flex justify-center mb-4">
                             <Image
                               src={group.image}
                               alt={group.name}
                               className="rounded-full object-cover w-25 h-25 transition-transform duration-300 hover:scale-102"
                             />
                           </div>

                <h3 className="text-black font-semibold text-md mb-1">{group.name}</h3>
                <p className="text-[#333333] text-sm mb-2">{group.members} members</p>

                <div className="flex justify-center items-center -space-x-2 mb-4">
                  {[1, 2, 3].map((i) => (
                    <Image
                      key={i}
                      src={`/assets/groups/${i}.png`}
                      alt={`friend ${i}`}
                      width={20}
                      height={20}
                      className="rounded-full border-2 border-white w-5 h-5"
                    />
                  ))}
                  <p className="text-xs text-gray-500 ml-3">20 friends are members</p>
                </div>

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

        {/* See More */}
        <div className="text-center mt-10">
          <button
            onClick={handleSeeMore}
            className="bg-[#3566A0] text-white px-6 py-2 rounded hover:bg-blue-700 transition-transform duration-300 hover:scale-102"
          >
            Continue &rarr;
          </button>
        </div>
      </section>

      {/* Welcome Modal */}
      {showWelcome && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-sm relative">
            <div className="w-40 h-40 mx-auto mb-4 relative overflow-hidden border border-black" >
              {/* <Image
                src="/assets/confeti.png"
                alt="confetti1"
                width={20}
                height={20}
                className="absolute top-0 left-4 animate-bounce"
              /> */}
              {/* <Image
                src="/assets/confeti.png"
                alt="confetti2"
                width={20}
                height={20}
                className="absolute top-0 right-4 animate-ping"
              /> */}
            </div>

            <h2 className="text-xl font-bold text-black">Welcome on board!</h2>
            <p className="text-sm text-black mt-1">
              Ready to meet and connect with friends of like minds?
            </p>
            <button className="bg-[#3566A0] text-white px-6 py-2 mt-4 rounded hover:bg-blue-700">
              Let's Go
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
