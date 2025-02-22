import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#01274F] text-white py-6 md:py-8 px-6 md:px-12 flex flex-col items-center justify-center shadow-[0px_-4px_10px_rgba(0,0,0,0.5)]">
      <div className="flex space-x-2 md:space-x-4 mb-4">
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
      <p className="text-sm md:text-base text-gray-300">
        &copy; 2025 Be The NEXT. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
