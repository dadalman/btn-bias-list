"use client";

import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          if (scrollY > lastScrollY && scrollY > 10) {
            setIsVisible(false); // Hide only when scrolling down & scrolled at least 10px
          } else {
            setIsVisible(true); // Show when scrolling up
          }

          setLastScrollY(scrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full bg-[#01274F] text-white py-6 md:py-8 px-6 md:px-12 flex justify-between items-center fixed top-0 left-0 z-50 md:h-20 h-16 shadow-[0px_4px_10px_rgba(0,0,0,0.5)] transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <a href="/" className="flex items-center space-x-1">
        <img
          src="/assets/icons/btn-logo-transparent.png"
          alt="Image 1"
          className="h-10 md:h-14"
        />
        <img
          src="/assets/icons/btn-logo-text.png"
          alt="Image 2"
          className="h-7 md:h-10"
        />
      </a>
      <div className="flex space-x-1 md:space-x-4">
        <a
          href="https://www.facebook.com/BTN9DOFC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="cursor-pointer hover:text-gray-300 md:text-2xl text-xl" />
        </a>
        <a
          href="https://www.instagram.com/bethenext_ofc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="cursor-pointer hover:text-gray-300 md:text-2xl text-xl" />
        </a>
        <a
          href="https://x.com/BeTheNext_OFC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter className="cursor-pointer hover:text-gray-300 md:text-2xl text-xl" />
        </a>
        <a
          href="https://www.tiktok.com/@bethenext_ofc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="cursor-pointer hover:text-gray-300 md:text-2xl text-xl" />
        </a>
        <a
          href="https://www.youtube.com/@BeTheNextOFC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="cursor-pointer hover:text-gray-300 md:text-2xl text-xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
