"use client";
import { CallIcon, ChatIcon, FillUser, MailIcon } from "@/icons/icons";
import { Input, Textarea } from "./landingpage/Form";
import { useState } from "react";
import axios from "../../node_modules/axios/index";

const ContactUsForm = () => {
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
        // router.push('/thank-you');
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
    <div className="bg-[#BCD0B8]/85 rounded-xl w-full h-full">
      <form
        className="flex flex-col px-6 py-7 blur-none bg-black bg-opacity-30 max-md:px-5 rounded-xl"
        onSubmit={handleSubmit}
      >
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
                required
                value={input.value}
                onChange={input.onChange}
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
              required
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="flex justify-center items-center px-7 py-3.5 mt-5 text-lg font-medium leading-6 whitespace-nowrap bg-green-900 rounded-sm text-stone-300 max-md:px-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUsForm;
