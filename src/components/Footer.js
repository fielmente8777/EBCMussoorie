import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

import { Insta, Face } from "../icons/icons"

const Footer = () => {
  return (
    <div className="flex flex-col py-10">
      <div className="self-center max-md:px-3 w-full max-w-[1280px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-[#D5D5D5] max-md:mt-10">
              <div className="text-[22px] font-medium leading-8">
                Everest Base Camp Mussoorie
              </div>
              <div className="mt-6 text-[20px] tracking-wider leading-8 max-md:mt-10">
                Discover Your Mountain Oasis: Experience Luxury Camping at
                Everest Base Camp Mussoorie!
              </div>
              <div className="flex mt-6 gap-3 my-auto">
                <Link
                  href={"https://www.facebook.com/ebcmussoorie/"}
                  target="_blank"
                >
                  <div className="h-10 w-10 flex justify-center items-center rounded-full bg-white">
                    <Face />
                  </div>
                </Link>
                <Link
                  href={"https://www.instagram.com/ebcmussoorie/"}
                  target="_blank"
                >
                  <div className="h-10 w-10 flex justify-center items-center rounded-full bg-white">
                    <Insta />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col tracking-wider text-[#D5D5D5] max-md:mt-10">
              <div className="text-[22px] font-medium leading-8">
                Important Links
              </div>
              <div className="flex flex-col mt-6 text-[20px] leading-8 max-md:mt-10">
                <Link href="">About Us</Link>
                <Link href=""> Activities Contact</Link>
                <Link href="">Our Rooms Gallery</Link>
                <Link href="">Park Cafe</Link>
                <Link href="">{`A Glamper's Guide`}</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-[20px] font-medium text-[#D5D5D5] max-md:mt-10">
              <div className="text-[22px] tracking-wider leading-8">
                Reach Out
              </div>
              <div className="flex items-start gap-3.5 mt-6 leading-8 max-md:mt-10">
                <FaLocationDot size={28} className="mt-1" />
                <div className="flex-auto">
                  Everest Base Camp Mussoorie, Park Estate, Hathipaon Road,
                  Mussoorie, Uttarakhand, 248179
                </div>
              </div>
              <Link href={"tel:+918595274861"} className="flex  items-center gap-3.5 mt-5 tracking-wider whitespace-nowrap leading-[145%]">
                <MdCall size={20} />
                <div className="flex-auto my-auto">+91-8595274861</div>
              </Link>
              <Link
                href="https://www.google.com/maps/place/Everest+Base+Camp,+Near+George+Everest+House/@30.4592973,78.0227301,17z/data=!3m1!4b1!4m9!3m8!1s0x3908d170d61d91cb:0x84607e0d71c4450f!5m2!4m1!1i2!8m2!3d30.4592927!4d78.025305!16s%2Fg%2F11fp31k5lj?hl=en&entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center px-8 py-2 mt-5 text-base rounded-sm leading-6 text-center text-[#29422C] bg-[#D5D5D5] max-md:px-5"
              >
                Get Direction On Map
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-900 py-5 mt-9">
        <div className="flex gap-5 max-w-[1280px] mx-auto justify-between  w-full text-sm tracking-wider leading-4 text-white  max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <div className="flex gap-2">

            <div className="flex-auto">&#169;Copyright content here</div>
          </div>
          <div className="flex gap-5 justify-between self-start whitespace-nowrap">
            <div>COMPLIANCE</div>
            <Link href={"/privacy"}>PRIVACY</Link>
            <Link href={"/terms"}>TERMS</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
