"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// @import swiperr css
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperCarousel = ({
  data,
  className,
  swiperSlideClassName,
  renderSlide,
  ...props
}) => {
  return (
    <Swiper className={className} {...props}>
      {data?.map((item, index) => (
        <SwiperSlide className={swiperSlideClassName} key={index}>
          {renderSlide(item, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
