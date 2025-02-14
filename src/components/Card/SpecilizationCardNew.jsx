"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PopupForm from "../PopupForm";
import { useState } from "react";
import { bookingLink } from "../../utils/data";
import BorderLine from "../BorderLine";

const SpecilizationCardNew = ({
  cardData,
  index,
  aspectRatio,
  setShowModal,
}) => {
  const pathName = usePathname();
  return (
    <div
      className={`lg:grid grid-cols-3 flex flex-col items-center justify-center overflow-hidden lg:mb-0 mb-8`}
    >
      <div className={`col-span-2 w-full h-full`}>
        <Swiper
          speed={1000}
          pagination={{
            el: "#bullets-Portfolio",
          }}
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="card_swiper"
        >
          {cardData?.images?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full lg:py-6">
                <div
                  className={`w-full relative ${aspectRatio} lg:rounded-tl-xl lg:rounded-bl-xl max-md:rounded-tl-xl max-md:rounded-tr-xl overflow-hidden `}
                >
                  <Image
                    src={item}
                    alt={`Room image ${index}`}
                    fill
                    className="object-cover "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex items-center h-full w-full max-md:-mt-[0.2rem]  col-span-1 bg-[#F1EECB] rounded-lg">
        <div className="flex flex-col lg:gap-6 gap-4 lg:px-10 lg:py-12 px-4 py-6 ">
          <div className="w-fit">
            <BorderLine />
          </div>
          <h3 className="desc_1 font-semibold  text-[#29422C]">
            {cardData.heading}
          </h3>
          <p className="desc_2 font-medium text-[#29422C]">
            {cardData.para}
          </p>
          {cardData.para2 && (
            <p className="desc_2 font-medium text-[#29422C]">
              {cardData.para2}
            </p>
          )}
          {cardData.button && (
            <>
              {pathName !== "/ebclanding/" ? (
                <Link
                  href={bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-3 w-fit Cammron mx-auto font-medium text-base  text-white bg-primary rounded-lg border border-[#F69F2B] hover:bg-transparent  hover:text-primary duration-300 active:scale-75 hover:scale-105 "
                >
                  Book Now
                </Link>
              ) : (
                <button
                  onClick={() => setShowModal(true)}
                  className="justify-center Cammron self-start px-8 py-2 lg:mt-6 lg:text-lg font-medium tracking-normal text-white bg-primary rounded-lg duration-300 active:scale-75 hover:scale-105"
                >
                  Get In Touch
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecilizationCardNew;
