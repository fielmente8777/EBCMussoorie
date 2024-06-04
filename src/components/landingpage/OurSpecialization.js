"use client"
import SpecilizationCard from "./SpecilizationCard"
import c1 from "../../../public/images/01 Picnic_11zon.jpg"
import img1 from "../../../public/images/_MG_1465.jpg"
import img2 from "../../../public/images/_MG_2878.jpg"

import { usePathname } from "next/navigation"

const OurSpecialization = () => {

    const pathname = usePathname()

    const datas = [
        {
            "heading": "Blissful Picnics with the Nature",
            "para": "Enjoy a peaceful picnic amidst the beauty of nature, with a basket brimming with delightful snacks and refreshing beverages. Our idyllic property offers the ideal setting for a relaxing afternoon, spent cherishing moments with friends and family.",
            "images": [img1,img2],
            "button": ""
        },
        {
            "heading": "Gather 'Round for a BBQ Feast!",
            "para": "Join us for an enchanting evening of grilling under the stars. Surrounded by the tranquil beauty of our property, enjoy a memorable night filled with warmth and camaraderie. As the fire crackles, savour a delightful array of your favourite grilled meats and vegetables, creating the perfect backdrop for relaxation and connection with family and friends.",
            "images": [c1, c1, c1, c1, c1, c1, c1],
            "button": ""
        },
        {
            "heading": "Stories & S'mores by the Bonfire",
            "para": "Experience crackling fire under the starlit sky and share stories and quiet moments with your loved ones. It's an ideal way to unwind after a day of exploring Mussoorie's natural beauty, providing a warm, communal setting that embodies the spirit of adventure and relaxation.",
            "images": [c1, c1, c1, c1, c1, c1, c1],
            "button": ""
        },
        {
            "heading": "Explore the Wilderness",
            "para": "Situated in the serene hills of Mussoorie, explore the spectacular views of the Himalayas from the George Everest Peak trek. The trek promises an immersive experience in nature's tranquillity, complemented by luxury camping facilities. It's an ideal getaway for those looking to blend outdoor adventure with comfortable amenities in a picturesque mountain setting.",
            "images": [c1, c1, c1, c1, c1, c1, c1],
            "button": ""
        },
    ]


    return (
        <div className="maxwidth mx-auto flex flex-col gap-10 max-md:px-3 ">
            {pathname === "/landingpage" && <div className="flex flex-col gap-5  items-center">
                <h2 className="text-[42px] max-md:text-center text-white font-medium leading-[45px]">OUR AMENITIES</h2>
                <p className=" text-center max-md:text-justify text-white">Experience luxury amidst the serene hills at Everest Base Camp with a range of
                    to choose from, including a fine dining restaurant, outdoor activities, and luxury accommodations,
                    we provide the perfect escape from the hustle and bustle of everyday life.</p>
            </div>}

            <div className="rounded-lg overflow-hidden">
                {
                    datas.map((data, index) => (
                        <SpecilizationCard key={index} cardData={data} index={index} />
                    ))
                }
            </div>
        </div>
    )
}

export default OurSpecialization