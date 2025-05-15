"use client";
import Image from "../../../node_modules/next/image";
import BorderLine from "../BorderLine";
import Container from "../Container";
import Section from "../Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PopupForm from "../PopupForm";
import { useState } from "react";
import { bookingLink, landingpageImgSrc } from "@/utils/data";
import Link from "next/link";

const RelaxRejuvenate = () => {
  const [showModal, setShowModal] = useState(false);
  const data = {
    title: "Relax & Rejuvenate with us at Everest Base Camp!",
    description:
      "Escape the urban chaos and embrace a tranquil retreat in nature's embrace. Join us for a unique glamping experience that transcends the ordinary. Immerse yourself in the serenity of the great outdoors, where city stress fades away, replaced by the soothing symphony of rustling leaves and chirping birds. Be our guest, unwind, and rediscover the joy of simplicity. It's time to trade skyscrapers for star-studded skies. Your adventure in nature awaits – let the relaxation begin!",
    images: [
      {
        src: landingpageImgSrc + "img1.webp",
      },
      {
        src: "/gallery2/outsideview6.webp",
      },
      {
        src: landingpageImgSrc + "img2.webp",
      },
    ],
  };
  return (
    <Section className="bg-bgClr">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 py-6">
          <BorderLine />
          <h2 className="heading_2 text-center font-extralight text-primary">
            {data.title}
          </h2>
          <div className="lg:grid grid-cols-3 gap-6 hidden w-full mt-8">
            {data.images.map((image, index) => (
              <div
                className="w-full aspect-[4/3.5] rounded-lg overflow-hidden relative"
                key={index}
              >
                <Image
                  src={image.src}
                  alt={data.title}
                  fill
                  className={`object-cover hover:scale-105 transition duration-300 ease-in-out ${data.class}`}
                />
              </div>
            ))}
          </div>
          <div className="lg:hidden block w-full mt-4">
            <Swiper
              slidesPerView={1}
              speed={900}
              modules={[Navigation]}
              navigation={true}
              className="w-full h-full card_swiper"
            >
              {data.images.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="relative rounded-lg overflow-hidden aspect-[4/3] w-full">
                    <Image
                      src={item.src}
                      alt="bonfire"
                      className="h-full object-cover"
                      fill
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <p className="desc_2 text-primary tracking-wide mt-4 text-center">{data.description}</p>
          <Link
            href={bookingLink}
            target="_blank"
            className="px-8 flex justify-center mt-4 Cammron items-center w-max py-2 rounded-lg bg-[#29422C] text-[#fff] capitalize text-lg"
          >
            Get Exclusive Offers!
          </Link>
          {/* <button
            onClick={() => setShowModal(true)}
            className="px-8 flex justify-center mt-4 Cammron items-center w-max py-2 rounded-lg bg-[#29422C] text-[#fff] capitalize text-lg"
          >
            Get Exclusive Offers!
          </button> */}
        </div>
      </Container>
      {showModal && (
        <PopupForm setShowModal={setShowModal} showModal={showModal} />
      )}
    </Section>
  );
};

export default RelaxRejuvenate;
