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
const ImageSwiper = ({ images = [1, 2, 3, 5, 6, 7], index, btnName="" }) => {
  let buttonName;

  if (index === undefined) {
    buttonName = btnName;
  } else {
    buttonName = index;
  }

  const swiperButtonNext = ".button-next" + buttonName;
  const swiperButtonPrev = ".button-prev" + buttonName;
  return (
    <div className="w-full bg-transparent slider">
      <Swiper
        // autoplay={true}
        speed={1000}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        spaceBetween={10}
        slidergap={30}
        modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
        navigation={{
          nextEl: ".button-next" + buttonName,
          prevEl: ".button-prev" + buttonName,
        }}
        pagination={{
          el: ".pagination",
          clickable: true,
        }}
        coverflowEffect={{
          rotate: 0,
          //   stretch: 100,
          depth: 0,
          modifier: 3,
          slideShadows: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          //   1024: {
          //     slidesPerView: 3,
          //     spaceBetween: 20,
          //   },
        }}
        className=""
      >
        {images?.map((roomImage, index) => {
          return (
            <SwiperSlide
              key={index}
              className="w-full h-full relative aspect-[4/2.5]"
            >
              <Image
                src={roomImage.src || roomImage || indoor1}
                // src={indoor1}
                className="h-full object-cover"
                alt={"room" || title}
                fill
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div className="flex gap-2 justify-center mt-5 items-center">
        <button
          className={`p-2 hover:scale-105 active:scale-95 ${".button-prev" + buttonName}`}
        >
          <PrevButton />
        </button>
        <div className={`flex items-center justify-center gap-1 pagination`} />
        <button
          className={`p-2 hover:scale-105 active:scale-95 ${".button-next" + buttonName}`}
        >
          <NextButton />
        </button>
      </div> */}
    </div>
  );
};

export default ImageSwiper;
