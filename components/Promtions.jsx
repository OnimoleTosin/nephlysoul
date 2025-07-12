'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Promotion1 from '@/assets/OpeningSoon.png';
import Promotion2 from '@/assets/Promo2.png';
import Promotion3 from '@/assets/Promo3.png';

const images = [Promotion1, Promotion2, Promotion3];

export default function Promotions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <section className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={img}
            alt={`Promotion ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </section>
  );
}
