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

    // Capture the image
    const canvas = await html2canvas(captureRef.current, {
      useCORS: true,
      scale: 2, // Higher resolution
      backgroundColor: "#01274F", // Ensures background color is not transparent
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
          className="w-auto md:w-[950px] sm:w-[556px] md:w-[556px]  p-4 bg-[#01274F] shadow-[0px_4px_10px_rgba(0,0,0,0.5),_-0px_4px_10px_rgba(0,0,0,0.5)] flex flex-col items-center text-center"
        >
          <img
            src="/assets/icons/btn-logo-transparent.png"
            alt="Bias List"
            width="128"
            height="128"
            className="mb-4 mt-1"
          />

          <h2 className="font-markazi font-bold text-[28px] md:text-[40px] text-[#F4FAFE] -mt-6">
            Be the NEXT
          </h2>
          <p className="font-markazi font-bold text-[20px] md:text-[30px] text-[#F4FAFE] -mt-2">
            My Bias List
          </p>

          <img
            src="/assets/images/star-divider.png"
            alt="Star Divider"
            width="500"
            height="20"
            className="md:mt-4 md:mb-4 mb-2 mt-2"
          />

          <BiasList downloading={isDownloading} />

          <img
            src="/assets/images/star-divider.png"
            alt="Star Divider"
            width="500"
            height="20"
            className="md:mt-4 mt-2 mb-10"
          />

          <h3 className="font-inter text-[18px] md:text-[24px] text-[#F4FAFE] -mt-2 mb-3">
            Watchlist
          </h3>

          {/* {isDownloading && (
            <div style={{ height: "100px" }} ref={footerRef}></div>
          )} */}

          <img
            src="/assets/images/divider.png"
            alt="Divider"
            width="500"
            height="20"
            className="mt-2 mb-3 md:mb-10"
          />

          <Watchlist />

          <img
            src="/assets/images/divider.png"
            alt="Divider"
            width="500"
            height="20"
            className="mt-2 md:mt-10"
          />

          {/* Footer Note - Shown only during capture */}
          <p
            ref={footerRef}
            className="text-[#F4FAFE] text-xs md:text-sm mt-4 pb-4 hidden"
          >
            Developed by <span className="underline">DHAYNAMICO</span>
          </p>

          {/* Button inside the div but excluded from capture */}
          <button ref={buttonRef} onClick={handleDownloadImage}>
            <div className="flex items-center justify-center gap-2 px-6 py-3 mt-10 mb-10 border-2 border-[#F4FAFE] bg-[#002042] text-[#F4FAFE] text-lg font-semibold w-auto">
              <FaSave className="text-2xl" />
              Download Image
            </div>
          </button>

          {/* Rotation message - Hidden during image capture */}
          <div
            ref={rotateMsgRef}
            className="md:hidden flex flex-col items-center"
          >
            <span className="text-[#F4FAFE] text-xs md:text-sm -mt-8 max-w-[250px] flex items-center gap-2">
              <MdScreenRotation className="text-l -mr-[4px]" />
              Rotate device to landscape for
            </span>
            <span className="text-[#F4FAFE] text-xs md:text-sm max-w-[250px] pb-4">
              better image sizing before downloading.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
