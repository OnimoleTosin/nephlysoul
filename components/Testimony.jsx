"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { testimonials } from "@/Data/Dummydata";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function Testimony() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="px-4 sm:px-1 md:px-12 lg:px-20 xl:px-32 bg-[#EDF4FC] py-20 font-sans">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#645674] mb-4">
          What People Are Saying
        </h2>
        <p className="text-[#333333] text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto">
          Real voices, honest hearts, gentle echoes of healing, hope, and
          togetherness. See what our community members are saying.
        </p>
      </div>

      <div className="flex flex-col items-center max-w-3xl mx-auto px-4">
        {/* Fixed height wrapper */}
        <div className="bg-[#EDF4FC] flex flex-col md:flex-row items-center gap-6 w-full max-w-2xl h-[320px] md:h-[260px] overflow-hidden p-6">
          <Image
            src={testimonials[current].image}
            alt={testimonials[current].name}
            width={200}
            height={200}
            className="object-cover w-[200px] h-[200px] rounded-lg"
          />

          <div className="bg-[#EDF4FC] text-left flex flex-col justify-center flex-1">
            <FaQuoteLeft className="text-[40px] text-[#3566A0] mb-3" />
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4 line-clamp-4">
              {testimonials[current].message}
            </p>
            <p className="font-bold text-lg text-black">
              {testimonials[current].name}
            </p>
            <p className="text-sm text-gray-500">
              {testimonials[current].title}
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {/* Left Arrow */}
          <IoIosArrowDropleft
            onClick={() =>
              setCurrent((prev) =>
                prev === 0 ? testimonials.length - 1 : prev - 1
              )
            }
            className="text-[40px] text-black cursor-pointer hover:text-blue-600 transition"
          />

          {/* Dots */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition-all duration-200 ${current === index
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300"
                  }`}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <IoIosArrowDropright
            onClick={() =>
              setCurrent((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
              )
            }
            className="text-[40px] text-black cursor-pointer hover:text-blue-600 transition"
          />
        </div>

      </div>
    </section>
  );
}
