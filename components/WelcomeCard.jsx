'use client';

import React from 'react';
import Image from 'next/image';

export default function WelcomeCard() {
  return (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-full">      
        {/* 🎉 Corner Confetti Decorations */}
      <Image src="/assets/confety.png" alt="" width={64} height={64} className="absolute top-0 left-0" />
      <Image src="/assets/confety.png" alt="" width={64} height={64} className="absolute top-0 right-0" />
      <Image src="/assets/confety.png" alt="" width={64} height={64} className="absolute bottom-0 left-0" />
      <Image src="/assets/confety.png" alt="" width={64} height={64} className="absolute bottom-0 right-0" />

      {/* 🚀 Card */}
      <div className="bg-white p-10 rounded-lg shadow-lg text-center relative">
        {/* 💥 Animated Box */}
        <div className="w-40 h-40 border-2 border-blue-500 mx-auto mb-4 relative overflow-hidden">
          {/* Confetti Animation Layer */}
          <style jsx>{`
            @keyframes confetti1 {
              0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
              }
              100% {
                transform: translateY(150px) rotate(360deg);
                opacity: 0;
              }
            }
            @keyframes confetti2 {
              0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
              }
              100% {
                transform: translateY(140px) rotate(-360deg);
                opacity: 0;
              }
            }
          `}</style>

          {/* Floating Confetti Images */}
          <Image
            src="/assets/confeti.png"
            alt="confetti1"
            width={20}
            height={20}
            className="absolute top-0 left-4"
            style={{
              animation: 'confetti1 3s ease-in-out infinite',
            }}
          />
          <Image
            src="/assets/confeti.png"
            alt="confetti2"
            width={20}
            height={20}
            className="absolute top-0 right-4"
            style={{
              animation: 'confetti2 4s ease-in-out infinite',
            }}
          />
        </div>

        {/* 👋 Welcome Text */}
        <h2 className="text-xl font-semibold">Welcome on board!</h2>
        <p className="text-sm text-gray-600 mb-4">
          Ready to meet and connect with friends of like minds?
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Let’s go!
        </button>
      </div>
      </div>
    </div>
  );
}
