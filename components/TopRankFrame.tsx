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
      <div className="flex flex-col items-center justify-center w-full md:py-1 py-1 bg-[#01274F] text-[#F4FAFE] rounded-lg">
        <span className="text-lg font-bold">Top {rank}</span>

        <div style={{ height: "15px" }}></div>

        <button
          className="relative w-[85px] h-[85px] md:w-32 md:h-32 bg-[#92D0F3] rounded-full flex items-center justify-center shadow-lg"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="w-[75px] h-[75px] md:w-28 md:h-28 bg-[#b8c2d5] rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="rounded-full object-cover object-top w-full h-full"
            />
          </div>

          {/* Left Crest */}
          <div className="absolute md:bottom-[10px] md:left-[15px] bottom-[10px] left-[15px] transform -translate-x-3 translate-y-3">
            <img
              src="/assets/icons/btn-crest-logo-transparent.png"
              alt="Crest Logo"
              className="w-[28px] h-[28px] md:w-[45px] md:h-[45px]"
            />
          </div>

          {/* Right Flag - Only show if country is defined */}
          {/* {countryFlag && (
            <div className="absolute md:bottom-[10px] md:right-[15px] bottom-[10px] right-[15px] transform translate-x-3 translate-y-3">
              <img
                src={countryFlag}
                alt="Country Flag"
                className="w-[28px] h-[28px] md:w-[45px] md:h-[45px]"
              />
            </div>
          )} */}
        </button>

        <div style={{ height: "5px" }}></div>

        {/* Name with flag */}
        <div className="flex items-center gap-1 -ml-2">
          {countryFlag && (
            <img
              src={countryFlag}
              alt="Country Flag"
              className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
            />
          )}
          <span className="text-lg font-bold">{name}</span>
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
