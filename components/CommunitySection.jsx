import React from "react";
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import { groups } from '@/Data/Dummydata';

export default function CommunitySection() {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">Every Journey Deserves Company.<br />A Place To Be Heard and Held</h2>
            <p>
              With SoulCircle, connection is just a gentle step away—a familiar voice, a shared prayer, or someone to listen to.
            </p>
            <p>This is a space where hearts meet, faith is shared, and every soul feels seen.</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Call a Friend</button>
          </div>

          {/* Images */}
          <div className="md:w-1/2 relative flex items-center justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden ring-4 ring-white relative">
              <Image src="/assets/article1.png" alt="Group" fill className="object-contain object-center"
              />
            </div>

            <div className="absolute top-0 right-0 w-24 h-24 rounded-full overflow-hidden ring-2 ring-white translate-x-6 -translate-y-4 relative">
              <Image  src="/assets/article2.jpg" alt="Smiling Couple" fill className="object-contain object-center"
              />
            </div>

            <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full overflow-hidden ring-2 ring-white translate-x-6 translate-y-6 relative">
              <Image src="/assets/article3.jpg"  alt="Elderly Conversation" fill className="object-contain object-center"
              />
            </div>
          </div>

        </div>
      </section>

      <section className="text-center px-4 md:px-32 py-8 bg-[#FAFAFA]">
        <h2 className="text-2xl font-bold mb-2 text-[#645674]">Popular Groups To Join</h2>
        <p className="text-[#333333] mb-10 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semper
          pellentesque ut. Nam sed non nullam nisl non pulvinar.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={group.image}
                  alt={group.name}
                  width={50}
                  height={70}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-md mb-1">{group.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{group.members} members</p>

              <div className="flex justify-center -space-x-2 mb-2">
                {[1, 2, 3].map((i) => (
                  <Image
                    key={i}
                    src={`/assets/groups/${i}.png`}
                    alt="friend"
                    width={24}
                    height={24}
                    className="rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500 mb-4">20 friends are members</p>

              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700">
                Join
              </button>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          See more groups &rarr;
        </button>
      </section>
    </>
  );
}
