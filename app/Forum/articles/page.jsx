"use client";

import React, { useState, useEffect } from "react";
import { LuThumbsUp, LuThumbsDown } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CiSaveDown2 } from "react-icons/ci";
import laughter from "@/assets/twolady.png";
import wife1 from "@/assets/wife1.png";
import wife2 from "@/assets/wife2.png";
import wife3 from "@/assets/wife3.png";
import qoutebg from "@/assets/quotebg.png";

const Comment = ({ nested = false }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    setLiked((prev) => !prev);
    if (!liked && disliked) setDisliked(false);
  };

  const handleDislike = () => {
    setDisliked((prev) => !prev);
    if (!disliked && liked) setLiked(false);
  };

  return (
    <div className={`flex ${nested ? "ml-10 mt-3" : "mt-5"} gap-3`}>
      <img src="https://i.pravatar.cc/40" alt="avatar" className="w-10 h-10 rounded-full" />
      <div className="mb-[53px]">
        <h3 className="font-semibold mb-[5px]">John Doe</h3>
        <p className="text-sm text-gray-700 mb-[24px]">
          Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semp pellentesque ut. Nam sed non nullam nisl non pulvinar.
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <button onClick={handleLike} className={`flex items-center gap-1 ${liked ? "text-blue-600" : ""}`}>
            <LuThumbsUp size={14} /> {liked ? 21 : 20}
          </button>
          <button onClick={handleDislike} className={`flex items-center gap-1 ${disliked ? "text-blue-600" : ""}`}>
            <LuThumbsDown size={16} /> {disliked ? 3 : 2}
          </button>
          <button className="flex items-center gap-1 hover:text-blue-600">Reply (3)</button>
        </div>
      </div>
    </div>
  );
};

const ArticlePage = () => {
  const topPosts = new Array(5).fill({
    date: "Jun 25",
    text: "Lorem ipsum dolor sit amet consectetur. Sed discetesque...",
  });

  const quotes = [
    "One peaceful breath can be more powerful than a thousand noisy worries.",
    "Even on cloudy days, the sun is still shining.",
    "Strength grows in the moments when you think you can't go on but you keep going anyway.",
    "Every day may not be good, but there is something good in every day.",
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar/>

      <header className="flex justify-between items-center px-4 sm:px-6 py-3 border-b text-sm flex-wrap gap-2">
        <div className="flex items-center gap-6">
          <span className="text-gray-700 cursor-pointer">Community</span>
          <span className="text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer">Articles</span>
        </div>
        <div className="text-xs text-gray-500">
          <a href="#" className="hover:underline">Forum / Articles</a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 py-6">

        <div className="w-full md:w-2/3">
          <span className="inline-block border border-gray-300 text-gray-600 text-sm px-3 py-1 rounded-full mb-3">Faith</span>

          <h1 className="text-2xl md:text-3xl font-semibold leading-snug mb-2">
            Lorem ipsum dolor sit amet ipsum dolor sit <br /> amet
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-[40px]">
            <span className="font-medium text-blue-600">Admin</span>
            <span>•</span>
            <span>June 7</span>
            <span>•</span>
            <span>12 Comments</span>
            <span>•</span>
            <span>12 Views</span>
          </div>

          <img src={laughter.src} alt="image" className="rounded-md w-full h-auto mb-5" />

          <div className="text-[15px] leading-relaxed space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur. Turpis mattis nulla aliquam aliquet a enim dui molestie...
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 my-6 flex-wrap">
            <div className="flex items-center gap-2">
              <LuThumbsUp size={16} /> 20
            </div>
            <div className="flex items-center gap-2">
              <LuThumbsDown size={16} /> 2
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <CiSaveDown2 size={16} /> save
            </div>
          </div>

          <div className="text-[#767676] my-[40px]"><hr /></div>

          <div className="mb-8">
            <h3 className="font-medium text-gray-700 mb-2">Leave a comment</h3>
            <textarea
              placeholder="Write comment..."
              className="w-full border border-[#A1A1A1] rounded-md px-4 py-2 text-sm text-gray-700 focus:outline-none resize-none"
              rows={4}
            />
          </div>

          <Comment />
          <Comment nested />
          <Comment />
          <Comment />
        </div>

        <aside className="w-full md:w-1/3 space-y-8">
          <div>
            <input type="text" placeholder="Search" className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none" />
          </div>

          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <h3 className="bg-[#3566A0] text-white px-4 py-2 font-semibold">Categories</h3>
            <ul className="text-sm divide-y divide-gray-200 px-4 py-2">
              {["Culture", "Creativity", "Food", "Travel", "Humor", "Music", "Faith"].map((category) => (
                <li key={category} className="py-2 hover:text-blue-600 cursor-pointer">{category}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <h3 className="bg-[#3566A0] text-white px-4 py-2 font-semibold">Top Posts</h3>
            <div className="p-4 space-y-4">
              {topPosts.map((post, index) => (
                <div key={index} className="flex items-start gap-3">
                  <img src={wife1.src} alt="post" className="w-12 h-12 object-cover rounded" />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{post.date}</p>
                    <p className="text-sm font-medium text-gray-800 leading-snug">{post.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <h3 className="bg-[#3566A0] text-white px-4 py-2 font-semibold">Tags</h3>
            <div className="flex flex-wrap gap-2 text-sm px-4 py-3">
              {["Culture", "Spirituality", "Faith", "Digital", "Politics", "Social Well-being"].map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full cursor-pointer hover:bg-blue-100">{tag}</span>
              ))}
            </div>
          </div>

          <div className="bg-[red] rounded-lg overflow-hidden shadow max-w-full">
            <div className="bg-cover bg-center p-6 text-white text-center w-full h-[380px]" style={{ backgroundImage: `url(${qoutebg.src})` }}>
              <p className="text-[24px] font-medium mb-[49px]">Quote Of The Day</p>
              <p className="text-lg font-semibold leading-snug text-[32px] text-center">{quotes[quoteIndex]}</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#5E18C3] to-[#38087C] text-white p-6 rounded-xl text-center shadow-md w-full h-[320px] flex flex-col items-center justify-center">
            <h4 className="text-xl font-semibold mb-6 leading-relaxed">
              Need a friend to <br /> talk to? Find one <br /> today!
            </h4>
            <button className="bg-[#4A90E2] text-white font-medium px-6 py-2 rounded-md hover:bg-blue-600 transition inline-flex items-center gap-2 cursor-pointer">
              Find friend <span className="text-lg"><IoIosArrowForward /></span>
            </button>
          </div>
        </aside>
      </main>

      <section className="bg-white mt-10 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="mb-6 text-[32px] font-semibold text-[#645674]">More Articles</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
            {[wife1, wife2, wife3].map((img, idx) => (
              <div key={idx} className="rounded overflow-hidden">
                <img src={img.src} alt={`article-${idx + 1}`} className="w-full h-[300px] object-cover rounded" />
                <p className="text-[24px] text-[#333333] mt-2 px-2">Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ArticlePage;
