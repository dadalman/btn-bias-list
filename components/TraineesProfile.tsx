import Image from "next/image";

interface TraineesProfileProps {
  name: string;
  image: string;
  country: string;
}

const countryFlagMap: { [key: string]: string } = {
  MM: "/assets/icons/mm-circle.png",
  KR: "/assets/icons/kr-circle.png",
  JP: "/assets/icons/jp-circle.png",
  CA: "/assets/icons/ca-circle.png",
  US: "/assets/icons/us-circle.png",
  PH: "/assets/icons/ph-circle.png",
  TH: "/assets/icons/th-circle.png",
};

const TraineesProfile: React.FC<TraineesProfileProps> = ({
  name,
  image,
  country,
}) => {
  const countryFlag = country ? countryFlagMap[country] : "";

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[250px] py-1 bg-[#01274F] text-[#F4FAFE] rounded-lg">
      <button className="relative w-[65px] h-[65px] md:w-[100px] md:h-[100px] bg-[#b8c2d5] rounded-full flex items-center justify-center shadow-lg mb-2 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </button>

      {/* Name with flag */}
      <div className="flex items-center gap-1 -ml-2">
        {countryFlag && (
          <img
            src={countryFlag}
            alt="Country Flag"
            className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
          />
        )}
        <span className="text-md md:text-lg font-semibold mt-[2px]">
          {name}
        </span>
      </div>
    </div>
  );
};

export default TraineesProfile;
