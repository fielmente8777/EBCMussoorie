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

const SpecilizationCard = ({ cardData, index, aspectRatio }) => {
  const pathName = usePathname();
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      className={`lg:grid grid-cols-3 flex ${
        index % 2 === 0 ? "flex-col" : "flex-col-reverse"
      } bg-[#F1EECB] overflow-hidden lg:mb-0 mb-5`}
    >
      <div
        className={`${index === 1 || index === 3 ? "order-2" : ""} col-span-2`}
      >
        <Swiper
          // loop={true}
          // autoplay={{
          //   delay: 2000,
          // }}
          speed={1000}
          pagination={{
            el: "#bullets-Portfolio",
          }}
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="card_swiper"
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
      <div className="flex items-center justify-center col-span-1">
        <div className="flex flex-col lg:gap-6 gap-4 lg:px-14 lg:py-12 p-4 ">
          <BorderLine />
          <h3 className="lg:text-[2rem]/[2.35rem] font-medium text-center text-2xl text-[#29422C]">
            {cardData.heading}
          </h3>
          <p className="lg:text-xl font-normal text-base text-[#29422C] text-center">
            {cardData.para}
          </p>
          {cardData.para2 && (
            <p className="lg:text-xl font-normal text-base text-[#29422C] text-center">
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
                  className="px-10 py-3 w-fit mx-auto font-medium text-base  text-white bg-[#29422C] rounded-sm border border-[#F69F2B] hover:bg-transparent  hover:text-[#29422C] duration-300 active:scale-75 hover:scale-105 "
                >
                  Book Now
                </Link>
              ) : (
                <button
                  // href={
                  //   "https://www.swiftbook.io/inst/#home?propertyId=741NzlEgzYT84Y4xsBi6DB7MLWBj5lkdF8KxEaTBJTEzMTg=&JDRN=Y"
                  // }
                  // target="_blank"
                  onClick={() => setShowModal(true)}
                  className="justify-center self-start px-8 py-2 mt-6 text-lg font-medium tracking-normal text-white bg-[#29422C] rounded-sm leading-[144%]"
                >
                  Book Now
                </button>
              )}
            </>
          )}
        </div>
      </div>
      {showModal && (
        <PopupForm setShowModal={setShowModal} showModal={showModal} />
      )}
    </div>
  );
};

export default SpecilizationCard;
