"use client";

import React, { useState } from "react";
import axios from "../../node_modules/axios/index";
import { useRouter } from "next/navigation";
import { countries } from "../utils/countryCode";

const ContactUsForm2 = ({ title, description }) => {
  const route = useRouter();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [formRes, setFormRes] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [enterCaptcha, setEnterCaptcha] = useState("");
  const [canSubmitForm, setCanSubmitForm] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setUserPhone(value);
      setErrorMessage(value.length < 10 ? "Please enter a valid number" : "");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setUserEmail(value);
    setEmailErrorMessage(
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };

  const generateCaptcha = () => {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(captcha);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userPhone.length !== 10) {
      alert("Phone number should be exactly 10 digits.");
      return;
    }

    // if (captcha !== enterCaptcha) {
    //   alert("Captcha does not match.");
    //   return;
    // }

    setFormRes(true);
    try {
      const data = await axios.post(
        "https://nexon.eazotel.com/eazotel/addcontacts",
        {
          Domain: "eb112233",
          // Domain: "sumit",
          email: userEmail,
          Name: userName,
          Contact: userPhone,
          Description: userMessage,
        }
      );
      if (data.status) {
        window.open("/thank-you", "_blank");
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserMessage("");
        setUserPhone("");
        setCaptcha("");
        setEnterCaptcha("");
      } else {
        setFormRes(false);
        alert("Something went wrong!");
      }
    } catch (error) {
      setFormRes(false);
      alert("Error submitting form!");
    }
  };

  const formData = [
    {
      tag: "input",
      type: "text",
      name: "Name*",
      placeholder: "Full Name*",
      required: true,
      value: userName,
      onChange: (e) => setUserName(e.target.value),
    },
    {
      tag: "div",
      name: "Phone Number*",
      placeholder: "Phone Number*",
      required: true,
      content: (
        <div className="flex gap-2 w-full text-base capitalize bg-white border border-white rounded-lg p-3">
          <select
            id="countryCode"
            name="countryCode"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="w-20 bg-white rounded-lg text-[#A3A3A3]  focus:outline-none"
          >
            {countries.map((country, index) => (
              <option
                key={index}
                value={country.code}
                className="text-primary italic bg-transparent"
              >
                {`${country.code}`}
              </option>
            ))}
          </select>
          <input
            type="number"
            id="Phone Number*"
            name="Phone Number*"
            placeholder="Phone Number*"
            value={userPhone}
            onChange={handlePhoneChange}
            className="w-full bg-white placeholder:text-[#A3A3A3] text-primary no-spinner focus:outline-none"
          />
        </div>
      ),
    },
    {
      tag: "input",
      type: "email",
      name: "Email Address*",
      placeholder: "Email Address*",
      required: true,
      value: userEmail,
      onChange: handleEmailChange,
    },

    {
      tag: "textarea",
      type: "text",
      name: "Message (if any)",
      placeholder: "Plan Your Stay With Us – Get Best Deals Now!",
      required: true,
      value: userMessage,
      onChange: (e) => setUserMessage(e.target.value),
    },
  ];

  return (
    <div className="bg-secondary border border-primary rounded-lg w-full h-full flex flex-col px-4 py-3">
      <h2 className="desc_1 Cammron  font-semibold text-primary">{title}</h2>
      <p className="desc_1 text-primary">{description}</p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mt-4">
          {formData.map((data, index) => (
            <div key={index}>
              {data.tag === "div"
                ? data.content
                : React.createElement(data.tag, {
                    id: data.name,
                    type: data.type,
                    name: data.name,
                    value: data.value,
                    onChange: data.onChange,
                    placeholder: data.placeholder,
                    required: data.required,
                    autoComplete: "off",
                    spellCheck: "false",
                    rows: "4",
                    className:
                      "w-full rounded-lg bg-white no-spinner lg:p-3 p-2 border border-white resize-none placeholder:text-[#A3A3A3] placeholder:capitalize focus:outline-none valid:outline-blue-primary invalid:outline-Saffron-primary",
                  })}
              {data.name === "Phone Number*" && errorMessage && (
                <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
              )}
              {data.name === "Email Address*" && emailErrorMessage && (
                <p className="text-sm text-red-500 mt-2">{emailErrorMessage}</p>
              )}
            </div>
          ))}
        </div>

        {/* <div className="italic flex flex-col py-2">
          {captcha && (
            <>
              <div className="flex justify-between text-[#A3A3A3] ">
                <p>Enter captcha code:</p>
                <div className="bg-slate-50 px-2 rounded-md">{captcha}</div>
              </div>
              <input
                type="text"
                required
                placeholder="Please enter the captcha here"
                onChange={(e) => setEnterCaptcha(e.target.value)}
                className="mt-2 text-[#A3A3A3] outline-none text-center bg-transparent border-b border-black"
                value={enterCaptcha}
              />
            </>
          )}
        </div> */}

        {!canSubmitForm ? (
          <>
            {captcha ? (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white mt-2 rounded-lg w-full bg-primary text-base py-3 px-4 tracking-wider hover:bg-primary/80 transition-colors duration-300 ease-in-out"
                disabled={formRes}
              >
                {formRes ? "Submitting..." : "Book Your Stay"}
              </button>
            ) : (
              <button
                type="button"
                onClick={generateCaptcha}
                disabled={formRes}
                className="text-white mt-2 rounded-lg w-full bg-primary text-base py-3 px-4 tracking-wider hover:bg-primary/80 transition-colors duration-300 ease-in-out"
              >
                Book Your Stay
              </button>
            )}
          </>
        ) : (
          <div className="mt-2">
            <button
              type="submit"
              className="text-white Cammron rounded-lg w-full bg-primary text-base py-3 px-4 tracking-wider hover:bg-primary/80 transition-colors duration-300 ease-in-out"
              disabled={formRes}
            >
              {formRes ? "Submitting..." : "Book Your Stay"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactUsForm2;
