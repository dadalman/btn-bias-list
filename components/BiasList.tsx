"use client";

import { useState, useEffect } from "react";
import TopRankFrame from "./TopRankFrame";
import { getAllItems } from "@/utils/indexedDB";

interface Trainee {
  id: number;
  rank: number;
  name: string;
  image: string;
  country: string;
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
      {/* Optimized grid for Instagram story format */}
      <div className="w-full grid grid-cols-3 gap-2 justify-items-center">
        {biasList.map((bias) => (
          <div key={bias.id} className="w-full flex justify-center">
            <TopRankFrame
              name={bias.name}
              rank={bias.rank}
              image={bias.image}
              id={bias.id}
              downloading={downloading} // Pass state as prop
              country={bias.country}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BiasList;