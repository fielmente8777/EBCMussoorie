import { RelishConveniently, SomethingForEveryone, StaywithLuxury, UnmatchedViews } from "@/icons/icons";
import Link from "next/link";
import React from "react";



const dataList = [
  {icon: <StaywithLuxury />, text: "Stay with Luxury"},
  {icon: <RelishConveniently />, text: "Relish Conveniently"},
  {icon: <SomethingForEveryone />, text: "Something for everyone"},
  {icon: <UnmatchedViews />, text: "Unmatched Views"},
]
const YouTube = () => {
  return (
    <div className="lg:py-12 py-10">
      <div className="maxwidth mx-auto max-md:px-4">
        <div className="lg:grid grid-cols-2 gap-4 mb-10 flex flex-col-reverse">
          <div className="lg:me-20">
            <div className="flex flex-col lg:gap-4 gap-2 lg:pe-16">
              <h2 className="lg:text-5xl text-2xl text-white font-medium leading-[45px]">
                OUR AMENITIES
              </h2>
              <p className="text-xl text-justify text-white">
                Experience luxury amidst the serene hills at Everest Base Camp
                with a range of to choose from, including a fine dining
                restaurant, outdoor activities, and luxury accommodations, we
                provide the perfect escape from the hustle and bustle of
                everyday life.
              </p>
            </div>
            <div className="lg:mt-10 mt-5">
              <ul className="flex flex-col gap-4">
                {dataList.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-5 text-[#E5E7EB]"
                  >
                    {item.icon}
                    <span className="text-2xl font-semibold">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:-ms-20">
            <div className=" flex flex-col">
              <div className="">
                <div className="img-container rounded-xl overflow-hidden">
                  <iframe
                    width="100%"
                    height="400px"
                    src="https://www.youtube.com/embed/8RejDC67L_I?loop=1&mute=1&autoplay=1"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            target="_blank"
            href={
              "https://www.swiftbook.io/inst/#home?propertyId=741NzlEgzYT84Y4xsBi6DB7MLWBj5lkdF8KxEaTBJTEzMTg=&JDRN=Y"
            }
            className="px-8 py-2 rounded-md bg-[#D5D5D5] text-xl"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YouTube;


