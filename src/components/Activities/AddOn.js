import React from 'react'
import c1 from "../../../public/images/01 Picnic_11zon.jpg"
import SpecilizationCard from '../landingpage/SpecilizationCard'

const AddOn = () => {

    const datas = [
        {
            "heading": "Picnic in the Meadows!",
            "para": "Enjoy a peaceful picnic amidst the beauty of nature, with a basket brimming with delightful snacks and refreshing beverages. Our idyllic property offers the ideal setting for a relaxing afternoon, spent cherishing moments with friends and family.",
            "images": [c1, c1, c1, c1, c1, c1, c1],
            "button": true
        },
        {
            "heading": "Gather Together for a Barbecue",
            "para": "Join us for an enchanting evening of grilling under the stars. Surrounded by the tranquil beauty of our property, enjoy a memorable night filled with warmth and camaraderie. As the fire crackles, savour a delightful array of your favourite grilled meats and vegetables, creating the perfect backdrop for relaxation and connection with family and friends.",
            "images": [c1, c1, c1, c1, c1, c1, c1],
            "button": true
        },
        {
            "heading": "Bonfire",
            "para": "Experience the magic of a private bonfire under the starlit sky, creating cherished moments with your loved ones. Unwind after exploring Mussoorie's natural beauty in the warmth of your own intimate setting, fostering both adventure and relaxation.",
            "images": [c1, c1, c1, c1, c1, c1, c1],
            "button": true
        },
        {
            "heading": "Trekking",
            "para": "Embark on the George Everest Peak trek amidst Mussoorie's serene hills, with our knowledgeable guide providing direction and companionship along the way. Enjoy a refreshing sandwich, tea, and water as you explore hidden gems and breathtaking Himalayan views.Experience the perfect blend of adventure and comfort with luxury camping amidst nature's beauty.",
            "images": [c1, c1, c1, c1, c1, c1, c1],
            "button": true
        },
    ]

    return (
        <div className="maxwidth mx-auto flex flex-col gap-10 max-md:px-3 ">
            <div className="flex flex-col gap-5  items-center">
                <h2 className="text-[42px] max-md:text-center text-white font-medium leading-[45px]">Paid Add-ons</h2>
                {/* <p className=" text-center max-md:text-justify text-white">Experience luxury amidst the serene hills at Everest Base Camp with a range of
                to choose from, including a fine dining restaurant, outdoor activities, and luxury accommodations,
                we provide the perfect escape from the hustle and bustle of everyday life.</p> */}
            </div>

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

export default AddOn