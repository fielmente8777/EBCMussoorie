"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const RoomSwiperCard = ({ roomData }) => {
  return (
    <>
      <div className="rounded-lg overflow-hidden lg:min-h-[495px] bg-[#F1EECB] min-h-[370px] h-full">
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          pagination={true}
          className="w-full card_swiper lp_roomcard"
          speed="1000"
        >
          {roomData?.image?.map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-full relative aspect-[3/2.5] lg:aspect-[4/2.8]"
            >
              <Image
                src={item}
                alt={`Room image ${index}`}
                className="object-cover"
                fill
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex flex-col justify-between h-full w-full gap-2 lg:py-5 py-4 px-3 lg:px-4 text-center bg-[#F1EECB]">
          <h3 className="text-primary desc_1 text-center font-semibold">
            {roomData.roomName}
          </h3>
          <p className="desc_2 text-primary font-normal italic">{roomData.description}</p>
        </div>
      </div>
    </>
  );
};

export default RoomSwiperCard;
