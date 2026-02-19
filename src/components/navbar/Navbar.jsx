"use client";
import React from "react";
import { usePathname } from "next/navigation";
import LandingPageNav from "./LandingPageNav";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
  const pathName = usePathname();

  switch (pathName) {
    case "/thank-you/":
      return <LandingPageNav />;
    case "/ebclanding/":
      return <LandingPageNav />;
    default:
      return <DesktopNav />;
  }
};

export default Navbar;
