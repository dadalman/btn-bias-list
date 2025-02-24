"use client";

import { useState, useEffect } from "react";
import WatchlistFrame from "./WatchlistFrame";
import { getAllItems } from "@/utils/indexedDB";

interface Trainee {
  id: number;
  rank: number;
  name: string;
  image: string;
}

const Watchlist = () => {
  const [watchList, setWatchList] = useState<Trainee[]>([]);

  useEffect(() => {
    console.log("Fetching Watchlist from DB");

    const fetchData = async () => {
      const data: Trainee[] = await getAllItems();
      console.log("All Trainees:", data);

      // Filter and sort trainees with ranks 10-21
      const filteredWatchList = data
        .filter((item) => item.rank >= 10 && item.rank <= 21)
        .sort((a, b) => a.rank - b.rank);

      console.log("Filtered Watchlist:", filteredWatchList);

      setWatchList(filteredWatchList);
    };

    fetchData();

    // Listen for IndexedDB changes
    document.addEventListener("indexedDBUpdated", fetchData);
    return () => document.removeEventListener("indexedDBUpdated", fetchData);
  }, []);

  return (
    <section className="w-full flex flex-col items-center h-auto">
      <div className="w-full md:max-w-[90%] flex flex-wrap justify-center gap-4 md:gap-10">
        {watchList.map((watchlist) => (
          <div key={watchlist.id}>
            <WatchlistFrame
              name={watchlist.name}
              image={watchlist.image}
              id={watchlist.id}
              rank={watchlist.rank}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Watchlist;
