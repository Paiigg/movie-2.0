import Popular from "@/components/Popular";
import Thumbnail from "@/components/Thumbnail";
import Image from "next/image";
import { BiSearchAlt, BiFilterAlt } from "react-icons/bi";

export default function Home() {
  return (
    <div className="md:w-[870px] w-auto md:pl-16 md:pr-8 py-10 px-4">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold ">Movie</p>
        <div className="relative  md:w-[315px] w-[250px] ">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-12 py-2 rounded-lg focus:outline-none bg-secondary/20 "
          />
          <BiSearchAlt size={20} className="absolute left-6 top-[25%]" />
          <BiFilterAlt size={20} className="absolute right-6 top-[25%]" />
        </div>
      </div>
      <Thumbnail />
      <Popular />
    </div>
  );
}
