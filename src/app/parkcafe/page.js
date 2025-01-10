import Image from "next/image";
import BannerImage from "../../../public/images/parkcafebg.jpg";

import c1 from "../../../public/images/01 Picnic_11zon.jpg";
import OurCuisine from "./OurCuisine.jsx";
import HappyCustomers from "./HappyCustomers.jsx";
import SectionHeading from "../../components/SectionHeading";
import SliderComponentImage from "../../components/SliderComponentImage";
import AddOnExperience from "./AddOnExperience";
import { bookingLink, imgSrc } from "../../utils/data";
import Card from "../../components/Card";

export const metadata = {
  title: "Best Cafe in Mussoorie | Green Restaurant Mussoorie - EBC",
  description:
    "GFind the best cafe in Mussoorie at EBC! Enjoy delicious food, stunning views, and a cozy atmosphere. Perfect for relaxing and unwinding. Visit us today!",
};

const images = [
  {
    title: "Pasta Alfredo",
    img: imgSrc + "park-cafe/our-cuisine/img1.webp",
  },
  {
    title: "crispy veg burger",
    img: imgSrc + "park-cafe/our-cuisine/img2.webp",
  },
  {
    title: "butter chicken",
    img: imgSrc + "park-cafe/our-cuisine/img3.webp",
  },
  // {
  //   title: "chai/coffee",
  //   img: chai,
  // },
  // {
  //   title: "Pasta Alfredo",
  //   img: pasta,
  // },
  // {
  //   title: "crispy veg burger",
  //   img: burger,
  // },
  // {
  //   title: "butter chicken",
  //   img: butterchicken,
  // },
  // {
  //   title: "chai/coffee",
  //   img: chai,
  // },
];

const cardData = {
  heading: "Our Cuisine",
  para: "DEMO TEXT Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, remaining essentially unchanged.",
  images: images,
};

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
  paginationClass: "pagination_0",
  images: [
    imgSrc + "park-cafe/park-cafe-slider1/img1.webp",
    imgSrc + "park-cafe/park-cafe-slider1/img2.webp",
    imgSrc + "park-cafe/park-cafe-slider1/img3.webp",
    imgSrc + "activities/bonfire/img1.webp",
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
  paginationClass: "pagination_1",
  btnName: "ChooseUs",
  images: [
    imgSrc + "park-cafe/Choose-Us/img1.webp",
    imgSrc + "park-cafe/Choose-Us/img2.webp",
    imgSrc + "park-cafe/Choose-Us/img3.webp",
    imgSrc + "park-cafe/Choose-Us/img1.webp",
    imgSrc + "park-cafe/Choose-Us/img2.webp",
    imgSrc + "park-cafe/Choose-Us/img3.webp",
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
    src: imgSrc + "park-cafe/Add-on-Experience/img1.webp",
    description: `Join us for "Barbeque in the Shadows," a cozy fireside evening filled with delicious bite-sized treats and treasured memories. Our serene property, acclaimed as the finest eatery in Mussoorie, sets the perfect stage for intimate celebrations and relaxation, enhancing the pleasure of unwinding together. Enjoy a private bonfire, a beautifully decorated candlelight table, and personalized butler service, all while selecting from a rich and varied menu under the flicker of Mashal torches.`,
  },
  {
    title: "Picnic in the Meadows!",
    src: imgSrc + "park-cafe/Add-on-Experience/img2.webp",
    description: `Experience an enchanting outdoor gathering surrounded by the wonders of nature, complemented by an Instagram-worthy picnic in the meadows. With vibrant pop color cutlery and chinaware, luxurious cushioned seating on carpets, and the option of tables and chairs under a picnic umbrella, every moment becomes a picture-perfect celebration. Savor in our multi-cuisine menu, offering a range of delectable options, perfect for a unique day dining experience in the mountains with your loved ones.`,
  },
];
function Page() {
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
      </div>
      <SectionHeading {...sectionh1} titleMaxWidth />

      <SliderComponentImage {...sliderComponentImagedata1} border />
      <Card {...cardData1} />
      <SliderComponentImage {...sliderComponentImagedata2} border />

      <OurCuisine {...cardData} />

      <AddOnExperience addOnData={addonExpData} />
      <Card {...cardData2} />

      <HappyCustomers testimonal={testimonal} />

      <hr className="h-px my-4 bg-[#D5D5D5] border-0" />
    </div>
  );
}

export default Page;
