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
    questoin: "Prices ",
    answer: [
      "All prices are in Indian Rupees and are exclusive of applicable GST/taxes",
    ],
  },
  {
    questoin: "Terms of Payment",
    answer: [
      "Deposit: 100% deposit is required at the time of confirmed booking. This deposit is equivalent to the total price of accommodation on a per person basis or as specified.",
      "If the reservation is not made online through our website, then the deposit must be paid within 15 days from the date of initial booking for confirmation of the reservation. A credit card number must be given to guarantee your reservation even if the deposit has been paid.",
      "Bank details:",
      "Base Camp Hospitality",
      "48, Dispensary Road (also known as 136/74, Ajmal Khan Road), Dehradun. Uttarakhand, 248001",
      "Current A/C",
      "HDFC Bank",
      "56 Rajpur Road, Dehradun- 248001. IFSC Code HDFC0000225",
      "A/C No - 50200046651725",
      "If payment is not made by the deadline, Everest Base Camp shall be entitled to cancel the contract and demand a cancellation fee in accordance with section 4.",
    ],
  },
  {
    questoin: "Cancellations",
    answer: [
      "1. Cancellation/Change of Dates:",
      "Cancellation or change of dates within 14 days of the arrival date is not possible. Bookings cancelled within 14 days of check-in are completely non-refundable.",
      "2. Change of Dates Before 14 Days:",
      "Guests can request to change their booking dates before 14 days of the original booking date. Such requests will be accommodated subject to availability.",
      "As for cancellation of the booking before 14 days of check-in, we shall provide a credit note for the advance payment made, which can be redeemed for a future booking with us.",
      "3. Refund Policy:",
      "Please understand that due to our limited inventory of rooms, refunds are not available for cancelled bookings",
      "In the event of a natural calamity or unforeseen circumstances beyond control, guests are offered the option to reschedule their booking. We shall provide a credit note for the advance payment made which can be redeemed for a future booking with us. However, refunds will not be provided.",
    ],
  },
  {
    questoin: "Delayed Check-in & Early Check-out",
    answer: [
      "Arrival and departure timings and dates have to be adhered to by the guests. In case of late arrivals, whether due to disturbances in public or private transport or for personal reasons, the full room-price is payable.",
      "In the event of premature departure, the guest will be charged for the entire duration of confirmed booking.",
    ],
  },
  {
    questoin: "Check-in & Check-out timings",
    answer: [
      "Check-in timing is 2:00PM to 9:00PM. Check-out timing is 10:30PM.",
      "If your arrival is delayed beyond 6 pm, you are required to inform Everest Base Camp in advance to retain your booking for the day.",
    ],
  },
  {
    questoin: "Complaints",
    answer: [
      "In the rare event of any complaint, please notify Everest Base Camp manager, so that any problems, faults or errors can be resolved as quickly as possible.",
      "Please email to info@ebcmussoorie.com",
      "For all legal matters, the Indian laws are applicable. For any disputes, jurisdiction of courts of Dehradun will apply.",
    ],
  },
];

function page() {
  return (
    <div className="max-w-5xl mx-auto text-[#A2A4A2]">
      <h2 className="text-center text-2xl">Terms & Conditions</h2>

      <div className="flex flex-col gap-4">
        {list.map((item, index) => (
          <Accordin {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

const Accordin = ({ questoin, answer }) => {
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
        {answer.map((item, index) => (
          <p className="pb-4" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default page;
