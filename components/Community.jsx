'use client';

import Image from 'next/image';
import React from 'react';

export default function Commmunity() {
  return (
    <div className="relative w-full bg-[#3A3244] text-white px-4 py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative z-10">
        
        {/* Left Text */}
        <div className="flex-1 z-10 w-[300px]">
          <h1 className="text-[30px] md:text-4xl font-bold">
            Every Journey Deserves Company.<br />
            A Place To Be Heard and Held
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            With <span className="font-semibold text-white">SoulCircle</span>, connection is just a gentle step<br/> away, a familiar voice, a shared prayer, or<br/> someone to listen to.<br />
            This is a space where hearts meet, faith is shared,<br/> and every soul feels seen.
          </p>
          <button className="bg-[#3566A0] hover:bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300">
            Call a friend &rarr;
          </button>
        </div>

        {/* Right Side Image Group */}
        <div className="flex-1 relative w-full max-w-md aspect-square">
          {/* Circle 2 - Top Right (under) */}
          <div className="absolute top-[-200px] right-[-200px] w-full h-full rounded-full overflow-hidden border-4 border-white z-0 shadow-md">
            <Image
              src="/assets/circleup.png" // Replace with your top-right image
              alt="Circle 2"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Circle 3 - Bottom Right (under) */}
          <div className="absolute bottom-[-200px] right-[-200px] w-full h-full rounded-full overflow-hidden border-4 border-white z-0 shadow-md">
            <Image
              src="/assets/circle.png" // Replace with your bottom-right image
              alt="Circle 3"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Circle 1 - Main (on top) */}
          <div className="relative w-full h-full left-[-100px] rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
            <Image
              src="/assets/Circle1.png" // Replace with your main image
              alt="Main Circle"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
