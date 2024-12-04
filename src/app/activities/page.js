import AddOn from "../../components/Activities/AddOn";
import IndoorActivities from "../../components/Activities/IndoorActivities";
import InstaGrid from "../../components/Activities/InstaGrid";
import OutdoorActivities from "../../components/Activities/OutdoorActivities";
import WhatInstaButton from "../../utils/WhatInstaButton";
import BannerImage from "../../../public/activity/activity10.webp";
// import Banner from "../../components/landingpage/Banner";
import Image from "next/image";
import GridBanner from "../../components/GridBanner";
import SectionHeading from "../../components/SectionHeading";
import { bookingLink } from "../../utils/data";
import Section from "../../components/Section";
import SliderComponentImage from "../../components/SliderComponentImage";

const page = () => {
  const bannerDate = {
    title: "ACTIVITIES",
    description:
      "Whether you're a fan of indoor elegance or outdoor adventure, we have something special for everyone! Discover thrilling outdoor activities & explore our diverse range of indoor games perfect for a cosy indoor adventure.",
    src1: BannerImage,
    src2: "/bornfire/treking.webp",
  };

  const sectionh1 = {
    title: "Choose your idea of Adventure & Fun through our Activities!",
    description:
      "Whether you're a fan of indoor elegance or outdoor adventure, we have something special for everyone! Indulge in a personalized barbeque surrounded by nature or celebrate special occasions in teepee tents set in a serene environment. For the thrill-seekers, our wilderness treks are a must-try. And when the nights turn frosty, gather around the bonfire, roast some s'mores, and enjoy the warmth. Join us for unforgettable experiences that include delightful barbeques and bonfires under the starlit sky.",
  };

  const activeCarddata = [
    {
      title: "Outdoor Activities",
      subDescription:
        "Discover thrilling outdoor activities like badminton, archery, mountain biking, and hooping. Join the brave for haunted walks around the campsite or witness the stunning sunrise at Mussoorie's Lal Tibba. For a unique challenge, partake in a momo-eating contest and unite with fellow birdwatchers at Benog Wildlife Sanctuary. Explore numerous hikes and trails for an unforgettable adventure.",
      images: [
        "/activity/activity11.webp",
        "/activity/activity8.webp",
        "/activity/activity10.webp",
        "/activity/activity2.webp",
        "/activity/activitydiv1.webp",
        "/activity/activity1.webp",
        "/activity/DSC04128_11zon.webp",
      ],
      link: bookingLink,
      urlText: "Book Now",
    },
    {
      title: "Indoor Activities",
      subDescription:
        "Explore our diverse range of board games perfect for a cosy indoor adventure. Join us for a relaxing day of strategic fun and friendly competition.",
      images: [
        "/activity/activity6.webp",
        "/activity/activity7.webp",
        "/activity/activity3.webp",
        "/activity/activity4.webp",
        "/activity/indoor1.webp",
        "/activity/indoor2.webp",
        "/activity/boardgame.webp",
        "/activity/activity5.webp",
      ],
      link: bookingLink,
      urlText: "Book Now",
    },
  ];
  return (
    <div className="">
      <GridBanner {...bannerDate} />
      <SectionHeading {...sectionh1} border titleMaxWidth />

      {activeCarddata.map((item, index) => (
        <Section key={index}>
          <SliderComponentImage {...item} border />
        </Section>
      ))}
      <div className="lg:py-16 py-10">
        <AddOn />
      </div>

      <hr className="h-px my-4 bg-[#F1EECB] border-0" />
    </div>
  );
};

export default page;
