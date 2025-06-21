'use client';
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 shadow-md bg-[#FAFAFA] ">
      <p className="cursor-pointer text-xl font-bold text-[#166F64]">
        Soul Circle
      </p>

      <div className="hidden md:flex items-center gap-36px">
        <Link href="/" passHref>
          <span className="cursor-pointer text-black hover:text-[#166F64] transition">Home</span>
        </Link>
        <Link href="/friends" passHref>
          <span className="cursor-pointer text-black hover:text-[#166F64] transition">Find Friends</span>
        </Link>
        <Link href="/" passHref>
          <span className="cursor-pointer text-black hover:text-[#166F64] transition">Forum</span>
        </Link>
        <Link href="/" passHref>
          <span className="cursor-pointer text-black hover:text-[#166F64] transition">Resources</span>
        </Link>
        <Link href="/" passHref>
          <span className="cursor-pointer text-black hover:text-[#166F64] transition">About</span>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-6 py-2 bg-[#3566A0] text-[#FAFAFA] rounded-lg font-medium">
          Login &rarr;
        </button>
      </div>
    </div>
  );
};

export default Navbar;
