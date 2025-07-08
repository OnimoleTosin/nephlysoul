import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1F2B40] text-white py-10 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-[48px] h-[48px] bg-white rounded-full" />
            <div className="h-[12px] w-[108px] bg-white rounded-[8px]" />
          </div>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semper pellentesque ut.
          </p>
        </div>

        {/* Navigation 1 */}
        <div>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Find Friends</li>
            <li className="hover:underline cursor-pointer">Forum</li>
            <Link href="/Resource" className="hover:underline cursor-pointer">Resources</Link><br/>
            <Link href="/" className="hover:underline cursor-pointer">Home</Link>
          </ul>
        </div>

        {/* Navigation 2 */}
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
          <a href="#" className="text-white hover:text-green-400">
            <FaWhatsapp size={20} />
          </a>
          <a href="#" className="text-white hover:text-pink-400">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="text-white hover:text-blue-300">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © 2025 A product of Soul Circle Group
      </div>
    </footer>
  );
}
