import Image from "next/image";

interface TraineesProfileProps {
  name: string;
  image: string;
}

const TraineesProfile: React.FC<TraineesProfileProps> = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[250px] py-1 bg-[#01274F] text-[#F4FAFE] rounded-lg">
      <button className="relative w-[65px] h-[65px] md:w-[100px] md:h-[100px] bg-[#92D0F3] rounded-full flex items-center justify-center shadow-lg mb-2 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </button>

      {/* Name */}
      <span className="text-md md:text-lg font-semibold">{name}</span>
    </div>
  );
};

export default TraineesProfile;
