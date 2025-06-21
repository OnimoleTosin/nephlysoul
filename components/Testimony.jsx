'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '@/Data/Dummydata';

export default function Testimony() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-[#EDF4FC] py-20 text-center">
      <h2 className="text-2xl font-bold mb-2 text-[#645674]">What People Are Saying</h2>
      <p className="text-gray-500 mb-10 max-w-xl mx-auto">
        Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semper pellentesque ut.
        Nam sed non nullam nisl non pulvinar.
      </p>

      <div className="flex flex-col items-center max-w-3xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src={testimonials[current].image}
            alt={testimonials[current].name}
            width={120}
            height={120}
            className="rounded-xl object-cover"
          />
          <div className="text-left">
            <FaQuoteLeft className="text-2xl text-blue-600 mb-3" />
            <p className="text-gray-600 leading-relaxed mb-4">
              {testimonials[current].message}
            </p>
            <p className="font-semibold">{testimonials[current].name}</p>
            <p className="text-sm text-gray-500">{testimonials[current].title}</p>
          </div>
        </div>

        <div className="flex gap-2 mt-8">
          <FaArrowRight className='text-black' />
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full ${current === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>
      </div>
      < div className="bg-cover bg-center text-white py-20 px-4" style={{ backgroundImage: `url('/assets/newsletter.png')` }
      }>
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">Newsletter</h1>
          <p className="mb-6 text-lg text-black">Fill the form below to connect with a friend just near you and talk.</p>
          <form className="flex flex-col md:flex-row gap-[19px] w-full max-w-[597px] mx-auto">
            <input
              type="email"
              required
              placeholder="Email Address"
              className="bg-white text-black border-2 border-black rounded-[12px] px-4 py-3 w-full md:w-[400px]"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#3566A0] hover:bg-blue-600 text-white text-base px-6 py-3 rounded-lg transition "
            >
              Subscribe <FaArrowRight className="text-lg" />
            </button>
          </form>

        </div>
      </div >

    </section>

  );
}
