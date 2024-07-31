"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import paper1 from "../../../public/images/paper1.png";
import paper2 from "../../../public/images/paper2.png";
import paper3 from "../../../public/images/paper3.png";
const PressReleases = () => {
    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 lg:py-8 py-6">
                <div>
                    <h2 className="md:text-4xl text-3xl text-center font-bold text-white">
                        Featured Press Releases
                    </h2>
                </div>
                <div className="mt-8">
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
                        spaceBetween={14}
                        modules={[Pagination, Autoplay, Navigation]}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 14,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        className="mySwiper px-2"
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index} className="py-4">
                                <PressReleasesComp
                                    src={item.src}
                                    date={item.date}
                                    title={item.title}
                                    description={item.description}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex justify-center items-center gap-6 press lg:mt-11">
                        <button className="bullets-Portfolio"></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PressReleases;

const PressReleasesComp = ({ src, date, title, description }) => {
    return (
        <div className="flex flex-col gap-4 p-4 bg-[#E5E7EB] shadow-lg">
            <div className="w-full relative aspect-[3/1.8]">
                <Image src={src} alt="alt" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 text-[#29422C]">
                <p className="text-sm text-[#29422C]">{date}</p>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-base font-normal">{description}</p>
            </div>
        </div>
    );
};

const data = [
    {
        src: paper1,
        date: "16 December 2023",
        title:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        description:
            "It is a long established fact that a reader will be the be distracted by the readable content of a page when the looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter",
    },
    {
        src: paper2,
        date: "16 December 2023",
        title:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        description:
            "It is a long established fact that a reader will be the be distracted by the readable content of a page when the looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter",
    },
    {
        src: paper3,
        date: "16 December 2023",
        title:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        description:
            "It is a long established fact that a reader will be the be distracted by the readable content of a page when the looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter",
    },
    {
        src: paper1,
        date: "16 December 2023",
        title:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        description:
            "It is a long established fact that a reader will be the be distracted by the readable content of a page when the looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter",
    },
    {
        src: paper2,
        date: "16 December 2023",
        title:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        description:
            "It is a long established fact that a reader will be the be distracted by the readable content of a page when the looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter",
    },
    {
        src: paper3,
        date: "16 December 2023",
        title:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        description:
            "It is a long established fact that a reader will be the be distracted by the readable content of a page when the looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter",
    },
];
