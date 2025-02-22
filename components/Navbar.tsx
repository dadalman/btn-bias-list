import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#01274F] text-white py-6 md:py-8 px-6 md:px-12 flex justify-between items-center fixed top-0 left-0 z-50 md:h-20 h-16 shadow-[0px_4px_10px_rgba(0,0,0,0.5)]">
      <a href="/" className="flex items-center space-x-1">
        <img
          src="/assets/icons/btn-logo-transparent.png"
          alt="Image 1"
          className="h-12 md:h-14"
        />
        <img
          src="/assets/icons/btn-logo-text.png"
          alt="Image 2"
          className="h-8 md:h-10"
        />
      </a>
      <div className="flex space-x-2 md:space-x-4">
        <a
          href="https://www.facebook.com/BTN9DOFC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="cursor-pointer hover:text-gray-300 text-2xl" />
        </a>
        <a
          href="https://www.instagram.com/bethenext_ofc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="cursor-pointer hover:text-gray-300 text-2xl" />
        </a>
        <a
          href="https://x.com/BeTheNext_OFC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="cursor-pointer hover:text-gray-300 text-2xl" />
        </a>
        <a
          href="https://www.tiktok.com/@bethenext_ofc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="cursor-pointer hover:text-gray-300 text-2xl" />
        </a>
        <a
          href="https://www.youtube.com/@BeTheNextOFC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="cursor-pointer hover:text-gray-300 text-2xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
