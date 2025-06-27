import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1F2B40] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex  items-center gap-2">
            <div className="w-[48px] h-[48px] bg-white rounded-full "></div>
            <div className="h-[12px] w-[108px] bg-white rounded-[8px] "></div>
          </div>          
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semper
            pellentesque ut.
          </p>
        </div>

        <div>
          <ul className="space-y-1 text-sm text-white">
            <li>Find Friends</li>
            <li>Forum</li>
            <li>Resources</li>
            <li>Home</li>
          </ul>
        </div>

        <div>
          <ul className="space-y-1 text-sm text-white">
            <li>Subscribe</li>
            <li>Private Policy</li>
            <li>Terms of use</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="w-8 h-8 text-white bg-transparent rounded-full"><FaFacebook/></button>
          <button className="w-8 h-8 text-white bg-transparent rounded-full"><FaWhatsapp/></button>
          <button className="w-8 h-8 text-white bg-transparent rounded-full"><FaInstagram/></button>
          <button className="w-8 h-8 text-white bg-transparent rounded-full"><FaTwitter/></button>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        © 2025 A product of Soul Circle Group
      </div>
    </footer>
  );
}
