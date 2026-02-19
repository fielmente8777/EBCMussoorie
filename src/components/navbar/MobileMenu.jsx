"use client";
import Link from "next/link";
import Container from "../Container";
import { useWebContext } from "@/contextApi/WebContext";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { navLinks } from "./navData";
import { usePathname } from "next/navigation";
const MobileMenu = () => {
  const pathName = usePathname();
  const { isOpenMobileMenu, setIsOpenMobileMenu } = useWebContext();
  return (
    <nav
      className={`inset-0 py-4 lg:hidden fixed z-50 bg-primary translate-all duration-300 ease-in-out w-full pt-12 ${isOpenMobileMenu ? "translate-x-0" : "translate-x-full"}`}
    >
      <Container className={"space-y-8"}>
        <button
          className="text-white p-2"
          onClick={() => setIsOpenMobileMenu(false)}
        >
          <MdClose className="text-3xl" />
        </button>

        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpenMobileMenu(false)}
              className={`ease-in-out transition-all duration-300 text-lg font-medium ${
                pathName === link.href
                  ? "border-l-4 text-white"
                  : "text-[#acacac]"
              } ease-in-out pl-2 transition-all duration-300 text-base rounded-sm capitalize`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
};

export default MobileMenu;
