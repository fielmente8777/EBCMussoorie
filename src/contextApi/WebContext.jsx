"use client";
import { createContext, useContext, useState } from "react";

export const WebContext = createContext({
  isOpenMobileMenu: false,
  setIsOpenMobileMenu: () => {},
});

export const WebProvider = ({ children }) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  return (
    <WebContext.Provider value={{ isOpenMobileMenu, setIsOpenMobileMenu }}>
      {children}
    </WebContext.Provider>
  );
};

export const useWebContext = () => {
  const context = useContext(WebContext);
  if (!context) {
    throw new Error("useWebContext must be used within a WebProvider");
  }
  return context;
};
