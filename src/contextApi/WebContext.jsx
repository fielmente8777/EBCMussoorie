"use client";
import { createContext, useContext, useState } from "react";

export const WebContext = createContext({
  isOpenMobileMenu: false,
  setIsOpenMobileMenu: () => {},
});

export const WebProvider = ({ children }) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isOpenImagePopup, setIsOpenImagePopup] = useState(false);
  const [imgCurrentIndex, setImgCurrentIndex] = useState(0);
  const [imageArray, setImageArray] = useState([]);

  const handleImagePopupOpen = (index, images) => {
    setImgCurrentIndex(index);
    setImageArray(images);
    setIsOpenImagePopup(true);
  }

  const value = {
    isOpenMobileMenu,
    setIsOpenMobileMenu,
    isOpenImagePopup,
    setIsOpenImagePopup,
    imgCurrentIndex,
    imageArray,
    setImgCurrentIndex,
    setImageArray,
    handleImagePopupOpen
  };
  return <WebContext.Provider value={value}>{children}</WebContext.Provider>;
};

export const useWebContext = () => {
  const context = useContext(WebContext);
  if (!context) {
    throw new Error("useWebContext must be used within a WebProvider");
  }
  return context;
};
