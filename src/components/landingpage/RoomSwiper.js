"use client";
import React from "react";
import RoomSwiperCard from "./RoomSwiperCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import camper1 from "../../../public/gallery/camper1.webp";
import camper2 from "../../../public/gallery/camper2.webp";
import camper3 from "../../../public/gallery/camper3.webp";
import camper4 from "../../../public/gallery/camper4.webp";
import camper5 from "../../../public/gallery/camper5.webp";
import camper6 from "../../../public/gallery/camper6.webp";
import camper7 from "../../../public/CamperRoom/CamperBedroompic2.webp";
import camper8 from "../../../public/CamperRoom/CamperBedroomPic3.webp";
import camper9 from "../../../public/CamperRoom/CamperBathroom.webp";
import camper10 from "../../../public/CamperRoom/CamperBalcony.webp";
import camper11 from "../../../public/gallery/CamperFacade.webp";

import glamper1 from "../../../public/gallery/glamper1.webp";
import glamper2 from "../../../public/gallery/theglamper2.webp";
import glamper3 from "../../../public/gallery/theglamper3.webp";
import glamper4 from "../../../public/gallery/theglamper4.webp";
import glamper5 from "../../../public/gallery/theglamer5.webp";
import glamper6 from "../../../public/gallery/theglamer6.webp";
import glamper7 from "../../../public/GlamperRoom/Glamper1Bedroompic1.webp";
import glamper8 from "../../../public/GlamperRoom/Glamper1Bedroompic2.webp";
import glamper9 from "../../../public/gallery/Glamper1Balcony.webp";
import glamper10 from "../../../public/gallery/Glamper2Balcony.webp";
import glamper11 from "../../../public/gallery/Glamper1Bathroom.webp";
import glamper12 from "../../../public/gallery/Glamper1Facade.webp";

import survey1 from "../../../public/gallery/survey1.webp";
import survey2 from "../../../public/gallery/survery2.webp";
import survey3 from "../../../public/gallery/survey3.webp";
import survey4 from "../../../public/gallery/survey4.webp";
import survey5 from "../../../public/gallery/survey5.webp";
import survey6 from "../../../public/gallery/survey6.webp";
import survey7 from "../../../public/gallery/survery7.webp";
import survey8 from "../../../public/gallery/survey8.webp";
import survey9 from "../../../public/gallery/23Facade_11zon.webp";
import survey10 from "../../../public/Surveyor Room/SurevyorBedroompic2.webp";
import survey11 from "../../../public/Surveyor Room/SurveyorBedroompic1.webp";
import survey12 from "../../../public/Surveyor Room/SurevyorFacade.webp";
import survey13 from "../../../public/Surveyor Room/Surveyorbalcony.webp";

import surveysuite1 from "../../../public/gallery/surveysuite1.webp";
import surveysuite2 from "../../../public/gallery/surveysuite2.webp";
import surveysuite3 from "../../../public/gallery/surveysuite3.webp";
import surveysuite4 from "../../../public/gallery/SuiteBalcony.webp";
import surveysuite5 from "../../../public/gallery/SuiteBathroom.webp";
import surveysuite6 from "../../../public/gallery/SuiteBedroom2.webp";
import surveysuite7 from "../../../public/gallery/SuiteBedroom1.webp";
import surveysuite8 from "../../../public/gallery/SuiteFacade.webp";



const RoomSwiper = () => {
  const Roomdata = [
    {
      image: [glamper1, glamper2, glamper3, glamper4, glamper5, glamper6, glamper7, glamper8, glamper9, glamper10, glamper11, glamper12],
      roomName: "The Glamper",
      description:
        " Our Glamper rooms promise relaxation and rejuvenation like no other, ideal for small groups, making unforgettable moments on our exclusive netted balcony space, perfect for creating Instagram-worthy memories.",
    },
    {
      image: [camper1, camper2, camper3, camper4, camper5, camper6, camper7, camper8, camper9, camper10, camper11],
      roomName: "The Clamper",
      description:
        "Treat yourself to a relaxing getaway in our Camper rooms, perfect for couplesseeking a lavish vacation experience, providing unparalleled comfort and coziness in a peaceful setting.",
    },
    {
      image: [survey1, survey2, survey3, survey4, survey5, survey6, survey7, survey8, survey9, survey10, survey11, survey12, survey13],
      roomName: "The Surveyor",
      description:
        "Experience luxury in our Surveyor Suite at Everest Base Camp, Mussoorie. Enjoy spacious tents, stunning forest views, and a king-sized bed. Perfect for families or friends.",
    },
    {
      image: [surveysuite1, surveysuite2, surveysuite3, surveysuite4, surveysuite5, surveysuite6, surveysuite7, surveysuite8],
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
          // spaceBetween={20}
          // centeredSlides={true}
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
              <SwiperSlide key={index} className="min-w-[200px] max-md:ml-8">
                <RoomSwiperCard key={index} roomData={roomData} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="w-full flex justify-center items-center gap-3 py-3 lg:hidden mt-1">
        <button className="prev">
          <PrevBtn height={"35"} width={"35"} />
        </button>
        <button className="next">
          <NextBtn height={"35"} width={"35"} />
        </button>
      </div>
      </div>

      <div className="w-full md:w-[40%] flex flex-col justify-center items-center text-white lg:mb-0 mb-5">
        <h1 className="lg:text-3xl text-xl text-center font-semibold max-md:mt-5">
          Our Rooms
        </h1>
        <p className="lg:text-5xl/[3.8rem] text-3xl tracking-wide text-center mt-3 max-md:mt-1">
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
