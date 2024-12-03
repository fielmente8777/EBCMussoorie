"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Section from "../Section";
import BorderLine from "../BorderLine";
const PressReleases = () => {
  const data = [
    {
      src: "/images/lbb.png",
      name: "LBB",
      link: "https://lbb.in/delhi/away-from-the-city-around-all-things-pretty-ebc-mussoorie/",
    },
    {
      src: "/images/so.png",
      name: "So",
      link: "https://so.city/delhi/article/this-dreamy-resort-is-a-modern-campers-playground-with-luxury-tents-a-cafe-on-the-hill",
    },
    {
      src: "/images/hotelier_inda.png",
      name: "Hotelier India",
      link: "https://www.hotelierindia.com/operations/experience-tranquil-adventure-in-the-heart-of-mussoorie-with-ebc-mussoorie",
    },
    {
      src: "/images/tripoto2.png",
      name: "Tripoto",
      link: "https://www.tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8",
    },
    {
      src: "/images/issuu.png",
      name: "Issuu",
      link: "https://issuu.com/ebcmussoorie/docs/camp_stay_at_ebc_mussoorie_a_himalayan_foothills_",
    },
    {
      src: "/images/Group_media.png",
      name: "curlytales",
      link: "https://curlytales.com/dine-under-the-sky-and-even-stay-inside-dreamy-glamps-at-mussoories-everest-base-camp-resort/",
    },
    {
      src: "/images/wanderalone.png",
      name: "WanderAlone",
      link: "https://wanderalone.co.in/did-you-know-that-just-7-hours-from-delhi-theres-an-everest-base-camp-no-were-not-kidding/",
    },
  ];

  return (
    <Section>
      <div className="max-w-7xl mx-auto px-4 lg:py-8 py-6">
        <div className="flex flex-col items-center justify-center gap-5">
          <BorderLine />
          <h2 className="md:text-4xl text-3xl text-center font-normal tracking-wider uppercase text-white">
            Featured Press Releases
          </h2>
        </div>
        <div className="mt-8">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            speed={1000}
            // pagination={{
            //   type: "bullets",
            //   clickable: true,
            //   el: ".bullets-Portfolio",
            // }}
            slidesPerView={1}
            spaceBetween={14}
            modules={[Pagination, Autoplay]}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 14,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="!p-8 border border-[#F69F2B] rounded-sm"
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className="">
                <Link
                  target="_blank"
                  href={item.link}
                  className="relative w-full lg:aspect-[3/1] aspect-[2/1] py-8 flex justify-center items-center bg-white rounded-tl-3xl rounded-br-3xl overflow-hidden"
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className={`object-contain p-3 bg-white`}
                    // style={{
                    //   background:
                    //     index == 0 || index == 4 || index == 5
                    //       ? "white"
                    //       : index == 6
                    //         ? "#126D76"
                    //         : "transparent",
                    // }}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="flex justify-center items-center gap-6 press lg:mt-11"> */}
          {/* <div className="bullets-Portfolio lg:mt-11 flex justify-center items-center gap-2"></div> */}
          {/* </div> */}
        </div>
      </div>
    </Section>
  );
};

export default PressReleases;

// const PressReleasesComp = ({ src, urlText, link, title, description }) => {
//     return (
//         <div className="flex flex-col gap-4 p-4  shadow-lg">
//             <div className="w-full relative aspect-[4/.5]">
//                 <Image src={src} alt="alt" fill className="object-contain" />
//             </div>
//             {title && <div className="flex flex-col gap-2 text-[#29422C]">
//                 {urlText && <Link
//                     href={link}
//                     className="text-base text-[#29422C] underline"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     title={urlText}
//                     aria-label={urlText}
//                 >
//                     {urlText}
//                 </Link>}
//                 {title && <h3 className="lg:text-[1.4rem]/[2rem] text-base font-semibold">{title}</h3>}
//                 {description && <p className="lg:text-base text-[0.9rem]/[1.5rem] font-normal">
//                     {description}...
//                     <Link
//                         href={link}
//                         className="text-sm text-[#29422C] underline font-bold uppercase"
//                         target="_blank"
//                     >
//                         Read More
//                     </Link>
//                 </p>}
//             </div>}
//         </div>
//     );
// };

// const data = [
//     {
//         src: paper1,
//         urlText: "LBB.in",
//         link: "https://lbb.in/delhi/away-from-the-city-around-all-things-pretty-ebc-mussoorie/",
//         title:
//             "Away From The City, Around All Things Pretty: Everest Base Camp in Mussoorie!",
//         description:
//             "Nature lovers, this one’s for y’all! If you are looking to get away from the hustle and bustle of your daily life and want to escape to somewhere peaceful and quiet, we have discovered just the place for you! Surrounded by forest trails, well-marked trekking lines, pristine views",
//     },
//     {
//         src: paper2,
//         urlText: "tripoto.com",
//         link: "https://www.tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8",
//         title:
//             "Did You Know That Just 7 Hours From Delhi, There's An Everest Base Camp? No, We're Not Kidding!",
//         description:
//             "Did you know that the person after whom Mount Everest is named was a resident of the quaint town of Mussourie also known as “Queen of The Hills”? Just a 4-minute walk from George Everest’s house (after whom the highest peak is named!), lies this glamping camp",
//     },
//     {
//         src: paper3,
//         urlText: "curlytales.com",
//         link: "https://curlytales.com/dine-under-the-sky-and-even-stay-inside-dreamy-glamps-at-mussoories-everest-base-camp-resort/",
//         title:
//             "Dine Under The Sky And Even Stay Inside Dreamy Glamps At Mussoorie’s Everest Base Camp Resort.",
//         description:
//             "Welcome to the enchanting realm of Everest Base Camp, where luxury meets the untamed spirit of nature in a symphony orchestrated by the echoes of history. Tucked amidst the breathtaking landscapes of Mussoorie, this isn’t just a glamping site. It’s a vivid tapestry",
//     },
//     {
//         src: paper1,
//         urlText: "LBB.in",
//         link: "https://lbb.in/delhi/away-from-the-city-around-all-things-pretty-ebc-mussoorie/",
//         title:
//             "Away From The City, Around All Things Pretty: Everest Base Camp in Mussoorie!",
//         description:
//             "Nature lovers, this one’s for y’all! If you are looking to get away from the hustle and bustle of your daily life and want to escape to somewhere peaceful and quiet, we have discovered just the place for you! Surrounded by forest trails, well-marked trekking lines, pristine views",
//     },
//     {
//         src: paper2,
//         urlText: "tripoto.com",
//         link: "https://www.tripoto.com/india/trips/did-you-know-that-just-8-hours-from-delhi-there-s-an-everest-base-camp-no-we-re-not-kidding-3aea3a54f8628a1c8",
//         title:
//             "Did You Know That Just 7 Hours From Delhi, There's An Everest Base Camp? No, We're Not Kidding!",
//         description:
//             "Did you know that the person after whom Mount Everest is named was a resident of the quaint town of Mussourie also known as “Queen of The Hills”? Just a 4-minute walk from George Everest’s house (after whom the highest peak is named!), lies this glamping camp",
//     },
//     {
//         src: paper3,
//         urlText: "curlytales.com",
//         link: "https://curlytales.com/dine-under-the-sky-and-even-stay-inside-dreamy-glamps-at-mussoories-everest-base-camp-resort/",
//         title:
//             "Dine Under The Sky And Even Stay Inside Dreamy Glamps At Mussoorie’s Everest Base Camp Resort.",
//         description:
//             "Welcome to the enchanting realm of Everest Base Camp, where luxury meets the untamed spirit of nature in a symphony orchestrated by the echoes of history. Tucked amidst the breathtaking landscapes of Mussoorie, this isn’t just a glamping site. It’s a vivid tapestry",
//     },
// ];
