'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Pro from "@/assets/profile.png"
import Profile from "@/assets/profile1.png"
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <div className="max-w-[1200px] mx-auto px-4 py-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-black">About Us</h1>

                {/* Our Story */}
                <section className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-600">Our Story</h2>
                    <p className="text-base md:text-lg leading-7 text-gray-600">
                        Welcome to <strong>NephlySoul</strong>! NephylSoul was created with the mission of bringing inspiring, informative,
                        and insightful content to readers all over the world. Whether you’re looking for tips on personal growth, the latest
                        news, or deep dives into industry trends, we’ve got something for everyone. What started as a small personal project
                        has now grown into a full-fledged platform where creativity and curiosity meet.
                    </p>
                </section>

                {/* Our Mission */}
                <section className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-600">Our Mission</h2>
                    <p className="text-base md:text-lg leading-7 text-gray-600">
                        Our mission is simple: to inspire and inform. We believe in the power of storytelling and the impact it can have on shaping perspectives,
                        broadening horizons, and sparking meaningful conversations. Every post on this blog is crafted with care, aiming to provide value to our readers,
                        foster connection, and ignite curiosity.
                    </p>
                </section>

                {/* Meet the Team */}
                <section className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600">Meet the Team</h2>

                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Member 1 */}
                        <div className="text-center max-w-xs mb-8">

                            <Image
                                src={Profile}
                                alt="Profile"
                                className="w-[150px] h-[150px] object-cover rounded-full mb-4 mx-auto" />
                            <h3 className="text-xl font-bold text-black">Onimole Sodiq Oluwatosin </h3>
                            <p className="text-sm text-gray-600 mb-2">Senior Web Devloper</p>
                            <p className="text-sm leading-6 text-gray-600">
                                ONImole is the visionary behind <strong>NephlySoul</strong>. With a background in journalism and a passion for storytelling,
                                he launched this platform to share his insights on life, growth, and everything in between. When he's not writing,
                                you’ll find him reading books or hiking in the mountains.
                            </p>
                        </div>

                        {/* Member 2 */}
                        <div className="text-center max-w-xs mb-8">
                            <Image
                                src={Pro}
                                alt="Profile" className="w-[150px] h-[150px] object-cover rounded-full mb-4 mx-auto" />
                            <h3 className="text-xl font-bold text-black">Adeyanju Sunday</h3>
                            <p className="text-sm text-gray-600 mb-2">Content Strategist</p>
                            <p className="text-sm leading-6 text-gray-600">
                                Sunday is the mastermind behind our content calendar. With a keen eye for trending topics and evergreen content,
                                he ensures that our readers are always engaged with fresh, high-quality posts. Outside of work, he loves exploring local
                                coffee shops and capturing moments with his camera.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why We Blog */}
                <section className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-600">Why We Blog</h2>
                    <p className="text-base md:text-lg leading-7 text-gray-600">
                        We believe that everyone has a story to tell. Our blog is not just a platform for sharing information, but a community where
                        voices are heard, ideas are exchanged, and new perspectives are explored. Blogging allows us to connect with people from all walks
                        of life and bring value to their daily lives.
                    </p>
                </section>

                {/* Join the Journey */}
                <section className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-600">Join the Journey</h2>
                    <p className="text-base md:text-lg leading-7 text-gray-600">
                        We’re excited to have you with us on this journey! Whether you’re here to learn, grow, or just be entertained, we hope our blog brings
                        a little something special to your day. Feel free to browse our latest posts, leave comments, and join the conversation. Let’s grow together!
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
};

