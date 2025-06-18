import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "@/assets/img1.png";

export default function NewsLetter() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-6"
      style={{
        backgroundImage: `url(${img1.src})`,
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FDFDFD]">
          NewsLetter
        </h2>

        <p className="text-lg md:text-xl mb-8 text-[#FDFDFD]">
          Join our community of over 300,000 members and enrich your life with
          activities, interest groups, social connections, companionship and
          more.
        </p>

        {/* Form Section */}
        <form className="flex flex-col md:flex-row gap-[19px] w-full max-w-[597px] mx-auto">
          <input
            type="email"
            required
            placeholder="Email Address"
            className="bg-white text-black rounded-[12px] px-4 py-3 w-full md:w-[400px]"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-[#3566A0] hover:bg-blue-600 text-white text-base px-6 py-3 rounded-lg transition"
          >
            Subscribe <FaArrowRight className="text-lg" />
          </button>
        </form>
      </div>
    </section>
  );
}
