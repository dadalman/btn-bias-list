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
      <div className="w-full max-w-[90%] flex flex-wrap justify-center gap-3 md:gap-2 lg:gap-7">
        {watchList.map((watchlist) => (
          <div key={watchlist.id}>
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
