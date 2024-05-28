"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

function Gallery({ items }) {
  const [gallery, setGallery] = useState([]);
  const [index, setIndex] = useState("");
  const [isAll, setIsAll] = useState(true);
  const [isFilter, setIsFilter] = useState(false);

  const [filterGallery, setFilterGallery] = useState([...items]);

  // const [imgSelect, setImgSelect] = useState([]);
  // const [previewImage, setPreviewImage] = useState(false);
  // const [imgSelectIndex, setImgSelectIndex] = useState(0);

  const allImages = items.reduce((accumulator, currentValue) => {
    if (currentValue.Required) {
      return accumulator.concat(currentValue.Images);
    }
    // If 'Required' is false, just return the accumulator as is
    return accumulator;
  }, []);

  const handleClick = (e, ind) => {
    setIsAll(false);
    setIndex(ind);

    if (e.target.value.toLowerCase() === "all") {
      setIsAll(true);
      const allImages = items.reduce((accumulator, currentValue) => {
        if (currentValue.Required) {
          return accumulator.concat(currentValue.Images);
        }
        // If 'Required' is false, just return the accumulator as is
        return accumulator;
      }, []);
      setGallery([...allImages]);
      setIsFilter(false);
    } else {
      const filterData = items?.filter((i) => {
        return i.Category.toLowerCase() === e.target.value.toLowerCase();
      });
      setFilterGallery([...filterData]);
      setIsFilter(true);
    }
  };

  return (
    <div className="bg-[#ACACAC] py-12">
      <div className="flex flex-wrap justify-center gap-4">
        <button
          className="text-[1.2rem] capitalize font-medium px-6 py-2 hover:bg-[#29422C] hover:text-white rounded-sm"
          value={"all"}
          // style={{
          //   background: isAll ? "#4b92d9" : "",
          //   color: isAll ? "white" : "black",
          // }}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          All
        </button>
        {items.map((i, ind) => {
          if (i.Required) {
            return (
              <button
                value={i.Category}
                className="text-[1.2rem] capitalize font-medium px-3 py-2 hover:bg-[#29422C] hover:!text-white rounded-sm"
                style={
                  {
                    //   background: ind === index ? "#4b92d9" : "",
                    //   color: ind === index ? "white" : "black",
                  }
                }
                onClick={(e) => {
                  handleClick(e, ind);
                }}
              >
                {i.Category}
              </button>
            );
          }
        })}
      </div>

      <div className="mt-8  max-w-5xl px-3 mx-auto">
        {!isFilter && (
          <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-5 mt-16">
            {allImages.map((item, index) => (
              <div>
                <div className="relative w-full aspect-[4/3]" key={index}>
                  <Image src={item} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        )}

        {isFilter && (
          <div className="grid md:grid-cols-3 gap-5 mt-16">
            {filterGallery[0]?.Images?.map((i, index) => {
              return (
                <div className="relative w-full aspect-[4/3]" key={index}>
                  <Image src={i} fill className="object-cover" />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
