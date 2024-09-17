"use client";
import React from "react";
import RoomSwiperCard from "./RoomSwiperCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Rooms1 from "../../../public/rooms/Glamper1Bedroompic1.webp";
import Rooms2 from "../../../public/rooms/CamperBedroomPic3.webp";
import Rooms3 from "../../../public/rooms/SuiteBedroom1.webp";
import Rooms4 from "../../../public/rooms/SurevyorBedroompic2.webp";

const RoomSwiper = () => {
  const Roomdata = [
    {
      image: Rooms1,
      roomName: "The Glamper",
      description:
        " Our Glamper rooms promise relaxation and rejuvenation like no other, ideal for small groups, making unforgettable moments on our exclusive netted balcony space, perfect for creating Instagram-worthy memories.",
    },
    {
      image: Rooms2,
      roomName: "The Clamper",
      description:
        "Treat yourself to a relaxing getaway in our Camper rooms, perfect for couplesseeking a lavish vacation experience, providing unparalleled comfort and coziness in a peaceful setting.",
    },
    {
      image: Rooms3,
      roomName: "The Surveyor",
      description:
        "Experience luxury in our Surveyor Suite at Everest Base Camp, Mussoorie. Enjoy spacious tents, stunning forest views, and a king-sized bed. Perfect for families or friends.",
    },
    {
      image: Rooms4,
      roomName: "The Surveyor Suite",
      description:
        "Relax and recharge in the peaceful Surveyor rooms, surrounded by Deodar forest scenery. Perfect for families or small groups, our serene atmosphere ensures privacy and comfort, allowing you to reconnect with nature.",
    },
  ];
  return (
    <div className="maxwidth mx-auto flex flex-col-reverse justify-between max-md:px-3 md:flex-row w-full py-7">
      <div className="w-full md:w-[60%]">
        <Swiper
          // loop={true}
          // autoplay={{
          //   delay: 2000,
          // }}
          slidesPerView={2}
          spaceBetween={20}
          centeredSlides={true}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          pagination={{
            clickable: true,
            el: ".slide_page_indicator",
          }}
          modules={[Pagination, Autoplay, Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            //   1024: {
            //     slidesPerView: 3,
            //     spaceBetween: 20,
            //   },
          }}
          className="w-full"
        >
          {Roomdata.map((roomData, index) => {
            return (
              <SwiperSlide key={index} className="min-w-[200px] max-md:-ml-2">
                <RoomSwiperCard key={index} roomData={roomData} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="w-full flex justify-center items-center gap-3 py-3 lg:hidden mt-3">
        <button className="prev">
          <PrevBtn height={"35"} width={"35"} />
        </button>
        <button className="next">
          <NextBtn height={"35"} width={"35"} />
        </button>
      </div>
      </div>

      <div className="w-full md:w-[40%] flex flex-col justify-center items-center text-white lg:mb-0 mb-5">
        <h1 className="lg:text-3xl text-xl text-center font-semibold">
          Our Rooms
        </h1>
        <p className="lg:text-5xl/[3.8rem] text-3xl tracking-wide text-center mt-3">
          Camping and
          <br className="lg:block hidden" />
          Comfort Redefined
        </p>
        <div className="w-full lg:flex hidden justify-center items-center gap-3 py-3">
          <button className="prev">
            <PrevBtn />
          </button>
          <button className="next">
            <NextBtn />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default RoomSwiper;

const NextBtn = ({height, width}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "56"}
      height={height || "56"}
      viewBox="0 0 56 56"
      fill="none"
    >
      <path
        d="M0 28C0 33.5379 1.64217 38.9514 4.71885 43.556C7.79553 48.1605 12.1685 51.7494 17.2849 53.8686C22.4012 55.9879 28.0311 56.5424 33.4625 55.462C38.894 54.3816 43.8831 51.7148 47.799 47.799C51.7148 43.8831 54.3816 38.894 55.462 33.4625C56.5424 28.0311 55.9879 22.4012 53.8686 17.2849C51.7494 12.1685 48.1605 7.79553 43.556 4.71885C38.9514 1.64217 33.5379 0 28 0C20.5739 0 13.452 2.94999 8.20101 8.20101C2.94999 13.452 0 20.5739 0 28ZM12 26H36.3L25.14 14.786L28 12L44 28L28 44L25.14 41.146L36.3 30H12V26Z"
        fill="#E5E7EB"
      />
    </svg>
  );
};

const PrevBtn = ({height, width}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "56"}
      height={height || "56"}
      viewBox="0 0 56 56"
      fill="none"
    >
      <path
        d="M56 28C56 33.5379 54.3578 38.9514 51.2811 43.556C48.2045 48.1605 43.8315 51.7494 38.7151 53.8686C33.5988 55.9879 27.9689 56.5424 22.5375 55.462C17.106 54.3816 12.1169 51.7148 8.20102 47.799C4.28515 43.8831 1.61841 38.894 0.538025 33.4625C-0.542362 28.0311 0.0121307 22.4012 2.13139 17.2849C4.25064 12.1685 7.83947 7.79553 12.444 4.71885C17.0486 1.64217 22.4621 0 28 0C35.4261 0 42.548 2.94999 47.799 8.20101C53.05 13.452 56 20.5739 56 28ZM44 26H19.7L30.86 14.786L28 12L12 28L28 44L30.86 41.146L19.7 30H44V26Z"
        fill="#E5E7EB"
      />
    </svg>
  );
};
