"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import c1 from "../../../public/images/01 Picnic_11zon.jpg";
import Image from "next/image";

const BottomGallery = () => {
  const data = [c1, c1, c1, c1, c1, c1, c1];
  return (
    <div className="w-full overflow-hidden  ">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        pagination={{
          el: "#bullets-Portfolio",
        }}
        slidesPerView={1}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        modules={[Pagination, Autoplay, Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="w-full h-[400px]"
      >
        {data.map((roomData, index) => {
          return (
            <SwiperSlide key={index} className="h-[100%]">
              <Image
                src={roomData}
                alt={`img${index}`}
                className="h-[100%] object-cover"
                width={600}
                height={400}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center mt-8">
        <button className="px-8 py-1 bg-[#D5D5D5] rounded-sm text-[20px]">
          Instagram
        </button>
      </div>
    </div>
  );
};

export default BottomGallery;
