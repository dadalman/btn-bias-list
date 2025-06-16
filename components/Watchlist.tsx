"use client";

import { useState, useEffect } from "react";
import WatchlistFrame from "./WatchlistFrame";
import { getAllItems } from "@/utils/indexedDB";

interface Trainee {
  id: number;
  rank: number;
  name: string;
  image: string;
  country: string;
}

const Watchlist = () => {
  const [watchList, setWatchList] = useState<Trainee[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: Trainee[] = await getAllItems();

      // Filter and sort trainees with ranks 10-21
      const filteredWatchList = data
        .filter((item) => item.rank >= 10 && item.rank <= 21)
        .sort((a, b) => a.rank - b.rank)
        .map((item) => ({
          ...item,
          name: item.name === "TRAINEE" ? "" : item.name, // Replace "TRAINEE" with ""
        }));

      setWatchList(filteredWatchList);
    };

    fetchData();

    // Listen for IndexedDB changes
    document.addEventListener("indexedDBUpdated", fetchData);
    return () => document.removeEventListener("indexedDBUpdated", fetchData);
  }, []);

  return (
    <section className="w-full flex flex-col items-center h-auto">
      {/* Optimized grid for Instagram story format - 4 columns for watchlist */}
      <div className="w-full grid grid-cols-4 gap-1 justify-items-center">
        {watchList.map((watchlist) => (
          <div key={watchlist.id} className="w-full flex justify-center">
            <WatchlistFrame
              name={watchlist.name}
              image={watchlist.image}
              id={watchlist.id}
              rank={watchlist.rank}
              country={watchlist.country}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Watchlist;