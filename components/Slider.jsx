'use client'

import Image from "next/image"
import img1 from '@/assets/img1.png'
import SearchCity from "@/components/SearchCity"
import React from "react"

export default function HeroSection() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white max-w-2xl mx-auto">
        <p className="text-[#66d3c2] pb-1 text-sm md:text-base">Top Story</p>

        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Never go through life alone. Your voice still matters.
        </h1>

        <p className="mt-4 text-base md:text-lg font-light text-white/90">
          Find comfort, friendship, and connection. Over 5,000 members are finding joy again through the community. You can too!
        </p>

        {/* Stacked column for button and search input */}
        <div className=" flex flex-col gap-4 w-full max-w-sm">
          <SearchCity />
          <button className="w-[400px] h-[60px] px-6 py-2 bg-[#166F64] text-white rounded-[12px] font-medium">
            Call A Friend &rarr;
          </button>

        </div>
      </div>
    </div>
  )
}
