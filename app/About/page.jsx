'use client';

import React from 'react';
import Image from 'next/image';
import About from '@/assets/about.png';
import Navbar from '@/components/Navbar';
import Pro from "@/assets/profile.png";
import Pm from "@/assets/pm.png";
import Guy from "@/assets/datguy.jpeg";
import sarah from "@/assets/Sarah.jpg";
import Sof from "@/assets/sofiyah.jpeg";
import Babs from "@/assets/des.jpeg";
import Profile from "@/assets/profile1.png";
import Footer from '@/components/Footer';
import NewsLetter from '@/components/NewsLetter';

const teamMembers = [
  { name: "Sarah", role: "Head Of Product", img: sarah},
  { name: "Boluwatiwi", role: "Product Manager", img: Pm },
  { name: "Onimole Sodiq Oluwatosin", role: "Software Developer", img: Profile },
  { name: "Sofiyyah", role: "Product Manager", img: Sof },
  { name: "Adeyanju Sunday", role: "Software Developer", img: Guy },
  { name: "Babatunde", role: "UI/UX Designer", img: Babs },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] font-sans">
        <Image
          src={About}
          alt="Background"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            About NephlySoul
          </h1>
          <p className="max-w-2xl text-sm md:text-lg text-white/90">
            We believe that meaningful conversations can brighten days and build lasting bonds. 
            Our platform helps people find friends, join discussions, and access resources — 
            all aimed at reducing loneliness and fostering joy in every stage of life.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {/* About Us */}
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">About Us</h1>
        </div>

        {[
          {
            title: "Our Story",
            text: "NephlySoul is born from a deep recognition of the emotional and spiritual isolation that many elders face today. It was created as a soulful sanctuary where meaningful conversations happen, prayers are shared, and no one feels alone. What began as a heartfelt response has now grown into a dedicated digital space where every elder feels seen, heard, and spiritually embraced."
          },
          {
            title: "Our Vision",
            text: "To become the most trusted, joyful, and spiritually enriching online sanctuary for adults aged 50 and above, where loneliness ends, connection begins, and every elder feels celebrated."
          },
          {
            title: "Our Mission",
            text: "To build a heart-centered digital platform that supports adults aged 50 and above, especially widows and those aging alone, through companionship, prayer, scripture, and storytelling."
          },
          {
            title: "Join The Journey",
            text: "We’re so glad you found us. Whether you're here to pray, reflect, share, or simply listen, we hope NephlySoul brings light and warmth to your day. Explore, connect, and remember: you're never alone here."
          }
        ].map((section, idx) => (
          <section key={idx}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-700">
              {section.title}
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {section.text}
            </p>
          </section>
        ))}

        {/* Meet the Team */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 text-center">
            Meet the Team
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            We’re a diverse team of compassionate creators, spiritual guides, and community builders, 
            united by one goal: to make older adults feel valued, connected, and spiritually nourished.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-items-center">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="text-center max-w-xs">
                <Image
                  src={member.img}
                  alt={member.name}
                   className="w-[150px] h-[150px] object-cover rounded-full mb-4 mx-auto"
                />
                <h3 className="text-lg font-bold text-black">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <NewsLetter />
      <Footer />
    </>
  );
}
