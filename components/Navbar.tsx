"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          if (scrollY > lastScrollY && scrollY > 10) {
            setIsVisible(false); // Hide only when scrolling down & scrolled at least 10px
            setShowMenu(false); // Close menu on scroll
          } else {
            setIsVisible(true); // Show when scrolling up
          }

          setLastScrollY(scrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        (menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        return;
      }
      setShowMenu(false);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full bg-[#01274F] text-white py-6 md:py-8 px-6 md:px-12 flex justify-between items-center fixed top-0 left-0 z-50 md:h-20 h-16 shadow-[0px_4px_10px_rgba(0,0,0,0.5),_0px_-4px_10px_rgba(0,0,0,0.5),_4px_0px_10px_rgba(0,0,0,0.5),_-4px_0px_10px_rgba(0,0,0,0.5)] transition-transform duration-300 ${
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
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:text-2xl text-xl"
        >
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>
        {showMenu && (
          <div className="absolute right-0 mt-2 bg-[#01274F] p-4 rounded-[2px] shadow-[0px_2px_5px_rgba(0,0,0,0.5),_0px_-2px_5px_rgba(0,0,0,0.5),_2px_0px_5px_rgba(0,0,0,0.5),_-2px_0px_5px_rgba(0,0,0,0.5)] flex flex-col space-y-4">
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/BTN9DOFC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="cursor-pointer hover:text-gray-300 text-xl md:text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/bethenext_ofc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer hover:text-gray-300 text-xl md:text-2xl" />
              </a>
              <a
                href="https://x.com/BeTheNext_OFC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="cursor-pointer hover:text-gray-300 text-xl md:text-2xl" />
              </a>
              <a
                href="https://www.tiktok.com/@bethenext_ofc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="cursor-pointer hover:text-gray-300 text-xl md:text-2xl" />
              </a>
              <a
                href="https://www.youtube.com/@BeTheNextOFC"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="cursor-pointer hover:text-gray-300 text-xl md:text-2xl" />
              </a>
            </div>
            <a
              href="#app-instructions"
              className="block text-center hover:text-gray-300"
            >
              App Instructions
            </a>
            <a
              href="#voting-tutorial"
              className="block text-center hover:text-gray-300"
            >
              <span className="inline-block bg-red-500 text-white text-xs px-2 py-[2px] rounded-[2px] text-center">
                New
              </span>
              <br />
              Voting Tutorial
            </a>
            <a
              href="#all-trainees"
              className="block text-center hover:text-gray-300"
            >
              <span className="inline-block bg-gray-400 text-white text-xs px-2 py-[2px] rounded-[2px] text-center">
                <div>Coming Soon</div>
              </span>
              <br />
              All Trainees Profile
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
