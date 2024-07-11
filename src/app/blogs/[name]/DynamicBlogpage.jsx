"use client";
import ebclogo from "../../../../public/images/ebclogo.png";
import Image from "next/image";
import Link from "next/link";
import { blogData } from '../blogData.js'

import adventure from "../../../../public/blog/advanture.webp";
import unpluggingNature from "../../../../public/blog/UnplugginginNature.webp";
import planinggromantic from "../../../../public/images/palningrpmantic.webp";
import baseguide from "../../../../public/blog/baseguide.webp";
import familyadventure from "../../../../public/blog/familyadvanture.webp";
import ebcrestro from "../../../../public/blog/ebcrestro.webp";
import sustainable from "../../../../public/blog/SustainableTourism.webp";
import geopark from "../../../../public/blog/georgepeak.webp";
import gioeverest from "../../../../public/blog/SirGeorgeEverest.webp";
import cableride from "../../../../public/blog/cableride.webp";
import kamptyfall from "../../../../public/blog/kemptyfall.webp";

const allBlogDetails = blogData.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue.items);
}, []);

const obj = {
    Category: "all posts",
    items: allBlogDetails,
};

blogData.unshift(obj);

const DynamicBlogpage = ({ params }) => {


    const Blog = blogData.filter((item) =>
        item.items.filter(
            (itm) => itm?.title == decodeURIComponent(params.name.trim())
        )
    );


    const singleBlog = Blog[1].items?.filter((item) => {
        return (
            item?.title.trim().toLowerCase() ===
            decodeURIComponent(params.name).trim().toString().toLowerCase()
        );
    });



    return (
        <div className="max-w-[1024px] w-full mx-auto bg-[#BCD0BE] px-4 py-2">
            <div className="flex flex-wrap gap-4 items-center">
                {blogData.map((item, index) => {
                    return (
                        <Link
                            href={"/blogs"}
                            value={item.Category}
                            onClick={() => {
                                setCurrentTab(item.Category);
                            }}
                            key={index}
                            className="hover:bg-[#29422C] px-4 py-1 hover:text-white capitalize"
                        >
                            {item.Category}
                        </Link>
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
                            <p>{singleBlog[0].date}</p>
                        </div>
                    </div>

                    <div className="space-y-2 mt-3">
                        {/* <h2 className="text-2xl font-bold">{itm.title}</h2>
                <p className="text-black">{itm.subtitle}</p>
                <p>{itm.lastupdate}</p> */}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold">{singleBlog[0].title}</h2>
                    <p>{singleBlog[0].subtitle}</p>
                </div>

                {singleBlog[0].title2 && singleBlog[0].subtitle2 && (
                    <div>
                        <h2 className="text-2xl font-bold">{singleBlog[0].title2}</h2>
                        <p>{singleBlog[0].subtitle2}</p>
                    </div>
                )}

                {singleBlog[0].image && (
                    <div className="mt-2">
                        <div className="w-full sm:h-[450px] h-[300px]">
                            <Image
                                src={singleBlog[0].image.src}
                                alt="image"
                                width={1000}
                                height={100}
                                className="w-full h-full object-cover "
                            />
                        </div>

                        <p className="text-center mt-4">{singleBlog[0].imgTitle}</p>
                    </div>
                )}

                {singleBlog[0].imgItems && (
                    <div className="flex flex-col gap-12 mt-4">
                        {singleBlog[0]?.imgItems?.map((item, index) => (
                            <div key={index}>
                                <p className="text-center mt-4">{item.title}</p>

                                <div className="w-full sm:h-[450px] h-[300px] mt-5">
                                    <Image
                                        src={item.img}
                                        alt="image"
                                        width={1000}
                                        height={100}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <p className="text-center mt-4">{item.subtitle}</p>
                            </div>
                        ))}
                    </div>
                )}

                {singleBlog[0].content?.map((item, index) => {
                    return (
                        <div key={index}>
                            <h2 className="text-2xl font-bold">{item.title}</h2>
                            <div className="flex flex-col gap-4 mt-2">
                                {item?.subtitle?.map((itm, index) => {
                                    return (
                                        <p key={index} className="text-md">
                                            {itm}
                                        </p>
                                    );
                                })}
                            </div>

                            <ul className="flex flex-col gap-2 list-inside list-disc mt-4">
                                {item?.items?.map((item, index) => {
                                    return <li key={index}>{item}</li>;
                                })}
                            </ul>
                        </div>
                    );
                })}

                <div className="flex flex-wrap gap-4">
                    <Link href={"/"} className="px-4  py-1 border border-gray-400">
                        Musssorie
                    </Link>
                    <Link href={"/"} className="px-4 py-1  border border-gray-400">
                        Adventure
                    </Link>
                    <Link href={"/"} className="px-4 py-1  border border-gray-400">
                        Thinks to do
                    </Link>
                </div>

                <div className="border-y border-y-gray-400 flex justify-between py-4">
                    <div></div>
                    <ul className="flex gap-4 list-disc list-inside text-sm">
                        <li>EBC</li>
                        <li>Activity</li>
                        <li>Mussorie</li>
                    </ul>
                </div>

                <div className="flex gap-6 text-sm">
                    <p>49views</p>
                    <p>0 comments</p>
                </div>
            </div>

            <div className="mt-4">
                <div className="flex justify-between">
                    <p>Recent Posts</p>
                    <Link href={"/"}>See All</Link>
                </div>

                <div className="grid md:grid-cols-4 gap-4 mt-2">
                    <div className="border rounded-md border-gray-500">
                        <div className="w-full">
                            <Image
                                src={geopark}
                                alt="geopark"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-4">
                            <h2 className="text-lg font-bold ">
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
                            <Image
                                src={familyadventure}
                                alt="family adventure"
                                width={600}
                                height={400}
                            />
                        </div>

                        <div className="p-4">
                            <h2 className="text-lg font-bold ">
                                Family Adventure: Making Mussoorie a Fun-....
                            </h2>
                        </div>

                        <div className="bg-gray-600 w-full h-[0.05rem]" />

                        <div className="flex gap-8 p-5">
                            <p>10</p>
                            <p>0 comments</p>
                        </div>
                    </div>
                </div>

                <div className="border border-gray-600 flex justify-center items-center mt-8 p-5">
                    <div className="max-w-2xl w-full mx-auto">
                        <div className="pb-2 border-b border-b-gray-600">
                            <p>Comments</p>
                        </div>

                        <div>
                            <textarea
                                name=""
                                placeholder="write a comment"
                                rows={4}
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
    )
}

export default DynamicBlogpage