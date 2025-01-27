import RelaxRejuvenate from "@/components/landingpage/RelaxRejuvenate";

import Activities from "@/components/landingpage/Activities";
import Banner from "@/components/landingpage/Banner";
import OurSpecialization from "@/components/landingpage/OurSpecialization";
import RoomSwiper from "@/components/landingpage/RoomSwiper";
import Testimonial from "@/components/landingpage/Testimonial";
import OurAmenities from "@/components/landingpage/OurAmenities";
import { imgSrc } from "@/utils/data";

const page = () => {
  return (
    <main>
      <Banner BannerImage={imgSrc + "home/img2.webp"} />
      <RelaxRejuvenate />

      <RoomSwiper />
      <OurAmenities />
      <OurSpecialization />
      <Activities />
      <Testimonial />
    </main>
  );
};

export default page;
