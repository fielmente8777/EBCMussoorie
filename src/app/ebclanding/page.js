// import Activities from "../../../../components/landingpage/Activities";
// import Banner from "../../../../components/landingpage/Banner";
// import BottomGallery from "../../../../components/landingpage/BottomGallery";
// import Form from "../../../../components/landingpage/Form";
// import Grid from "../../../../components/landingpage/Grid";
// import OurSpecialization from "../../../../components/landingpage/OurSpecialization";
// import RoomSwiper from "../../../../components/landingpage/RoomSwiper";
// import Testimonial from "../../../../components/landingpage/Testimonial";
// import YouTube from "../../../../components/landingpage/YouTube";
import BannerImage from "../../../public/images/00 Cover_11zon.jpg";

import Activities from "../../components/landingpage/Activities";
import Banner from "../../components/landingpage/Banner";
import BottomGallery from "../../components/landingpage/BottomGallery";
import Form from "../../components/landingpage/Form";
import Grid from "../../components/landingpage/Grid";
import OurSpecialization from "../../components/landingpage/OurSpecialization";
import RoomSwiper from "../../components/landingpage/RoomSwiper";
import Testimonial from "../../components/landingpage/Testimonial";
import YouTube from "../../components/landingpage/YouTube";

const page = () => {
  return (
    <div className="">
      <Banner BannerImage={BannerImage} />
      <Grid />
      {/* <hr className=" h-px my-8 bg-[white]" /> */}

      <RoomSwiper />
      {/* <hr className="h-px my-8 bg-[white]" /> */}

      <YouTube />
      <div className="maxwidth py-8">
        <h2 className="lg:text-5xl text-3xl text-center text-[#E5E7EB] font-bold mb-5">
          Our Specialization
        </h2>
        {/* <p className="text-center lg:text-xl text-lg text-[#E5E7EB] font-normal mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p> */}
      </div>
      <OurSpecialization />
      <Activities />
      <Testimonial />
      <BottomGallery />
      <Form />
    </div>
  );
};

export default page;
