"use client";
import { ZoomInIcon, ZoomOutIcon } from "@/icons/icons";
import Image, { StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";


const FullScreenImageViewPopUP = ({
  setShowModal,
  src,
  showModal,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleKeydown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    },
    [setShowModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    };
  }, [handleKeydown]);

  const toggleFullscreen = useCallback(() => {
    const element = document.querySelector(".image-container");
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => console.error(err));
    } else {
      if (element) {
        element.requestFullscreen().catch((err) => console.error(err));
      }
    }
  }, []);

  const handleFullscreenChange = useCallback(() => {
    setIsFullscreen(!!document.fullscreenElement);
  }, []);

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [handleFullscreenChange]);

  return (
    <section
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#29422C] bg-opacity-75 transition duration-1000 ease"
      onClick={() => setShowModal(false)}
    >
      <div
        className="relative w-full max-w-3xl aspect-[4/3.5] image-container"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt="Full screen view"
          fill
          className="object-cover cursor-pointer"
          onClick={toggleFullscreen}
        />
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="w-full h-full cursor-pointer show flex items-end justify-end"
            onClick={toggleFullscreen}
          >
            <div className="p-7 hover:bg-[#D1BA97] bg-[#D1BA97]/60 w-max rounded-tl-[3rem]">{isFullscreen ? <ZoomOutIcon /> : <ZoomInIcon />}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullScreenImageViewPopUP;
