"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { NextButton, PrevButton } from "../icons/icons";
import { useWebContext } from "@/contextApi/WebContext";

const indoor1 = "/activity/activity3.webp";

const ImageSwiper = ({
  images = [1, 2, 3, 5, 6, 7],
  index,
  btnName = "",
  paginationClass = "pagination_0",
}) => {
  const originalImages = images;

  let buttonName = index !== undefined ? index : btnName;

  const swiperButtonNext = `.button-next-${buttonName}`;
  const swiperButtonPrev = `.button-prev-${buttonName}`;
  const swiperImages = images.length < 5 ? [...images, ...images] : images;

  // const { handleImagePopupOpen } = useWebContext();

  // const imageHandler = (index) => {
  //   const formattedImages = originalImages.map(
  //     (item) => item.src || item || indoor1
  //   );
  //   console.log(formattedImages);
  //   handleImagePopupOpen(formattedImages, index);
  // };
  return (
    <div className="w-full bg-transparent slider">
      <Swiper
        speed={1000}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2.2}
        spaceBetween={10}
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{
          nextEl: swiperButtonNext,
          prevEl: swiperButtonPrev,
        }}
        pagination={{
          el: "." + paginationClass,
          clickable: true,
        }}
      >
        {swiperImages?.map((roomImage, idx) => (
          <SwiperSlide
            key={idx}
            className="w-full h-full relative lg:aspect-[4/3] aspect-[3/2.5]"
          >
            <Image
              src={roomImage.src || roomImage || indoor1}
              className="h-full object-cover"
              alt={"room"}
              fill
              sizes="100%"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-2 justify-center w-fit mx-auto mt-5 items-center">
        <button
          className={`button-prev-${buttonName} text-white py-2 px-4 hover:scale-105 border border-transparent rounded-sm hover:shadow-xl shadow-[#f69f2b] hover:border-[#f69f2b] active:scale-95`}
          style={{
            borderRadius: "100px",
            height: "40px",
            width: "40px",
            background: "#29422C",
          }}
        >
          <PrevButton />
        </button>
        <div
          className={`items-center  justify-center gap-1 ${paginationClass} ${images?.length > 5 ? "lg:flex hidden" : "flex"}`}
        />
        <button
          className={`button-next-${buttonName} text-white py-2 px-4 hover:scale-105 border border-transparent rounded-sm hover:shadow-xl shadow-[#f69f2b] hover:border-[#f69f2b] active:scale-95`}
          style={{
            borderRadius: "100px",
            height: "40px",
            width: "40px",
            background: "#29422C",
          }}
        >
          <NextButton />
        </button>
      </div>
    </div>
  );
};

export default ImageSwiper;
