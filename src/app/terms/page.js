"use client";

import React, { useState } from "react";

const list = [
  {
    questoin: "Conclusion of the Contract",
    answer: [
      "The contract between the guest and Base Camp Hospitality (Everest Base Camp Mussoorie) shall be applicable on receipt of written confirmation of the reservation whether this has been sent by letter or e-mail.",
      "The services provided are based on the description contained in our brochure and / or on our website.",
    ],
  },
  {
    questoin: "Conclusion of the Contract",
    answer: [
      "The contract between the guest and Base Camp Hospitality (Everest Base Camp Mussoorie) shall be applicable on receipt of written confirmation of the reservation whether this has been sent by letter or e-mail.",
      "The services provided are based on the description contained in our brochure and / or on our website.",
    ],
  },
  {
    questoin: "Conclusion of the Contract",
    answer: [
      "The contract between the guest and Base Camp Hospitality (Everest Base Camp Mussoorie) shall be applicable on receipt of written confirmation of the reservation whether this has been sent by letter or e-mail.",
      "The services provided are based on the description contained in our brochure and / or on our website.",
    ],
  },
  {
    questoin: "Conclusion of the Contract",
    answer: [
      "The contract between the guest and Base Camp Hospitality (Everest Base Camp Mussoorie) shall be applicable on receipt of written confirmation of the reservation whether this has been sent by letter or e-mail.",
      "The services provided are based on the description contained in our brochure and / or on our website.",
    ],
  },
];

function page() {
  return (
    <div className="max-w-5xl mx-auto text-[#A2A4A2]">
      <h2 className="text-center text-2xl">Terms & Conditions</h2>

      <div className="flex flex-col gap-4">
        {list.map((item) => (
          <Accordin {...item} />
        ))}
      </div>
    </div>
  );
}

export const Accordin = ({ questoin, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-b-gray-600 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <h2>{questoin}</h2>

      <div
        className="mt-4 flex flex-col"
        style={{
          maxHeight: open ? "1200px" : "0",
          overflow: "hidden",
          transition: "all 1.6s ease-in-out",
        }}
      >
        {answer.map((item) => (
          <p className="pb-4">{item}</p>
        ))}
      </div>
    </div>
  );
};

export default page;
