import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1F2B40] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="w-10 h-10 rounded-full bg-white mb-4" />
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semper
            pellentesque ut.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/FindFriends" className="hover:underline cursor-pointer">Find Friends</Link>
            </li>
            <li>
              <Link href="/Forum" className="hover:underline cursor-pointer">Forum</Link>
            </li>
            <li>
              <Link href="/Resource" className="hover:underline cursor-pointer">Resources</Link>
            </li>
            <li>
              <Link href="/" className="hover:underline cursor-pointer">Home</Link>
            </li>
          </ul>
        </div>

        {/* Policy Links */}
        <div>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Subscribe</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Terms of Use</li>
            <li className="hover:underline cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social Buttons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-blue-100">
            <FaFacebook size={16} />
          </a>
          <a href="#" className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-green-100">
            <FaWhatsapp size={16} />
          </a>
          <a href="#" className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-pink-100">
            <FaInstagram size={16} />
          </a>
          <a href="#" className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:bg-blue-100">
            <FaTwitter size={16} />
          </a>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © 2025 A product of Soul Circle Group
      </div>
    </footer>
  );
}
