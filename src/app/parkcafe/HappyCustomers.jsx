"use client"

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Rating } from '@/icons/icons';

const HappyCustomers = ({ testimonal }) => {
    return (
        <div className="lg:py-12 pt-7 lg:px-6">
            <div className="maxwidth mx-auto flex flex-col gap-10 max-md:px-3 w-full ">
                <div className="flex flex-col gap-5  items-center">
                    <h2 className="lg:text-[42px] text-3xl max-md:text-center text-white font-medium leading-[45px]">
                        Happy Customers!
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
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        //   1024: {
                        //     slidesPerView: 3,
                        //     spaceBetween: 20,
                        //   },
                    }}
                    className="w-full"
                >
                    {testimonal?.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className="">
                                <div className="bg-[#bcd0b8] p-5">
                                    <div className="flex items-center justify-start gap-3">
                                        <Image
                                            width={600}
                                            height={400}
                                            src={item.img}
                                            alt={`testimonal${index}`}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />

                                        <div>
                                            <h2 className="capitalize text-lg">
                                                {item.title}
                                            </h2>
                                            <p className="text-base">{item.date}</p>
                                        </div>
                                    </div>
                                    <div className="mt-2"><Rating /></div>
                                    <p className="text-lg mt-4 text-justify min-h-[10.5rem]">{item.subtle}</p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                {/* </div> */}

                <div className="flex justify-center items-center gap-6 press lg:mt-5">

                    <button className="bullets-Portfolio">
                        <span className="sr-only">swiper bullet</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HappyCustomers