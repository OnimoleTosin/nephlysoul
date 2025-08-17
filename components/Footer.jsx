import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import fav from '@/public/assets/favicon.png';
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-[#1F2B40] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Intro */}
        <div>
          {/* <Image 
            src={fav} 
            alt="favicon" 
            className="w-10 h-10 rounded-full bg-white mb-4" 
          /> */}
          <Logo className="text-white"/>
          <p className="text-sm text-gray-300 sm:text-base md:text-sm max-w-2xl mx-auto">
            A warm, faith-filled space for older adults to connect, share, 
            and find comfort in community and spirit.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <ul className="space-y-2 text-sm">
            <li><Link href="/About" className="hover:text-blue-400">About</Link></li>
            <li><Link href="/FindFriends" className="hover:text-blue-400">Find Friends</Link></li>
            <li><Link href="/Forum" className="hover:text-blue-400">Forum</Link></li>
            <li><Link href="/Resource" className="hover:text-blue-400">Resources</Link></li>
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
          </ul>
        </div>

        {/* Info Links */}
        <div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Subscribe</a></li>
            <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400">Terms of Use</a></li>
            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex items-start md:items-center gap-4 flex-wrap">
          <a href="#" aria-label="Facebook" className="text-white hover:text-blue-500">
            <FaFacebook size={20} />
          </a>
          <a href="#" aria-label="WhatsApp" className="text-white hover:text-green-500">
            <FaWhatsapp size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="text-white hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
          <a href="#" aria-label="Twitter / X" className="text-white hover:text-gray-300">
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} A product of NephlySoul Group
      </div>
    </footer>
  );
}
