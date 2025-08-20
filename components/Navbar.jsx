"use client";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaChevronDown,
  FaEllipsisV,
  FaTimes,
  FaSignOutAlt,
  FaRegBell,
} from "react-icons/fa";
import {
  MdOutlineConnectWithoutContact,
  MdGroups2,
} from "react-icons/md";
import { IoBookmarksOutline, IoSettingsOutline } from "react-icons/io5";
import { TiMessageTyping } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import Logo from "./logo.jsx";
import img1 from "@/assets/img1.png";
import fav from '@/public/assets/favicon.png';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const fetchUser = () => {
    const storedUser = localStorage.getItem("currentUser");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  };

  useEffect(() => {
    fetchUser();
    window.addEventListener("userChanged", fetchUser);
    return () => window.removeEventListener("userChanged", fetchUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.dispatchEvent(new Event("userChanged"));
    toast.success("You have been logged out!", { position: "top-center" });
    router.push("/");
  };

  // close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/FindFriends", label: "Find Friends" },
    { href: "/Forum", label: "Forum" },
    { href: "/Resource", label: "Resources" },
    { href: "/About", label: "About" },
  ];

  return (
    <nav className="bg-[#FAFAFA] shadow-md px-4 md:px-10 py-3 font-sans relative z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {/* Desktop Logo */}
          <div className="hidden sm:block">
            <Logo />
          </div>

          {/* Mobile Logo (image) */}
          <div className="block sm:hidden">
            <Image
              src={fav} // put your mobile logo in public/assets
              alt="Mobile Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={label} href={href}>
                <span
                  className={`relative px-2 py-1 rounded transition-all duration-200 cursor-pointer
                    ${isActive
                      ? "text-blue-600 font-bold border-b-2 border-blue-600"
                      : "text-gray-700 hover:bg-blue-100 hover:border-b"
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
        <div className="flex items-center gap-3 md:gap-4" ref={dropdownRef}>
          {!user ? (
            <button
              onClick={() => router.push("/Auth")}
              className="px-5 py-2 bg-[#3566A0] text-white rounded-lg font-medium hover:bg-blue-700 transition text-sm"
            >
              Login →
            </button>
          ) : (
            <>
              <button className="text-[22px] text-black hover:text-blue-600 transition">
                <FaRegBell />
              </button>

              {/* Avatar + dropdown */}
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <Image
                  src={img1}
                  alt="User"
                  className="rounded-full object-cover w-9 h-9"
                />
                <FaChevronDown className="text-gray-600 text-sm" />
              </div>

              {dropdownOpen && (
                <div className="absolute top-[55px] right-4 bg-white shadow-lg rounded-md w-[170px] z-50 mt-2">
                  <button
                    onClick={() => router.push("/Profile")}
                    className="flex gap-3 w-full px-4 py-2 text-left text-black text-sm hover:bg-gray-100"
                  >
                    <CgProfile />
                    <span>Profile</span>
                  </button>

                  <button
                    onClick={() => router.push("#")}
                    className="flex gap-3 w-full px-4 py-2 text-left text-black text-sm hover:bg-gray-100"
                  >
                    <TiMessageTyping />
                    <span>Messages</span>
                  </button>

                  <button
                    onClick={() => router.push("#")}
                    className="flex gap-3 w-full px-4 py-2 text-left text-black text-sm hover:bg-gray-100"
                  >
                    <MdOutlineConnectWithoutContact />
                    <span>Connections</span>
                  </button>

                  <button
                    onClick={() => router.push("#")}
                    className="flex gap-3 w-full px-4 py-2 text-left text-black text-sm hover:bg-gray-100"
                  >
                    <MdGroups2 />
                    <span>My Groups</span>
                  </button>

                  <button
                    onClick={() => router.push("#")}
                    className="flex gap-3 w-full px-4 py-2 text-left text-black text-sm hover:bg-gray-100"
                  >
                    <IoBookmarksOutline />
                    <span>Bookmarks</span>
                  </button>

                  <button
                    onClick={() => router.push("#")}
                    className="flex gap-3 w-full px-4 py-2 text-left  text-black text-sm hover:bg-gray-100"
                  >
                    <IoSettingsOutline />
                    <span>Settings</span>
                  </button>

                  <button
                    onClick={handleLogout}
                    className="flex gap-3 w-full px-4 py-2 border-t border-gray-200 text-left text-sm text-red-600 hover:bg-gray-100"
                  >
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="text-2xl text-gray-800"
            >
              {mobileOpen ? <FaTimes /> : <FaEllipsisV />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 bg-white shadow-lg rounded-md p-4">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={label} href={href}>
                <span
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded transition-all duration-200
                    ${isActive
                      ? "text-blue-600 font-bold border-l-4 border-blue-600"
                      : "text-gray-700 hover:bg-blue-100"
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

      <ToastContainer />
    </nav>
  );
};

export default Navbar;
