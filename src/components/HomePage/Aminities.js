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

const Aminities = () => {
  return (
    <div className="bg-[#FFFFFF]">
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
            <div className="flex flex-col  max-md:w-full">
              <div className="flex flex-col items-center grow tracking-wider text-center text-[#29422C] max-md:mt-7">
                <StayWithLuxury />

                <div className="mt-4 text-xl font-bold leading-7">
                  Stay with Luxury
                </div>
                <div className="mt-4 text-[16px] leading-6">
                  Luxury tents with private bathrooms for an unforgettable stay
                </div>
              </div>
            </div>
            <div className="flex flex-col  max-md:w-full">
              <div className="flex flex-col items-center grow pb-6 tracking-wider text-center text-[#29422C] max-md:mt-7">
                <Relishconveniently />

                <div className="mt-4 text-xl font-bold leading-7">
                  Relish Conveniently
                </div>
                <div className="mt-4 text-[16px] leading-6">
                  Park Cafe offering fusion cuisine with breathtaking views
                </div>
              </div>
            </div>
            <div className="flex flex-col  max-md:w-full">
              <div className="flex flex-col items-center grow pb-6 tracking-wider text-center text-[#29422C] max-md:mt-7">
                <SomethingForeveryone />

                <div className="mt-4 text-xl font-bold leading-7">
                  Something for everyone
                </div>
                <div className="mt-4 text-[16px] leading-6">
                  Archery, badminton, and jungle trek for adventure enthusiasts
                </div>
              </div>
            </div>
            <div className="flex flex-col max-md:w-full">
              <div className="flex flex-col items-center grow py-px tracking-wider text-center text-[#29422C] max-md:mt-7">
                <Unmatchedviews />

                <div className="mt-4 text-xl font-bold leading-7">
                  Unmatched Views
                </div>
                <div className="mt-4 text-[16px] leading-6">
                  Spectacular views of the Himalayas from the George Everest
                  Peak trek
                </div>
              </div>
            </div>
            <div className="flex flex-col  max-md:w-full">
              <div className="flex flex-col items-center grow pb-7 tracking-wider text-center text-[#29422C] max-md:mt-7">
                <AchieveSerenity />

                <div className="mt-4 text-xl font-bold leading-7">
                  Achieve Serenity
                </div>
                <div className="mt-4 text-[16px] leading-6">
                  Serene ambiance amidst the lush greenery for relaxation
                </div>
              </div>
            </div>
            <div className="flex flex-col  max-md:w-full">
              <div className="flex flex-col items-center grow tracking-wider text-center text-[#29422C] max-md:mt-7">
                <Personalizedforyou />

                <div className="mt-4 text-xl font-bold leading-7">
                  Personalized for you
                </div>
                <div className="mt-4 text-[16px] leading-6">
                  Personalized picnics and BBQ for an intimate dining experience
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link
          href={"/"}
          className="flex justify-center self-center px-8 py-2 mt-10 rounded-sm text-base  border border-[#F69F2B] leading-6 text-[#FFFFFF] bg-[#29422C] max-md:mt-10"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Aminities;
