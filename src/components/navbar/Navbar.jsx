"use client";
import React from "react";
import { usePathname } from "next/navigation";
import HomeNave from "./HomeNave";
import LandingPageNav from "./LandingPageNav";

const Navbar = () => {
  const pathName = usePathname();

  if (pathName === "/ebclanding/" || pathName === "/thank-you/") {
    return <LandingPageNav />;
  }

  return <HomeNave />;
};

export default Navbar;
