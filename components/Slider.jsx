'use client'

import Image from "next/image"
import img1 from '@/assets/img1.png'
import React from "react"
import { FaArrowRight, FaFastForward, FaGreaterThan } from "react-icons/fa"

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
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white gap-[56px]">
        {/* Text block */}
        <div className="gap-[16px] w-full max-w-3xl px-6">
          <h1 className="text-[56px] md:text-5xl font-bold">
            Never go through life alone. Your voice still matters.
          </h1>

          <p className="mt-4 text-base md:text-xl font-xl text-white/90">
            Find comfort, friendship, and connection. Over 5,000 members are finding joy again through the community. You can too!
          </p>
        </div>

        {/* Button block */}
        <div className="flex flex-col items-center gap-4 w-full max-w-sm text-center">
          <button className="w-[179px] h-[48px] px-6 py-2 bg-[#3566A0] text-white rounded-[8px] font-medium hover:bg-blue-700">
            Call A friend &rarr; 
            {/* <FaGreaterThan/> */}
          </button>
        </div>
      </div>
    </div>
  )
}
