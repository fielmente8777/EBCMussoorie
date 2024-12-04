import React from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import bannerImg from "../../../public/DJI_0378.webp";
const Banner = () => {
  return (
    <section className="">
      <div className="max-w-[1600px] w-full mx-auto">
        <div className="relative lg:aspect-[3/1.3] aspect-[3/4.5]">
          <Image src={bannerImg} alt="logo" className="object-cover" fill />
          {/* <div className="absolute lg:top-[30%] top-1/2 lg:right-[30%] right-[10%] lg:translate-x-[100%] translate-x-[5%] lg:-translate-y-[30%] -translate-y-1/2">
            <div className="flex flex-col justify-center p-5 bg-[#29422C] max-w-[365px]">
              <div className="flex flex-col px-4 py-5 border border-solid border-[#D5D5D5]">
                <Image
                  loading="lazy"
                  src={logo}
                  alt="logo"
                  width={600}
                  height={400}
                  className="w-full aspect-[1.67]"
                />
                <div className="mt-7 text-[20px] tracking-wider leading-8 text-center text-[#D5D5D5]">
                  Discover Your Mountain Oasis: Experience Luxury Camping at
                  Everest Base Camp Mussoorie!
                </div>
                <Link
                  href={
                    "https://www.swiftbook.io/inst/#home?propertyId=741NzlEgzYT84Y4xsBi6DB7MLWBj5lkdF8KxEaTBJTEzMTg=&JDRN=Y"
                  }
                  target="_blank"
                  className="justify-center self-center px-8 py-2 rounded-sm mt-5 text-base italic leading-6 text-[#29422c] bg-[#D5D5D5]"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
