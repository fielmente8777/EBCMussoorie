"use client";
import { useState } from "react";
import Container from "../../../components/Container";
import FullScreenImageViewPopUP from "../../../components/GalleryPage/FullScreenImageViewPopUP";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Grid = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const gridPattern = [
    "col-span-2 row-span-2",
    "col-span-1 row-span-2",
    "col-span-2 row-span-2",
    "col-span-3 row-span-3 -me-[5.3rem]",
    "col-span-2 row-span-2 ms-[5.3rem]",
    "col-span-2 row-span-1 ms-[5.3rem]",
  ];

  const data = [
    "/gallery2/outside5.webp",
    "/gallery2/outsideroom4.webp",
    "/gallery2/outsideview7.webp",
    "/gallery2/outsideview6.webp",
    "/gallery2/outsideview5.webp",
    "/gallery2/outside4.webp",
    "/gallery2/outsideroom3.webp",
    "/gallery2/room6.webp",
    "/gallery2/outsideview4.webp",
    "/gallery2/outsideroom2.webp",
    "/gallery2/outsideview3.webp",
    "/gallery2/outside3.webp",
    "/gallery2/outside2.webp",
    "/gallery2/outsideview2.webp",
    "/gallery2/outsideview1.webp",
    "/gallery2/room5.webp",
    "/gallery2/outside1.webp",
    "/gallery2/outsideroom1.webp",
    "/gallery2/room4.webp",
    "/gallery2/room3.webp",
    "/gallery2/room2.webp",
    "/gallery2/room1.webp",
    "/gallery2/room7.webp",
    "/gallery2/outside6.webp",
  ];
  return (
    <section>
      <Container>
        <div className="lg:grid hidden grid-cols-5 auto-rows-[14rem] grid-flow-row rounded-sm gap-2 overflow-hidden py-1">
          {data.map((src, index) => (
            <div
              key={index}
              className={`${
                gridPattern[index % gridPattern.length]
              } overflow-hidden hover:border-4 border-[#F69F2B]  hover:shadow-3xl shadow-2xl hover:-translate-y-1 hover:shadow-gray-600 duration-1000 transition ease-in-out relative aspect-auto`}
            >
              <Image
                src={src}
                alt="view"
                priority={true}
                fill
                className={`w-full h-full cursor-pointer object-cover hover:scale-110 duration-1000 transition ease-linear`}
                onClick={() => {
                  setShowModal(true);
                  setSelectedImage(src);
                }}
              />
            </div>
          ))}
        </div>
        <div className="lg:hidden block">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={1000}
            navigation={true}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            className="card_swiper"
          >
            {data?.map((src, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className="w-full h-full relative aspect-[4/2.5]"
                >
                  <Image
                    src={src}
                    alt="view"
                    priority={true}
                    fill
                    className={`w-full h-full cursor-pointer object-cover hover:scale-110 duration-1000 transition ease-linear`}
                    onClick={() => {
                      setShowModal(true);
                      setSelectedImage(src);
                    }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex items-center justify-center py-8">
          <Link
            href="/"
            className="px-10 py-3 w-fit text-lg flex items-center justify-center font-medium   text-[#29422C] bg-white rounded-sm border border-[#F69F2B] hover:bg-transparent hover:text-primary duration-300 active:scale-75 hover:scale-105 hover:text-white"
          >
            Back to Home
          </Link>
        </div>
      </Container>
      {showModal && selectedImage && (
        <FullScreenImageViewPopUP
          setShowModal={setShowModal}
          src={selectedImage}
          showModal={showModal}
        />
      )}
    </section>
  );
};

export default Grid;
