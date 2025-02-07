"use client";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { FiFacebook } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Logo from "../../public/logo.png";
import Image from "next/image";
import {
  CopyRightIcon,
  Face,
  Insta,
  Line,
  OutlineCallWhite,
  OutLineFacebook,
  OutLineInstagram,
  OutlineLocationWhite,
  OutlineMailWhite,
  OutLineTripadvisor,
  OutLineYoutube,
  Trip,
} from "../icons/icons.jsx";
import { IoMail } from "react-icons/io5";
import { useState } from "react";
import SectionWithContainer from "./SectionWithContainer";
import Section from "./Section";
import Container from "./Container";
import ContactUsForm2 from "./ContactUsForm2";
import BorderLine from "./BorderLine";

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

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "Rooms", link: "/rooms" },
    { name: "park cafe", link: "/parkcafe" },
    { name: "gallery", link: "/gallery" },
    { name: "Contact Us", link: "/contact" },
  ];

  const policyLinks = [
    { name: "Privacy Policy", link: "/privacy" },
    { name: "Terms & Conditions", link: "/terms" },
  ];

  const socialLinks = [
    {
      icon: <OutLineFacebook />,
      name: "Facebook",
      link: "https://www.facebook.com/ebc.mussoorie/",
    },
    {
      icon: <OutLineInstagram />,
      name: "Instagram",
      link: "https://www.instagram.com/ebcmussoorie/",
    },
    {
      icon: <OutLineTripadvisor />,
      name: "Tripadvisor",
      link: "https://www.tripadvisor.in/Hotel_Review-g297689-d23292009-Reviews-Everest_Base_Camp_Mussoorie-Mussoorie_Dehradun_District_Uttarakhand.html",
    },

    {
      icon: <OutLineYoutube />,
      name: "Youtube",
      link: "https://www.youtube.com/@EverestBaseCampMussoorie",
    },
  ];
  const contactLinks = [
    {
      icon: <OutlineLocationWhite />,
      name: "Everest Base Camp Mussoorie, Park Estate, Hathipaon Road, Mussoorie, Uttarakhand, 248179",
      link: "",
    },
    {
      icon: <OutlineCallWhite />,
      name: "Call us: +91 91190 01126",
      link: "tel:+919119001126",
    },
    {
      icon: <IoMail />,
      name: "Email: info@ebcmussoorie.com",
      link: "mailto:info@ebcmussoorie.com",
    },
  ];

  const contactLinks2 = [
    {
      name: "Call us: +91 91190 01126",
      link: "tel:+919119001126",
    },
    {
      name: "Email: info@ebcmussoorie.com",
      link: "mailto:info@ebcmussoorie.com",
    },
    {
      name: "Everest Base Camp Mussoorie, Park Estate, Hathipaon Road, Mussoorie, Uttarakhand, 248179",
      link: "#",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      {pathname === "/ebclanding/" ? (
        <footer className="lg:py-12 py-8 bg-bgClr">
          <Container>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 ">
              <div className="w-full flex flex-col gap-4 justify-center">
                <div className="w-fit">
                  <BorderLine />
                </div>
                <h2 className="text-primary heading_2">Get in Touch</h2>
                <p className="desc_1 italic text-primary">
                  We’re Here to Help You Plan Your Next Adventure!
                </p>
                <ul className="flex flex-col gap-4 lg:mt-2 max-w-[34rem] w-full">
                  {contactLinks2.map((item, i) => (
                    <li className="desc_2 italic text-primary" key={i}>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="max-w-md w-full lg:ml-auto">
                <ContactUsForm2
                  title={"Have Questions?"}
                  description={"Contact Us and Start Your Next Adventure!"}
                />
              </div>
            </div>
          </Container>
        </footer>
      ) : (
        <div>
          <SectionWithContainer
            className={pathname === "/thank-you/" ? "!p-3" : ""}
          >
            <div className="flex flex-col items-center justify-center gap-5 w-full">
              {pathname === "/thank-you/" ? (
                ""
              ) : (
                <>
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-13 gap-8 w-full pb-3">
                    <div className="flex flex-col gap-5 w-full">
                      <Link
                        href="/"
                        className="w-full relative h-[200px] aspect-[4/1] "
                      >
                        <Image
                          src={Logo}
                          alt="ebcmussoorie"
                          fill
                          className="object-contain"
                        />
                      </Link>
                      {/* social links */}
                      <div className="flex items-center justify-between gap-5">
                        {socialLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-2 text-[#acacac] cursor-pointer w-11 h-11 shadow-inner rounded-full flex items-center justify-center border border-[#F69F2B] transition-all duration-[.3s] hover:bg-[#D5D5D5]/60 hover:text-[#29422c] text-[18px]  py-1"
                          >
                            <span className="sr-only">{link.name}</span>
                            <span>{link.icon}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* quick links */}
                    <div className="flex flex-col gap-5 w-full">
                      <h2 className="lg:text-3xl text-2xl font-semibold text-white uppercase">
                        Quick Links
                      </h2>
                      <div className="flex flex-col lg:gap-5 gap-3">
                        {quickLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.link}
                            className=" text-white italic capitalize cursor-pointer transition-all duration-[.3s] hover:text-[#D5D5D5] text-base rounded-sm py-1"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* policy links */}
                    <div className="flex flex-col gap-5 w-full">
                      <h2 className="lg:text-3xl text-2xl font-normal text-white uppercase">
                        Our policy
                      </h2>
                      <div className="flex flex-col lg:gap-5 gap-3">
                        {policyLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.link}
                            className=" text-white italic capitalize cursor-pointer transition-all duration-[.3s] hover:text-[#D5D5D5]  text-base rounded-sm py-1"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* contact */}
                    <div className="flex flex-col gap-5 w-full ">
                      <h2 className="lg:text-3xl text-2xl font-normal text-white uppercase">
                        Contact Us
                      </h2>
                      <div className="flex flex-col lg:gap-5 gap-3">
                        {contactLinks.map((link) => (
                          <Link
                            key={link.name}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" text-white italic cursor-pointer transition-all duration-[.3s]  hover:text-[#d5d5d5] text-base rounded-sm py-1"
                          >
                            {link.name}
                          </Link>
                        ))}
                        <Link
                          href="https://maps.app.goo.gl/fTBmqjBDoYdGdtmC9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-10 py-3 max-w-full text-base flex items-center justify-center font-medium   text-[#29422C] bg-white rounded-sm border border-[#F69F2B] hover:bg-transparent hover:text-primary duration-300 active:scale-75 hover:scale-105 hover:text-white"
                        >
                          View Map
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[1.5px]  bg-[#F1EECB]" />
                </>
              )}
              <div className={pathname === "/thank-you/" ? "" : "pt-4"}>
                <p className="text-white capitalize flex items-center max-md:flex-col justify-center italic gap-4">
                  <span className="flex items-center justify-center gap-2">
                    <CopyRightIcon /> {currentYear} EBC Mussoorie
                  </span>{" "}
                  <span>All rights reserved</span>
                </p>
              </div>
            </div>
          </SectionWithContainer>
        </div>
      )}
    </>
  );
};

export default Footer;
