"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

const SpecilizationCard = ({ cardData, index, aspectRatio }) => {
  return (
    <div className={`lg:grid grid-cols-2 flex ${index % 2 === 0 ? "flex-col" : "flex-col-reverse"} bg-[#D5D5D5] overflow-hidden lg:mb-0 mb-5`}>
      <div
        className={`${
          index === 1 || index === 3 ? "order-2" : ""
        }`}
      >
        <Swiper
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          speed={1000}
          pagination={{
            el: "#bullets-Portfolio",
          }}
          slidesPerView={1}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          modules={[Pagination, Autoplay, Navigation]}
        >
          {cardData?.images?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`w-full relative ${aspectRatio}`}>
                <Image
                  src={item}
                  alt={`Room image ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col lg:gap-6 gap-4 lg:px-14 lg:py-12 p-4 ">
          <h3 className="lg:text-[2rem]/[2.35rem] font-bold text-2xl text-[#29422C]">
            {cardData.heading}
          </h3>
          <p className="lg:text-xl font-normal text-base text-[#29422C] text-justify">
            {cardData.para}
          </p>
          {cardData.para2 && (
            <p className="lg:text-xl font-normal text-base text-[#29422C] text-justify">
              {cardData.para2}
            </p>
          )}
          {cardData.button && (
            <Link
              href={
                "https://www.swiftbook.io/inst/#home?propertyId=741NzlEgzYT84Y4xsBi6DB7MLWBj5lkdF8KxEaTBJTEzMTg=&JDRN=Y"
              }
              target="_blank"
              className="justify-center self-start px-8 py-2 mt-6 text-lg font-medium tracking-normal text-white bg-[#29422C] rounded-sm leading-[144%]"
            >
              Book Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecilizationCard;
