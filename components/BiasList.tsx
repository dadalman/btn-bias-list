import TopRankFrame from "./TopRankFrame";
import biasList from "@/data/biasList";

const BiasList = () => {
  return (
    <section className="w-full flex flex-col items-center h-auto">
      <div className="w-full md:max-w-[90%] flex flex-wrap justify-center gap-4 md:gap-10">
        {biasList.map((bias, index) => (
          <div key={bias.id}>
            <TopRankFrame
              name={bias.name}
              rank={bias.rank}
              image={bias.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BiasList;
