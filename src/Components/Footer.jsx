import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black/60 backdrop-blur-md text-gray-300 py-3 px-6 fixed bottom-0 left-0 z-50 border-t border-gray-700">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left: Logo */}
        <div className="text-sm font-bold text-white">Nullspace</div>
        
        {/* Center: Links */}
        <div className="flex gap-4 text-xs">
          <a href="/" className="hover:text-white transition">Home</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/services" className="hover:text-white transition">Services</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
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

