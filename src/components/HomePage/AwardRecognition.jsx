import Image from "next/image";
import React from "react";
import BorderLine from "../BorderLine";
import { bookingLink } from "@/utils/data";
import Link from "next/link";

const AwardRecognition = ({ awardImage }) => {
    return (
        <div className="py-[120px]">
            <div className="w-full bg-[#F9FAFB] lg:max-h-[328px] flex flex-col md:flex-row items-center justify-center px-4 md:px-16">
                <div className="w-full max-w-[500px] md:w-1/2 flex justify-center mb-6 md:mb-0 md:mr-10">
                    <div className="w-full max-w-[500px] aspect-square relative">
                        <Image
                            src={awardImage}
                            alt="Booking.com Traveller Review Awards 2025"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left max-w-[600px] max-sm:pb-10">
                    <BorderLine />
                    <h2 className="text-[#29422C] text-4xl mt-2 text-center md:text-[32px] font-normal mb-4 Cammron" style={{ alignItems: "center" }}>
                        OTA RECOGNITION
                    </h2>
                    <p className="font-text-new font-medium text-[21px] leading-[32px] text-center align-middle pb-6 text-[#29422C]">
                        Happy to celebrate this recognition with our guests! This validates all the hard work and dedication we put into providing exceptional experiences.
                    </p>
                    <div className="flex justify-center">
                    <Link target="_blank" href={bookingLink} className="bg-[#29422C] text-white text-[22px] px-6 py-2 rounded-md hover:bg-[#3a5a3d] transition-colors Cammron" style={{ fontWeight: 400, lineHeight: "32px" }}>
                        Book Your Stay Now
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwardRecognition;