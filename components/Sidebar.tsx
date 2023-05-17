import Link from "next/link";
import React from "react";
import { GiCrownedSkull } from "react-icons/gi";
import {
  AiOutlineHome,
  AiOutlineFieldTime,
  AiOutlinePlusSquare,
  AiOutlineSetting,
  AiOutlineLogout,
} from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="w-[235px] h-screen px-4 pt-[72px] border boder-white flex flex-col ">
      <div className="flex items-center">
        <GiCrownedSkull color="#F8B319" size={40} />
        <Link href="/" className="text-primary text-2xl font-extrabold">
          King Movies
        </Link>
      </div>
      <div className="mt-4 px-2 flex justify-between flex-col h-full">
        <div>
          <p className="text-white/50">Menu</p>
          <div className="flex items-center space-x-3  py-4 w-full hover:text-primary">
            <AiOutlineHome size={18} />
            <Link href="/">Home</Link>
          </div>
          <div className="flex items-center space-x-3  py-4 w-full hover:text-primary">
            <AiOutlineFieldTime size={18} />
            <Link href="/">Recent</Link>
          </div>
          <div className="flex items-center space-x-3  py-4 w-full hover:text-primary">
            <AiOutlinePlusSquare size={18} />
            <Link href="/">Watchlist</Link>
          </div>
        </div>
        <div>
          <p className="text-white/50">General</p>
          <div className="flex items-center space-x-3  py-4 w-full hover:text-primary">
            <AiOutlineSetting size={18} />
            <Link href="/">Settings</Link>
          </div>
          <div className="flex items-center space-x-3  py-4 w-full hover:text-primary">
            <AiOutlineLogout size={18} />
            <Link href="/">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
