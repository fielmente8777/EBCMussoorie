import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="max-w-[1600px] mx-auto grid grid-cols-3 h-[600px]">
      {/* Left Column */}
      <div className="flex flex-col w-full h-full">
        <div className="relative w-full flex-1 h-1/2">
          <Image src="/banner/1.png" alt="banner" fill className="object-cover" />
        </div>
        <div className="relative w-full flex-1 h-1/2">
          <Image src="/banner/2_1.png" alt="banner" fill className="object-cover" />
        </div>
      </div>

      {/* Center Image (Takes full height) */}
      <div className="relative w-full h-full">
        <Image src="/banner/bnr2.png" alt="banner" fill className="object-cover" />
      </div>

      {/* Right Column */}
      <div className="flex flex-col w-full h-full">
        <div className="relative w-full flex-1 h-1/2">
          <Image src="/banner/3.png" alt="banner" fill className="object-cover" />
        </div>
        <div className="relative w-full flex-1 h-1/2">
          <Image src="/banner/3_2.png" alt="banner" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Banner;