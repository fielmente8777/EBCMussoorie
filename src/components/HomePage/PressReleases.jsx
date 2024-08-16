"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import paper1 from "../../../public/images/PressReleases1.webp";
import paper2 from "../../../public/images/PressReleases2.webp";
import paper3 from "../../../public/images/pressreleases3.webp";
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
                        modules={[Pagination, Autoplay]}
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
                                    title={item.title}
                                    description={item.description}
                                    urlText={item.urlText}
                                    link={item.link}
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

const PressReleasesComp = ({ src, urlText, link, title, description }) => {
    return (
        <div className="flex flex-col gap-4 p-4 bg-[#E5E7EB] shadow-lg">
            <div className="w-full relative aspect-[3/1.8]">
                <Image src={src} alt="alt" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 text-[#29422C]">
                <Link href={link} className="text-base text-[#29422C] underline" target="_blank" >{urlText}</Link>
                <h3 className="text-[1.4rem]/[2rem] font-semibold">{title}</h3>
                <p className="text-base font-normal">{description}...
                    <Link href={link} className="text-sm text-[#29422C] underline font-bold uppercase" target="_blank">Read More</Link>
                </p>
            </div>
        </div>
    );
};

const data = [
    {
        src: paper1,
        urlText: "LBB.in",
        link: "https://lbb.in/delhi/away-from-the-city-around-all-things-pretty-ebc-mussoorie/",
        title:
            "Away From The City, Around All Things Pretty: Everest Base Camp in Mussoorie!",
        description:
            "Nature lovers, this one’s for y’all! If you are looking to get away from the hustle and bustle of your daily life and want to escape to somewhere peaceful and quiet, we have discovered just the place for you! Surrounded by forest trails, well-marked trekking lines, pristine views",
    },
    {
        src: paper2,
        urlText: "tripoto.com",
        link: "https://www.tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8",
        title:
            "Did You Know That Just 7 Hours From Delhi, There's An Everest Base Camp? No, We're Not Kidding!",
        description:
            "Did you know that the person after whom Mount Everest is named was a resident of the quaint town of Mussourie also known as “Queen of The Hills”? Just a 4-minute walk from George Everest’s house (after whom the highest peak is named!), lies this glamping camp",
    },
    {
        src: paper3,
        urlText: "curlytales.com",
        link: "https://curlytales.com/dine-under-the-sky-and-even-stay-inside-dreamy-glamps-at-mussoories-everest-base-camp-resort/",
        title:
            "Dine Under The Sky And Even Stay Inside Dreamy Glamps At Mussoorie’s Everest Base Camp Resort.",
        description:
            "Welcome to the enchanting realm of Everest Base Camp, where luxury meets the untamed spirit of nature in a symphony orchestrated by the echoes of history. Tucked amidst the breathtaking landscapes of Mussoorie, this isn’t just a glamping site. It’s a vivid tapestry",
    },
    {
        src: paper1,
        urlText: "LBB.in",
        link: "https://lbb.in/delhi/away-from-the-city-around-all-things-pretty-ebc-mussoorie/",
        title:
            "Away From The City, Around All Things Pretty: Everest Base Camp in Mussoorie!",
        description:
            "Nature lovers, this one’s for y’all! If you are looking to get away from the hustle and bustle of your daily life and want to escape to somewhere peaceful and quiet, we have discovered just the place for you! Surrounded by forest trails, well-marked trekking lines, pristine views",
    },
    {
        src: paper2,
        urlText: "tripoto.com",
        link: "https://www.tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8",
        title:
            "Did You Know That Just 7 Hours From Delhi, There's An Everest Base Camp? No, We're Not Kidding!",
        description:
            "Did you know that the person after whom Mount Everest is named was a resident of the quaint town of Mussourie also known as “Queen of The Hills”? Just a 4-minute walk from George Everest’s house (after whom the highest peak is named!), lies this glamping camp",
    },
    {
        src: paper3,
        urlText: "curlytales.com",
        link: "https://curlytales.com/dine-under-the-sky-and-even-stay-inside-dreamy-glamps-at-mussoories-everest-base-camp-resort/",
        title:
            "Dine Under The Sky And Even Stay Inside Dreamy Glamps At Mussoorie’s Everest Base Camp Resort.",
        description:
            "Welcome to the enchanting realm of Everest Base Camp, where luxury meets the untamed spirit of nature in a symphony orchestrated by the echoes of history. Tucked amidst the breathtaking landscapes of Mussoorie, this isn’t just a glamping site. It’s a vivid tapestry",
    },
];
