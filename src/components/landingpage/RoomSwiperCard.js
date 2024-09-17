import Image from "next/image";
import React from "react";

const RoomSwiperCard = ({ roomData }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-[#D5D5D5] min-h-[470px] h-[470px] ">
      <div className="relative aspect-[3/1.8]">
        <Image src={roomData.image} alt="roomImage" className="object-cover" fill />
      </div>
      {/* <div className="w-full flex justify-center items-center gap-3 py-3">
        <button className="slide_page_indicator"></button>
      </div> */}
      <div className="flex flex-col gap-2 p-3 md:p-4 text-center">
        <h1 className="text-[#29422C] lg:text-3xl text-xl text-center font-medium">
          {roomData.roomName}
        </h1>
        <p className="text-lg">{roomData.description}</p>
      </div>
    </div>
  );
};

export default RoomSwiperCard;
