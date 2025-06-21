"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img1 from '@/assets/img1.png';

export default function Slider() {
  const sliderData = [
    {
      id: 1,
      title: "Breaking: Election Results Update – Close Race in Major States",
      offer: "Top Story",
      buttonText1: "Read More",
      buttonText2: "View All Headlines",
      imgSrc: img1,
    },
    {
      id: 2,
      title: "Global Markets React to Interest Rate Changes",
      offer: "Business News",
      buttonText1: "Explore",
      buttonText2: "Market Trends",
      imgSrc: img1,
    },
    {
      id: 3,
      title: "New Health Guidelines Released Amid Rising Flu Cases",
      offer: "Health",
      buttonText1: "Learn More",
      buttonText2: "Stay Updated",
      imgSrc: img1,
    },
  ];

  const boxSection = [
    { id: 2, text: "Protecting Animals and Nature in Adventure Travel" },
    { id: 3, text: "Guides are the Storytellers of Destinations" },
    { id: 4, text: "Together to Promote Sustainable Development" },
    { id: 5, text: "Empowers Adventure Operators in Kyrgyzstan" },
  ];

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
              <p className="text-[#166F64] pb-1">{slide.offer}</p>
              <h1 className="max-w-lg md:text-[40px] text-2xl font-semibold">
                {slide.title}
              </h1>
              <div className="flex items-center mt-4">
                <button className="px-7 py-2 bg-[#166F64] text-white rounded-full font-medium">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 px-6 py-2 font-medium">
                  {slide.buttonText2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${currentSlide === index ? "bg-[#166F64]" : "bg-gray-500/30"}`}
          ></div>
        ))}
      </div>

      {/* Info Pills Section */}
      {/* <div className="flex flex-wrap justify-center gap-4 mt-8 px-4 md:px-0">
        {boxSection.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 px-4 py-2 bg-white/10 text-white rounded-full backdrop-blur-md border border-white/20"
          >
            <div className="w-6 h-6 flex items-center justify-center text-sm font-bold bg-white/30 text-white rounded-full">
              {item.id}
            </div>
            <p className="text-sm">{item.text}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}
