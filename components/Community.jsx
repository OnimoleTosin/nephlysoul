import React from "react";
import Image from 'next/image';

export default function Community() {
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

      
    </>
  );
}
