"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function Popular() {
  const [popular, setPopular] = useState<any[]>([]);

  useEffect(() => {
    const getPopular = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      console.log(response.data.results);
      setPopular(response.data.results);
    };
    getPopular();
  }, []);

  interface Props {
    src?: string;
  }

  const PopularCard = ({ src }: Props) => (
    <div className="relative inline-block">
      <img
        src={src || " "}
        alt="image"
        width={237}
        height={298}
        className="inline-block p-2 cursor-pointer rounded-xl "
      />
    </div>
  );

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };

  return (
    <div className="mt-10 overflow-x-hidden w">
      <h3 className="mb-4 text-2xl font-semibold">Upcoming on King Movies</h3>
      <div className="relative flex items-center">
        {/* <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        /> */}
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {popular.map((data) => (
            <PopularCard
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            />
          ))}
        </div>
        {/* <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        /> */}
      </div>
    </div>
  );
}
