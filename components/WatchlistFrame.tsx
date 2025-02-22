interface WatchlistFrameProps {
  name: string;
  image: string;
}

const WatchlistFrame: React.FC<WatchlistFrameProps> = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[250px] py-1 bg-[#01274F] text-[#F4FAFE] rounded-lg">
      {/* Clickable Circle */}
      <button className="w-[65px] h-[65px] md:w-[100px] md:h-[100px] bg-[#92D0F3] rounded-full flex items-center justify-center shadow-lg mb-2">
        <img
          src={image}
          alt={name}
          className="w-[57px] h-[57px] md:w-[90px] md:h-[90px] rounded-full object-cover"
        />
      </button>

      {/* Name */}
      <span className="text-md md:text-lg font-semibold">{name}</span>
    </div>
  );
};

export default WatchlistFrame;
