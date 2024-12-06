// components/EmbeddedMap.jsx
import React from "react";

const EmbeddedMap = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d6878.363293193037!2d78.025305!3d30.4592927!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3908d170d61d91cb%3A0x84607e0d71c4450f!2sEverest%20Base%20Camp%2C%20Near%20George%20Everest%20House%20George%20Everest%20House%2C%205km%20from%20Mall%20Park%20Estate%20Hathi%20paon%20Road%2C%20Mussoorie%2C%20Uttarakhand%20248179!3m2!1d30.4592927!2d78.025305!5e0!3m2!1sen!2sin!4v1716280506901!5m2!1sen!2sin"
      className="w-full h-[290px] mt-5 border-[#29422C] border rounded-sm "
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      style={{
        background: "lightgray 0px -29.297px / 100% 132.355% no-repeat",
      }}
    />
  );
};

export default EmbeddedMap;
