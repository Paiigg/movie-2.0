import Thumbnail from "@/components/Thumbnail";
import Image from "next/image";
import { BiSearchAlt, BiFilterAlt } from "react-icons/bi";

export default function Home() {
  return (
    <div className="w-[870px] pl-16 pr-8 py-[73px]">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold ">Movie</p>
        <div className="relative  w-[315px]">
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none bg-secondary/20 px-12 py-2 rounded-lg w-full "
          />
          <BiSearchAlt size={20} className="absolute left-6 top-[25%]" />
          <BiFilterAlt size={20} className="absolute right-6 top-[25%]" />
        </div>
      </div>
      <Thumbnail />
    </div>
  );
}
