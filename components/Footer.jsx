export default function Footer() {
  return (
    <footer className="bg-[#1F2B40] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="w-10 h-10 rounded-full bg-white mb-4" />
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Sed dis fermentum pellentesque semper
            pellentesque ut.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Lorem ipsum</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
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

        <div className="flex space-x-4 mt-4 md:mt-0">
          <button className="w-8 h-8 bg-white text-black rounded-full">F</button>
          <button className="w-8 h-8 bg-white text-black rounded-full">W</button>
          <button className="w-8 h-8 bg-white text-black rounded-full">A</button>
          <button className="w-8 h-8 bg-white text-black rounded-full">I</button>
          <button className="w-8 h-8 bg-white text-black rounded-full">X</button>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        © 2025 A product of Soul Circle Group
      </div>
    </footer>
  );
}
