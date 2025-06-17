'use client';
import Quotebg from "@/assets/Quotebg.jpg"
import { useEffect, useState } from 'react';

const sliderData = [
  {
    quote: 'Even in days when things are not working well. Always stay positive!',
    verse: 'Romans 8:28 NLT',
    imgSrc: Quotebg,
    text: 'And we know that God causes everything to work together for the good of those who love God and are called according to his purpose for them.',
  },
  {
    quote: 'Let your faith be bigger than your fear.',
    verse: 'Proverbs 3:5',
    imgSrc: Quotebg,
    text: 'Trust in the Lord with all your heart and lean not on your own understanding.',
  },
  {
    quote: 'Your current situation is not your final destination.',
    verse: 'Jeremiah 29:11',
    imgSrc: Quotebg,
    text: 'For I know the plans I have for you, declares the Lord...',
  },
];

export default function QuoteCarousel() {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      {/* Slider Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderData.map((slide) => (
          <div
            key={slide.id}
            className="relative flex items-center justify-center min-w-full h-[400px] md:h-[500px] bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${slide.imgSrc.src})` }}
          >
            <div className="md:pl-8 mt-10 md:mt-0">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Quote Of The Day</h2>
              <p className="italic mb-6 text-lg max-w-xl mx-auto">{slide.quote}</p>
              <h3 className="text-xl font-semibold mb-1">Verse Of The Day</h3>
              <h1 className="text-sm font-bold mb-1">{slide.verse}</h1>
              <p className="text-sm max-w-2xl mx-auto"> {slide.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex items-center justify-center gap-2 mt-4">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${currentSlide === index ? "bg-[#166F64]" : "bg-gray-500/30"}`}
          ></div>
        ))}
      </div> */}
    </div>
  );
}
