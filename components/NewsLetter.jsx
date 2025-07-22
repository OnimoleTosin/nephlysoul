'use client'
import React from "react"
import { FaArrowRight } from "react-icons/fa"
import Image from "next/image"
import News from "@/assets/newsletter.png"

export default function NewsLetter() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
      <Image
        src={News}
        alt="Newsletter Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4"> NewsLetter </h1>
        <p className="mb-6 text-lg">
          Stay Connected, Stay Encouraged. Subscribe to our newsletter today to get<br/> updates.
        </p>

        <form className="flex flex-col md:flex-row gap-4 w-full max-w-xl">
          <input
            type="email"
            required
            placeholder="Email Address"
            className="bg-white text-black rounded-[12px] px-4 py-3 w-full md:w-[400px]"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-[#3566A0] hover:bg-blue-600 text-white text-base px-6 py-3 rounded-lg transition"
          >
            Subscribe <FaArrowRight className="text-lg" />
          </button>
        </form>
      </div>
    </section>
  )
}