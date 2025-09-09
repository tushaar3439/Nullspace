import { NavLink } from "react-router-dom";
import { IoPersonCircle, IoSettingsSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { MdLogin } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="w-full h-[60px] bg-black/60 backdrop-blur-md text-white flex items-center px-6 sticky top-0 z-50 border-b border-gray-700">
      
      {/* Left: Logo */}
      <div className="flex-1 flex items-center">
        <h1 className="text-2xl font-bold">Nullspace</h1>
      </div>

      {/* Center: Links */}
      <div className="flex-1 flex items-center justify-center gap-8">
        <NavLink 
          to={"/"} 
          className={({ isActive }) =>
            isActive 
              ? "font-bold underline text-white" 
              : "hover:text-gray-200 transition"
          }
        >
          Home
        </NavLink>
        <NavLink 
          to={"/about"} 
          className={({ isActive }) =>
            isActive 
              ? "font-bold underline text-white" 
              : "hover:text-gray-200 transition"
          }
        >
          About
        </NavLink>
        <NavLink 
          to={"/contact"} 
          className={({ isActive }) =>
            isActive 
              ? "font-bold underline text-white" 
              : "hover:text-gray-200 transition"
          }
        >
          Services
        </NavLink>
        <NavLink 
          to={"/events"} 
          className={({ isActive }) =>
            isActive 
              ? "font-bold underline text-white" 
              : "hover:text-gray-200 transition"
          }
        >
          Events
        </NavLink>
      </div>

      {/* Right: Icons */}
      <div className="flex-1 flex items-center justify-end gap-6 text-2xl">
        <NavLink to={"/create"}><FaRegSquarePlus /></NavLink>
        <NavLink to={"/profile"}><IoPersonCircle /></NavLink>
        <NavLink to={"/setting"}><IoSettingsSharp /></NavLink>
        <NavLink to={"/login"}><MdLogin /></NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
