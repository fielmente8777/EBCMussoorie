"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Image from "next/image";

import indoor1 from "../../public/activity/activity3.webp";
const ImageSwiper = () => {
  return (
    <div>
      <Swiper
        autoplay={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        spaceBetween={10}
        slidergap={30}
        modules={[Autoplay, Navigation, EffectCoverflow]}
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
        className="w-full h-[250px] md:h-[500px] rounded-sm card_swiper shadow-2xl"
      >
        {[1, 2, 3, 4, 5, 6]?.map((roomImage, index) => {
          return (
            <SwiperSlide
              key={index}
              className="w-full h-full relative aspect-[4/3]"
            >
              <Image
                src={indoor1}
                className="h-full object-cover"
                alt="roomImage"
                fill
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
