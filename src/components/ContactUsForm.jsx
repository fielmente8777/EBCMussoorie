"use client";
import { Input, Textarea } from "./landingpage/Form";
import { useState } from "react";
import axios from "../../node_modules/axios/index";
import { CallIcon, ChatIcon, FillUser, MailIcon } from "../icons/icons";
import { useRouter } from "next/navigation";

const ContactUsForm = () => {
  const route = useRouter();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userHotelName, setUserHotelName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [formRes, setFormRes] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [openPopup, setOpenPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormRes(true);

    if (userPhone.length > 10) {
      alert("Phone number should not exceed 10 digits.");
      setLoader(false);
      setFormRes(false);
      return;
    }

    try {
      setLoader(true);
      const data = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "eb112233", // Replace with your actual domain value// eb112233
          // Domain: "sumit",
          email: userEmail,
          Name: userName,
          Contact: userPhone,
          Subject: userHotelName,
          Description: userMessage,
        }
      );
      console.log(data);
      if (data.status) {
        setLoader(false);
        // route.push("/thank-you", "_blank");
        window.open("/thank-you", "_blank");
        setPopupMsg("You information has been Received");
        setOpenPopup(true);
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setUserHotelName("");

        setUserPhone("");
      } else {
        setLoader(false);
        setPopupMsg("Something went wrong!");
        setOpenPopup(false);
        setFormRes(false);
      }
    } catch (error) {
      setLoader(false);
      console.error("Error submitting form:", error);
      setFormRes(false);
      alert("Something went wrong!");
    }
  };

  const formInputs = [
    {
      icon: <FillUser />,
      type: "text",
      placeholder: "Your Name*",
      value: userName,
      onChange: (e) => setUserName(e.target.value),
    },
    {
      icon: <CallIcon />,
      type: "number",
      placeholder: "Phone Number*",
      value: userPhone,
      onChange: (e) => setUserPhone(e.target.value),
    },
    {
      icon: <MailIcon />,
      type: "email",
      placeholder: "Email",
      value: userEmail,
      onChange: (e) => setUserEmail(e.target.value),
    },
  ];

  return (
    <div className="bg-[#29422C] rounded-sm w-full h-full">
      <form
        className="flex flex-col px-6 py-7 blur-none bg-black bg-opacity-30 max-md:px-5  rounded-sm"
        onSubmit={handleSubmit}
      >
        <div className="text-2xl font-semibold leading-7 text-[#FFFFFF]">
          Get in Touch!
        </div>
        <div className="">
          {formInputs.map((input) => (
            <div
              key={input.placeholder}
              className="flex gap-3 mt-4 rounded-sm overflow-hidden  leading-6 bg-[#E5E7EB]"
            >
              <div className="mt-[.3rem]  px-3 py-4">{input.icon}</div>
              <Input
                type={input.type}
                className="w-full py-3 bg-[#E5E7EB] text-xl italic no-spinner placeholder:text-[#29422C]"
                placeholder={input.placeholder}
                required
                value={input.value}
                onChange={input.onChange}
              />
            </div>
          ))}
          <div className="flex gap-3 mt-4 rounded-sm overflow-hidden bg-[#E5E7EB] ">
            <div className="mt-[.3rem] px-3 py-3">
              <ChatIcon />
            </div>
            <textarea
              placeholder="Your Message*"
              className="w-full text-xl resize-none py-3 italic bg-[#E5E7EB] textareaScroll outline-none focus:outline-none no-spinner placeholder:text-[#29422C] "
              required
              rows={4}

              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-center items-center rounded-sm overflow-hidden px-7 py-3.5 mt-5 text-lg font-medium leading-6 whitespace-nowrap bg-[#E5E7EB] text-[#29422C] border border-[#F69F2B] max-md:px-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
