import {
  BedService,
  Cloth,
  Cup,
  FoodService,
  Heater,
  Lotus,
  PlateWithSpoon,
  Verified,
  Whatsapp,
  Wifi,
} from "../../icons/icons";
import GridBanner from "../../components/GridBanner";
import SliderComponentImage from "../../components/SliderComponentImage";
import NewsLatter from "../../components/NewsLatter";

import { bookingLink, imgSrc } from "../../utils/data";
import Section from "../../components/Section";
import SectionHeading from "../../components/SectionHeading";
export const metadata = {
  title:
    "Glamping Near Mussoorie | Glamping Near Rishikesh, Dehradun, Delhi - EBC",
  description:
    "Experience luxury glamping in Mussoorie, near Rishikesh, Dehradun, Delhi, and Gurugram at EBC. Enjoy tent house in mussoorie with us!",
};

const RoomsAccomodationData = {
  title: "Rooms and Accomodation",
  subtitle:
    "Wabi-Sabi has 12 Elegantly constructed and furnished spacious suites built such that each suite has a delightful view of the landscape garden, mountains and the dam offering a truly mesmerizing experience of living with nature. A well-designed and comfortable king size bed with all modern facilities and fully air-conditioned room adds to the relaxing ambience.",

  items: [
    {
      title: "The Camper",
      description: "Homely Haven  | 1-3 people  | 280sqft",
      subDescription:
        "Experience a cozy retreat in our Camper rooms, perfectly suited for couples seeking a luxurious holiday getaway. Nestled amidst the serene surroundings, these heat-insulated rooms provide unparalleled comfort and warmth. Step out onto your private balcony to soak in the breathtaking views of the Deodar forest while savoring delicious coffee.",
      accomodation: [
        {
          icon: <FoodService />,
          isTrue: true,
        },
        {
          icon: <BedService />,
          isTrue: true,
        },
        {
          icon: <Verified />,
          isTrue: true,
        },
        {
          icon: <Lotus />,
          isTrue: true,
        },
        {
          icon: <Cup />,
          isTrue: true,
        },
        {
          icon: <Wifi />,
          isTrue: true,
        },
        {
          icon: <Heater />,
          isTrue: true,
        },
        {
          icon: <PlateWithSpoon />,
          isTrue: true,
        },
        {
          icon: <Cloth />,
          isTrue: true,
        },
      ],
      images: [
        imgSrc + "room/camper/img1.webp",
        imgSrc + "room/camper/img2.webp",
        imgSrc + "room/camper/img3.webp",
        imgSrc + "room/camper/img4.webp",
      ],
      link: bookingLink,
      urlText: "Book Now",
    },
    {
      title: "The Glamper",
      description: "Opulent Nature  | 1-3 people  | 375sqft",
      subDescription:
        "Glamper combines sophistication and style, providing a luxurious glamping experience in the wilderness of Everest Base Camp, Mussoorie. Enjoy plush interiors and exclusive luxury rooms for a truly indulgent retreat. Step into a world of extravagance and nature as you sip on delicious hot chocolate and admire the beauty of the Deodar forest. Best suited for small groups. ",

      subDescription2:
        "Don't miss our special netted balcony space, perfect for capturing Instagram-worthy moments.",
      accomodation: [
        {
          icon: <FoodService />,
          isTrue: true,
        },
        {
          icon: <BedService />,
          isTrue: true,
        },
        {
          icon: <Verified />,
          isTrue: true,
        },
        {
          icon: <Lotus />,
          isTrue: true,
        },
        {
          icon: <Cup />,
          isTrue: true,
        },
        {
          icon: <Wifi />,
          isTrue: true,
        },
        {
          icon: <Heater />,
          isTrue: true,
        },
        {
          icon: <PlateWithSpoon />,
          isTrue: true,
        },
        {
          icon: <Cloth />,
          isTrue: true,
        },
      ],
      images: [
        imgSrc + "room/glamper/img1.webp",
        imgSrc + "room/glamper/img2.webp",
        imgSrc + "room/glamper/img3.webp",
        imgSrc + "room/glamper/img4.webp",
      ],
      link: bookingLink,
      urlText: "Book Now",
    },
    {
      title: "The Surveyor",
      description: "Meadow view Cabins  | 1-3 people  | 450sqft",
      subDescription:
        "Experience in the ultimate wilderness retreat amidst our expansive 20 acres of spacious tents, offering the best views of a lush green forest meadow. After a day of exploration, find solace and rejuvenate your senses in the serene surroundings, surrounded by breathtaking views of the Deodar forest. Best Suited for families or small friend groups. ",
      subDescription2:
        "Enjoy utmost privacy and comfort in our tranquil ambiance, inviting you to rediscover yourself amidst nature's embrace.",
      accomodation: [
        {
          icon: <FoodService />,
          isTrue: true,
        },
        {
          icon: <BedService />,
          isTrue: true,
        },
        {
          icon: <Verified />,
          isTrue: true,
        },
        {
          icon: <Lotus />,
          isTrue: true,
        },
        {
          icon: <Cup />,
          isTrue: true,
        },
        {
          icon: <Wifi />,
          isTrue: true,
        },
        {
          icon: <Heater />,
          isTrue: true,
        },
        {
          icon: <PlateWithSpoon />,
          isTrue: true,
        },
        {
          icon: <Cloth />,
          isTrue: true,
        },
      ],
      images: [
        imgSrc + "room/surveyor/img1.webp",
        imgSrc + "room/surveyor/img2.webp",
        imgSrc + "room/surveyor/img3.webp",
        imgSrc + "room/surveyor/img4.webp",
      ],
      link: bookingLink,
      urlText: "Book Now",
    },
    {
      title: "The Surveyor Suite",
      description: "Opulent Wilderness  | 1-4 people | 600sqft",
      subDescription:
        "Experience unparalleled luxury amidst nature in our Surveyor Suite at Everest Base Camp, Mussoorie. Immerse yourself in a meticulously designed tent featuring spacious living areas, extravagant amenities, and breathtaking forest views. Relax in style with a king-sized bed and the option to set up a queen-sized sofa bed, accommodating up to four people. Perfect for families or friend groups of 4.",
      subDescription2:
        " Enjoy the utmost privacy and seclusion in our most premium and spacious room, offering tranquility and indulgence like never before.",
      accomodation: [
        {
          icon: <FoodService />,
          isTrue: true,
        },
        {
          icon: <BedService />,
          isTrue: true,
        },
        {
          icon: <Verified />,
          isTrue: true,
        },
        {
          icon: <Lotus />,
          isTrue: true,
        },
        {
          icon: <Cup />,
          isTrue: true,
        },
        {
          icon: <Wifi />,
          isTrue: true,
        },
        {
          icon: <Heater />,
          isTrue: true,
        },
        {
          icon: <PlateWithSpoon />,
          isTrue: true,
        },
        {
          icon: <Cloth />,
          isTrue: true,
        },
      ],
      images: [
        imgSrc + "room/surveyor-suite/img1.webp",
        imgSrc + "room/surveyor-suite/img2.webp",
        imgSrc + "room/surveyor-suite/img3.webp",
        imgSrc + "room/surveyor-suite/img4.webp",
      ],
      link: bookingLink,
      urlText: "Book Now",
      // link: {
      //   label: "Book now",
      //   href: "https://www.swiftbook.io/inst/#home?propertyId=741NzlEgzYT84Y4xsBi6DB7MLWBj5lkdF8KxEaTBJTEzMTg=&JDRN=Y",
      // },
    },
  ],
};

const bannerDate = {
  title: "OUR ROOMS",
  description:
    "Experience the rich legacy of Sir George Everest, the esteemed former Surveyor General of India, and embark on a journey of relaxation and rejuvenation like never before.",
  src1: imgSrc + "room/img1.webp",
  src2: imgSrc + "room/img2.webp",
};
const sectionh1 = {
  title: "Escape from the Urban Hustle!",
  description:
    "Feeling drained by the hustle and bustle of city life? Escape to EBC Mussoorie and rediscover your connection with nature. Rejuvenate your mind and soul amidst the serene beauty of our glamping destination, set within 20 acres of ancient deodar forest. Our all-weather tents ensure comfort and shelter, whether it's rain, snow, hail, or sun.",
};
const page = () => {
  return (
    <section>
      <GridBanner {...bannerDate} />
      <SectionHeading {...sectionh1} border />
      <div className="mt-10">
        {/* <div className="maxwidth mx-auto px-4">
          <div className="flex flex-col gap-10">
            {RoomsAccomodationData.items.map((item, index) => (
              <Roomscard {...item} index={index} key={index} />
            ))}
          </div>
        </div> */}
        {RoomsAccomodationData.items.map((item, index) => (
          <Section key={index}>
            <SliderComponentImage
              {...item}
              border
              index={index}
              paginationClass={`pagination_${index}`}
            />
          </Section>
        ))}
      </div>
      <NewsLatter />
      <div className="w-full h-[1px] bg-[#BCD0B8]" />
      {/* <div className="w-full flex justify-center mt-10">
        <Link
          href={"https://api.whatsapp.com/send?phone=918595274861&text=Hi"}
          target="_blank"
          className="text-[#29422C] text-xl font-semibold px-5 py-2 bg-[#BCD0B8] rounded-sm hover:bg-[#E5E7EB]/70  duration-300 active:scale-75 hover:scale-105  flex items-center gap-2"
        >
          WhatsApp Us <Whatsapp />
        </Link>
      </div>
      <div className="bg-[#BCD0B8] py-12 mt-10">
        <div className="grid md:grid-cols-2 gap-8 maxwidth px-6 mx-auto items-center">
          <div>
            <h2 className="md:text-4xl text-2xl">Home Alone with Nature!</h2>
            <p className="mt-2 text-lg">
              You’re in for a wild time! The experiences and activities that
              await you at the campsite are nothing less than a love affair with
              deodars, magpies, and untouched serenity.
            </p>
          </div>

          <div className="grid grid-cols-5 gap-4 items-center">
            <div className="col-span-3">
              <input
                placeholder="Email Address "
                className="w-full py-3 px-2 bg-transparent border-b  border-b-gray-500 outline-none"
              />
            </div>
            <div className="col-span-2">
              <button className="bg-[#29422C] py-3 text-white w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default page;
