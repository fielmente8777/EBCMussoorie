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



const OurPartners = () => {
    return (
        <section className="bg-[#E5E7EB]">
            <div className="max-w-7xl mx-auto px-4  lg:pt-12 lg:pb-20 py-8">
                <div>
                    <h2 className="md:text-4xl text-3xl text-center font-bold text-[#29422C]">
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
                        className="mySwiper"
                    >
                        {ClientImages.map((item, index) => (
                            <SwiperSlide key={index} className="py-2">
                                <div className="relative w-full lg:aspect-[3/1.4] aspect-[2/1] hover:-translate-y-3 ease-in-out duration-700 transition hover:shadow-md shadow-white/100 rounded-md flex justify-center items-center">
                                    <Image
                                        src={item.src}
                                        alt={`${item.alt}`}
                                        className="object-contain rounded-md p-3"
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

