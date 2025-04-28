"use client";
import { useState } from "react";
import { bookingLink, imgSrc } from "../../utils/data";
import BorderLine from "../BorderLine";
import { ActivitieCard } from "../Card/index";
import Container from "../Container";
import Section from "../Section";
import PopupForm from "../PopupForm";
import Link from "next/link";

const Activities = () => {
  const [showModal, setShowModal] = useState(false);

  const activeCarddata = {
    title: "Our Activities",
    description:
      "Whether you're a fan of indoor elegance or outdoor adventure, we have something special for everyone!",
    items: [
      {
        title: "Outdoor Activities",
        description:
          "Experience thrilling outdoor activities like badminton, archery and mountain biking. Witness the sunrise at George Everest Peak, challenge yourself in a momo-eating contest, or join birdwatchers at Benog Wildlife Sanctuary. Explore exciting hikes and trails for an unforgettable adventure.",
        images: [
          {
            src: imgSrc + "activities/img1.webp",
          },
          {
            src: imgSrc + "activities/outdoor-activities/img1.webp",
          },
          {
            src: imgSrc + "activities/outdoor-activities/img2.webp",
          },
        ],
        link: bookingLink,
        urlText: "Book Now",
      },
      {
        title: "Indoor Activities",
        description:
          "Explore our diverse range of board games perfect for a cosy indoor adventure. Join us for a relaxing day of strategic fun and friendly competition.",
        images: [
          {
            src: imgSrc + "activities/indoor-activities/img2.webp",
          },
          {
            src: imgSrc + "activities/indoor-activities/img3.webp",
          },
          {
            src: imgSrc + "activities/indoor-activities/img1.webp",
          },
        ],
      },
    ],
  };
  return (
    <Section className="bg-bgClr">
      <Container>
        <div className="flex flex-col gap-4 py-8">
          <BorderLine />
          <h2 className="heading_2 text-primary text-center font-light">
            {activeCarddata.title}
          </h2>
          <p className="desc_1 text-center text-primary max-w-[60rem] mx-auto">
            {activeCarddata.description}
          </p>
          <div className="lg:mt-11 mt-4 flex flex-col gap-4">
            {activeCarddata.items.map((item, index) => (
              <ActivitieCard {...item} key={index} index={index} />
            ))}
          </div>
          {/* <button
            onClick={() => setShowModal(true)}
            className="px-8 flex justify-center Cammron items-center mx-auto mt-8 w-max py-2 rounded-lg bg-primary text-white capitalize text-lg"
          >
            Get Exclusive Offers!
          </button> */}
          <Link
            href={"https://www.swiftbook.io/inst/#home?propertyId=741NzlEgzYT84Y4xsBi6DB7MLWBj5lkdF8KxEaTBJTEzMTg=&JDRN=Y"}
            target="_blank"
            className="px-8 flex self-center justify-center mt-4 Cammron items-center w-max py-2 rounded-lg bg-[#29422C] text-[#fff] capitalize text-lg"
          >
            Get Exclusive Offers!
          </Link>
        </div>
      </Container>
      {showModal && (
        <PopupForm showModal={showModal} setShowModal={setShowModal} />
      )}
    </Section>
  );
};

export default Activities;
