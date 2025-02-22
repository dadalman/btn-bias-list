import watchList from "@/data/watchList";
import WatchlistFrame from "./WatchlistFrame";

const Watchlist = () => {
  return (
    <section className="w-full flex flex-col items-center h-auto">
      <div className="w-full md:max-w-[90%] flex flex-wrap justify-center gap-4 md:gap-10">
        {watchList.map((watchlist, index) => (
          <div key={watchlist.id}>
            <WatchlistFrame name={watchlist.name} image={watchlist.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Watchlist;
