import Image from "next/image";
import BannerImage from "../../../public/images/parkcafebg.jpg";
import Link from "next/link";
import parkcafe from "../../../public/images/parkcafe.jpg";
import parkcafereachus1 from "../../../public/images/DSC_6324.jpg";
import parkcafereachus2 from "../../../public/images/parkcafereachus2.jpg";

import burger from "../../../public/images/crispy_veg_burger.webp";
import pasta from "../../../public/images/pasta_alfredo.webp";
import butterchicken from "../../../public/images/Indian-Butter.jpg";
import chai from "../../../public/images/chai_latte.webp";

import chooseus1 from "../../../public/images/whychooseus1.jpg";
import chooseus2 from "../../../public/images/whychooseus2.jpg";
import chooseus3 from "../../../public/Surveyor Suite Room/_MG_2601.webp";
import chooseus4 from "../../../public/Surveyor Suite Room/_MG_2602.webp";
import chooseus5 from "../../../public/Surveyor Suite Room/_MG_2603.webp";

import picnic1 from "../../../public/images/picnic1.JPG";
import picnic2 from "../../../public/images/picnic2.JPG";

import barque1 from "../../../public/images/Barbecue1.webp";

import milestonebg from "../../../public/images/milestonebg.jpg";

import c1 from "../../../public/images/01 Picnic_11zon.jpg";
import OurCuisine from "./OurCuisine.jsx";
import HappyCustomers from "./HappyCustomers.jsx";
import OurAmenities from "./OurAmenities";
import SectionHeading from "../../components/SectionHeading";
import SliderComponentImage from "../../components/SliderComponentImage";
import AddOnExperience from "./AddOnExperience";
import { bookingLink } from "../../utils/data";
import Card from "../../components/Card";

export const metadata = {
  title: "Best Cafe in Mussoorie | Green Restaurant Mussoorie - EBC",
  description:
    "GFind the best cafe in Mussoorie at EBC! Enjoy delicious food, stunning views, and a cozy atmosphere. Perfect for relaxing and unwinding. Visit us today!",
};

const datas = [
  {
    heading: "Barbeque in the Shadows!",
    para: `Join us for "Barbeque in the Shadows," a cozy fireside evening filled with delicious bite-sized treats and treasured memories. Our serene property, acclaimed as the finest eatery in Mussoorie, sets the perfect stage for intimate celebrations and relaxation, enhancing the pleasure of unwinding together.`,
    para2:
      "Enjoy a private bonfire, a beautifully decorated candlelight table, and personalized butler service, all while selecting from a rich and varied menu under the flicker of Mashal torches.",
    images: [barque1],
    button: "book now",
  },
  {
    heading: "Picnic in the Meadows!",
    para: `Experience an enchanting outdoor gathering surrounded by the wonders of nature, complemented by an Instagram-worthy picnic in the meadows. With vibrant pop color cutlery and chinaware, luxurious cushioned seating on carpets, and the option of tables and chairs under a picnic umbrella, every moment becomes a picture-perfect celebration.`,
    para2:
      "Savor in our multi-cuisine menu, offering a range of delectable options, perfect for a unique day dining experience in the mountains with your loved ones.",
    images: [picnic1, picnic2],
    button: "book now",
  },
];

const images = [
  {
    title: "Pasta Alfredo",
    img: pasta,
  },
  {
    title: "crispy veg burger",
    img: burger,
  },
  {
    title: "butter chicken",
    img: butterchicken,
  },
  {
    title: "chai/coffee",
    img: chai,
  },
  {
    title: "Pasta Alfredo",
    img: pasta,
  },
  {
    title: "crispy veg burger",
    img: burger,
  },
  {
    title: "butter chicken",
    img: butterchicken,
  },
  {
    title: "chai/coffee",
    img: chai,
  },
];

const cardData = {
  heading: "Our Cuisine",
  para: "DEMO TEXT Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, remaining essentially unchanged.",
  images: images,
};

// const testimonal = [
//   {
//     title: "Pasta Alfredo",
//     date: "3 weeks ago on Google",
//     subtle: `  The property feels almost enigmatic, the location is
//     surreal, and the view of the forest as soon as you wake up
//     is something to die for. It's so mellow and peaceful here,
//     the rooms are luxurious but it also feels like an
//     adventure. Would 11/10 recommend this to everybody who are
//     looking for a pristine and peaceful`,
//     img: c1,
//   },
//   {
//     title: "crispy veg burger",
//     date: "3 weeks ago on Google",
//     subtle: `  The property feels almost enigmatic, the location is
//     surreal, and the view of the forest as soon as you wake up
//     is something to die for. It's so mellow and peaceful here,
//     the rooms are luxurious but it also feels like an
//     adventure. Would 11/10 recommend this to everybody who are
//     looking for a pristine and peaceful`,
//     img: c1,
//   },
//   {
//     title: "butter chicken",
//     date: "3 weeks ago on Google",
//     subtle: `  The property feels almost enigmatic, the location is
//     surreal, and the view of the forest as soon as you wake up
//     is something to die for. It's so mellow and peaceful here,
//     the rooms are luxurious but it also feels like an
//     adventure. Would 11/10 recommend this to everybody who are
//     looking for a pristine and peaceful`,
//     img: c1,
//   },
//   {
//     title: "chai/coffee",
//     date: "3 weeks ago on Google",
//     subtle: `  The property feels almost enigmatic, the location is
//     surreal, and the view of the forest as soon as you wake up
//     is something to die for. It's so mellow and peaceful here,
//     the rooms are luxurious but it also feels like an
//     adventure. Would 11/10 recommend this to everybody who are
//     looking for a pristine and peaceful`,
//     img: c1,
//   },
// ];
const sectionh1 = {
  title: "Welcome to Park Café! ",
  subTitle: "One of the best cafes in Mussoorie",
  description:
    "Our culinary gem seamlessly combines nature's beauty with exquisite flavors, offering a unique dining experience against the backdrop of breathtaking natural wonders.",
  samefontsize: true,
};
const sliderComponentImagedata1 = {
  title: "Welcome to Park Cafe!",
  subDescription:
    "To create a dining oasis in the middle of the wilderness, we at Park Café are all about fusing innovation and simplicity. Our menu offers a fusion of inventive twists and regional flavors, guaranteeing a delectable experience that ideally accentuates the soothing settings. Everything about this place is meant to evoke memories, from carefree picnic brunches with a variety of BBQ dishes to special dinners served with hot cocoa.",
  subDescription2:
    "We're proud to serve a variety of delicious dishes that celebrate Mussoorie's culinary heritage. Our cafe is situated where Sir George Everest once had his stables and rode around, along with the George Everest Museum just a few minutes walk away.",
  link: bookingLink,
  urlText: "Book Now",
  btnName: "Discover",
  paginationClass:"pagination_0",
  images: [
    parkcafereachus1,
    parkcafe,
    "/gallery2/outsideview3.webp",
    "/gallery2/outside5.webp",
    parkcafereachus2,
  ],
};
const sliderComponentImagedata2 = {
  title: "Why Choose Us ?",
  subDescription:
    "Discover what makes us the most unique cafe in Mussoorie – our unwavering commitment to a memorable dining experience that transcends the ordinary. At EBC, indulge in more than just a meal; it's a taste of home amidst the breathtaking beauty of nature. Nestled beside a beautiful meadow, our cafe offers a diverse range of offerings, from delightful tea and snacks to exquisite dining experiences.",
  subDescription2:
    "Experience curated events and experiences that promise to elevate your visit. As a must-visit cafe in Mussoorie, EBC ensures an unforgettable culinary journey that celebrates nature and community.",
  link: "/contact",
  urlText: "Contact Us",
  paginationClass:"pagination_1",
  btnName: "ChooseUs",
  images: [
    chooseus1,
    chooseus2,
    chooseus3,
    chooseus4,
    chooseus5,
    parkcafereachus1,
    parkcafe,
    "/gallery2/outsideview3.webp",
    "/gallery2/outside5.webp",
    parkcafereachus2,
  ],
};

const cardData1 = {
  title: "How to reach us?",
  descriptionArray: [
    "Nestled amidst nature at the Everest Base Camp in Mussoorie, Park Cafe offers a convenient location just a stone's throw away from the George Everest Museum. To enhance your experience, you can come by yourself or give us a call to make a reservation and get a pass that lets you drive straight up to the cafe.",
    "Don't miss the chance to explore the historical significance of our location, where Sir George Everest once had his stables and rode around.Plus, the George Everest Museum is just a couple of minutes' walk from our café. Conveniently, visitors can park their vehicles at the Park Café grounds before heading to the museum, ensuring a seamless and enjoyable visit.",
  ],
  link: "https://maps.app.goo.gl/JA58LhfMCRMFnZ7u7",
  urlText: "Get Direction",
  newTabe: true,
};
const cardData2 = {
  title: "Mark Your Milestones with Us!",
  description:
    " Experience unforgettable celebrations at Everest Base Camp, Mussoorie. We customize every element to match your vision, from anniversaries to birthdays. With our attention to detail, your event will run seamlessly, letting you cherish every moment. Come celebrate with us and create memories to last a lifetime!",
  link: "/contact",
  urlText: "Contact Us",
};
const testimonal = [
  {
    title: "Tina Thilyani",
    date: "3 weeks ago on Google",
    subtle: `I highly commend Park Cafe in Mussoorie for it's exceptional food and delightful ambiance.The culinary experience was superb, and the inviting atmosphere added to the overall enjoyment. A most-visit for those seeking both quality cuisine and pleasant during environment`,
    img: c1,
  },
  {
    title: "Kshitij Mishra",
    date: "3 weeks ago on Google",
    subtle: `Recently visited the Park Cafe and was impressed by the ambiance and lush outdoor seating. The cafe's location within the park  added to its appeal, providing a serene setting for enjoying a meal. Overall,I highly recommended.`,
    img: c1,
  },
  {
    title: "Shweta Gyanchandani",
    date: "3 weeks ago on Google",
    subtle: `Park Cafe in Mussoorie is a cozy spot with delicious food and friendly service. It's near beautiful picnic spot, making it great peace and relax and enjoy a meal with stunning views.`,
    img: c1,
  },
  {
    title: "Tina Thilyani",
    date: "3 weeks ago on Google",
    subtle: `I highly commend Park Cafe in Mussoorie for it's exceptional food and delightful ambiance.The culinary experience was superb, and the inviting atmosphere added to the overall enjoyment. A most-visit for those seeking both quality cuisine and pleasant during environment`,
    img: c1,
  },
  {
    title: "Kshitij Mishra",
    date: "3 weeks ago on Google",
    subtle: `Recently visited the Park Cafe and was impressed by the ambiance and lush outdoor seating. The cafe's location within the park  added to its appeal, providing a serene setting for enjoying a meal. Overall,I highly recommended.`,
    img: c1,
  },
  {
    title: "Shweta Gyanchandani",
    date: "3 weeks ago on Google",
    subtle: `Park Cafe in Mussoorie is a cozy spot with delicious food and friendly service. It's near beautiful picnic spot, making it great peace and relax and enjoy a meal with stunning views.`,
    img: c1,
  },
];

const addonExpData = [
  {
    title: "Barbeque in the Shadows!",
    src: "/gallery/bar3.webp",
    description: `Join us for "Barbeque in the Shadows," a cozy fireside evening filled with delicious bite-sized treats and treasured memories. Our serene property, acclaimed as the finest eatery in Mussoorie, sets the perfect stage for intimate celebrations and relaxation, enhancing the pleasure of unwinding together. Enjoy a private bonfire, a beautifully decorated candlelight table, and personalized butler service, all while selecting from a rich and varied menu under the flicker of Mashal torches.`,
  },
  {
    title: "Picnic in the Meadows!",
    src: "/gallery/picnic3.webp",
    description: `Experience an enchanting outdoor gathering surrounded by the wonders of nature, complemented by an Instagram-worthy picnic in the meadows. With vibrant pop color cutlery and chinaware, luxurious cushioned seating on carpets, and the option of tables and chairs under a picnic umbrella, every moment becomes a picture-perfect celebration. Savor in our multi-cuisine menu, offering a range of delectable options, perfect for a unique day dining experience in the mountains with your loved ones.`,
  },
];
function Peakage() {
  return (
    <div>
      <div className="max-w-[1600px] w-full mx-auto relative">
        <div className="relative w-full aspect-[4/1.8] ">
          <Image
            src={BannerImage}
            alt="banner"
            className="h-full w-full object-cover object-bottom-[10%]"
            fill
          />
        </div>

        {/* <div className="lg:absolute top-0 left-0 z-20 w-full h-full lg:bg-black/40 flex items-center justify-center lg:py-0 pt-8">
          <div className="max-w-5xl mx-auto lg:px-0 px-4">
            <h2 className="text-center md:text-5xl/[3.5rem] text-4xl text-white">
              Welcome to Park Café!
              <br className="lg:block hidden" /> One of the best cafes in
              Mussoorie.
            </h2>
            <p className="lg:text-center text-justify md:text-2xl text-xl mt-4 text-white">
              Our culinary gem seamlessly combines nature&apos;s beauty with
              exquisite flavors, offering a unique dining experience against the
              backdrop of breathtaking natural wonders.
            </p>
          </div>
        </div> */}

        {/* <div className="absolute top-0 left-0 bg-black/30 z-10 w-full h-full"></div> */}
      </div>
      <SectionHeading {...sectionh1} titleMaxWidth />

      <SliderComponentImage {...sliderComponentImagedata1} border />
      <Card {...cardData1} />
      <SliderComponentImage {...sliderComponentImagedata2} border />
      {/* <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse lg:mt-8 items-center maxwidth mx-auto py-12 lg:px-0 px-4">
        <div className=" h-full flex flex-col justify-center bg-[#BCD0B8] space-y-6 p-5">
          <h2 className="md:text-5xl text-3xl font-bold text-[#29422C]">
            Welcome to Park Cafe!
          </h2>
          <p className="text-xl text-[#29422C]">
            To create a dining oasis in the middle of the wilderness, we at Park
            Café are all about fusing innovation and simplicity. Our menu offers
            a fusion of inventive twists and regional flavors, guaranteeing a
            delectable experience that ideally accentuates the soothing
            settings. Everything about this place is meant to evoke memories,
            from carefree picnic brunches with a variety of BBQ dishes to
            special dinners served with hot cocoa.
          </p>
          <p className="text-xl text-[#29422C]">
            {`We're proud to serve a variety of delicious dishes that celebrate
            Mussoorie's culinary heritage. Our cafe is situated where Sir George
            Everest once had his stables and rode around, along with the George
            Everest Museum just a few minutes walk away.`}
          </p>

          <div className="flex">
            <Link
              target="_blank"
              href={
                "https://www.swiftbook.io/inst/#home?propertyId=741NzlEgzYT84Y4xsBi6DB7MLWBj5lkdF8KxEaTBJTEzMTg=&JDRN=Y"
              }
              className="text-2xl border border-[#29422c] bg-[#29422c] text-md px-8 py-2 text-white rounded-sm hover:bg-transparent hover:text-primary duration-300 active:scale-75 hover:scale-105 hover:text-black"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src={parkcafe}
            alt="parkcafe3"
            className="object-cover w-full h-full"
            width={600}
            height={400}
          />
        </div>
      </div> */}
      {/* <div className="py-8">
        <div className="lg:grid lg:grid-cols-5 items-center maxwidth mx-auto px-5 gap-6">
          <div className=" col-span-3 lg:grid grid-cols-5 gap-3">
            <div className="col-span-3">
              <Image
                alt="parkcafe1"
                src={parkcafereachus1}
                width={600}
                height={400}
                className="w-full md:h-[450px] h-[280px] object-cover"
              />
            </div>

            <div className="col-span-2 lg:block hidden">
              <Image
                src={parkcafereachus2}
                alt="parkcafe2"
                width={600}
                height={400}
                className="w-full md:h-[450px] h-[280px] object-cover"
              />
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-4 lg:mt-0 mt-6">
            <h2 className="text-white md:text-3xl text-2xl ">
              How to reach us?
            </h2>
            <p className="text-white text-lg lg:text-start text-justify">
              {` Nestled amidst nature at the Everest Base Camp in Mussoorie, Park
              Cafe offers a convenient location just a stone's throw away from
              the George Everest Museum. To enhance your experience, you can
              come by yourself or give us a call to make a reservation and get a
              pass that lets you drive straight up to the cafe.`}
            </p>
            <p className="text-white text-lg lg:text-start text-justify">
              {`   Don't miss the chance to explore the historical significance of
              our location, where Sir George Everest once had his stables and
              rode around.Plus, the George Everest Museum is just a couple of
              minutes' walk from our café. Conveniently, visitors can park their
              vehicles at the Park Café grounds before heading to the museum,
              ensuring a seamless and enjoyable visit.`}
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link
                target="_blank"
                href={
                  "https://www.google.com/maps/place/Everest+Base+Camp,+Near+George+Everest+House/@30.4772452,77.9937026,11.13z/data=!4m9!3m8!1s0x3908d170d61d91cb:0x84607e0d71c4450f!5m2!4m1!1i2!8m2!3d30.4592927!4d78.025305!16s%2Fg%2F11fp31k5lj?entry=tts"
                }
                className="bg-[#bcd0be] px-6 py-2"
              >
                Get Direction
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <OurCuisine {...cardData} />

      <AddOnExperience addOnData={addonExpData} />
      <Card {...cardData2} />

      <HappyCustomers testimonal={testimonal} />

      <hr className="h-px my-4 bg-[#D5D5D5] border-0" />
    </div>
  );
}

export default Peakage;
