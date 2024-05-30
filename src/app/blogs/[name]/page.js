"use client";
import test from "../../../../public/images/19 Bedroom 4_11zon.jpg";
import ebclogo from "../../../../public/images/ebclogo.png";
import Image from "next/image";
import Link from "next/link";

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

export default function page() {
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

      <div className="mt-6 border flex flex-col gap-4 border-gray-500 px-5 py-8">
        <div href={`/blog/`} className="col-span-3 py-2">
          <div className="flex gap-4 items-center">
            <Image src={ebclogo} alt="logo" width={35} height={20} />

            <div className="flex gap-2">
              <div>
                <h2>EBC Mussorie</h2>
              </div>
              <p>sep 26 2min</p>
            </div>
          </div>

          <div className="space-y-2 mt-3">
            {/* <h2 className="text-2xl font-bold">{itm.title}</h2>
                <p className="text-black">{itm.subtitle}</p>
                <p>{itm.lastupdate}</p> */}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Unleashing Adventure: Exploring the Thrilling Trekking Trails at
            Everest Base Camp
          </h2>
          <p>
            Are you ready to embark on a thrilling adventure? Get your backpack
            ready as we dive into the world of trekking trails at Everest Base
            Camp. From rugged terrains to stunning vistas, these trails offer an
            exhilarating experience for trekking enthusiasts. Join us as we
            explore the hidden gems and breathtaking landscapes that await you
            on these adrenaline-pumping trails.
          </p>
        </div>

        <div className="mt-2">
          <div className="w-full h-[450px]">
            <Image
              src={test}
              alt="image"
              className="object-cover w-full h-full"
            />
          </div>

          <p className="text-center">
            Enjoy thrilling trekking trails at EBC Mussoorie
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Unveiling the Beauty of Everest Base Camp:
          </h2>
          <p className="text-md">
            Nestled amidst the George Everest Peak in Mussoorie, Everest Base
            Camp is a dream destination for trekkers. It's a place where
            nature's grandeur unfolds before your eyes. As you traverse through
            these trails, you'll witness yourself in between beautiful greenery
            away from the hustle and bustle of the city, enjoying the fresh
            mountain air and unpolluted sunlight!
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Hidden Gems and Experiences:</h2>
          <p className="text-md">
            Beyond the well-trodden paths, there are hidden gems waiting to be
            discovered. These trails take you off the beaten track, revealing
            pristine landscapes and secluded spots that few have witnessed. Each
            step reveals a new wonder, whether it's a hidden viewpoint or a
            perfect picnic spot. Prepare to be amazed by the surprises that
            await you.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            Inspiration and Wanderlust of Thrilling Trekking Trails:
          </h2>
          <p className="text-md">
            The allure of these trekking trails lies in the inspiration they
            evoke and the wanderlust they ignite. As you hike through these
            pristine landscapes, you'll connect with nature on a deeper level
            and find inspiration in the beauty that surrounds you. The stories
            of fellow trekkers who have ventured these paths will fuel your
            desire for new experiences and push you to embrace your adventurous
            spirit.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Conclusion:</h2>
          <p className="text-md">
            Unleash your spirit of adventure and embark on an unforgettable
            trekking experience at Everest Base Camp Mussoorie. Let the trails
            lead you to breathtaking vistas, hidden gems, and personal triumphs.
            Immerse yourself in the beauty of nature, find inspiration in the
            journey, and create memories that will last a lifetime. Get ready to
            discover the thrill of trekking in the queen of hills this summer.
          </p>
        </div>

        <div className="flex gap-4">
          <Link href={"/"} className="px-4  border border-gray-400">
            Musssorie
          </Link>
          <Link href={"/"} className="px-4  border border-gray-400">
            Musssorie
          </Link>
          <Link href={"/"} className="px-4  border border-gray-400">
            Musssorie
          </Link>
        </div>

        <div className="border-y border-y-gray-400 flex justify-between py-4">
          <div></div>
          <ul className="flex gap-4 list-disc list-inside">
            <li>EBC</li>
            <li>Activity</li>
            <li>Mussorie</li>
          </ul>
        </div>

        <div className="flex gap-6">
          <p>49views</p>
          <p>0 comments</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <p>Recent Posts</p>
          <Link href={"/"}>See All</Link>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="border rounded-md border-gray-500">
            <div className="w-full">
              <Image
                src={test}
                alt="test"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <h2 className="text-xl font-bold ">
                George Everest Peak, one of the most Legendary
              </h2>
            </div>

            <div className="bg-gray-600 w-full h-[0.05rem]" />

            <div className="flex gap-8 p-5">
              <p>7</p>
              <p>0 comments</p>
            </div>
          </div>

          <div className="border rounded-md border-gray-500">
            <div>
              <Image src={test} alt="test" />
            </div>

            <div className="p-4">
              <h2 className="text-xl font-bold ">
                George Everest Peak, one of the most Legendary
              </h2>
            </div>

            <div className="bg-gray-600 w-full h-[0.05rem]" />

            <div className="flex gap-8 p-5">
              <p>7</p>
              <p>0 comments</p>
            </div>
          </div>
        </div>

        <div className="border border-gray-600 flex justify-center items-center mt-8 py-5">
          <div className="max-w-2xl w-full mx-auto">
            <div className="pb-2 border-b border-b-gray-600">
              <p>Comments</p>
            </div>

            <div>
              <textarea
                name=""
                placeholder="write a comment"
                rows={6}
                className="w-full bg-transparent border border-gray-500 mt-5 p-4"
              />
              <div className="flex justify-end">
                <div className="flex gap-2">
                  <button>Cancel</button>
                  <button className="bg-[#29422C]/40 text-white px-2" disabled>
                    Publish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
