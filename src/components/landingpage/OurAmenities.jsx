"use client";
import Image from "../../../node_modules/next/image";
import BorderLine from "../BorderLine";
import Container from "../Container";
import Section from "../Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// import "swiper/autoplay";
import PopupForm from "../PopupForm";
import { useState } from "react";
import {
  Relishconveniently,
  SomethingForeveryone,
  StayWithLuxury,
  Unmatchedviews,
} from "../../icons/icons";
import Link from "next/link";

const OurAmenities = () => {
  const [showModal, setShowModal] = useState(false);

  const data = {
    title: "Our Amenities",
    description:
      "Experience luxury amidst the serene hills at Everest Base Camp with a range of amenities to choose from, including a fine dining restaurant, outdoor activities, and luxury accommodation, we provide the perfect escape from the hustle and bustle of everyday life.",
    items: [
      {
        title: "Stay with Luxury",
        icon: <StayWithLuxury />,
        description:
          "Luxury tents with private bathrooms for an unforgettable stay",
      },
      {
        title: "Unmatched Views",
        icon: <Unmatchedviews />,
        description:
          "Spectacular views of the Himalayas from the George Everest Peak trek",
      },
      {
        title: "Something for everyone",
        icon: <SomethingForeveryone />,
        description:
          "Archery, badminton, and trek for every adventure enthusiast’s thrill and excitement.",
      },
    ],
  };

  return (
    <Section className="bg-bgClr">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 lg:py-10 py-8">
          <BorderLine />
          <h2 className="heading_2 text-primary">
            {data.title}
          </h2>
          <p className="desc_2 font-normal text-primary mt-2 text-center">
            {data.description}
          </p>

          <div className="lg:grid grid-cols-3 gap-6 w-full mt-4 lg:mt-8 max-w-6xl">
            {data.items.map((item, index) => (
              <div className="flex flex-col  max-md:w-full" key={index}>
                <div className="flex flex-col gap-2 items-center tracking-wider text-center text-primary max-md:mt-7">
                  {item.icon}
                  <h3 className="desc_1 mt-4 font-semibold">
                    {item.title}
                  </h3>
                  <p className="desc_2 font-medium w-[19rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="lg:hidden bl">
            <Swiper
              slidesPerView={1}
            //   loop={true}
            //   autoplay={{
            //     delay: 2000,
            //     disableOnInteraction: false,
            //   }}
            //   speed={900}
            //   modules={[Autoplay]}
              className="w-full h-full"
            >
              {data.items.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col  max-md:w-full">
                    <div className="flex flex-col items-center grow tracking-wider text-center text-[#29422C] max-md:mt-7">
                      {item.icon}
                      <h3 className="mt-4 text-xl font-bold leading-7">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base w-[15rem]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
          {/* <button
            onClick={() => setShowModal(true)}
            className="px-8 flex justify-center Cammron lg:mt-8 mt-4 items-center w-max py-2 rounded-lg bg-[#29422C] text-[#fff] capitalize text-lg"
          >
            Get Exclusive Offers!
          </button> */}
          <Link
            href={"https://www.swiftbook.io/inst/#home?propertyId=741NzlEgzYT84Y4xsBi6DB7MLWBj5lkdF8KxEaTBJTEzMTg=&JDRN=Y"}
            target="_blank"
            className="px-8 flex justify-center mt-4 Cammron items-center w-max py-2 rounded-lg bg-[#29422C] text-[#fff] capitalize text-lg"
          >
            Get Exclusive Offers!
          </Link>
        </div>
      </Container>
      {showModal && (
        <PopupForm setShowModal={setShowModal} showModal={showModal} />
      )}
    </Section>
  );
};

export default OurAmenities;
