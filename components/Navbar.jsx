'use client';

import img1 from '@/assets/img1.png';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaBell, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ Fetch user from localStorage and update state
  const fetchUser = () => {
    const storedUser = localStorage.getItem('currentUser');
    setUser(storedUser ? JSON.parse(storedUser) : null);
  };

  // ✅ Sync user state on mount and on 'userChanged' event
  useEffect(() => {
    fetchUser();
    window.addEventListener('userChanged', fetchUser);
    return () => window.removeEventListener('userChanged', fetchUser);
  }, []);

  // ✅ Handle logout
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.dispatchEvent(new Event('userChanged'));
    router.push('/');
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between p-4 px-[40px] shadow-md bg-[#FAFAFA] font-sans">
      {/* Logo */}
      <div className="flex justify-center items-center space-x-2">
        <div className="w-[48px] h-[48px] bg-black rounded-full"></div>
        <div className="h-[12px] w-[108px] bg-black rounded-[8px]"></div>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-10">
        <Link href="/HomePage"><span className="cursor-pointer text-black hover:text-[#166F64] transition">Home</span></Link>
        <Link href="/friends"><span className="cursor-pointer text-black hover:text-[#166F64] transition">Find Friends</span></Link>
        <Link href="/"><span className="cursor-pointer text-black hover:text-[#166F64] transition">Forum</span></Link>
        <Link href="/"><span className="cursor-pointer text-black hover:text-[#166F64] transition">Resources</span></Link>
        <Link href="/"><span className="cursor-pointer text-black hover:text-[#166F64] transition">About</span></Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        {!user ? (
          <button
            onClick={() => router.push('/Auth')}
            className="px-6 py-2 bg-[#3566A0] text-[#FAFAFA] rounded-lg font-medium hover:bg-blue-700"
          >
            Login &rarr;
          </button>
        ) : (
          <>
            <Link href="/">
              <button className="flex cursor-pointer px-4 py-2 text-black text-[25px] font-medium">
                <FaBell />
              </button>
            </Link>

            {/* Avatar with dropdown toggle */}
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <Image
                src={img1}
                alt="User"
                className="rounded-full object-cover w-10 h-10"
              />
              <FaChevronDown className="text-gray-600" />
            </div>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute top-[60px] right-0 bg-white shadow-lg rounded-md w-[150px] border z-50">
                <button
                  onClick={() => router.push('/profile')}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  View Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
