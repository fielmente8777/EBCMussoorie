"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import star from "../../../public/images/start.svg";
import quotes from "../../../public/quotes.png";
import { NextButton, PrevButton, Star } from "../../icons/icons";
const TestimonialCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const TestimonialData = [
    {
      text: "The resort surprised us with its well-maintained facilities. Our room was clean and comfortable, a perfect haven after a day of exploring the George Everest trek . Even though we were nestled in the hills, they had everything we needed for a relaxing stay.",
      name: "Ronu Kumar",
    },
    {
      text: "The trip was amazing ! I didn’t expect that a glamping resort could be this amazing. I would give my special thanks to Mahir and his team for making sure all our needs were met. I thoroughly enjoyed my stay at the glamping resort.",
      name: "Radhika S",
    },
    {
      text: "Tucked away in a quiet forest, untouched by the loud noises and bright lights of the city, here is a window to the long lost charm of Mussoorie.",
      name: "Hansdhwani G",
    },
    {
      text: `The resort offers a unique twist on lodging. Imagine staying in luxurious tents nestled amongst the mountains. Don't be fooled by the word "rustic" though. These tents are surprisingly well-equipped, providing all the comforts you'd expect, like heated blankets and even en-suite bathrooms`,
      name: "Aryan Kurmi",
    },
  ];
  return (
    <div className="block w-full overflow-hidden">
      <div className="flex items-center justify-center lg:gap-20 w-full lg:px-14">
        <button
          className={`prev-btn mb-16 disabled:opacity-50 lg:flex hidden w-[2.5rem] aspect-square rounded-full bg-white text-primary items-center justify-center hover:scale-105 active:scale-95`}
        >
          <PrevButton />
        </button>
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          speed={900}
          pagination={{
            el: ".Portfolio",
          }}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          modules={[Pagination, Autoplay, Navigation]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >
          {TestimonialData.map((data, index) => {
            return (
              <SwiperSlide key={index} className="">
                <div className="flex flex-col items-center gap-4 justify-center px-5">
                  <div className="flex items-center gap-1 mt-3">
                    {[1, 2, 3, 4, 5].map((index) => (
                      <Star key={index} />
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 items-center">
                    <p className="desc_1 text-center text-primary">
                      {data.text}
                    </p>

                    <h3 className="desc_1 text-center font-medium text-primary">
                      {data.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className={`next-btn mb-16  disabled:opacity-50 lg:flex hidden w-[2.5rem] aspect-square rounded-full bg-white text-primary items-center justify-center hover:scale-105 active:scale-95`}
        >
          <NextButton />
        </button>
      </div>
      <div
        className={`flex items-center justify-center mt-6 gap-1 Portfolio`}
      />
    </div>
  );
};

export default TestimonialCard;
