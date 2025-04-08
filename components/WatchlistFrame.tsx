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
      <div className="flex flex-col items-center justify-center w-full max-w-[250px] py-2 bg-[#01274F] text-[#F4FAFE] rounded-lg">
        {/* Clickable Circle - Opens Modal */}
        <button
          className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] bg-[#92D0F3] rounded-full flex items-center justify-center shadow-lg "
          onClick={() => setIsModalOpen(true)}
        >
          <div className="w-[57px] h-[57px] md:w-[90px] md:h-[90px] bg-[#b8c2d5] rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={image}
              alt={name}
              width="90"
              height="90"
              className="rounded-full object-cover object-top w-[57px] h-[57px] md:w-[90px] md:h-[90px]"
            />
          </div>
        </button>

        {/* Name with flag - Aligned horizontally */}
        <div className="flex items-center justify-center gap-1 -ml-2">
          {countryFlag && (
            <img
              src={countryFlag}
              alt="Country Flag"
              className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] object-contain"
            />
          )}
          <span className="text-md md:text-lg font-semibold align-middle whitespace-nowrap pt-1">
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
