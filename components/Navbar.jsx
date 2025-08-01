'use client';

import React, { useEffect, useState, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaBell, FaBookmark, FaChevronDown, FaCogs, FaComment, FaConnectdevelop, FaEllipsisV, FaPeopleArrows, FaSignOutAlt, FaTimes, FaUser } from 'react-icons/fa';
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { IoBookmarksOutline } from "react-icons/io5";
import { TiMessageTyping } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";




import img1 from '@/assets/img1.png';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

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
    { href: '/FindFriends', label: 'Find Friends' },
    { href: '/Forum', label: 'Forum' },
    { href: '/Resource', label: 'Resources' },
    { href: '/About', label: 'About' },
  ];

  return (
    <nav className="bg-[#FAFAFA] shadow-md px-4 md:px-10 py-4 font-sans relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center space-x-2">
          <div className="w-[48px] h-[48px] bg-black rounded-full"></div>
          <div className="h-[12px] w-[108px] bg-black rounded-[8px]"></div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={label} href={href}>
                <span
                  className={`relative px-4 py-2 rounded transition-all duration-200 cursor-pointer
                    ${isActive
                      ? 'text-blue-600 font-bold border-b-2 border-blue-600'
                      : 'text-gray-700 hover:bg-blue-100 hover:border-b'
                    }
                  `}
                >
                  {label}
                </span>
              </Link>
            );
          })}
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
              <Link href="#">
                <button className="text-[22px] text-black hover:text-blue-600 transition">
                  <FaRegBell />
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
                <div className="absolute top-[60px] text-black right-4 bg-white shadow-lg rounded-md w-[150px]  z-50 mt-2">
                  <button
                    onClick={() => router.push('/Profile')}
                    className="flex gap-3 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    <CgProfile />
                    <span className="text-sm">Profile</span>
                  </button>

                  <button
                    onClick={() => router.push('#')}
                    className="flex gap-3 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    <TiMessageTyping />
                    <span className="text-sm">Messages</span>
                  </button>

                  <button
                    onClick={() => router.push('#')}
                    className="flex gap-3 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    <MdOutlineConnectWithoutContact />
                    <span className="text-sm">Connections</span>
                  </button>

                  <button
                    onClick={() => router.push('#')}
                    className="flex gap-3 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    <MdGroups2 />
                    <span className="text-sm">My Groups</span>
                  </button>

                  <button
                    onClick={() => router.push('#')}
                    className="flex gap-3 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    <IoBookmarksOutline />
                    <span className="text-sm">Bookmarks</span>
                  </button>


                  <button
                    onClick={() => router.push('#')}
                    className="flex gap-3 block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    <IoSettingsOutline />
                    <span className="text-sm">Setting</span>
                  </button>

                  <button
                    onClick={handleLogout}
                    className="flex gap-3 block w-full px-4 py-2 border-t border-black text-left text-sm text-red-600 hover:bg-gray-100"
                  >
                    <FaSignOutAlt />
                    <span className="text-sm">LogOut</span>
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
              {mobileOpen ? <FaTimes /> : <FaEllipsisV />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={label} href={href}>
                <span
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2 rounded transition-all duration-200
                    ${isActive
                      ? 'text-blue-600 font-bold border-b-2 border-blue-600'
                      : 'text-gray-700 hover:bg-blue-100 hover:border-b'
                    }
                  `}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
