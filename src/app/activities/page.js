import AddOn from "../../components/Activities/AddOn";
import IndoorActivities from "../../components/Activities/IndoorActivities";
import InstaGrid from "../../components/Activities/InstaGrid";
import OutdoorActivities from "../../components/Activities/OutdoorActivities";
import WhatInstaButton from "../../utils/WhatInstaButton";
import BannerImage from "../../../public/images/00 Cover_11zon.jpg";
// import Banner from "../../components/landingpage/Banner";
import Image from "next/image";

const page = () => {
  return (
    <div className="">
      {/* <Banner BannerImage={BannerImage} /> */}
      <div className="max-w-[1600px] w-full mx-auto relative">
        <div className="bg-[#000] max-h-[700px] h-[300px] md:h-[700px] overflow-hidden ">
          <Image
            src={BannerImage}
            alt="banner"
            className="h-full w-full object-cover object-bottom-[10%]"
            // fill
            // layout="fill"
            width={600}
            height={400}
          />
        </div>
        <div className="lg:absolute top-0 left-0 z-20 w-full h-full lg:bg-black/40 flex items-center justify-center lg:py-0 pt-8">
          <div className="max-w-4xl mx-auto lg:px-0 px-4">
            <h2 className="text-center md:text-5xl/[3.5rem] text-4xl text-white">
              Choose your idea of Adventure & Fun through our Activities!
            </h2>
            <p className="lg:text-center text-center text-xl mt-4 text-white">
              Whether you&apos;re a fan of indoor elegance or outdoor adventure,
              we have something special for everyone! Indulge in a personalized
              barbeque surrounded by nature or celebrate special occasions in
              teepee tents set in a serene environment. For the thrill-seekers,
              our wilderness treks are a must-try. And when the nights turn
              frosty, gather around the bonfire, roast some s&apos;mores, and
              enjoy the warmth. Join us for unforgettable experiences that
              include delightful barbeques and bonfires under the starlit sky.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:py-16 py-10">
        <OutdoorActivities />
        <IndoorActivities />
        <AddOn />
        <WhatInstaButton
          button={"whatsapp"}
          link="https://api.whatsapp.com/send?phone=918595274861&text=Hi"
        />
        <InstaGrid />
        <WhatInstaButton
          button={"insta"}
          link="https://www.instagram.com/ebcmussoorie/"
        />
      </div>

      <hr className="h-px my-4 bg-[#D5D5D5] border-0" />
    </div>
  );
};

export default page;
