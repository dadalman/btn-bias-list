"use client";

import { useState } from "react";
import SelectionModal from "./SelectionModal"; // Import Modal component

interface WatchlistFrameProps {
  id: number;
  name: string;
  image: string;
  rank: number;
  country?: string; // Optional country prop
}

const countryFlagMap: { [key: string]: string } = {
  MM: "/assets/icons/mm-circle.png",
  KR: "/assets/icons/kr-circle.png",
  JP: "/assets/icons/jp-circle.png",
  CA: "/assets/icons/ca-circle.png",
  US: "/assets/icons/us-circle.png",
  PH: "/assets/icons/ph-circle.png",
  TH: "/assets/icons/th-circle.png",
};

const WatchlistFrame: React.FC<WatchlistFrameProps> = ({
  name,
  image,
  rank,
  country,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const countryFlag = country ? countryFlagMap[country] : "";

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-[80px] py-1 bg-[#01274F] text-[#F4FAFE] rounded-lg">
        {/* Clickable Circle - Opens Modal - Smaller for story format */}
        <button
          className="w-[45px] h-[45px] bg-[#92D0F3] rounded-full flex items-center justify-center shadow-lg mb-1"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="w-[40px] h-[40px] bg-[#b8c2d5] rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt={name}
              width="40"
              height="40"
              className="rounded-full object-cover object-top w-[40px] h-[40px]"
            />
          </div>
        </button>

        {/* Name with flag - Compact layout */}
        <div className="flex items-center justify-center gap-1 -ml-1">
          {countryFlag && (
            <img
              src={countryFlag}
              alt="Country Flag"
              className="w-[12px] h-[12px] object-contain"
            />
          )}
          <span className="text-[10px] font-semibold align-middle whitespace-nowrap truncate max-w-[50px]">
            {name}
          </span>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <SelectionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          rank={rank}
        />
      )}
    </>
  );
};

export default WatchlistFrame;