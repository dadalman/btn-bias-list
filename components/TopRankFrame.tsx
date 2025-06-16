"use client";

import { useState } from "react";
import SelectionModal from "./SelectionModal"; // Import the Modal component
import Image from "next/image";

interface TopRankFrameProps {
  id: number;
  rank: number;
  name: string;
  image: string;
  downloading: boolean; // New prop
  country?: string; // Make country optional
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

const TopRankFrame: React.FC<TopRankFrameProps> = ({
  name,
  rank,
  image,
  id,
  downloading, // Receive the prop
  country,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const countryFlag = country ? countryFlagMap[country] : "";

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full py-1 bg-[#01274F] text-[#F4FAFE] rounded-lg">
        <span className="text-sm font-bold mb-1">Top {rank}</span>

        <button
          className="relative w-[70px] h-[70px] bg-[#92D0F3] rounded-full flex items-center justify-center shadow-lg mb-1"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="w-[62px] h-[62px] bg-[#b8c2d5] rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="rounded-full object-cover object-top w-full h-full"
            />
          </div>

          {/* Left Crest - Smaller for story format */}
          <div className="absolute bottom-[8px] left-[8px] transform -translate-x-2 translate-y-2">
            <img
              src="/assets/icons/btn-crest-logo-transparent.png"
              alt="Crest Logo"
              className="w-[20px] h-[20px]"
            />
          </div>
        </button>

        {/* Name with flag - Compact layout */}
        <div className="flex items-center gap-1 -ml-1">
          {countryFlag && (
            <img
              src={countryFlag}
              alt="Country Flag"
              className="w-[14px] h-[14px]"
            />
          )}
          <span className="text-xs font-bold truncate max-w-[60px]">{name}</span>
        </div>
      </div>

      <SelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        rank={rank}
      />
    </>
  );
};

export default TopRankFrame;