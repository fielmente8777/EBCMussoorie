"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

const WhatsApp = () => {
  const pathName = usePathname();
  return (
    <div>
      <Link
        href="https://wa.me/+919119001126?text=Hello"
        target="_blank"
        rel="noreferrer"
        className={`whatsapp-button inline-block fixed bottom-12 right-[20px]
          w-[50px] h-[50px] bg-[#12c665] p-[12px]  rounded-full text-white z-10 text-[25px] overflow-hidden`}
          // ${pathName === "/ebclanding/" ? "bottom-28 left-[20px]" : "bottom-28 left-[20px]"} 
      >
        <span className="sr-only">whats app</span>
        <FaWhatsapp className="transform" />
      </Link>
    </div>
  );
};

export default WhatsApp;
