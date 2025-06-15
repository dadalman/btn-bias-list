"use client";

import { Search } from "lucide-react";
import { SetStateAction, useState } from "react";
import traineesTransparent from "@/data/traineesTransparent";
import TraineesProfile from "@/components/TraineesProfile";
import TraineeModal from "@/components/TraineeModal";

export default function TraineesList() {
  const [search, setSearch] = useState("");
  const [selectedTrainee, setSelectedTrainee] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // Filter trainees based on search input
  const filteredTrainees = traineesTransparent.filter((trainee) =>
    trainee.name.toLowerCase().includes(search.toLowerCase())
  );

  // Handle clicking on a trainee to show modal
  function handleTraineeClick(trainee: any) {
    setSelectedTrainee(trainee);

    console.log("TRAINEE PASSED:", trainee);

    setModalOpen(true);
  }

  return (
    <section
      className="w-auto flex flex-col items-center mt-16 md:mt-20 min-h-screen"
      style={{ backgroundColor: "#01274F" }}
    >
      <div className="w-auto md:w-[950px] sm:w-[556px] p-4 bg-[#01274F] shadow-[0px_4px_10px_rgba(0,0,0,0.5)] flex flex-col items-center text-center text-[#F4FAFE]">
        {/* Title and Description */}
        <h2 className="text-xl md:text-2xl font-bold mt-2">Trainees List</h2>
        <p className="text-md md:text-lg mb-4">
          (Click on a trainee to see more details about them.)
        </p>

        {/* Search Bar */}
        <div className="relative w-full">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#01274F]"
            size={20}
          />
          <input
            type="text"
            placeholder="Search trainee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-[#01274F] bg-[#F4FAFE] rounded-[2px] border border-[#01274F] focus:outline-none"
          />
        </div>

        <hr className="mt-[20px] w-full border-t border-[#F4FAFE]" />

        {/* Trainee List */}
        <section className="w-full flex-grow flex flex-col items-center overflow-y-auto pt-[20px]">
          <div className="w-full flex flex-wrap justify-center gap-6 md:gap-12">
            {filteredTrainees.length > 0 ? (
              filteredTrainees.map((trainee) => (
                <div
                  key={trainee.id}
                  onClick={() => handleTraineeClick(trainee)}
                  className="cursor-pointer w-15"
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
      </div>

      {/* Trainee Modal */}
      <TraineeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        trainee={selectedTrainee}
      />
    </section>
  );
}
