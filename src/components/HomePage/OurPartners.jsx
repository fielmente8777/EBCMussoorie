"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import makemytrip from "../../../public/partners/makemytrip.png";
import trivago from "../../../public/partners/trivago.png";
import tripadvisor from "../../../public/partners/tripadvisor-logo.png";
import booking from "../../../public/partners/booking.png";
import goibibo from "../../../public/partners/goibibo-logo.png";
import BorderLine from "../BorderLine";

const OurPartners = () => {
  return (
    <section className="bg-[#29422C]">
      <div className="max-w-7xl mx-auto px-4  lg:pt-12 lg:pb-20 py-8">
        <BorderLine />
        <div className="flex flex-col gap-5 mt-5">
          <h2 className="lg:text-4xl text-2xl tracking-wider uppercase text-center text-[#fff]">
            Our Partners
          </h2>
        </div>
        <div className="mt-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={15}
            slidesPerView={2}
            loop={true}
            speed={900}
            autoplay={{
              delay: 4000,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },

              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="!p-8 border border-[#F69F2B] rounded-sm bg-white"
          >
            {ClientImages.map((item, index) => (
              <SwiperSlide key={index} className="py-2">
                <div className="relative w-full lg:aspect-[3/1.5] aspect-[2/1] py-8 flex justify-center items-center bg-white rounded-tl-3xl rounded-br-3xl overflow-hidden box-shadow">
                  <Image
                    src={item.src}
                    alt={`${item.alt}`}
                    className={`object-contain p-3 bg-white`}
                    fill
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;

const ClientImages = [
  {
    src: makemytrip,
    alt: "make my trip",
  },
  {
    src: trivago,
    alt: "trivago",
  },
  {
    src: tripadvisor,
    alt: "tripadvisor",
  },
  {
    src: booking,
    alt: "booking",
  },
  {
    src: goibibo,
    alt: "goibibo",
  },
  {
    src: makemytrip,
    alt: "make my trip",
  },
  {
    src: trivago,
    alt: "trivago",
  },
  {
    src: tripadvisor,
    alt: "tripadvisor",
  },
  {
    src: booking,
    alt: "booking",
  },
  {
    src: goibibo,
    alt: "goibibo",
  },
];
