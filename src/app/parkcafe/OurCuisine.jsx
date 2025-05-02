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
import { FillDownload, NextButton, PrevButton } from "../../icons/icons";

const OurCuisine = ({ images = [1, 2, 3, 4, 5], heading, para, para2 }) => {
  return (
    <SectionWithContainer>
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
            {images?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full lg:py-6">
                  <div
                    className={`w-full relative md:aspect-[4/3] aspect-[4/2.8] lg:rounded-tl-xl lg:rounded-bl-xl max-md:rounded-tl-xl max-md:rounded-tr-xl overflow-hidden `}
                  >
                    <Image
                      src={item.img}
                      alt={`Room image ${index}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center h-full w-full max-md:-mt-[0.2rem]  col-span-1 bg-[#F1EECB] md:rounded-lg max-md:rounded-b-lg">
          <div className="flex flex-col lg:gap-6 gap-4 lg:px-10 lg:py-12 px-4 py-6 ">
            <div className="w-fit">
              <BorderLine />
            </div>
            <h3 className="desc_1  text-[#29422C]">{heading}</h3>
            <p className="desc_2 font-medium text-[#29422C] neutraText">{para}</p>
            {para2 && (
              <p className="desc_2 font-medium text-[#29422C] neutraText">{para2}</p>
            )}
            <Link
              href={"/"}
              className="md:px-10 md:py-3 flex items-center gap-2 Cammron px-6 py-2 w-fit mx-auto text-base md:text-lg text-white bg-[#29422C] rounded-sm border border-[#F69F2B] hover:bg-transparent  hover:text-[#29422C] duration-300 active:scale-75 hover:scale-105 "
            >
              Download Menu <span className=""><FillDownload /></span>
            </Link>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default OurCuisine;
