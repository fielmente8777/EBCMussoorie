import Banner from "../../components/AboutPage/Banner";
import BannerImage from "../../../public/images/parkcafebg.jpg";
import c1 from "../../../public/images/01 Picnic_11zon.jpg";
import about1 from "../../../public/images/DSC_6549.jpg";
import about2 from "../../../public/images/DSC_6498.jpg";
import about3 from "../../../public/images/about3.jpg";

import aroundcapm1 from "../../../public/images/aroundcamp1.jpg";
import aroundcapm2 from "../../../public/images/aroundcamp2.jpg";
// import aroundcapm3 from "../../../public/images/arouncamp3.jpg"

import GeorgeEverest from "../../components/AboutPage/GeorgeEverest";
import Image from "next/image";
import SectionHeading from "../../components/SectionHeading";
import SliderComponentImage from "../../components/SliderComponentImage";
import { bookingLink } from "../../utils/data";
import TwoColgridCard from "../../components/TwoColgridCard";

export const metadata = {
  title: "Camping in George Everest Mussoorie | Mussoorie Camp Resort",
  description:
    "EBC is a Experience top-notch camping in George Everest Mussoorie. Enjoy serene views and luxurious stays at Mussoorie Camp Resort. Visit us!",
};

const page = () => {
  const datas = {
    title: "Field notes about Sir George Everest",

    description:
      "Nestled amidst the serene beauty of Mussoorie lies our resort, just a short walk away from the iconic George Everest House. Sir George Everest, the legendary Surveyor General of India, once resided here during his historic journey. Today, his legacy lives on through the towering peak of Mount Everest, named in his honor. At our camp, we pay homage to Sir George Everest's remarkable contributions through our name and our commitment to preserving the beauty of nature that surrounds us. Join us in experiencing the wonder of Mussoorie and the rich history that lies within its embrace.",
    subPara: "Our family heritage, is now your favorite escape.",
    images: [about1, about2, about3, aroundcapm1],

    title2: "For the next few lazy days and cozy nights",

    subDescription:
      "Get ready to experience the best of both worlds with our glamorous camping. We've carefully curated a luxurious indoor experience that blends perfectly with the wild outdoors. Our tents are fully equipped with all the modern amenities and decorated with a mix of modern and rustic interiors, creating a unique and comfortable atmosphere. Get in touch with your wild side, clad in comfortable jungle wear, and immerse yourself in the natural beauty of the surroundings. Get ready to roar like a wolf and snore like a lion, as you indulge in the ultimate glamping experience at EBC Mussoorie.",
    link: bookingLink,
    urlText: "Book Your Stay",
    newTab: true,
  };

  const sectionh = {
    title: "About Everest Base Camp",
    subTitle:
      "Welcome to Everest Base Camp, a luxurious camping resort located in the untouched landscape of Mussoorie.",
    description:
      "Welcome to Everest Base Camp, a luxurious camping resort located in the untouched landscape of Mussoorie. Our property is a nostalgic family treasure that we've transformed into a unique vacation experience for you. We take pride in our honest approach to hospitality and our efforts to blend in with the natural surroundings. Our plush tents offer a perfect balance of luxury and nature to help you unwind after a day full of curated experiences like treks and picnics. At Everest Base Camp, we believe in giving back to the land that nurtures us, and we welcome you to join us on this journey. Discover a new level of relaxation and rejuvenation amidst Mussoorie's flora and fauna. “Our family heritage, is now your favorite escape”",
  };

  const data2 = {
    title: "Around Camp",
    subTitle: "New friends & old",
    description:
      "At our resort, guests always leave with new friends - the local birds, trees, and wildlife. Our property is an extension of their natural habitat, and we encourage our guests to embrace the outdoors and connect with the land. Listen to the songs of the magpies and capture the beauty of the deodar and pine trees. And when it's time to retreat indoors, our luxurious accommodations provide the perfect sanctuary to unwind and relax. Embrace nature's beauty and enjoy the best of both worlds at our camp.",
    link: bookingLink,
    urlText: "Book Your Stay",
    newTab: true,
    grid: [
      aroundcapm1,
      "/picnic/outsideimg.webp",
      "/picnic/20210927142852__MG_4271.webp",
      "/picnic/_MG_1465.webp",
    ],
  };
  return (
    <main>
      <div className="max-w-[1600px] w-full mx-auto relative">
        <div className="relative w-full aspect-[4/1.8] ">
          <Image
            src={BannerImage}
            alt="banner"
            className="h-full w-full object-cover object-bottom-[10%]"
            fill
          />
        </div>
      </div>
      <SectionHeading {...sectionh} />
      <SliderComponentImage {...datas} border />
      <TwoColgridCard {...data2} />
      <hr className="h-px my-4 bg-[#F1EECB] border-0" />
    </main>
  );
};

export default page;
