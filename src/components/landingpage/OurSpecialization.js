"use client";
import { SpecilizationCardNew } from "../Card/index";

import { usePathname } from "next/navigation";
import Section from "../Section";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { NextButton, PrevButton } from "../../icons/icons";
import Container from "../Container";
import BorderLine from "../BorderLine";
import { imgSrc } from "../../utils/data";
import PopupForm from "../PopupForm";
import { useState } from "react";

const OurSpecialization = () => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  const datas = [
    {
      heading: "Picnic in the Meadows!",
      para: "Enjoy a peaceful picnic amidst the beauty of nature, with a basket brimming with delightful snacks and refreshing beverages. Our idyllic property offers the ideal setting for a relaxing afternoon, spent cherishing moments with friends and family. Let the serene surroundings and gentle breeze enhance your perfect outdoor escape.",
      images: [
        imgSrc + "activities/picnic/img1.webp",
        imgSrc + "activities/picnic/img2.webp",
        imgSrc + "activities/picnic/img3.webp",
      ],
      button: "Book Now",
    },
    {
      heading: "Barbecue",
      para: "Join us for an enchanting evening of grilling under the stars. Surrounded by the tranquil beauty of our property, enjoy a memorable night filled with warmth. As the fire crackles, savour a delightful array of your favourite grilled meats and vegetables, creating the perfect backdrop for relaxation and connection with family and friends.",
      images: [
        imgSrc + "activities/barbecue/img1.webp",
        imgSrc + "activities/barbecue/img2.webp",
        imgSrc + "activities/barbecue/img3.webp",
      ],
      button: "Book Now",
    },
    {
      heading: "Bonfire",
      para: "Experience the magic of a private bonfire under the starlit sky, creating cherished moments with your loved ones. Unwind after exploring Mussoorie's natural beauty in the warmth of your own intimate setting, fostering both adventure and relaxation. Let the crackling fire and peaceful atmosphere make your evening truly unforgettable.",
      images: [
        imgSrc + "activities/bonfire/img1.webp",
        imgSrc + "activities/bonfire/img2.webp",
        imgSrc + "activities/bonfire/img3.webp",
      ],
      button: "Book Now",
    },
    {
      heading: "Explore the Wilderness",
      para: "Embark on the George Everest Peak trek in Mussoorie's serene hills, with our expert guide offering direction and companionship. Enjoy a sandwich, tea, and water while exploring hidden gems and stunning Himalayan views. Experience the perfect blend of adventure and comfort with luxury glamping in nature’s beauty.",
      images: [
        imgSrc + "activities/trekking/img1.webp",
        imgSrc + "activities/trekking/img2.webp",
        imgSrc + "activities/trekking/img3.webp",
      ],
      button: "Book Now",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-4 py-10">
          {pathname === "/ebclanding/" && (
            <>
              <BorderLine />
              <h2 className="heading_2 text-center text-white font-normal">
                Our Specialization
              </h2>
              <p className=" text-center desc_1 text-white font-normal">
                Expertly Crafted Experiences Tailored to Every Adventurer&apos;s
                Passion.
              </p>
            </>
          )}

          <div className="lg:mt-8 mt-4">
            <Swiper
              speed={1000}
              pagination={{
                el: ".bullets-Portfolio",
                clickable: true,
              }}
              slidesPerView={1}
              spaceBetween={10}
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: ".swiperButtonNext",
                prevEl: ".swiperButtonPrev",
              }}
              className="card_swiper"
            >
              {datas.map((data, index) => (
                <SwiperSlide key={index}>
                  <SpecilizationCardNew
                    cardData={data}
                    index={index}
                    aspectRatio={"lg:aspect-[2/1.35] aspect-[4/2.8]"}
                    setShowModal={setShowModal}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex gap-2 justify-center w-fit mx-auto lg:mt-8 h-8 items-center">
            <button
              className={`swiperButtonPrev slider-button disabled:opacity-50`}
            >
              <PrevButton />
            </button>
            <div
              className={`flex items-center justify-center gap-1 bullets-Portfolio`}
            />
            <button
              className={`swiperButtonNext slider-button disabled:opacity-50`}
            >
              <NextButton />
            </button>
          </div>
        </div>
      </Container>
      {showModal && (
        <PopupForm setShowModal={setShowModal} showModal={showModal} />
      )}
    </Section>
  );
};

export default OurSpecialization;
