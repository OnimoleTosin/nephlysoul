'use client';

import img1 from '@/assets/img1.png';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaBell, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const fetchUser = () => {
    const storedUser = localStorage.getItem('currentUser');
    setUser(storedUser ? JSON.parse(storedUser) : null);
  };

  useEffect(() => {
    fetchUser();
    window.addEventListener('userChanged', fetchUser);
    return () => window.removeEventListener('userChanged', fetchUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.dispatchEvent(new Event('userChanged'));
    router.push('/');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/friends', label: 'Find Friends' },
    { href: '/', label: 'Forum' },
    { href: '/Resource', label: 'Resources' },
    { href: '/', label: 'About' },
  ];

  return (
    <nav className="bg-[#FAFAFA] shadow-md px-4 md:px-10 py-4 font-sans relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-[48px] h-[48px] bg-black rounded-full"></div>
          <div className="h-[12px] w-[108px] bg-black rounded-[8px]"></div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="relative px-4 py-2 text-gray-700 hover:bg-blue-100 hover: transition-all duration-200 rounded hover:border-b"
            >
              {label}
            </Link>

          ))}
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4" ref={dropdownRef}>
          {!user ? (
            <button
              onClick={() => router.push('/Auth')}
              className="px-6 py-2 bg-[#3566A0] text-white rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Login →
            </button>
          ) : (
            <>
              <Link href="/">
                <button className="text-[22px] text-black hover:text-blue-600 transition">
                  <FaBell />
                </button>
              </Link>

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

              {dropdownOpen && (
                <div className="absolute top-[60px] text-black right-4 bg-white shadow-lg rounded-md w-[150px] border z-50">
                  <button
                    onClick={() => router.push('/Profile')}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="text-xl text-gray-800"
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2">
          {navLinks.map(({ href, label }) => (
            <Link key={label} href={href}>
              <a
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:underline rounded transition-all duration-200"
              >
                {label}
              </a>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
