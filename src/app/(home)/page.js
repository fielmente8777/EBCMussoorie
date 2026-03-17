import Aminities from "../../components/HomePage/Aminities";
import Banner from "../../components/HomePage/Banner";
import PressReleases from "../../components/HomePage/PressReleases";

import AwardRecognition from "@/components/HomePage/AwardRecognition";
import AddBanner from "../../components/AddBanner";
import OurPartners from "../../components/HomePage/OurPartners";
import SectionHeading from "../../components/SectionHeading";
import SliderComponentImage from "../../components/SliderComponentImage";
import TwoColgridCard from "../../components/TwoColgridCard";
import NearbyAttractions from "./components/NearbyAttractions";
import { homePageData } from "./homePageData";

const page = () => {
  return (
    <div className="">
      <Banner />
      <SectionHeading {...homePageData.sectionh1} descMaxWidth />
      <SliderComponentImage border={true} {...homePageData.sliderImageData1} quote />
      <SectionHeading {...homePageData.sectionh2} />
      <Aminities />
      <SectionHeading {...homePageData.sectionh3} descMaxWidth />
      <SliderComponentImage {...homePageData.sliderImageData2} />
      {/* <OurSpecialization /> */}
      <SectionHeading {...homePageData.nearbyAttractions} descMaxWidth />
      <NearbyAttractions cards={homePageData.nearbyAttractions.cards} />
      <TwoColgridCard {...homePageData.twoColgridCardData} />
      <PressReleases />
      <AwardRecognition awardImage="/images/award.png" />
      <AddBanner />
      <OurPartners />
      <div className="lg:py-2"></div>
      <div className="w-full h-[1px] bg-[#F1EECB]"></div>
      {/* <Blog /> */}
      {/* <Testimonial /> */}
    </div>
  );
};

export default page;
