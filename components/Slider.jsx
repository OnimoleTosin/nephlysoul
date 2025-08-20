'use client';

import Image from 'next/image';
import img1 from '@/assets/img1.png';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  const handleFriends = () => {
    router.push("/FindFriends");
  };

  return (
    <section className="relative w-full h-[500px] md:h-[650px] overflow-hidden font-sans">
      {/* Background image */}
      <Image
        src={img1}
        alt="Background"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 md:px-12 text-center">
        <div className="max-w-3xl space-y-5">
          {/* Heading */}
          <h1 className="text-[30px] sm:text-[42px] md:text-[52px] lg:text-[60px] font-extrabold leading-tight tracking-tight">
            Never go through life alone. <br className="hidden sm:block" />
            Your voice still matters.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
            Find comfort, friendship, and connection.  
            Over <span className="font-semibold">5,000 members</span> are rediscovering joy through the community.  
            You can too.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <button
              onClick={handleFriends}
              className="w-[200px] h-[52px] bg-[#3566A0] hover:bg-[#2a4f7d] text-white rounded-xl font-semibold shadow-md transition-all duration-300 ease-in-out"
            >
              Call a Friend →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
