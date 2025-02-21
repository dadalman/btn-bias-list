import Image from "next/image";
import Navbar from "@/components/Navbar";
import BiasList from "@/components/BiasList";
import Watchlist from "@/components/Watchlist";

export default function Home() {
  return (
    <>
      <BiasList />
      <Watchlist />
    </>
  );
}
