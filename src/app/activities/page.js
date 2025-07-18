import AddOn from "../../components/Activities/AddOn";
import GridBanner from "../../components/GridBanner";
import SectionHeading from "../../components/SectionHeading";
import { bookingLink, imgSrc } from "../../utils/data";
import Section from "../../components/Section";
import SliderComponentImage from "../../components/SliderComponentImage";

const page = () => {
  const bannerDate = {
    title: "ACTIVITIES",
    description:
      "Whether you're a fan of indoor elegance or outdoor adventure, we have something special for everyone! Discover thrilling outdoor activities & explore our diverse range of indoor games perfect for a cosy indoor adventure.",
    src1: imgSrc + "activities/img1.webp",
    src2: imgSrc + "activities/img2.webp",
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
        "Discover thrilling outdoor activities like badminton, archery, mountain biking, and hooping. Join the brave for haunted walks around the campsite or witness the stunning sunrise at George Everest Peak, a historic vantage point near Mussoorie. For a unique challenge, partake in a momo-eating contest and unite with fellow birdwatchers at Benog Wildlife Sanctuary. Explore numerous hikes and trails for an unforgettable adventure.",
      images: [
        imgSrc + "activities/img1.webp",
        imgSrc + "activities/outdoor-activities/img1.webp",
        imgSrc + "activities/outdoor-activities/img2.webp",
        imgSrc + "activities/img1.webp",
        imgSrc + "activities/outdoor-activities/img1.webp",
        imgSrc + "activities/outdoor-activities/img2.webp",
      ],
      link: bookingLink,
      urlText: "Book Now",
    },
    {
      title: "Indoor Activities",
      subDescription:
        "Explore our diverse range of board games perfect for a cosy indoor adventure. Join us for a relaxing day of strategic fun and friendly competition.",
      images: [
        imgSrc + "activities/indoor-activities/img1.webp",
        imgSrc + "activities/indoor-activities/img2.webp",
        imgSrc + "activities/indoor-activities/img3.webp",
        imgSrc + "activities/indoor-activities/img1.webp",
        imgSrc + "activities/indoor-activities/img2.webp",
        imgSrc + "activities/indoor-activities/img3.webp",
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
          <SliderComponentImage
            {...item}
            border
            index={index}
            paginationClass={`pagination_${index}`}
            newTab
          />
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
