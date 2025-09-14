import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black/60 backdrop-blur-md text-gray-300 py-3 px-6 fixed bottom-0 left-0 z-50 border-t border-gray-700">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Logo */}
        <div className="text-sm font-bold text-white">Nullspace</div>
        
        {/* Center: Links */}
        <div className="flex gap-4 text-xs">
          <NavLink 
          to={"/"} 
          className={({ isActive }) =>
            isActive 
              ? "font-bold px-3 py-1 text-white" 
              : " px-3 py-1"
          }
        >
          Home
        </NavLink>
        <NavLink 
          to={"/about"} 
          className={({ isActive }) =>
            isActive 
              ? "font-bold text-white px-3 py-1" 
              : " px-3 py-1"
          }
        >
          About
        </NavLink>
        <NavLink 
          to={"/services"} 
          className={({ isActive }) =>
            isActive 
              ? "font-bold text-white px-3 py-1" 
              : " px-3 py-1"
          }
        >
          Services
        </NavLink>
        <NavLink 
          to={"/Opportunities"} 
          className={({ isActive }) =>
            isActive 
              ? "font-bold text-white px-3 py-1" 
              : " px-3 py-1 "
          }
        >
          Opportunities
        </NavLink>
        </div>
        
        {/* Right: Social Icons */}
        <div className="flex items-center gap-3 text-lg">
          <a href="https://instagram.com/tushaar._" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
          <a href="https://github.com/tushaar3439" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

