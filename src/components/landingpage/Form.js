import React from "react";
import Link from "next/link";
import {
  CallIcon,
  ChatIcon,
  Face,
  FillUser,
  Insta,
  MailIcon,
  OutlineCall,
  OutlineLocation,
  OutlineMail,
  Trip,
} from "../../icons/icons.jsx";
import LazyLoadedMap from "./LazyLoadedMap.jsx";

const formInputs = [
  {
    icon: <FillUser />,
    type: "text",
    placeholder: "Your Name*",
  },
  {
    icon: <CallIcon />,
    type: "number",
    placeholder: "Phone Number*",
  },
  {
    icon: <MailIcon />,
    type: "email",
    placeholder: "Email",
  },
];

const Form = () => {
  return (
    <div className="w-full md:w-[1280px] mx-auto  px-4 lg:px-0" id="contact">
      <div className="bg-[#D5D5D5] w-full rounded-xl py-5 ">
        <div className="text-center text-5xl font-bold text-[#29422C] capitalize leading-[56.16px] ">
          Contact Us
        </div>
        <div className="lg:grid grid-cols-5 gap-8 px-3 md:px-10 mt-5">
          <div className=" col-span-3 w-full lg:-mr-4">
            <div className="flex flex-col gap-1 grow text-lg leading-7 text-[#29422C] max-md:mt-10 max-md:max-w-full">
              <div className="text-3xl font-semibold tracking-wide leading-8 capitalize max-md:max-w-full">
                Contact Details
              </div>
              <div className="flex gap-3 mt-6 max-md:flex-wrap">
                <OutlineLocation />
                <p className="max-md:max-w-full">
                  Everest Base Camp Mussoorie, Park Estate, Hathipaon Road,
                  Mussoorie, Uttarakhand, 248179
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-5 justify-between self-start mt-4">
                <Link
                  href={"tel:+918595274861"}
                  className="flex items-center gap-2.5 text-xl"
                >
                  <OutlineCall />
                  +91 85952 74861
                </Link>
                <Link
                  href={"mailto:info@ebcmussoorie.com"}
                  className="flex items-center gap-2.5 self-start mt-1 whitespace-nowrap"
                >
                  <OutlineMail />
                  info@ebcmussoorie.com
                </Link>
              </div>

              <LazyLoadedMap />
            </div>
          </div>
          <div className="col-span-2 lg:ms-3">
            <div className="flex flex-col grow justify-center max-md:mt-10 ">
              <form className="flex flex-col px-6 py-7 blur-none bg-black bg-opacity-30 max-md:px-5 rounded-xl">
                <div className="text-2xl font-semibold leading-7 text-[#29422C]">
                  Get in Touch!
                </div>
                <div className="">
                  {formInputs.map((input) => (
                    <div
                      key={input.placeholder}
                      className="flex gap-3 mt-4  px-3 py-3 leading-6 bg-white rounded-lg"
                    >
                      <div className="mt-[.3rem]">{input.icon}</div>
                      <Input
                        type={input.type}
                        className="w-full text-xl font-medium no-spinner"
                        placeholder={input.placeholder}
                      />
                    </div>
                  ))}
                  <div className="flex gap-3 mt-4  px-3 py-3 bg-white rounded-lg">
                    <div className="mt-[.3rem]">
                      <ChatIcon />
                    </div>
                    <Textarea
                      placeholder="Your Message*"
                      className="w-full text-xl font-medium"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center px-7 py-3.5 mt-5 text-lg font-medium leading-6 whitespace-nowrap bg-green-900 rounded-sm text-stone-300 max-md:px-5">
                  Submit
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-5 w-full mt-10">
          <Link href={"https://www.facebook.com/ebcmussoorie/"} target="_blank">
            {" "}
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-[#29422C]/[0.2]">
              <Face />
            </div>
          </Link>
          <Link
            href={"https://www.instagram.com/ebcmussoorie/"}
            target="_blank"
          >
            {" "}
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-[#29422C]/[0.2]">
              <Insta />
            </div>
          </Link>
          <Link href={"https://www.facebook.com/ebcmussoorie/"} target="_blank">
            <div className="h-10 w-10 flex justify-center items-center rounded-full bg-[#29422C]/[0.2]">
              <Trip />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;

export const Input = ({ type, placeholder, className, ...props }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`${className && className} outline-none focus:outline-none`}
        {...props}
      />
    </>
  );
};

const Textarea = ({ placeholder, className, ...props }) => {
  return (
    <>
      <textarea
        placeholder={placeholder}
        className={`${
          className && className
        } outline-none focus:outline-none resize-none`}
        {...props}
      />
    </>
  );
};
