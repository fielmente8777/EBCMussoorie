"use client";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

import { usePathname } from "next/navigation";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import {
  CopyRightIcon,
  Face,
  Insta,
  Line,
  OutlineCallWhite,
  OutlineLocationWhite,
  OutlineMailWhite,
  Trip,
} from "../icons/icons.jsx";
import { IoMail } from "react-icons/io5";
import { useState } from "react";
import { socialLinks } from "./Navbar";

const Footer = () => {
  const pathname = usePathname();

  const host = "https://eazotel.eazotel.com/api/dashboard/editnewsletter";

  const [email, setEmail] = useState("");

  const handleNewsletter = async () => {
    const data = {
      Domain: "eb112233",
      email: email,
    };
    try {
      const response = await fetch(host, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }

    setEmail("");
  };

  return (
    <>
      {pathname === "/ebclanding/" || pathname === "/thank-you/" ? (
        <div className="pt-10">
          <div className="maxwidth mx-auto max-md:px-4">
            <div className="flex justify-center items-center w-full">
              <Line />
            </div>
            <div className="lg:grid grid-cols-2 lg:gap-20 py-10 flex flex-col gap-7">
              <div className="relative lg:aspect-[5/1.45] aspect-[3/1] w-full">
                <Image src={Logo} alt="logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col text-white gap-3 tracking-wide">
                <Link
                  href={
                    "https://www.google.com/maps/dir//Everest+Base+Camp,+Near+George+Everest+House,+George+Everest+House,+5km+from+Mall,+Park+Estate+Hathi+paon,+Road,+Mussoorie,+Uttarakhand+248179/@30.459293,78.025305,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3908d170d61d91cb:0x84607e0d71c4450f!2m2!1d78.025305!2d30.4592927!3e0?hl=en&entry=ttu"
                  }
                  className="flex gap-2"
                >
                  <span className="mt-1">
                    <OutlineLocationWhite />
                  </span>
                  <span className="text-xl">
                    Everest Base Camp Mussoorie, Park Estate, Hathipaon Road,
                    Mussoorie, Uttarakhand, 248179
                  </span>
                </Link>
                <Link
                  href="tel:+919119001126"
                  className="flex items-center gap-2"
                >
                  <span className="mt-1">
                    <OutlineCallWhite />
                  </span>
                  <span className="text-xl">+91 91190 01126</span>
                </Link>
                <Link
                  href="mailto:info@ebcmussoorie.com"
                  className="flex items-center gap-2"
                >
                  <span className="mt-1">
                    <OutlineMailWhite />
                  </span>
                  <span className="text-xl">info@ebcmussoorie.com</span>
                </Link>
              </div>
              {/* <div className="flex flex-col text-white gap-3 tracking-wider">
                <h2 className="lg:text-4xl text-3xl font-bold capitalize">
                  Subscribe our newsletter
                </h2>
                <div className="w-full border border-[#BCD0B8] px-4 py-3 rounded-lg shadow-sm shadow-[#BCD0B8]">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleNewsletter();
                      }
                    }}
                    className="outline-none w-full focus:outline-none text-xl bg-transparent placeholder:text-white text-white"
                  />
                </div>
              </div> */}
            </div>
          </div>
          <div className="text-white text-center text-lg bg-[#152116] capitalize py-4 lg:flex gap-2 justify-center items-center max-md:px-4 tracking-wider">
            <span className="flex gap-2 justify-center items-center">
              <CopyRightIcon />
              Copyright EBC Mussoorie
            </span>
            •<span className=""> All rights reserved</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col pt-10 !font-thin">
          <div className="flex justify-between gap-20  maxwidth mx-auto max-md:flex-wrap max-md:max-w-full  px-5">
            <div className="flex flex-col md:w-[39%] w-full">
              <div className="flex flex-col  text-white max-md:mt-10 max-md:max-w-full">
                <div className="w-full flex justify-center">
                  <Image
                    loading="lazy"
                    src={Logo}
                    alt="logo"
                    style={{ width: "218px", height: "100%" }}
                    className="self-center max-w-full "
                  />
                </div>
                <div className="mt-4 text-2xl font-thin tracking-wider leading-10 max-md:max-w-full">
                  Everest Base Camp Mussoorie
                </div>
                <div className="mt-4 text-base leading-7 font-thin text-justify max-md:max-w-full">
                  Discover Your Mountain Oasis: Experience Luxury Camping at
                  Everest Base Camp Mussoorie!
                </div>
              </div>
            </div>
            <div className="flex md:items-center flex-col md:w-[30%] w-full ">
              <div className="flex flex-col grow text-white">
                <div className="text-2xl font-thin tracking-wider leading-10">
                  Links
                </div>
                <div className="flex flex-col gap-1 mt-4 text-base font-thin leading-7">
                  <Link href={"/about"}>About Us</Link>
                  <Link href={"/activities"}>Activities</Link>
                  {/* <Link href={"/contact"}>
                      Contact Us

                    </Link> */}
                  <Link href={"/rooms"}>Our Rooms</Link>
                  <Link href={"/gallery"}>Gallery</Link>
                  <Link href={"/parkcafe"}>Park Cafe</Link>
                  <Link href={"/glamper"}>A Glamper&apos;s Guide</Link>
                  <Link href={"/blogs"}>Blogs</Link>
                  <Link href={"/ebclanding"}>EBC</Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col  md:w-[30%] w-full ">
              <div className="text-2xl font-thin tracking-wider leading-10 text-white">
                Reach Out
              </div>
              <div className="mt-4 text-base font-thin leading-7 text-white">
                Everest Base Camp Mussoorie, Park Estate, Hathipaon Road,
                Mussoorie, Uttarakhand, 248179
              </div>

              <Link
                href={"mailto:info@ebcmussoorie.com"}
                className="flex items-center gap-3 mt-4 text-lg leading-7 text-white whitespace-nowrap"
              >
                <IoMail size={20} />
                <div className="my-auto">info@ebcmussoorie.com</div>
              </Link>
              <Link
                href={"tel:+919119001126"}
                className="flex items-center gap-3 mt-2 text-lg leading-7 text-white whitespace-nowrap"
              >
                <MdCall size={20} />
                <div className="my-auto">+91 91190 01126</div>
              </Link>
              <div className="flex gap-4 pr-20 mt-4 max-md:pr-5">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    className="h-10 w-10 flex justify-center items-center rounded-full bg-white"
                  >
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 mt-8 ">
            <div className="flex gap-5 maxwidth mx-auto justify-between px-5 py-5 w-full text-xs tracking-wider leading-5 text-white  max-md:flex-wrap max-md:px-5 max-md:max-w-full">
              <div className="flex gap-2 font-medium">
                <div className="relative w-3 aspect-square">
                  <Image
                    alt="icon"
                    fill
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f2ebd1425476a83f9785a32d2e5632db68bf9f8db8e123ca89682af54513cec?"
                    className="object-contain"
                  />
                </div>
                <div className=" text-white">
                  Copyright EBC Mussoorie
                </div>
              </div>
              <div className="flex gap-3 whitespace-nowrap  text-white">
                <div className="">
                  <Link href={"/privacy"}>Privacy Policy</Link>
                </div>
                <div className="">
                  <Link href={"/terms"}>Terms and Conditions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
