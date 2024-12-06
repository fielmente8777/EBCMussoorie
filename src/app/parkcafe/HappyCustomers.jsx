"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// import { Rating } from "../../icons/icons";
import BorderLine from "../../components/BorderLine";

const HappyCustomers = ({ testimonal }) => {
  return (
    <div className="lg:py-12 pt-7 lg:px-6">
      <div className="maxwidth mx-auto flex flex-col gap-10 max-md:px-3 w-full ">
        <div className="flex flex-col gap-4  items-center">
          <BorderLine />
          <h2 className="lg:text-4xl text-2xl tracking-wider text-center text-[#fff]">
            Guest Experiences
          </h2>
        </div>

        {/* <div className="w-full rounded-lg overflow-hidden"> */}
        <Swiper
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          speed={998}
          pagination={{
            type: "bullets",
            clickable: true,
            el: ".bullets-Portfolio",
          }}
          slidesPerView={1}
          spaceBetween={20}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="w-full border border-[#F1EECB]"
        >
          {testimonal?.map((item, index) => {
            return (
              <SwiperSlide key={index} className="">
                <div className="py-6 lg:px-20">
                  <div className="flex items-center justify-center">
                    {/* <Image
                      width={600}
                      height={400}
                      src={item.img}
                      alt={`testimonal${index}`}
                      className="w-10 h-10 rounded-full object-cover"
                    /> */}
                    <Quotes />
                  </div>
                  <div className="mt-4 flex flex-col items-center justify-center gap-6">
                    <p className="text-lg mt-4 text-white text-center">
                      {item.subtle}
                    </p>

                    <h2 className="capitalize text-lg font-medium tracking-widest text-white text-center">
                      {item.title}
                    </h2>
                    {/* <p className="text-base text-white">{item.date}</p> */}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* </div> */}

        {/* <div className="flex justify-center items-center gap-6 press lg:mt-5">
          <button className="bullets-Portfolio">
            <span className="sr-only">swiper bullet</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default HappyCustomers;

export const Quotes = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
    >
      <path
        d="M51.7344 9.625H79.2344C81.1298 9.625 82.6719 11.1671 82.6719 13.0625V41.4219C82.6719 43.3173 81.1298 44.8594 79.2344 44.8594H67.2031V48.2969C67.2031 54.457 72.2148 59.4688 78.375 59.4688C79.4112 59.4688 80.9531 60.1554 80.9531 62.0469V75.7969C80.9531 77.6884 79.4112 78.375 78.375 78.375C61.7899 78.375 48.2969 64.882 48.2969 48.2969V13.0625C48.2969 11.1671 49.8389 9.625 51.7344 9.625ZM50.0156 48.2969C50.0156 63.9342 62.7376 76.6562 78.375 76.6562C78.6333 76.6562 79.2344 76.5725 79.2344 75.7969V62.0469C79.2344 61.3547 78.7615 61.1975 78.375 61.1875C71.2671 61.1875 65.4844 55.4048 65.4844 48.2969V44C65.4844 43.5255 65.8692 43.1406 66.3438 43.1406H79.2344C80.1821 43.1406 80.9531 42.3696 80.9531 41.4219V13.0625C80.9531 12.1148 80.1821 11.3438 79.2344 11.3438H51.7344C50.7867 11.3438 50.0156 12.1148 50.0156 13.0625V48.2969ZM8.76562 9.625H36.2656C38.1611 9.625 39.7031 11.1671 39.7031 13.0625V41.4219C39.7031 43.3173 38.1611 44.8594 36.2656 44.8594H24.2344V48.2969C24.2344 54.457 29.2461 59.4688 35.4062 59.4688C36.4425 59.4688 37.9844 60.1554 37.9844 62.0469V75.7969C37.9844 77.6884 36.4425 78.375 35.4062 78.375C18.8212 78.375 5.32812 64.882 5.32812 48.2969V13.0625C5.32812 11.1671 6.87002 9.625 8.76562 9.625ZM7.04688 48.2969C7.04688 63.9342 19.7689 76.6562 35.4062 76.6562C35.6646 76.6562 36.2656 76.5725 36.2656 75.7969V62.0469C36.2656 61.3547 35.7928 61.1975 35.4062 61.1875C28.2984 61.1875 22.5156 55.4048 22.5156 48.2969V44C22.5156 43.5255 22.9003 43.1406 23.375 43.1406H36.2656C37.2133 43.1406 37.9844 42.3696 37.9844 41.4219V13.0625C37.9844 12.1148 37.2133 11.3438 36.2656 11.3438H8.76562C7.81791 11.3438 7.04688 12.1148 7.04688 13.0625V48.2969Z"
        fill="#F1EECB"
      />
    </svg>
  );
};
