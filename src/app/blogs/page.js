"use client";

import { useState } from "react";
import test from "../../../public/images/01 Picnic_11zon.jpg";
import ebclogo from "../../../public/images/ebclogo.png";
import Image from "next/image";

const blogData = [
  {
    Category: "Ebc",
    items: [
      {
        title: `
        Unleashing Adventure: Exploring the Thrilling Trekking Trails at Everest Base Camp`,
        subtitle:
          "Get your backpack ready as we dive into the world of trekking trails at Everest Base Camp",
        image: test,
        lastupdate: "Last updated 3 mins ago",
      },
    ],
  },
  {
    Category: "activity",
    items: [
      {
        title: "activity",
        subtitle: "test subtile",
        image: test,
        lastupdate: "Last updated 3 mins ago",
      },

      {
        title: "test",
        subtitle: "test subtile",
        image: test,
        lastupdate: "Last updated 3 mins ago",
      },
    ],
  },
  {
    Category: "kc",
    items: [
      {
        title: "test",
        subtitle: "test subtile",
        image: test,
        lastupdate: "Last updated 3 mins ago",
      },

      {
        title: "test",
        subtitle: "test subtile",
        image: test,
        lastupdate: "Last updated 3 mins ago",
      },
    ],
  },
];

const allBlogDetails = blogData.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue.items);
}, []);

const obj = {
  Category: "all",
  items: allBlogDetails,
};

blogData.unshift(obj);

const page = () => {
  const [currentTab, setCurrentTab] = useState("all");
  return (
    <div className="max-w-[1024px] w-full mx-auto bg-[#BCD0BE] px-4 py-2">
      <div className="flex gap-4 items-center">
        {blogData.map((item) => {
          return (
            <button
              value={item.Category}
              onClick={() => {
                setCurrentTab(item.Category);
              }}
              className="hover:bg-[#29422C] px-4 py-1 hover:text-white capitalize"
            >
              {item.Category}
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        {blogData.map(
          (item, index) =>
            item.Category == currentTab && (
              <div className="flex flex-col gap-2">
                {item.items.map((itm) => (
                  <div className="border border-gray-400 grid grid-cols-5 gap-6">
                    <div className="col-span-2">
                      <div className="w-full">
                        <Image
                          src={itm.image}
                          alt="image"
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>

                    <div className="col-span-3 py-2">
                      <div className="flex gap-4 items-center">
                        <Image
                          src={ebclogo}
                          alt="logo"
                          width={35}
                          height={20}
                        />

                        <div className="flex flex-col">
                          <div>
                            <h2>EBC Mussorie</h2>
                          </div>
                          <p>sep 26 2min</p>
                        </div>
                      </div>

                      <div className="space-y-2 mt-3">
                        <h2 className="text-2xl font-bold">{itm.title}</h2>
                        <p className="text-black">{itm.subtitle}</p>
                        <p>{itm.lastupdate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default page;
