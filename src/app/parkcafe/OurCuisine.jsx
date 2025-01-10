"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BorderLine from "../../components/BorderLine";
import SectionWithContainer from "../../components/SectionWithContainer";
import { NextButton, PrevButton } from "../../icons/icons";

const OurCuisine = ({ images = [1, 2, 3, 4, 5], heading, para, para2 }) => {
  return (
    // <div className="bg-[#BCD0B8] py-12">
    //     <div className="maxwidth mx-auto flex flex-col gap-10 max-md:px-3 overflow-hidden w-full ">
    //         <div className="flex flex-col gap-5  items-center">
    //             <h2 className="text-[42px] max-md:text-center text-[#29422C] font-medium leading-[45px]">
    //                 Our Cuisine
    //             </h2>
    //         </div>

    //         {/* <div className="w-full rounded-lg overflow-hidden"> */}
    //         <Swiper
    //             loop={true}
    //             autoplay={{
    //                 delay: 2500,
    //                 disableOnInteraction: false,
    //             }}
    //             speed={1000}
    //             pagination={{
    //                 el: "#bullets-Portfolio",
    //             }}
    //             slidesPerView={1}
    //             spaceBetween={20}
    //             navigation={{
    //                 prevEl: ".prev-btn",
    //                 nextEl: ".next-btn",
    //             }}
    //             modules={[Pagination, Autoplay, Navigation]}
    //             breakpoints={{
    //                 768: {
    //                     slidesPerView: 3,
    //                     spaceBetween: 20,
    //                 },
    //                 1024: {
    //                     slidesPerView: 4,
    //                     spaceBetween: 20,
    //                 },
    //             }}
    //             className="w-full"
    //         >
    //             {images?.map((item, index) => {
    //                 return (
    //                     <SwiperSlide key={index} className="">
    //                         <div className="w-full h-[300px] relative aspect-[1/1]">
    //                             <Image
    //                                 alt="image"
    //                                 src={item.img}
    //                                 fill
    //                                 className="object-cover"
    //                             />
    //                         </div>
    //                         <h2 className="text-center capitalize mt-2 text-2xl">
    //                             {item.title}
    //                         </h2>
    //                     </SwiperSlide>
    //                 );
    //             })}
    //         </Swiper>
    //         {/* </div> */}

    //         <div className=" flex justify-center mt-5">
    //             <Link className="bg-[#29422C] text-white px-4 py-2" href={"/"}>
    //                 Download menu
    //             </Link>
    //         </div>
    //     </div>
    // </div>
    <SectionWithContainer>
      <div
        className={`lg:grid grid-cols-3 flex flex-col  overflow-hidden lg:mb-0 mb-5 slider`}
      >
        <div className={` col-span-2`}>
          <Swiper
            // loop={true}
            // autoplay={{
            //   delay: 2000,
            // }}
            speed={1000}
            pagination={{
              el: ".pagination_9",
            }}
            slidesPerView={1}
            navigation={{
              nextEl: ".button-next-9",
              prevEl: ".button-prev-9",
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="card_swiper"
          >
            {images?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`w-full relative aspect-[4/2.52]`}>
                  <Image
                    src={item.img}
                    alt={`Room image ${index}`}
                    fill
                    className="object-cover"
                  />
                  {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-2 bg-[#F1EECB] -translate-y-1/2">
                    <h2 className="text-center lg:text-2xl text-[#29422C] capitalize">
                      {item.title}
                    </h2>
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center max-md:order-3 bg-[#F1EECB] justify-center col-span-1">
          <div className="flex flex-col lg:gap-6 gap-4 lg:px-14 lg:py-12 p-4 ">
            <BorderLine />
            <h3 className="lg:text-[2rem]/[2.35rem] font-medium text-center text-2xl text-[#29422C]">
              {heading}
            </h3>
            <p className="lg:text-xl font-normal text-base text-[#29422C] text-center">
              {para}
            </p>
            {para2 && (
              <p className="lg:text-xl font-normal text-base text-[#29422C] text-center">
                {para2}
              </p>
            )}
            <Link
              href={"/"}
              className="px-10 py-3 w-fit mx-auto font-medium text-base  text-white bg-[#29422C] rounded-sm border border-[#F69F2B] hover:bg-transparent  hover:text-[#29422C] duration-300 active:scale-75 hover:scale-105 "
            >
              Download Menu
            </Link>
          </div>
        </div>
        <div className="col-span-2 py-1 max-md:order-2 max-md:bg-[#F1EECB]">
          <div className="flex gap-2 justify-center w-fit mx-auto mt-5 items-center">
            <button
              className={`button-prev-9 p-2 hover:scale-105 border border-transparent rounded-sm hover:shadow-xl shadow-[#f69f2b] hover:border-[#f69f2b] active:scale-95`}
            >
              <PrevButton />
            </button>
            <div className={`flex items-center justify-center gap-1 pag pagination_9`} />
            <button
              className={`button-next-9 p-2 hover:scale-105 border border-transparent rounded-sm hover:shadow-xl shadow-[#f69f2b] hover:border-[#f69f2b] active:scale-95`}
            >
              <NextButton />
            </button>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurCuisine;
