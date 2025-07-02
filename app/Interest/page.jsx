'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const interestData = {
  'Popular Interests': ['Social', 'New in town', 'Faith', 'Social Networking', 'Outdoors', 'Make New Friends', 'New Tech', 'Fitness'],
  'Social Activities': ['Social', 'New in town', 'Faith', 'Social Networking', 'Outdoors', 'Make New Friends', 'New Tech', 'Fitness'],
  Spirituality: ['Social', 'New in town', 'Faith', 'Social Networking', 'Outdoors', 'Make New Friends', 'New Tech', 'Fitness'],
  'Travel & Outdoor': ['Social', 'New in town', 'Faith', 'Social Networking', 'Outdoors', 'Make New Friends', 'New Tech', 'Fitness'],
};

export default function InterestsPage() {
  const router = useRouter();

  // 🟦 Now tracks array of { section, tag }
  const [selected, setSelected] = useState([]);

  const navigate = () => {
    router.push('/Groupie');
  };

  // 🛠 Updated toggleTag to use section
  const toggleTag = (section, tag) => {
    const tagObj = { section, tag };
    const isAlreadySelected = selected.some(
      (item) => item.section === section && item.tag === tag
    );

    setSelected((prev) =>
      isAlreadySelected
        ? prev.filter(
            (item) => !(item.section === section && item.tag === tag)
          )
        : [...prev, tagObj]
    );
  };

  return (
    <>
      <div className="p-4 px-[40px] shadow-md bg-[#FAFAFA] font-sans">
        <div className="flex  items-center space-x-2">
          <div className="w-[48px] h-[48px] bg-black rounded-full "></div>
          <div className="h-[12px] w-[108px] bg-black rounded-[8px] "></div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 py-8">
        <div className="w-full max-w-3xl rounded-lg p-6 relative">
          <p className="absolute top-4 right-6 text-sm text-gray-500">Step 2/3</p>

          <h2 className="text-[25px] font-bold text-center mb-2 text-[#645674]">Pick A Few Interests</h2>
          <p className="text-center text-[#333333] text-sm mb-6">
            These aid in group recommendations and future events.<br />
            Choose a minimum of <span className="font-semibold">three</span> interests.
          </p>

          <input
            type="text"
            placeholder="Search by keywords"
            className="w-full px-4 py-3 border mb-10 rounded-[8px] text-black border-[#A1A1A1] bg-white"
          />

          <div className="">
            {Object.entries(interestData).map(([section, tags]) => (
              <div key={section}>
                <h3 className="text-[20px] font-bold text-black  ">{section}</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => {
                    const isSelected = selected.some(
                      (item) => item.section === section && item.tag === tag
                    );
                    return (
                      <button
                        key={`${section}-${tag}`}
                        onClick={() => toggleTag(section, tag)}
                        className={`px-3 py-1 text-md rounded-[6px] mb-3 border transition ${
                          isSelected
                            ? 'bg-[#3566A0] text-white'
                            : 'bg-white text-black'
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <button
            disabled={selected.length < 3}
            className={`w-full mt-8 py-2 rounded-[8px] text-white transition ${
              selected.length >= 3
                ? 'bg-[#3566A0]'
                : 'bg-[#ACCCF2] cursor-not-allowed'
            }`}
            onClick={navigate}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
