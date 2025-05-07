"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import makemytrip from "../../../public/partners/makemytrip.png";
import trivago from "../../../public/partners/Trivago.png";
import tripadvisor from "../../../public/partners/tripadvisor-logo.png";
import booking from "../../../public/partners/booking.png";
import goibibo from "../../../public/partners/goibibo-logo.png";
import BorderLine from "../BorderLine";
import Link from "next/link";

const OurPartners = () => {
  const cardData = ClientImages.length < 4 ? ClientImages : [...ClientImages, ...ClientImages];
  return (
    <section className="bg-[#29422C]">
      <div className="max-w-7xl mx-auto px-4  lg:pt-12 lg:pb-20 py-8">
        <BorderLine />
        <div className="flex flex-col gap-5 mt-5">
          <h2 className="lg:text-4xl text-2xl tracking-wider uppercase text-center text-[#fff]">
            Our Partners
          </h2>
        </div>
        <div className="mt-8">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={15}
            slidesPerView={2}
            loop={true}
            speed={900}
            autoplay={{
              delay: 4000,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },

              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            className="lg:!p-8 !p-3 border border-[#F69F2B] rounded-sm bg-white"
          >
            {cardData.map((item, index) => (
              <SwiperSlide key={index} className="py-2">
                <Link href={item.href} target="_blank" className="relative w-full lg:aspect-[3/1.5] aspect-[2/1] py-8 flex justify-center items-center bg-white rounded-tl-3xl rounded-br-3xl overflow-hidden box-shadow">
                  <Image
                    src={item.src}
                    alt={`${item.alt}`}
                    className={`object-contain p-3 bg-white`}
                    fill
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;

const ClientImages = [
  {
    src: makemytrip,
    alt: "make my trip",
    href:"https://www.makemytrip.com/hotels/everest_base_camp_near_george_everest_house_luxe_cottages-details-mussoorie.html",
  },
  {
    src: trivago,
    alt: "trivago",
    href:"#",
  },
  {
    src: tripadvisor,
    alt: "tripadvisor",
    href:"https://www.tripadvisor.in/Hotel_Review-g297689-d23292009-Reviews-Everest_Base_Camp_Mussoorie-Mussoorie_Dehradun_District_Uttarakhand.html",
  },
  {
    src: booking,
    alt: "booking",
    href:"https://www.booking.com/hotel/in/everest-base-camp-mussoorie.en-gb.html?aid=356980&label=gog235jc-1DCAsobEIbZXZlcmVzdC1iYXNlLWNhbXAtbXVzc29vcmllSDNYA2hsiAEBmAEJuAEXyAEM2AED6AEBiAIBqAIDuALBz-zABsACAdICJGI5ZjY3NzQwLWY4ODktNDE1MC1iNWIyLTczOGQzOTViZjA2ZdgCBOACAQ&sid=636d4061e5cf32a461cfd271f694650f&dist=0&keep_landing=1&sb_price_type=total&type=total&",
  },
  {
    src: goibibo,
    alt: "goibibo",
    href:"https://www.goibibo.com/hotels/hotel-details/?checkin=20250507&checkout=20250508&roomString=1-2-0&searchText=Everest%20Base%20Camp,%20Near%20George%20Everest%20House%20(Luxe%20Cottages)&locusId=CTXMS&locusType=city&cityCode=CTXMS&cc=IN&_uCurrency=INR&giHotelId=4723387211106439049&mmtId=202104271454566191&topHtlId=202104271454566191&sType=hotel",
  },
];
