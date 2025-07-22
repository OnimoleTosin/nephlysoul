'use client';
import { useState } from 'react';
import Image from "next/image"
import Quotebg from "@/assets/Quotebg.jpg";


export default function Quotes() {

  return (
    <div>
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden font-sans">
        <Image
          src={Quotebg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white gap-[56px]">
          {/* Text block */}
          <div className="gap-[16px] w-full max-w-3xl px-6">
            <h1 className="text-[24px] font-bold"> Quote Of The Day</h1>
            <p className="mt-4 text-base md:text-xl font-xl text-white/90"> “Even in days when things are not working well. Always stay positive!.” </p>
          </div>
          <div className="gap-[14px] w-full max-w-3xl px-6">
            <h1 className="text-[24px] font-bold">Verse Of The Day</h1>
            <p className="mt-4 text-base md:text-xl font-xl text-white/90"> Romans 8:28 NLT </p>
            <p className="mt-4 text-base md:text-xl font-xl text-white/90"> And we know that God causes everything to work together for the good of those who love God and are called according to his purpose for them. </p>
          </div>
        </div>
      </div>


      {/* Promotions Section */}

      {/* <section className="bg-gradient-to-br from-[#8C766A] to-[#5B4F6A] text-white py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            For Promotions
          </h2>
        </div> */}

        {/* Slider indicators */}
        {/* <div className="flex items-center justify-center gap-2 mt-4">
          {sliderData.map((_, index) => (
            <div
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                currentSlide === index ? "bg-[#FAFAFA]" : "bg-gray-500/30"
              }`}
            ></div>
          ))}
        </div> */}
      {/* </section> */}
    </div>
  );
}
