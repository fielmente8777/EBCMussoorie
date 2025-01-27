import React from "react";

import SpecilizationCard from "../landingpage/SpecilizationCard";
import Section from "../Section";
import { imgSrc } from "../../utils/data";

const AddOn = () => {
  const datas = [
    {
      heading: "Picnic in the Meadows!",
      para: "Enjoy a peaceful picnic amidst the beauty of nature, with a basket brimming with delightful snacks and refreshing beverages. Our idyllic property offers the ideal setting for a relaxing afternoon, spent cherishing moments with friends and family.",
      images: [
        imgSrc + "activities/picnic/img1.webp",
        imgSrc + "activities/picnic/img2.webp",
        imgSrc + "activities/picnic/img3.webp",
      ],
      button: true,
    },
    {
      heading: "Gather Together for a Barbecue",
      para: "Join us for an enchanting evening of grilling under the stars. Surrounded by the tranquil beauty of our property, enjoy a memorable night filled with warmth and camaraderie. As the fire crackles, savour a delightful array of your favourite grilled meats and vegetables, creating the perfect backdrop for relaxation and connection with family and friends.",
      images: [
        imgSrc + "activities/barbecue/img1.webp",
        imgSrc + "activities/barbecue/img2.webp",
        imgSrc + "activities/barbecue/img3.webp",
      ],
      button: true,
    },
    {
      heading: "Bonfire",
      para: "Experience the magic of a private bonfire under the starlit sky, creating cherished moments with your loved ones. Unwind after exploring Mussoorie's natural beauty in the warmth of your own intimate setting, fostering both adventure and relaxation.",
      images: [
        imgSrc + "activities/bonfire/img1.webp",
        imgSrc + "activities/bonfire/img2.webp",
        imgSrc + "activities/bonfire/img3.webp",
      ],
      button: true,
    },
    {
      heading: "Trekking",
      para: "Embark on the George Everest Peak trek amidst Mussoorie's serene hills, with our knowledgeable guide providing direction and companionship along the way. Enjoy a refreshing sandwich, tea, and water as you explore hidden gems and breathtaking Himalayan views.",
      para2:
        "Experience the perfect blend of adventure and comfort with luxury camping amidst nature's beauty.",
      images: [
        imgSrc + "activities/trekking/img1.webp",
        imgSrc + "activities/trekking/img2.webp",
        imgSrc + "activities/trekking/img3.webp",
      ],
      button: true,
    },
  ];

  return (
    <div className="maxwidth mx-auto flex flex-col lg:gap-10 gap-4 max-md:px-3 py-12">
      <h2 className="text-center md:text-5xl text-2xl text-white">
        Paid Add-ons
      </h2>

      <div className="rounded-sm overflow-hidden">
        {datas.map((data, index) => (
          <Section key={index}>
            <SpecilizationCard
              cardData={data}
              index={index}
              aspectRatio={"lg:aspect-[2/1.5] aspect-[2/1.5]"}
            />
          </Section>
        ))}
      </div>
    </div>
  );
};

export default AddOn;
