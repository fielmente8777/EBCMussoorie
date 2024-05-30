import Roomscard from "@/components/Card/roomscard";
import Room1 from "../../../public/images/20 Bedroom 4_11zon.jpg";
import Room2 from "../../../public/images/20 Bedroom 4_11zon.jpg";
import {
  BedService,
  Cloth,
  Cup,
  FoodService,
  Heater,
  Lotus,
  PlateWithSpoon,
  Verified,
  Wifi,
} from "@/icons/icons";
import Link from "next/link";
import Image from "next/image";

const RoomsAccomodationData = {
  title: "Rooms and Accomodation",
  subtitle:
    "Wabi-Sabi has 12 Elegantly constructed and furnished spacious suites built such that each suite has a delightful view of the landscape garden, mountains and the dam offering a truly mesmerizing experience of living with nature. A well-designed and comfortable king size bed with all modern facilities and fully air-conditioned room adds to the relaxing ambience.",

  items: [
    {
      title: "Premium Suite",
      subtitle:
        "Take a splash into the infinity pool right as you walk out of your room. Premium Suites have spacious living and bedroom space with full height glass windows and doors and three- side nature view. These suites have custom-made furniture, created for total comfort, handpicked flooring and matte finished sanitaryware that makes the entire space opulently cozy styling them for a delightful experience.",
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
        {
          src: Room1,
          alt: "document1",
        },
        {
          src: Room1,
          alt: "document1",
        },
        {
          src: Room1,
          alt: "document1",
        },
      ],

      link: {
        label: "Book now",
        href: "/",
      },
    },
    {
      title: "Superior Suite",
      subtitle:
        "Uplifted from the ground level, with a pleasing view throughout, Superior Suites have great sit-out area with fully airconditioned bedroom and humungous private balcony that are designed to provide an excellent view of the dam and magnificent scenery of the nature around. Luxury and lifestyle are defined differently here.",
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
        {
          src: Room2,
          alt: "document1",
        },
        {
          src: Room2,
          alt: "document1",
        },
        {
          src: Room2,
          alt: "document1",
        },
      ],

      link: {
        label: "Book now",
        href: "/",
      },
    },
  ],
};

const page = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-5 mt-8 items-center">
        <div className="col-span-2 h-full flex flex-col justify-center bg-[#BCD0B8] space-y-6 p-6">
          <h2 className="text-5xl font-bold text-[#29422C]">
            Escape from the Urban Hustle!
          </h2>
          <p className="text-xl text-[#29422C]">
            Feeling drained by the hustle and bustle of city life? Escape to EBC
            Mussoorie and rediscover your connection with nature. Rejuvenate
            your mind and soul amidst the serene beauty of our glamping
            destination, set within 20 acres of ancient deodar forest. Our
            all-weather tents ensure comfort and shelter, whether it's rain,
            snow, hail, or sun.
          </p>
          <p className="text-xl text-[#29422C]">
            Experience the rich legacy of Sir George Everest, the esteemed
            former Surveyor General of India, and embark on a journey of
            relaxation and rejuvenation like never before.
          </p>

          <div className="flex">
            <Link
              href={"/"}
              className="text-2xl border border-[#29422c] bg-[#29422c] text-md px-8 py-2 text-white rounded-sm hover:bg-transparent hover:text-primary duration-300 active:scale-75 hover:scale-105 hover:text-black"
            >
              Discover More
            </Link>
          </div>
        </div>
        <div className="col-span-3 w-full h-full">
          <Image
            src={Room1}
            alt="test"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 maxwidth mx-auto mt-10">
        {RoomsAccomodationData.items.map((item, index) => (
          <Roomscard {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default page;
