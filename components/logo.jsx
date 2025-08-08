// components/Logo.js
import { FaHeart } from "react-icons/fa"; // FontAwesome heart icon

const Logo = () => {
  return (
    <div className="text-blue-800 font-bold text-4xl flex items-center space-x-1">
      <span className="tracking-tight">N</span>
      <span className="tracking-tight">e</span>
      <span className="tracking-tight">p</span>
      <span className="tracking-tight">h</span>
      <span className="tracking-tight">l</span>
      <span className="tracking-tight">y</span>
      <span className="tracking-tight">S</span>
      <FaHeart className="text-blue-800 text-3xl mx-1" />
      <span className="tracking-tight">u</span>
      <span className="tracking-tight">l</span>
    </div>
  );
};

export default Logo;
