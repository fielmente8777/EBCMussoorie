"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import PopupForm from "../PopupForm";

const RoomSwiperCard = ({ roomData, setShowModal }) => {
  return (
    <>
      <div className="rounded-lg overflow-hidden bg-[#D5D5D5] lg:min-h-[495px] min-h-[370px] h-full ">
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
            <SwiperSlide
              key={index}
              className="w-full relative aspect-[3/2.5] lg:aspect-[3/1.8]"
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
        {/* <div className="w-full flex justify-center items-center gap-3 py-3">
        <button className="slide_page_indicator"></button>
      </div> */}
        <div className="flex flex-col justify-between h-full w-full gap-2 p-3 md:p-4 text-center">
          <h3 className="text-[#29422C] lg:text-3xl text-xl text-center font-medium">
            {roomData.roomName}
          </h3>
          <p className="lg:text-lg text-sm">{roomData.description}</p>
          <button
            onClick={() => setShowModal(true)}
            className="border w-fit mx-auto mt-2 border-[#29422C] bg-[#29422C] text-md px-8 py-2 text-white rounded-lg hover:bg-transparent hover:text-primary duration-300 active:scale-75 hover:scale-105 hover:text-black"
          >
            Book Now
          </button>
        </div>
      </div>
      
    </>
  );
};

export default RoomSwiperCard;
