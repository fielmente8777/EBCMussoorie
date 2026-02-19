"use client";
import { OutLineCall, OutlineCall2 } from "@/icons/icons";
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import { usePathname } from "next/navigation";

const LandingPageNav = () => {
  const pathName = usePathname();
  return (
    <header className="w-full py-6">
      <Container className={"space-y-4"}>
        {/* logo and cta */}
        <div
          className={`items-center gap-4 w-full ${pathName === "/thank-you/" ? "max-lg:grid max-lg:grid-cols-2" : "grid  grid-cols-2 lg:grid-cols-[1fr_.85fr_1fr]"}`}
        >
          {pathName !== "/thank-you/" && (
            <div className="bg-white h-[0.5px] w-full lg:block hidden" />
          )}

          <div
            className={`relative md:aspect-[4/1.4] aspect-[4/2] max-md:w-[150px] ${pathName === "/thank-you/" ? "w-[350px] lg:mx-auto" : "w-full "}`}
          >
            <Image
              src={"/logo.png"}
              alt="logo"
              fill
              className="object-contain opacity-100"
            />
          </div>
          {pathName !== "/thank-you/" ? (
            <div className="lg:relative lg:w-full w-fit ml-auto">
              <div className="lg:absolute lg:right-0 lg:-top-16 flex items-center gap-4">
                <Link
                  href={`tel:+919119001126`}
                  className="rounded-lg max-lg:hidden Cammron flex items-center gap-2 justify-center px-6 py-2 text-[1.2rem]/[2rem] text-primary border border-white bg-white hover:bg-primary hover:text-white"
                  // onClick={() => setShowModal(!open)}
                >
                  <span>
                    <OutlineCall2 />
                  </span>
                  Call Now for Best Deals
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
          ) : (
            <Link
              href={"tel:+919119001126"}
              className="flex lg:hidden items-center gap-2 px-5 my-auto ml-auto text-lg leading-7 text-[#acacac]"
            >
              {/* <MdCall size={20} /> */}
              <OutLineCall />
              <span className="sr-only">call us on : +9191190 01126</span>
              <span className="my-auto text-[#acacac] xl:block hidden">
                +91-91190 01126
              </span>
            </Link>
          )}
        </div>
      </Container>
    </header>
  );
};

export default LandingPageNav;
