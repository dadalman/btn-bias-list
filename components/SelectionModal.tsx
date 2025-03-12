"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import traineesTransparent from "@/data/traineesTransparent";
import TraineesProfile from "./TraineesProfile";
import { updateItem, getAllItems } from "@/utils/indexedDB";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  rank: number;
}

const SelectionModal: React.FC<ModalProps> = ({ isOpen, onClose, rank }) => {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  // Filter trainees based on search input
  const filteredTrainees = traineesTransparent.filter((trainee) =>
    trainee.name.toLowerCase().includes(search.toLowerCase())
  );

  // Function to update trainee by rank in IndexedDB
  const updateTraineeByRank = async (
    rank: number,
    name: string,
    image: string,
    country: string
  ) => {
    const traineeWithRank = {
      id: rank,
      name,
      image,
      country,
      rank,
    };

    await updateItem(traineeWithRank);
  };

  // Handle trainee selection - Update trainee based on rank
  const handleTraineeClick = async (trainee: {
    name: string;
    image: string;
    country: string;
  }) => {
    console.log("TRAINEE DETAILS:", trainee);

    await updateTraineeByRank(
      rank,
      trainee.name,
      trainee.image,
      trainee.country
    );
    onClose();
  };

  // Reset trainee to default based on rank
  const handleRemoveTrainee = async () => {
    await updateTraineeByRank(rank, "", "/assets/images/blank-image.png", "");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[99999]">
      <div className="bg-[#01274F] p-10 rounded-[2px] shadow-lg text-center max-w-[90%] w-[100%] md:w-[90%] h-[80%] flex flex-col z-[100000]">
        {/* Search Bar */}
        <div className="relative w-full md:w-auto">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#01274F]"
            size={20}
          />
          <input
            type="text"
            placeholder="Search trainee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 md:py-3 text-[#01274F] bg-[#F4FAFE] rounded-[2px] focus:outline-none"
          />
        </div>

        <hr className="mt-[20px]" />

        {/* Scrollable Trainee List */}
        <section className="w-full flex-grow flex flex-col items-center overflow-y-auto pt-[20px]">
          <div className="w-full flex flex-wrap justify-center gap-4 md:gap-10">
            {filteredTrainees.length > 0 ? (
              filteredTrainees.map((trainee) => (
                <div
                  key={trainee.name}
                  onClick={() => handleTraineeClick(trainee)}
                  className="cursor-pointer"
                >
                  <TraineesProfile
                    name={trainee.name}
                    image={trainee.image}
                    country={trainee.country}
                  />
                </div>
              ))
            ) : (
              <p className="text-[#F4FAFE]">No trainees available.</p>
            )}
          </div>
        </section>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-end items-center gap-4 mt-5 w-full">
          <button
            className="px-6 py-2 md:py-3 border-2 border-[#F4FAFE] bg-[#002042] text-[#F4FAFE] font-semibold w-full md:w-auto rounded-[2px]"
            onClick={handleRemoveTrainee}
          >
            Remove Trainee
          </button>
          <button
            className="px-6 py-2 md:py-3 border-2 border-[#F4FAFE] bg-[#F4FAFE] text-[#002042] font-semibold w-full md:w-auto rounded-[2px]"
            onClick={onClose}
          >
            Close Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionModal;
