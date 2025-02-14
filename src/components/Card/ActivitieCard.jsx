"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const ActivitieCard = ({ title, description, images, index }) => {
  return (
    <div
      className={`w-full mt-4 lg:grid grid-cols-3 flex ${index % 2 === 0 ? "flex-col-reverse" : " flex-col"}  gap-4`}
    >
      <div
        className={`lg:col-span-1 flex flex-col lg:gap-6 gap-4 ${index % 2 === 0 ? "order-1" : "order-2"}`}
      >
        <h3 className="desc_1 text-primary font-medium tracking-wider">
          {title}
        </h3>
        <p className="desc_4 text-primary">
          {description}
        </p>
      </div>
      <div
        className={`lg:col-span-2 ${index % 2 === 0 ? "order-2" : "order-1"}`}
      >
        <Swiper
          speed={900}
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
          }}
          dir={`${index === 1 && "rtl"}`}
          className={`card_swiper  overflow-hidden ${index % 2 === 0 ? "rounded-l-lg" : "rounded-r-lg"}`}
        >
          {images?.map((item, index) => (
            <SwiperSlide key={index} className="">
              <div className="w-full h-full">
                <div
                  className={`w-full relative rounded-lg overflow-hidden lg:aspect-[4/2.5] aspect-[4/3.5]`}
                >
                  <Image
                    src={item.src}
                    alt={title}
                    fill
                    className={`object-cover ${item.Class || ""}`}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ActivitieCard;
