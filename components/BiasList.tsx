"use client";

import { useState, useEffect } from "react";
import TopRankFrame from "./TopRankFrame";
import { getAllItems } from "@/utils/indexedDB";

interface Trainee {
  id: number;
  rank: number;
  name: string;
  image: string;
}

const BiasList = () => {
  const [biasList, setBiasList] = useState<Trainee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Trainee[] = await getAllItems();

      // Filter and sort trainees with ranks 1-9
      const filteredBiasList = data
        .filter((item) => item.rank >= 1 && item.rank <= 9)
        .sort((a, b) => a.rank - b.rank);

      setBiasList(filteredBiasList);
    };

    fetchData();

    // Listen for IndexedDB changes
    document.addEventListener("indexedDBUpdated", fetchData);
    return () => document.removeEventListener("indexedDBUpdated", fetchData);
  }, []);

  return (
    <section className="w-full flex flex-col items-center h-auto">
      <div className="w-full md:max-w-[90%] flex flex-wrap justify-center gap-4 md:gap-3 lg:gap-10">
        {biasList.map((bias) => (
          <div key={bias.id}>
            <TopRankFrame
              name={bias.name}
              rank={bias.rank}
              image={bias.image}
              id={bias.id}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BiasList;
