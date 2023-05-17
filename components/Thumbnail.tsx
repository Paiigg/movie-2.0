"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Thumbnail() {
  const [data, setData] = useState([]);
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
    <div className="h-[350px]  text-[#000] w-[770px] mt-11">
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
            <img
              src={`https://image.tmdb.org/t/p/original${datas.backdrop_path}`}
              alt=""
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
