import Image from "next/image";
import Navbar from "@/components/Navbar";
import BiasList from "@/components/BiasList";
import Watchlist from "@/components/Watchlist";
import { FaSave } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="w-auto flex flex-col items-center mt-16 md:mt-20 min-h-screen">
        <div className="w-auto  md:max-w-[950px] p-4 bg-[#01274F] shadow-[0px_4px_10px_rgba(0,0,0,0.5),_-0px_4px_10px_rgba(0,0,0,0.5)] flex flex-col items-center text-center">
          <img
            src="/assets/icons/btn-logo-transparent.png"
            alt="Bias List"
            className="w-28 h-28 md:w-32 md:h-32 mb-4 mt-5"
          />

          <h2
            className="font-markazi font-bold text-[28px] md:text-[40px] text-[#F4FAFE] -mt-6
        "
          >
            Be the NEXT
          </h2>
          <p className="font-markazi font-bold text-[20px] md:text-[30px] text-[#F4FAFE] -mt-2">
            My Bias List
          </p>

          <img
            src="/assets/images/star-divider.png"
            alt="Star Divider"
            className="w-500 h-auto my-4"
          />

          <BiasList />

          <img
            src="/assets/images/star-divider.png"
            alt="Star Divider"
            className="w-500 h-auto mt-4 mb-10"
          />

          <h3 className="font-inter text-[18px] md:text-[24px] text-[#F4FAFE] -mt-2">
            Watchlist
          </h3>

          <img
            src="/assets/images/divider.png"
            alt="Star Divider"
            className="w-500 h-auto mt-4 mb-4 md:mb-10"
          />

          <Watchlist />

          <img
            src="/assets/images/divider.png"
            alt="Star Divider"
            className="w-500 h-auto my-4 md:my-10"
          />

          <button className="flex items-center justify-center gap-2 px-6 py-3 mt-5 mb-10 border-2 border-[#F4FAFE] bg-[#002042] text-[#F4FAFE] text-lg font-semibold w-auto">
            <FaSave className="text-2xl" />
            Download Image
          </button>
        </div>
      </section>
    </>
  );
}
