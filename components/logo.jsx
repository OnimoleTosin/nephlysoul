// components/Logo.js
import { FaHeart } from "react-icons/fa";

const Logo = ({ color = "text-blue-800", heartColor = "text-blue-800", size = "text-4xl" }) => {
  return (
    <div className={`font-bold flex items-center space-x-1 ${color} ${size}`}>
      <span className="tracking-tight">N</span>
      <span className="tracking-tight">e</span>
      <span className="tracking-tight">p</span>
      <span className="tracking-tight">h</span>
      <span className="tracking-tight">l</span>
      <span className="tracking-tight">y</span>
      <span className="tracking-tight">S</span>
      <FaHeart className={`${heartColor} mx-1`} />
      <span className="tracking-tight">u</span>
      <span className="tracking-tight">l</span>
    </div>
  );
};

export default Logo;
