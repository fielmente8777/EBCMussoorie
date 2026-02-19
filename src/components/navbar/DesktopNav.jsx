"use client";
import Link from "next/link";
import Container from "../Container";
import { navLinks } from "./navData";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useWebContext } from "@/contextApi/WebContext";
import MobileMenu from "./MobileMenu";
import { OutLineCall } from "@/icons/icons";
import { bookingLink } from "@/utils/data";

const DesktopNav = () => {
  const pathName = usePathname();
  const { setIsOpenMobileMenu } = useWebContext();
  return (
    <header className="w-full py-4">
      <Container className={"space-y-4"}>
        {/* logo and cta */}
        <div className="grid grid-cols-[1fr_.85fr_1fr] items-center gap-4 w-full">
          <div className="bg-white h-[0.5px] w-full lg:block hidden" />
          <button
            className="block lg:hidden"
            onClick={() => setIsOpenMobileMenu(true)}
          >
            <MenuBar />
          </button>
          <div className="w-full relative md:aspect-[4/1.4] aspect-[4/3.8]">
            <Image
              src={"/logo.png"}
              alt="logo"
              fill
              className="object-contain opacity-100"
            />
          </div>
          <div className="lg:relative lg:w-full w-fit ml-auto">
            <div className="lg:absolute lg:right-0 lg:-top-16 flex items-center gap-4">
              <Link
                href={bookingLink}
                target="_blank"
                className="rounded-sm Cammron lg:flex hidden items-center justify-center w-[150px] p-2 text-[1.375rem]/[2rem] text-primary bg-white"
              >
                Book Now
                <Image
                  src="/callButtonLogo.png"
                  className="ml-2"
                  height={24}
                  width={24}
                  alt="call"
                />
              </Link>
              <Link
                href={"tel:+919119001126"}
                className="flex lg:hidden items-center gap-2 px-5 my-auto text-lg leading-7 text-[#acacac]"
              >
                {/* <MdCall size={20} /> */}
                <OutLineCall />
                <span className="sr-only">call us on : +9191190 01126</span>
                <span className="my-auto text-[#acacac] xl:block hidden">
                  +91-91190 01126
                </span>
              </Link>
            </div>
            <div className="bg-white h-[0.5px] w-full lg:block hidden" />
          </div>
        </div>
        {/* navigation's */}
        <nav className="w-full hidden lg:block">
          <ul className="flex items-center gap-2 w-full">
            {navLinks?.map((link, index) => (
              <li key={index} className="w-full">
                <Link
                  href={link.href}
                  className={`${
                    pathName === link.href
                      ? "text-[#29422c] bg-[#D5D5D5] "
                      : " text-[#acacac]  hover:bg-[#D5D5D5] hover:text-[#29422c] "
                  } py-2 px-6 tracking-wide flex items-center justify-center cursor-pointer transition-all duration-300 text-base rounded-sm uppercase`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <MobileMenu />
    </header>
  );
};

export default DesktopNav;

const MenuBar = () => {
  return (
    <svg
      width="28"
      height="20"
      viewBox="0 0 28 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 18H26M2 10H26M2 2H26"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
