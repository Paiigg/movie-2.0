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
    <>
      <div className="w-[235px] h-screen px-4 pt-10  md:flex flex-col hidden sticky top-0">
        <div className="flex items-center">
          <GiCrownedSkull color="#F8B319" size={40} />
          <Link href="/" className="text-2xl font-extrabold text-primary">
            King Movies
          </Link>
        </div>
        <div className="flex flex-col justify-between h-full px-2 mt-4">
          <div>
            <p className="text-white/50">Menu</p>
            <div className="flex items-center w-full py-4 space-x-3 hover:text-primary">
              <AiOutlineHome size={18} />
              <Link href="/">Home</Link>
            </div>
            <div className="flex items-center w-full py-4 space-x-3 hover:text-primary">
              <AiOutlineFieldTime size={18} />
              <Link href="/">Recent</Link>
            </div>
            <div className="flex items-center w-full py-4 space-x-3 hover:text-primary">
              <AiOutlinePlusSquare size={18} />
              <Link href="/">Watchlist</Link>
            </div>
          </div>
          <div>
            <p className="text-white/50">General</p>
            <div className="flex items-center w-full py-4 space-x-3 hover:text-primary">
              <AiOutlineSetting size={18} />
              <Link href="/">Settings</Link>
            </div>
            <div className="flex items-center w-full py-4 space-x-3 hover:text-primary">
              <AiOutlineLogout size={18} />
              <Link href="/">Logout</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-5 left-[50%] translate-x-[-50%] z-50 md:hidden bg-white rounded-full p-4 shadow-lg">
        <div className="flex items-center gap-6">
          <AiOutlineHome size={30} className="hover:text-primary text-[#000]" />
          <AiOutlineFieldTime
            className="hover:text-primary text-[#000]"
            size={30}
          />
          <AiOutlinePlusSquare
            className="hover:text-primary text-[#000]"
            size={30}
          />
        </div>
      </div>
    </>
  );
}
