"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

const RoomSwiperCard = ({ roomData }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-[#D5D5D5] min-h-[470px] h-[470px] ">
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="w-full card_swiper"
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        speed="1000"
      >
        {roomData?.image?.map((item, index) => (
          <SwiperSlide key={index} className="w-full relative aspect-[3/1.8]">
            <Image
              src={item}
              alt={`Room image ${index}`}
              className="object-cover"
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="w-full flex justify-center items-center gap-3 py-3">
        <button className="slide_page_indicator"></button>
      </div> */}
      <div className="flex flex-col gap-2 p-3 md:p-4 text-center">
        <h1 className="text-[#29422C] lg:text-3xl text-xl text-center font-medium">
          {roomData.roomName}
        </h1>
        <p className="text-lg">{roomData.description}</p>
      </div>
    </div>
  );
};

export default RoomSwiperCard;
