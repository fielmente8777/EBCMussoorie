import PressReleases from "../components/HomePage/PressReleases";
import About from "../components/HomePage/About";
import Aminities from "../components/HomePage/Aminities";
import Banner from "../components/HomePage/Banner";

import OurPartners from "../components/HomePage/OurPartners";
import SliderComponentImage from "../components/SliderComponentImage";
import SectionHeading from "../components/SectionHeading";
import TwoColgridCard from "../components/TwoColgridCard";
import AddBanner from "../components/AddBanner";
import { bookingLink, imgSrc } from "../utils/data";
import parkcafe from "../../public/images/parkcafe.jpg";
import parkcafereachus1 from "../../public/images/DSC_6324.jpg";
import chooseus1 from "../../public/images/whychooseus1.jpg";
import chooseus2 from "../../public/images/whychooseus2.jpg";
import chooseus3 from "../../public/Surveyor Suite Room/_MG_2601.webp";
import chooseus4 from "../../public/Surveyor Suite Room/_MG_2602.webp";
import chooseus5 from "../../public/Surveyor Suite Room/_MG_2603.webp";


const sectionh1 = {
  title: "Everest Base Camp is a luxury camping resort!",
  description:
    "“It embodies the legacy of Sir George Everest, a former Surveyor General of India, and is an ode to his adventures that unfolded in the charming town of Mussoorie”",
};
const sectionh2 = {
  title: "OUR AMENITIES",
  description:
    "Experience luxury amidst the serene hills at Everest Base Camp with a range of amenities to choose from, including a fine dining restaurant, outdoor activities, and luxury accommodations, we provide the perfect escape from the hustle and bustle of everyday life. Discover the perfect blend of nature and luxury at our resort.",
};
const sectionh3 = {
  title: "EXPERIENCE PARK CAFE",
  description:
    "To create a dining oasis in the middle of the wilderness, we at Park Café are all about fusing innovation and simplicity.",
};
const sliderImageData1 = {
  title: "Welcome to EBC Mussoorie",
  description:
    "Discover Your Mountain Oasis. Experience Luxury Camping at Everest Base Camp Mussoorie!",
  subDescription:
    "Our seven spacious rooms, each uniquely inspired by nature, offer top-notch bed and bath fittings with stunning views of the hills and forests. Enjoy the relaxing corridor and cozy patio overlooking the jungle. Experience nature's tranquility and wake up to the sweet songs of songbirds at our resort!",
  link: "/rooms",
  urlText: "Discover all Rooms",
  btnName: "Discoverallrooms",
  paginationClass:"pagination_0",
  images: [
    imgSrc+"home/img1.webp",
    imgSrc+"home/img2.webp",
    imgSrc+"home/img3.webp",
    imgSrc+"home/img4.webp",
  ],
};
const sliderImageData2 = {
  subDescription:
    "We're proud to serve a variety of delicious dishes that celebrate Mussoorie's culinary heritage. Our cafe is situated where Sir George Everest once had his stables and rode around, along with the George Everest Museum just a few minutes walk away.",
  link: "/parkcafe",
  urlText: "Discover Park Cafe",
  btnName: "Discover",
  paginationClass:"pagination_1",
  images: [
    "/DJI_0378.webp",
    "/gallery2/outsideview2.webp",
    "/gallery2/outsideview3.webp",
    "/gallery2/outside2.webp",
    "/gallery2/outside3.webp",
    "/gallery2/outside4.webp",
    "/gallery2/outside5.webp",
    chooseus1,
    "/gallery2/outsideview3.webp",
    parkcafe,
    "/gallery2/outside5.webp",
    chooseus2,
    chooseus3,
    chooseus4,
    chooseus5,
    parkcafereachus1,
    parkcafe,
    "/gallery2/outsideview3.webp",
  ],
};

const twoColgridCardData = {
  title: "OUR ACTIVITIES",
  description: `Whether you're a fan of indoor elegance or outdoor adventure, we have something special for everyone! Indulge in a personalized barbeque surrounded by nature or celebrate special occasions in teepee tents set in a serene environment. For the thrill-seekers, our wilderness treks are a must-try. And when the nights turn frosty, gather around the bonfire, roast some s'mores, and enjoy the warmth. Join us for unforgettable experiences that include delightful barbeques and bonfires under the starlit sky.`,
  src: "/DJI_0378.webp",
  link: bookingLink,
  urlText: "Book Now",
};

const page = () => {
  return (
    <div className="">
      <Banner />
      <SectionHeading {...sectionh1} descMaxWidth/>
      <SliderComponentImage border={true} {...sliderImageData1}  />
      <SectionHeading {...sectionh2} />
      <Aminities />
      <SectionHeading {...sectionh3} descMaxWidth />
      <SliderComponentImage {...sliderImageData2} />
      {/* <OurSpecialization /> */}
      <TwoColgridCard {...twoColgridCardData} />
      <PressReleases />
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
