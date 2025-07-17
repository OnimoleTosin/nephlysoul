import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1F3C5F] text-white py-10 px-6 px-[80px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-4 h-4 bg-white rounded-full" />
            <div className="w-10 h-1 bg-white rounded-full" />
          </div>
          <p className="text-sm leading-relaxed text-white">
            Lorem ipsum dolor sit amet consectetur. Sed dis fermentum
            pellentesque semper pellentesque ut.
          </p>
        </div>

        <div>
          <ul className="space-y-2 text-sm">
            <li className="hover:underline cursor-pointer">Find Friends</li>
            <li className="hover:underline cursor-pointer">Forums</li>
            <li className="hover:underline cursor-pointer">Resources</li>
            <li className="hover:underline cursor-pointer">Home</li>
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

        <div className="flex space-x-4 justify-start md:justify-end">
          <div className="w-8 h-8 bg-white text-[#1F3C5F] rounded-full flex items-center justify-center">
            <FaFacebookF size={16} />
          </div>
          <div className="w-8 h-8 bg-white text-[#1F3C5F] rounded-full flex items-center justify-center">
            <FaWhatsapp size={16} />
          </div>
          <div className="w-8 h-8 bg-white text-[#1F3C5F] rounded-full flex items-center justify-center">
            <FaInstagram size={16} />
          </div>
          <div className="w-8 h-8 bg-white text-[#1F3C5F] rounded-full flex items-center justify-center">
            <FaXTwitter size={16} />
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-white">
        © 2025 A product of Soul Circle Group
      </div>
    </footer>
  );
}
