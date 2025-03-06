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

interface BiasListProps {
  downloading: boolean; // New prop
}

const BiasList: React.FC<BiasListProps> = ({ downloading }) => {
  const [biasList, setBiasList] = useState<Trainee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Trainee[] = await getAllItems();

      const filteredBiasList = data
        .filter((item) => item.rank >= 1 && item.rank <= 9)
        .sort((a, b) => a.rank - b.rank)
        .map((item) => ({
          ...item,
          name: item.name === "TRAINEE" ? "" : item.name, // Replace "TRAINEE" with ""
        }));

      setBiasList(filteredBiasList);
    };

    fetchData();

    document.addEventListener("indexedDBUpdated", fetchData);
    return () => document.removeEventListener("indexedDBUpdated", fetchData);
  }, []);

  return (
    <section className="w-full flex flex-col items-center h-auto">
      <div className="w-full sm:w-[556px] md:w-[556px] lg:w-full flex flex-wrap justify-center gap-4 md:gap-3 lg:gap-10">
        {biasList.map((bias) => (
          <div key={bias.id}>
            <TopRankFrame
              name={bias.name}
              rank={bias.rank}
              image={bias.image}
              id={bias.id}
              downloading={downloading} // Pass state as prop
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BiasList;
