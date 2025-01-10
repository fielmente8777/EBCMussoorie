import Link from "next/link";
import React from "react";
import {
  AchieveSerenity,
  Personalizedforyou,
  Relishconveniently,
  SomethingForeveryone,
  StayWithLuxury,
  Unmatchedviews,
} from "../../icons/icons";
import { bookingLink } from "../../utils/data";

const Aminities = () => {
  const data = [
    {
      title: "Stay with Luxury",
      icon: <StayWithLuxury />,
      description:
        "Luxury tents with private bathrooms for an unforgettable stay",
    },
    {
      title: "Relish Conveniently",
      icon: <Relishconveniently />,
      description: "Park Cafe offering fusion cuisine with breathtaking views",
    },
    {
      title: "Something for everyone",
      icon: <SomethingForeveryone />,
      description:
        "Archery, badminton and trek for every adventure enthusiasts",
    },
    {
      title: "Unmatched Views",
      icon: <Unmatchedviews />,
      description:
        "Spectacular views of the Himalayas from the George Everest Peak trek",
    },
    {
      title: "Achieve Serenity",
      icon: <AchieveSerenity />,
      description: "Serene ambiance amidst the lush greenery for relaxation",
    },
    {
      title: "Personalized for you",
      icon: <Personalizedforyou />,
      description:
        "Personalized picnics and BBQ for an intimate dining experience",
    },
  ];

  return (
    <div className="bg-[#E5E7EB]">
      <div className="flex flex-col max-md:px-3 max-w-[880px] mx-auto py-5 md:py-10">
        {/* <div className="self-center text-[18px] font-bold tracking-wider text-center text-[#29422C]">
                AMENITIES
            </div>
            <div className="mt-10 w-full text-[16px] leading-8 text-center text-[#29422C] max-md:mt-10 max-md:max-w-full">
                Experience luxury amidst the serene hills at Everest Base Camp with a
                range of amenities to choose from, including a fine dining restaurant,
                outdoor activities, and luxury accommodations, we provide the perfect
                escape from the hustle and bustle of everyday life. Discover the perfect
                blend of nature and luxury at our resort.
            </div> */}
        <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  md:gap-10">
            {data.map((item, index) => (
              <div className="flex flex-col  max-md:w-full" key={index}>
                <div className="flex flex-col items-center grow tracking-wider text-center text-[#29422C] max-md:mt-7">
                  {item.icon}
                  <h3 className="mt-4 text-xl font-bold leading-7">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base italic">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link
          href={bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center self-center px-8 py-2 mt-10 rounded-sm text-base  border border-[#F69F2B] leading-6 text-[#FFFFFF] bg-[#29422C] max-md:mt-10"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Aminities;
