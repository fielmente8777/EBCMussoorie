import Image from "next/image";
import ContactUsForm2 from "../ContactUsForm2";

const Banner = ({ BannerImage }) => {
  return (
    <div className="max-w-[1600px] w-full mx-auto ">
      <div className="bg-[#D5D5D5] relative lg:aspect-[4/1.7] w-full aspect-[2/5]">
        <Image
          src={BannerImage}
          alt="banner"
          className="object-cover object-bottom-[10%]"
          fill
        />
        <div className="absolute top-0 flex justify-center items-center left-0 w-full h-full bg_gradient py-5">
          <div className="maxwidth">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center h-full gap-4 ">
              <div className="flex flex-col gap-4">
                <h2 className="heading_1 text-white">
                  Escape to EBC Mussoorie Your Mountain Retreat Awaits!
                </h2>
                <p className="desc_1 italic mt-4 text-white">
                  Nestled in the heart of Mussoorie, EBC offers stunning views,
                  top-notch amenities, and personalized experiences for a
                  peaceful getaway, romantic escape, or family vacation.
                </p>
              </div>
              <div className="flex lg:justify-end lg:items-end items-center justify-center">
                <div className=" w-full max-w-md">
                  <ContactUsForm2 title={"Contact Us Today!"} description={"Experience Luxury at EBC Mussoorie!"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
