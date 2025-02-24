"use client";

import { useRef } from "react";
import Image from "next/image";
import html2canvas from "html2canvas";
import { FaSave } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import BiasList from "@/components/BiasList";
import Watchlist from "@/components/Watchlist";
import Footer from "@/components/Footer";

export default function Home() {
  const captureRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null); // Ref for hiding the button
  const footerRef = useRef<HTMLDivElement>(null); // Ref for showing the footer

  const handleDownloadImage = async () => {
    if (!captureRef.current || !buttonRef.current || !footerRef.current) return;

    // Hide the button and show the footer
    buttonRef.current.style.display = "none";
    footerRef.current.style.display = "block";

    // Capture the image
    const canvas = await html2canvas(captureRef.current, {
      useCORS: true,
      scale: 2, // Higher resolution
      backgroundColor: "#01274F", // Ensures background color is not transparent
    });

    // Restore the button after capturing
    buttonRef.current.style.display = "flex";
    footerRef.current.style.display = "none";

    // Convert canvas to image and download
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "bias-list.png";
    link.click();
  };

  return (
    <>
      <section
        className="w-auto flex flex-col items-center mt-16 md:mt-20 min-h-screen"
        style={{ backgroundColor: "#01274F" }}
      >
        <div
          ref={captureRef}
          className="w-auto md:max-w-[950px] p-4 bg-[#01274F] shadow-[0px_4px_10px_rgba(0,0,0,0.5),_-0px_4px_10px_rgba(0,0,0,0.5)] flex flex-col items-center text-center"
        >
          <Image
            src="/assets/icons/btn-logo-transparent.png"
            alt="Bias List"
            width={128}
            height={128}
            className="mb-4 mt-5"
          />

          <h2 className="font-markazi font-bold text-[28px] md:text-[40px] text-[#F4FAFE] -mt-6">
            Be the NEXT
          </h2>
          <p className="font-markazi font-bold text-[20px] md:text-[30px] text-[#F4FAFE] -mt-2">
            My Bias List
          </p>

          <Image
            src="/assets/images/star-divider.png"
            alt="Star Divider"
            width={500}
            height={20}
            className="my-4"
          />

          <BiasList />

          <Image
            src="/assets/images/star-divider.png"
            alt="Star Divider"
            width={500}
            height={20}
            className="mt-4 mb-10"
          />

          <h3 className="font-inter text-[18px] md:text-[24px] text-[#F4FAFE] -mt-2 md:mb-2">
            Watchlist
          </h3>

          <Image
            src="/assets/images/divider.png"
            alt="Divider"
            width={500}
            height={20}
            className="mt-4 mb-4 md:mb-10"
          />

          <Watchlist />

          <Image
            src="/assets/images/divider.png"
            alt="Divider"
            width={500}
            height={20}
            className="mt-4 md:mt-10"
          />

          {/* Footer Note - Shown only during capture */}
          <p
            ref={footerRef}
            className="text-[#F4FAFE] text-xs md:text-sm mt-4 pb-4 hidden"
          >
            Developed by <span className="underline">DHAYNAMICO</span>
          </p>

          {/* Button inside the div but excluded from capture */}
          <button
            ref={buttonRef}
            onClick={handleDownloadImage}
            className="flex items-center justify-center gap-2 px-6 py-3 mt-5 md:mt-10 mb-10 border-2 border-[#F4FAFE] bg-[#002042] text-[#F4FAFE] text-lg font-semibold w-auto"
          >
            <FaSave className="text-2xl" />
            Download Image
          </button>
        </div>
      </section>
    </>
  );
}
