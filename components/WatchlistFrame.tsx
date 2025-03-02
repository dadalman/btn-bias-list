"use client";

import { useState } from "react";
import SelectionModal from "./SelectionModal"; // Import Modal component
import Image from "next/image";

interface WatchlistFrameProps {
  id: number;
  name: string;
  image: string;
  rank: number;
}

const WatchlistFrame: React.FC<WatchlistFrameProps> = ({
  name,
  image,
  rank,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-[250px] py-2 bg-[#01274F] text-[#F4FAFE] rounded-lg">
        {/* Clickable Circle - Opens Modal */}
        <button
          className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] bg-[#92D0F3] rounded-full flex items-center justify-center shadow-lg "
          onClick={() => setIsModalOpen(true)} // ✅ Ensures modal opens correctly
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

        {/* Name */}
        <span className="text-md md:text-lg font-semibold">{name}</span>
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
