import React from 'react'
import c1 from "../../../public/images/01 Picnic_11zon.jpg"
import Image from 'next/image'
const InstaGrid = () => {

    const images = [c1, c1, c1, c1, c1, c1]
    return (
        <div className='max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:h-[200px]'>
            {images?.map((roomImage, index) => {
                return (

                    <Image key={index} src={roomImage} className="h-full object-cover" />
                );
            })}
        </div>
    )
}

export default InstaGrid