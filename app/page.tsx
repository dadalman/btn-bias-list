"use client";

import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { FaSave } from "react-icons/fa";
import BiasList from "@/components/BiasList";
import Watchlist from "@/components/Watchlist";
import { MdScreenRotation } from "react-icons/md";

export default function Home() {
  const captureRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null); // Ref for hiding the button
  const footerRef = useRef<HTMLDivElement>(null); // Ref for showing the footer
  const rotateMsgRef = useRef<HTMLDivElement>(null); // Ref for hiding the rotation message
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadImage = async () => {
    if (
      !captureRef.current ||
      !buttonRef.current ||
      !footerRef.current ||
      !rotateMsgRef.current
    )
      return;

    // Hide the button, show the footer, and hide the rotate message
    buttonRef.current.style.display = "none";
    footerRef.current.style.display = "block";
    rotateMsgRef.current.style.display = "none";
    setIsDownloading(true);

    // Wait a moment for the DOM to update
    await new Promise(resolve => setTimeout(resolve, 100));

    // Capture the image with Instagram story dimensions (1080x1920)
    const canvas = await html2canvas(captureRef.current, {
      useCORS: true,
      scale: 2, // Higher resolution
      backgroundColor: "#01274F", // Ensures background color is not transparent
      width: 540, // Half of 1080 for better performance, will be scaled up
      height: 960, // Half of 1920 for better performance, will be scaled up
      windowWidth: 540,
      windowHeight: 960,
    });

    // Restore the button and rotate message after capturing
    buttonRef.current.style.display = "flex";
    footerRef.current.style.display = "none";
    rotateMsgRef.current.style.display = "flex";
    setIsDownloading(false);

    // Convert canvas to image and download
    const dataUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "bias-list-story.png";
    link.click();
  };

  return (
    <>
      <section
        className="w-full flex flex-col items-center mt-16 md:mt-20 min-h-screen"
        style={{ backgroundColor: "#01274F" }}
      >
        <div
          ref={captureRef}
          className="w-full max-w-[540px] aspect-[9/16] p-6 bg-[#01274F] shadow-[0px_4px_10px_rgba(0,0,0,0.5),_-0px_4px_10px_rgba(0,0,0,0.5)] flex flex-col items-center text-center overflow-hidden"
          style={{ minHeight: "960px" }}
        >
          {/* Header Section - Optimized spacing */}
          <div className="flex flex-col items-center mb-4">
            <img
              src="/assets/icons/btn-logo-transparent.png"
              alt="Bias List"
              width="80"
              height="80"
              className="mb-2"
            />

            <h2 className="font-markazi font-bold text-[24px] text-[#F4FAFE] -mt-3">
              Be the NEXT
            </h2>
            <p className="font-markazi font-bold text-[18px] text-[#F4FAFE] -mt-1">
              My Bias List
            </p>

            <img
              src="/assets/images/star-divider.png"
              alt="Star Divider"
              width="300"
              height="12"
              className="mt-2 mb-3"
            />
          </div>

          {/* Top 9 Section - Compact layout */}
          <div className="flex-1 w-full">
            <BiasList downloading={isDownloading} />
          </div>

          {/* Divider */}
          <img
            src="/assets/images/star-divider.png"
            alt="Star Divider"
            width="300"
            height="12"
            className="my-3"
          />

          {/* Watchlist Section */}
          <div className="w-full">
            <h3 className="font-inter text-[16px] text-[#F4FAFE] mb-2">
              Watchlist
            </h3>

            <img
              src="/assets/images/divider.png"
              alt="Divider"
              width="300"
              height="12"
              className="mb-3"
            />

            <Watchlist />

            <img
              src="/assets/images/divider.png"
              alt="Divider"
              width="300"
              height="12"
              className="mt-3"
            />
          </div>

          {/* Footer Note - Shown only during capture */}
          <p
            ref={footerRef}
            className="text-[#F4FAFE] text-xs mt-3 pb-2 hidden"
          >
            Developed by <span className="underline">DHAYNAMICO</span>
          </p>
        </div>

        {/* Button outside the capture area */}
        <button ref={buttonRef} onClick={handleDownloadImage}>
          <div className="flex items-center justify-center gap-2 px-6 py-3 mt-6 mb-6 border-2 border-[#F4FAFE] bg-[#002042] text-[#F4FAFE] text-lg font-semibold w-auto">
            <FaSave className="text-2xl" />
            Download Story Image
          </div>
        </button>

        {/* Rotation message - Hidden during image capture */}
        <div
          ref={rotateMsgRef}
          className="md:hidden flex flex-col items-center mb-6"
        >
          <span className="text-[#F4FAFE] text-xs max-w-[250px] flex items-center gap-2">
            <MdScreenRotation className="text-l -mr-[4px]" />
            Rotate device to portrait for
          </span>
          <span className="text-[#F4FAFE] text-xs max-w-[250px]">
            optimal Instagram story sizing.
          </span>
        </div>
      </section>
    </>
  );
}