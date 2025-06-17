'use client';

import { useState } from 'react';
import Image from 'next/image';
import Testimony from "@/assets/testimony.png"
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO',
    image: Testimony,
    message:
      'Lorem ipsum dolor sit amet consectetur. Urna pharetra pharetra nam vehicula vestibulum vestibulum arcu ac. Quis molestie sed turpis et gravida bibendum sit. Purus rhoncus sit dui maecenas lobortis et pulvinar suspendisse.',
  },
  {
    id: 2,
    name: 'Grace O.',
    title: 'Community Lead',
    image: Testimony,
    message:
      'This platform helped me connect with people I never thought I’d meet. The devotionals are inspiring and the interface is easy to use.',
  },
  {
    id: 3,
    name: 'Daniel K.',
    title: 'Youth Pastor',
    image: Testimony,
    message:
      'Everything is streamlined and spirit-filled. Being able to connect with like-minded people daily is a blessing!',
  },
];

export default function TestimonialPagee() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-white py-20 text-center">
      <h2 className="text-2xl font-bold mb-2">What People Are Saying</h2>
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

        {/* Bullets */}
        <div className="flex gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full ${
                current === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
