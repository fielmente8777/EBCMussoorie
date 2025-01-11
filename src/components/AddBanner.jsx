import Image from "next/image";
import Section from "./Section";
import Link from "next/link";
import { bookingLink } from "../utils/data";
const AddBanner = () => {
  return (
    <Section>
      <div className="w-full relative lg:aspect-[16/6.66] aspect-[3/2]">
        <Image
          src="/add-image.webp"
          alt="add page banner"
          className="object-cover"
          fill
        />
      </div>
      <div className="flex items-center justify-center mt-10">
        <Link
          href={bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 max-w-full font-medium text-base  text-[#29422C] bg-white rounded-sm border border-[#F69F2B] hover:bg-transparent hover:text-primary duration-300 active:scale-75 hover:scale-105 hover:text-white"
        >
          Book Now
        </Link>
      </div>
    </Section>
  );
};

export default AddBanner;
