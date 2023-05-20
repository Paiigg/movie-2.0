"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { AiOutlinePlus } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Thumbnail() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
      );
      console.log(response.data.results);
      setData(response.data.results);
    };
    getMovies();
  }, []);

  return (
    <div className="md:h-[250px] h-[350px] w-[350px] md:w-full  mx-auto text-[#000]  mt-11">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((datas) => (
          <SwiperSlide>
            <div className="relative">
              <img
                src={`https://image.tmdb.org/t/p/original${datas.backdrop_path}`}
                alt=""
                className="object-cover h-[350px] w-full md:h-full opacity-50"
              />
              <p className="absolute text-2xl font-bold text-white top-5 left-5">
                {datas.title}
              </p>

              <div className="absolute items-center justify-center hidden px-6 py-2 space-x-3 text-white rounded-lg md:flex top-48 left-4 bg-secondary/20">
                <AiOutlinePlus />
                <p>Watchlist</p>
              </div>
              <div className="absolute items-center hidden px-6 py-2 space-x-3 rounded-lg md:flex top-48 right-4 bg-primary">
                <p className="font-semibold">Watch Now</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
