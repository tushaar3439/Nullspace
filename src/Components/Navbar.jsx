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
              ? "font-bold bg-blue-600/60 rounded-2xl px-3 py-1 text-white" 
              : "hover:text-gray-200 transition rounded-2xl hover:bg-blue-600/30 px-3 py-1"
          }
        >
          Home
        </NavLink>
        <NavLink 
          to={"/about"} 
          className={({ isActive }) =>
            isActive 
              ? "font-bold text-white  bg-blue-600/60 rounded-2xl px-3 py-1" 
              : "hover:text-gray-200 transition hover:bg-blue-600/30 px-3 py-1 rounded-2xl"
          }
        >
          About
        </NavLink>
        <NavLink 
          to={"/contact"} 
          className={({ isActive }) =>
            isActive 
              ? "font-bold text-white bg-blue-600/60 rounded-2xl px-3 py-1" 
              : "hover:text-gray-200 transition hover:bg-blue-600/30 px-3 py-1 rounded-2xl"
          }
        >
          Services
        </NavLink>
        <NavLink 
          to={"/events"} 
          className={({ isActive }) =>
            isActive 
              ? "font-bold text-white bg-blue-600/60 rounded-2xl px-3 py-1" 
              : "hover:text-gray-200 transition hover:bg-blue-600/30 px-3 py-1 rounded-2xl"
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
