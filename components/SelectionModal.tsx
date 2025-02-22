import React, { useState } from "react";
import { Search } from "lucide-react";
import trainees from "@/data/trainees";
import TraineesProfile from "./TraineesProfile";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  listType: string;
  id: number;
}

const SelectionModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  listType,
  id,
}) => {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  // Filter trainees based on search input
  const filteredTrainees = trainees.filter((trainee) =>
    trainee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#01274F] p-10 rounded-[2px] shadow-lg text-center max-w-[90%] w-[100%] md:w-[90%] h-[80%]">
        {/* Search Bar with Icon */}
        <div className="relative w-full md:w-auto ">
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
        <section className="w-full flex flex-col items-center h-[67%] md:h-[77%] overflow-y-auto pt-[20px]">
          <div className="w-full flex flex-wrap justify-center gap-4 md:gap-10">
            {filteredTrainees.length > 0 ? (
              filteredTrainees.map((trainee) => (
                <div key={trainee.id}>
                  <TraineesProfile name={trainee.name} image={trainee.image} />
                </div>
              ))
            ) : (
              <p className="text-[#F4FAFE]">No trainees found.</p>
            )}
          </div>
        </section>

        {/* Responsive Button Container */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-5 w-[100%] md:w-auto">
          <button
            className="px-6 py-2 md:py-3 border-2 border-[#F4FAFE] bg-[#002042] text-[#F4FAFE] text-md md:text-lg font-semibold w-full md:w-auto rounded-[2px]"
            onClick={onClose}
          >
            Remove Trainee
          </button>
          <button
            className="px-6 py-2 md:py-3 border-2 border-[#F4FAFE] bg-[#F4FAFE] text-[#002042] text-md md:text-lg font-semibold w-full md:w-auto rounded-[2px]"
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
