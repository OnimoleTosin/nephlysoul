import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import fav from '@/public/assets/favicon.png'; // Adjust the path as necessary

export default function Footer() {
  return (
    <footer className="bg-[#1F2B40] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Image src={fav} className="w-10 h-10 rounded-full bg-white mb-4" />
          <p className="text-sm text-gray-300">
A warm, faith-filled space for older adults to connect, share, and find comfort in community and spirit.          </p>
        </div>

        <div>
          <ul className="space-y-2 text-sm">
            <Link href="/About" className="hover:underline cursor-pointer">About</Link><br />
            <Link href="/FindFriends" className="hover:underline cursor-pointer">Find F
            riends</Link><br />
            <Link href="/Forum" className="hover:underline cursor-pointer">Forum</Link> <br />
            <Link href="/Resource" className="hover:underline cursor-pointer">Resources</Link><br />
            <Link href="/" className="hover:underline cursor-pointer">Home</Link>
          </ul>
        </div>


        <div>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Subscribe</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms of Use</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex items-start md:items-center gap-4 flex-wrap">
          <a href="#" className="text-white hover:text-blue-400">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="text-white hover:text-green-500">
            <FaWhatsapp size={20} />
          </a>
          <a href="#" className="text-white hover:text-pink-400">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-black">
            <FaXTwitter size={20} />
          </a>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        © 2025 A product of NephlySoul Group
      </div>
    </footer>
  );
}