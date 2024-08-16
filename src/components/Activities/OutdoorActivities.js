"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import OutdoorActivitiesCard from "./OutdoorActivitiesCard";
import activity1 from "../../../public/activity/activity2.png";
import activity2 from "../../../public/activity/activity_3.jpg";

import Image from "next/image";
const OutdoorActivities = () => {
  const Images = [activity1, activity2, activity1, activity2];
  return (
    <div className="maxwidth mx-auto max-md:px-3">
      <div className="lg:grid md:grid md:grid-cols-3 lg:grid-cols-3 gap-5 flex flex-col">
        <div className="max-md:order-2">
          <OutdoorActivitiesCard />
        </div>

        <div className="w-full md:col-span-2 md:h-[500px]">
          <Swiper
            // loop={true}
            // autoplay={{
            //   delay: 2000,
            // }}
            speed={1000}
            navigation={true}
            
            slidesPerView={1}
            spaceBetween={20}
            modules={[Navigation]}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              //   1024: {
              //     slidesPerView: 3,
              //     spaceBetween: 20,
              //   },
            }}
            className="w-full h-full card_swiper"
          >
            {Images.map((image, index) => {
              return (
                <SwiperSlide key={index} className="lg:me-5">
                  <div className="relative lg:aspect-[5/6.1] aspect-[3/2.5]">
                  <Image
                    src={image}
                    alt="outdoor"
                    className="object-cover"
                    fill
                  />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OutdoorActivities;
