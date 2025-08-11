'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import About from '@/assets/about.png';
import Navbar from '@/components/Navbar';
import Pro from "@/assets/profile.png"
import Profile from "@/assets/profile1.png"
import Footer from '@/components/Footer';
import NewsLetter from '@/components/NewsLetter';

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-[50px] md:h-[300px] overflow-hidden font-sans">

                <Image
                    src={About}
                    alt="Background"
                    width={1920}
                    height={280}
                    className="absolute top-0 left-0 w-full h-full object-cover object-top z-0"
                    priority
                />



                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 z-0" />

                {/* Foreground content */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 md:px-8 text-center">
                    {/* Text block */}
                    <div className="max-w-3xl w-full space-y-4">
                        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-tight">
                            About NephlySoul          </h1>
                        <p className="text-base sm:text-lg md:text-xl text-white/90">
                            We believe that meaningful conversations can brighten days and build lasting bonds. Our platform offers easy ways to find friends, join discussions, and access resources, all aimed at reducing loneliness and fostering joy in every stage of life.                        </p>
                    </div>
                </div>
            </div>


            <div className="max-w-[1200px] mx-auto px-4 py-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-black">About Us</h1>

                {/* Our Story */}
                <section className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-600">Our Story</h2>
                    <p className="text-base md:text-lg leading-7 text-gray-600">
                        ephlySoul is born from a deep recognition of the emotional and spiritual isolation that many elders face today. NephlySoul was created as a simple yet soulful sanctuary. In a world that moves fast and often forgets its elders, our platform offers a quiet, welcoming pause where meaningful conversations happen, prayers are shared, stories are told, and no one feels alone. What began as a heartfelt response to the silent struggles of widows, widowers, and aging individuals has now grown into a dedicated digital space where every elder feels seen, heard, and spiritually embraced.

                        Whether you're seeking companionship, a shared devotional moment, or a place to celebrate life’s little joys—you belong here. At NephlySoul, “We connect, We listen, We care”, all in one calm, human-first platform.
                    </p>
                </section>

                {/* Our Vision */}
                <section className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-600">Our Vision</h2>
                    <p className="text-base md:text-lg leading-7 text-gray-600">
                        To become the most trusted, joyful, and spiritually enriching online sanctuary for adults aged 50 and above, where loneliness ends, connection begins, and every elder feels seen, valued, heard, and celebrated.
                    </p>
                </section>

                {/* Our Mission */}
                <section className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-600">Our Mission</h2>
                    <p className="text-base md:text-lg leading-7 text-gray-600">
                        To build a simple, heart-centered digital platform that supports adults aged 50 and above, especially widows and those aging alone through meaningful companionship, group prayer, shared scripture, and joyful storytelling. Every feature we create is designed with warmth, clarity, and spiritual care, restoring community one heartfelt interaction at a time.
                    </p>
                </section>

                {/* Join The Journey*/}
                <section className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-600">Join The Journey</h2>
                    <p className="text-base md:text-lg leading-7 text-gray-600">
                        We’re so glad you found us. Whether you're here to pray, seeking peace, reflect, share, or simply listen, we hope NephlySoul brings a little light and warmth to your day.
                        Take your time to explore. Call a friend. Join a prayer group. Read scripture aloud. Leave a message or share your story. And know this: you're never alone here!
                        Let’s grow together. One conversation, one connection, one moment of joy at a time.
                    </p>
                </section>

                {/* Meet the Team */}
                <section className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600">Meet the Team</h2>
                    <p className="text-base md:text-lg leading-7 text-gray-600">
                        We’re a diverse team of compassionate creators, spiritual guides, and community builders, all united by one common goal: to make older adults feel valued, connected, and spiritually nourished.
                        Our team includes tech designers with a heart for simplicity, faith-based mentors who understand the rhythms of spiritual life, and user advocates who listen closely to the needs of our elders. We don’t just build a platform—we build relationships. And every line of code or piece of content is crafted with love, dignity, and deep respect for the lives we hope to touch.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Member 1 */}
                        <div className="text-center max-w-xs mb-8">

                            <Image
                                src={Profile}
                                alt="Profile"
                                className="w-[150px] h-[150px] object-cover rounded-full mb-4 mx-auto" />
                            <h3 className="text-xl font-bold text-black">Onimole Sodiq Oluwatosin </h3>
                            <p className="text-sm text-gray-600 mb-2">Senior Web Devloper</p>
                            {/* <p className="text-sm leading-6 text-gray-600">
                                ONImole is the visionary behind <strong>NephlySoul</strong>. With a background in journalism and a passion for storytelling,
                                he launched this platform to share his insights on life, growth, and everything in between. When he's not writing,
                                you’ll find him reading books or hiking in the mountains.
                            </p> */}
                        </div>

                        {/* Member 2 */}
                        <div className="text-center max-w-xs mb-8">
                            <Image
                                src={Pro}
                                alt="Profile" className="w-[150px] h-[150px] object-cover rounded-full mb-4 mx-auto" />
                            <h3 className="text-xl font-bold text-black">Adeyanju Sunday</h3>
                            <p className="text-sm text-gray-600 mb-2">Content Strategist</p>

                        </div>

                        <div className="text-center max-w-xs mb-8">
                            <Image
                                src={Pro}
                                alt="Profile" className="w-[150px] h-[150px] object-cover rounded-full mb-4 mx-auto" />
                            <h3 className="text-xl font-bold text-black">Sarah</h3>
                            <p className="text-sm text-gray-600 mb-2">Product Lead</p>

                        </div>
                        <div className="text-center max-w-xs mb-8">
                            <Image
                                src={Pro}
                                alt="Profile" className="w-[150px] h-[150px] object-cover rounded-full mb-4 mx-auto" />
                            <h3 className="text-xl font-bold text-black">Boluwatiwi</h3>
                            <p className="text-sm text-gray-600 mb-2">Product Manager</p>

                        </div>

                        <div className="text-center max-w-xs mb-8">
                            <Image
                                src={Pro}
                                alt="Profile" className="w-[150px] h-[150px] object-cover rounded-full mb-4 mx-auto" />
                            <h3 className="text-xl font-bold text-black">Sofiyyah</h3>
                            <p className="text-sm text-gray-600 mb-2">Product Manager</p>

                        </div>

                        <div className="text-center max-w-xs mb-8">
                            <Image
                                src={Pro}
                                alt="Profile" className="w-[150px] h-[150px] object-cover rounded-full mb-4 mx-auto" />
                            <h3 className="text-xl font-bold text-black">Babatunde</h3>
                            <p className="text-sm text-gray-600 mb-2">UI/UX Designer</p>

                        </div>
                    </div>
                </section>
            </div>
            <NewsLetter />

            <Footer />
        </>
    );
};

