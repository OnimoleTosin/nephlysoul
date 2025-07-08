'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaArrowAltCircleRight, FaArrowCircleLeft, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '@/Data/Dummydata';

export default function Testimony() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="px-4 sm:px-1 md:px-12 lg:px-20 xl:px-32  bg-[#EDF4FC] py-20 font-sans">
      <div className="text-center mb-10">

        <h2 className="text-2xl sm:text-3xl font-bold text-[#645674] mb-4">What People Are Saying</h2>
        <p className="text-[#333333] text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto">Real voices, honest hearts, gentle echoes of healing, hope, and togetherness.
          See what our community members are saying.
        </p>
      </div>
      <div className="flex flex-col items-center max-w-3xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src={testimonials[current].image}
            alt={testimonials[current].name}
            // width={300}
            // height={300}
            className=" object-cover w-[200px] h-[200px]"
          />
          <div className="text-left">
            <FaQuoteLeft className="text-[50px] text-[#3566A0] mb-3" />
            <p className="text-gray-600 text-[15px] leading-relaxed mb-4">
              {testimonials[current].message}
            </p>
            <p className="font-bold text-lg text-black">{testimonials[current].name}</p>
            <p className="text-sm text-gray-500">{testimonials[current].title}</p>
          </div>
        </div>

        <div className="flex gap-2 mt-8">
          <FaArrowCircleLeft className='text-[30px] text-black' />
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full ${current === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
            />
          ))}
          <FaArrowAltCircleRight className='text-[30px] text-black'/>
        </div>
      </div>
    </section>

  );
}
