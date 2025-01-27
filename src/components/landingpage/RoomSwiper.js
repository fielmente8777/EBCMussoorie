"use client";
import React from "react";
import RoomSwiperCard from "./RoomSwiperCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import PopupForm from "../PopupForm";
import Section from "../Section";
import Container from "../Container";
import { NextButton, PrevButton } from "../../icons/icons";
import { imgSrc, landingpageImgSrc } from "@/utils/data";
import BorderLine from "../BorderLine";

const RoomSwiper = () => {
  const [showModal, setShowModal] = React.useState(false);
  const Roomdata = [
    {
      image: [
        landingpageImgSrc + "camper/img1.webp",
        landingpageImgSrc + "camper/img2.webp",
        landingpageImgSrc + "camper/img3.webp",
        landingpageImgSrc + "camper/img4.webp",
      ],
      roomName: "The Clamper",
      description:
        "Treat yourself to a relaxing getaway in our Camper rooms, perfect for couplesseeking a lavish vacation experience, providing unparalleled comfort and coziness in a peaceful setting.",
    },
    {
      image: [
        landingpageImgSrc + "glamper/img1.webp",
        landingpageImgSrc + "glamper/img2.webp",
        landingpageImgSrc + "glamper/img3.webp",
        landingpageImgSrc + "glamper/img4.webp",
      ],
      roomName: "The Glamper",
      description:
        " Our Glamper rooms promise relaxation and rejuvenation like no other, ideal for small groups, making unforgettable moments on our exclusive netted balcony space, perfect for creating Instagram-worthy memories.",
    },
    {
      image: [
        landingpageImgSrc + "surveyor/img1.webp",
        imgSrc + "home/img2.webp",
        landingpageImgSrc + "surveyor/img2.webp",
        landingpageImgSrc + "surveyor/img3.webp",
      ],
      roomName: "The Surveyor",
      description:
        "Experience luxury in our Surveyor Suite at Everest Base Camp, Mussoorie. Enjoy spacious tents, stunning forest views, and a king-sized bed. Perfect for families or friends.",
    },
    {
      image: [
        landingpageImgSrc + "surveyor_suite/img1.webp",
        landingpageImgSrc + "surveyor_suite/img2.webp",
        landingpageImgSrc + "surveyor_suite/img3.webp",
        landingpageImgSrc + "surveyor/img3.webp",
      ],
      roomName: "The Surveyor Suite",
      description:
        "Relax and recharge in the peaceful Surveyor rooms, surrounded by Deodar forest scenery. Perfect for families or small groups, our serene atmosphere ensures privacy and comfort, allowing you to reconnect with nature.",
    },
  ];
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-4 w-full items-center justify-center pt-10">
          <BorderLine />
          <h2 className="heading_2 text-white text-center font-normal">
            Our Rooms
          </h2>
          <p className="desc_2 max-w-[45rem] w-full italic text-white text-center mt-2">
            Glamping and Comfort Redefined. Experience the great outdoors like
            never before, where adventure meets luxury.
          </p>
        </div>
        <div className="w-full lg:mt-11 mt-8">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            pagination={{
              clickable: true,
              el: ".page_indicator",
            }}
            modules={[Pagination, Autoplay, Navigation]}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="w-full"
          >
            {Roomdata.map((roomData, index) => {
              return (
                <SwiperSlide key={index} className="">
                  <RoomSwiperCard
                    key={index}
                    roomData={roomData}
                    setShowModal={setShowModal}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="flex gap-2 justify-center w-fit mx-auto lg:mt-11 mt-8 h-8 items-center">
            <button className={`prev slider-button disabled:opacity-50`}>
              <PrevButton />
            </button>
            <div
              className={`flex items-center justify-center gap-1 page_indicator`}
            />
            <button className={`next slider-button disabled:opacity-50`}>
              <NextButton />
            </button>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-8 flex justify-center Cammron mb-10 items-center mx-auto mt-8 w-max py-2 rounded-lg bg-white text-primary capitalize text-lg"
        >
          Book Your Stay
        </button>
        {showModal && (
          <PopupForm showModal={showModal} setShowModal={setShowModal} />
        )}
      </Container>
    </Section>
  );
};

export default RoomSwiper;
