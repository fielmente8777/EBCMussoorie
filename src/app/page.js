import PressReleases from "@/components/HomePage/PressReleases";
import About from "../components/HomePage/About";
import Aminities from "../components/HomePage/Aminities";
import Banner from "../components/HomePage/Banner";
import Blog from "../components/HomePage/Blog";
import Momories from "../components/HomePage/Momories";

import OurSpecialization from "../components/landingpage/OurSpecialization";
import Testimonial from "../components/landingpage/Testimonial";
import OurPartners from "@/components/HomePage/OurPartners";

const page = () => {
  return (
    <div className="flex flex-col gap-10">
      <Banner />
      <About />
      <Momories />
      <Aminities />
      {/* <OurSpecialization /> */}
      <PressReleases />
      <OurPartners />
      <div className="lg:py-2"></div>
      <Blog />
      {/* <Testimonial /> */}
    </div>
  );
};

export default page;
