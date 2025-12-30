"use client";
import NearbyAttractionsCard from "@/components/Card/NearbyAttractionsCard";
import SectionWithContainer from "@/components/SectionWithContainer";
import SwiperCarousel from "@/components/SwiperCarousel";
import { A11y, Navigation, Scrollbar } from "swiper/modules";

const NearbyAttractions = ({ cards }) => {
  return (
    <SectionWithContainer className="bg-white lg:py-16!" containerClassName="relative">
      <SwiperCarousel
        data={cards}
        className="py-10"
        swiperSlideClassName="w-full"
        swiperWrapperClassName="w-full"
        modules={[Navigation, Scrollbar, A11y]}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        scrollbar={{ draggable: true }}
        loop={true}
        slidesPerView={1}
        spaceBetween={10}
        A11y={{ keyboard: { enabled: true } }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        renderSlide={(card) => <NearbyAttractionsCard {...card} />}
      />
      <button className="button-next absolute box-shadow md:-right-4 right-0 top-1/2 z-50 w-10 aspect-square flex items-center justify-center bg-white rounded-full">
        <BtnNext />
      </button>
      <button className="button-prev absolute box-shadow md:-left-4 left-0 top-1/2 z-50 w-10 aspect-square flex items-center justify-center bg-white rounded-full">
        <BtnPrev />
      </button>
    </SectionWithContainer>
  );
};

export default NearbyAttractions;

export const BtnPrev = () => (
  <svg
    width={8}
    height={16}
    viewBox="0 0 8 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.97462 16L8 14.8239L2.05075 8L8 1.17612L6.97462 0L0 8L6.97462 16Z"
      fill="#434B3E"
    />
  </svg>
);

export const BtnNext = () => (
  <svg
    width={8}
    height={16}
    viewBox="0 0 8 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.02538 16L0 14.8239L5.94925 8L0 1.17612L1.02538 0L8 8L1.02538 16Z"
      fill="#434B3E"
    />
  </svg>
);
