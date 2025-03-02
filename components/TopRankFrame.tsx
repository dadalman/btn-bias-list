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
}

const TopRankFrame: React.FC<TopRankFrameProps> = ({
  name,
  rank,
  image,
  id,
  downloading, // Receive the prop
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full md:py-1 py-1 bg-[#01274F] text-[#F4FAFE] rounded-lg">
        <span className="text-lg font-bold">Top {rank}</span>

        {/* Show only when downloading */}
        {/* {downloading && <div style={{ height: "10px" }}></div>} */}

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

          <div className="absolute md:bottom-[10px] md:left-[15px] bottom-[10px] left-[15px] transform -translate-x-3 translate-y-3">
            <img
              src="/assets/icons/btn-crest-logo-transparent.png"
              alt="Crest Logo"
              className="w-[28px] h-[28px] md:w-[45px] md:h-[45px]"
            />
          </div>
        </button>

        {/* Show only when downloading */}
        {/* {downloading && <div style={{ height: "20px" }}></div>} */}
        <div style={{ height: "5px" }}></div>

        <span className="text-lg font-bold">{name}</span>
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
