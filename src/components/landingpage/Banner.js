import Image from "next/image";
import ContactUsForm from "../ContactUsForm";

const Banner = ({ BannerImage }) => {
  return (
    <div className="max-w-[1600px] w-full mx-auto ">
      <div className="bg-[#D5D5D5] relative lg:aspect-[4/1.45] w-full aspect-[2/4] overflow-hidden">
        <Image
          src={BannerImage}
          alt="banner"
          className="object-cover object-bottom-[10%]"
          fill
          // width={600}
          // height={400}
        />
        <div className="absolute top-0 flex justify-center items-center left-0 w-full h-full bg-black/50">
          <div className="maxwidth">
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center h-full gap-4 ">
              <div className="flex flex-col gap-4">
                <h2 className="md:text-5xl/[3.5rem] text-3xl text-white">
                  Escape to EBC Mussoorie – Your Mountain Retreat Awaits!
                </h2>
                <p className="md:text-2xl text-xl mt-4 text-white">
                  Nestled in the heart of the Queen of Hills, our resort offers
                  breathtaking views, world-class amenities, and personalized
                  experiences. Whether it’s a peaceful getaway, a romantic
                  escape, or a family vacation, EBC Mussoorie promises
                  unforgettable moments.
                </p>
              </div>
              <div className="flex lg:justify-end lg:items-end items-center justify-center">
                <div className="lg:aspect-[4/4] aspect-[3/3.77] w-full max-w-md">
                  <ContactUsForm />
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
