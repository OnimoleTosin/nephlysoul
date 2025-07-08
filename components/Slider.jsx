'use client';

import Image from 'next/image';
import img1 from '@/assets/img1.png';
import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden font-sans">
      {/* Background Image */}
      <Image
        src={img1}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 md:px-8 text-center">
        {/* Text block */}
        <div className="max-w-3xl w-full space-y-4">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-tight">
            Never go through life alone. Your voice still matters.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90">
            Find comfort, friendship, and connection. Over 5,000 members are finding joy again through the community. You can too!
          </p>
        </div>

        {/* Button block */}
        <div className="mt-6">
          <button className="w-[180px] h-[48px] px-6 py-2 bg-[#3566A0] text-white rounded-[8px] font-medium hover:bg-blue-700 transition">
            Call a Friend →
          </button>
        </div>
      </div>
    </div>
  );
}
