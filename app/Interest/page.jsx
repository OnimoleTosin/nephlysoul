'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const interestData = {
  'Popular Interests': [
    'Social', 'New in town', 'Faith', 'Networking', 'Outdoors', 'Make New Friends',
    'New Tech', 'Fitness', 'Volunteering', 'Self-Care', 'Art', 'Gaming'
  ],
  'Social Activities': [
    'Picnics', 'Dance', 'Game Nights', 'Movies', 'Foodies', 'Barbecue', 'Potlucks',
    'Bowling', 'Trivia', 'Concerts'
  ],
  Spirituality: [
    'Meditation', 'Prayer Groups', 'Faith Talks', 'Fellowship', 'Bible Study',
    'Islamic Study', 'Mindfulness', 'Inner Peace'
  ],
  'Travel & Outdoor': [
    'Hiking', 'Road Trips', 'Beach Days', 'Camping', 'Backpacking',
    'Local Exploration', 'Adventure Sports', 'Eco Tours'
  ],
  Technology: [
    'AI', 'Web Development', 'Startups', 'Product Design', 'Mobile Apps',
    'Gaming Tech', 'Coding Bootcamps', 'Crypto'
  ],
  Lifestyle: [
    'Minimalism', 'Fashion', 'Skincare', 'Fitness Routines', 'Home Decor',
    'Journaling', 'Productivity'
  ],
};

export default function InterestsPage() {
  const router = useRouter();
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const navigate = () => {
    router.push('/Groupie');
  };

  const filteredInterests = () => {
    const results = [];

    Object.entries(interestData).forEach(([section, tags]) => {
      const matched = tags.filter((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const unmatched = tags.filter(
        (tag) => !tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
      results.push({ section, tags: [...matched, ...unmatched] });
    });

    return results;
  };

  return (
    <>
      <div className="p-4 px-[40px] shadow-md bg-[#FAFAFA] font-sans">
        <div className="flex  items-center space-x-2">
          <div className="w-[48px] h-[48px] bg-black rounded-full "></div>
          <div className="h-[12px] w-[108px] bg-black rounded-[8px] "></div>
        </div>
      </div>

     <div className="min-h-screen flex flex-col justify-between bg-blue-50 px-4 py-8">
  <div className="w-full max-w-3xl mx-auto rounded-lg p-6 font-sans">
    <p className="text-right text-sm text-gray-500 mb-2">Step 2/3</p>

    <h2 className="text-[25px] font-bold text-center mb-2 text-[#645674]">
      Pick A Few Interests
    </h2>

    <p className="text-center text-[#333333] text-sm mb-6">
      These aid in group recommendations and future events.<br />
      Choose a minimum of <span className="font-semibold">three</span> interests.
    </p>

    <input
      type="text"
      placeholder="Search by keywords"
      className="w-full px-4 py-3 border mb-10 rounded-[8px] text-black border-[#A1A1A1] bg-white"
    />

    {/* Tag Section */}
    <div className="space-y-6 mb-28">
      {Object.entries(interestData).map(([section, tags]) => (
        <div key={section}>
          <h3 className="text-[20px] font-bold text-black mb-2">{section}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              const isSelected = selected.some(
                (item) => item.section === section && item.tag === tag
              );
              return (
                <button
                  key={`${section}-${tag}`}
                  onClick={() => toggleTag(section, tag)}
                  className={`px-3 py-1 text-md rounded-[6px] border transition ${
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
  </div>

  {/* Fixed Bottom Button */}
  <div className="fixed bottom-0 left-0 w-full bg-white shadow-md px-4 py-4">
    <div className="max-w-3xl mx-auto">
      <button
        disabled={selected.length < 3}
        onClick={navigate}
        className={`w-full py-3 rounded-lg text-white font-medium transition ${
          selected.length >= 3
            ? 'bg-[#3566A0]'
            : 'bg-[#ACCCF2] cursor-not-allowed'
        }`}
      >
        Continue
      </button>
    </div>
  </div>
</div>

    </>
  );
}
