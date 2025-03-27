"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import indoor1 from "../../public/activity/activity3.webp";
import { NextButton, PrevButton } from "../icons/icons";

const ImageSwiper = ({
  images = [1, 2, 3, 5, 6, 7],
  index,
  btnName = "",
  paginationClass = "pagination_0",
}) => {
  let buttonName = index !== undefined ? index : btnName;

  const swiperButtonNext = `.button-next-${buttonName}`;
  const swiperButtonPrev = `.button-prev-${buttonName}`;

  return (
    <div className="w-full bg-transparent slider">
      <Swiper
        speed={1000}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2.2}
        spaceBetween={10}
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{
          nextEl: swiperButtonNext,
          prevEl: swiperButtonPrev,
        }}
        pagination={{
          el: "." + paginationClass,
          clickable: true,
        }}
        
      >
        {images?.map((roomImage, idx) => (
          <SwiperSlide
            key={idx}
            className="w-full h-full relative lg:aspect-[4/3] aspect-[3/2.5]"
          >
            <Image
              src={roomImage.src || roomImage || indoor1}
              className="h-full object-cover"
              alt={"room"}
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-2 justify-center w-fit mx-auto mt-5 items-center">
        <button
          className={`button-prev-${buttonName} py-2 px-4 hover:scale-105 border border-transparent rounded-sm hover:shadow-xl shadow-[#f69f2b] hover:border-[#f69f2b] active:scale-95`}
          style={{borderRadius:"100px",height:"40px",width:"40px",background:"#29422C"}}
        >
          <PrevButton />
        </button>
        <div
          className={`items-center justify-center gap-1 ${paginationClass} ${images?.length > 5 ? "lg:flex hidden" : "flex"}`}
        />
        <button
          className={`button-next-${buttonName} py-2 px-4 hover:scale-105 border border-transparent rounded-sm hover:shadow-xl shadow-[#f69f2b] hover:border-[#f69f2b] active:scale-95`}
          style={{borderRadius:"100px",height:"40px",width:"40px",background:"#29422C"}}
        >
          <NextButton />
        </button>
      </div>
    </div>
  );
};

export default ImageSwiper;
