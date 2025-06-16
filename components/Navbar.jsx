'use client';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow-md bg-white">
      {/* Logo */}
      <p className="cursor-pointer text-xl font-bold text-[#166F64]">
        ONImole
      </p>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-6">
        <Link href="/" passHref>
          <span className="cursor-pointer text-black hover:text-[#166F64] transition">Home</span>
        </Link>
        <Link href="/" passHref>
          <span className="cursor-pointer text-black hover:text-[#166F64] transition">Travel</span>
        </Link>
        <Link href="/" passHref>
          <span className="cursor-pointer text-black hover:text-[#166F64] transition">Camp</span>
        </Link>
        <Link href="/" passHref>
          <span className="cursor-pointer text-black hover:text-[#166F64] transition">Equipment</span>
        </Link>
        <Link href="/" passHref>
          <span className="cursor-pointer text-black hover:text-[#166F64] transition">About Us</span>
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button className="px-6 py-2 bg-[#166F64] text-white rounded-full font-medium">
          Subscribe
        </button>
        <button className="px-6 py-2 bg-white text-[#166F64] border-2 border-[#166F64] rounded-full font-medium">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
