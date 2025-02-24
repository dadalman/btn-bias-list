"use client";

import { useState } from "react";
import SelectionModal from "./SelectionModal"; // Import the Modal component
import Image from "next/image";

interface TopRankFrameProps {
  id: number;
  rank: number;
  name: string;
  image: string;
}

const TopRankFrame: React.FC<TopRankFrameProps> = ({
  name,
  rank,
  image,
  id,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-[250px] py-1 bg-[#01274F] text-[#F4FAFE] rounded-lg">
        {/* Rank */}
        <span className="text-lg font-bold mb-2">Top {rank}</span>

        {/* Clickable Circle - Opens Modal */}
        <button
          className="w-[85px] h-[85px] md:w-32 md:h-32 bg-[#92D0F3] rounded-full flex items-center justify-center shadow-lg mb-2"
          onClick={() => setIsModalOpen(true)}
        >
          <Image
            src={image}
            alt={name}
            width={112} // Equivalent to md:w-28 (28 * 4 = 112px)
            height={112} // Equivalent to md:h-28
            className="rounded-full object-cover object-top w-[75px] h-[75px] md:w-28 md:h-28"
          />
        </button>

        {/* Name */}
        <span className="text-lg font-semibold">{name}</span>
      </div>

      {/* Modal Component */}
      <SelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        rank={rank}
      />
    </>
  );
};

export default TopRankFrame;
