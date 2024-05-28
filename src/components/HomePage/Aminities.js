import Link from 'next/link'
import React from 'react'

const Aminities = () => {
    return (
        <div className="flex flex-col max-md:px-3 max-w-[880px] mx-auto">
            <div className="self-center text-[18px] font-bold tracking-wider text-center text-white">
                AMENITIES
            </div>
            <div className="mt-10 w-full text-[16px] leading-8 text-center text-white max-md:mt-10 max-md:max-w-full">
                Experience luxury amidst the serene hills at Everest Base Camp with a
                range of amenities to choose from, including a fine dining restaurant,
                outdoor activities, and luxury accommodations, we provide the perfect
                escape from the hustle and bustle of everyday life. Discover the perfect
                blend of nature and luxury at our resort.
            </div>
            <div className="mt-14 w-full max-md:mt-10 max-md:max-w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  md:gap-10">
                    <div className="flex flex-col  max-md:w-full">
                        <div className="flex flex-col grow tracking-wider text-center text-white max-md:mt-7">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eff5a7749885bf23fdbdf2fa01d1c2f99d56338874e7db64549635e90505cbfc?"
                                className="self-center max-w-full aspect-[1.01] w-[139px]"
                            />
                            <div className="mt-4 text-xl font-bold leading-7">
                                Stay with Luxury
                            </div>
                            <div className="mt-4 text-[16px] leading-6">
                                Luxury tents with private bathrooms for an unforgettable stay
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  max-md:w-full">
                        <div className="flex flex-col grow pb-6 tracking-wider text-center text-white max-md:mt-7">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/463d5abdff70fe6702b62fa6eaba4af1614c64dc1914a42b9e72988060ef9ebc?"
                                className="self-center max-w-full aspect-[0.99] w-[137px]"
                            />
                            <div className="mt-4 text-xl font-bold leading-7">
                                Relish Conveniently
                            </div>
                            <div className="mt-4 text-[16px] leading-6">
                                Park Cafe offering fusion cuisine with breathtaking views
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  max-md:w-full">
                        <div className="flex flex-col grow pb-6 tracking-wider text-center text-white max-md:mt-7">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e76ac8676bbd74cf9ae5909f31be65e1787f575f2b28371a4660f5c920ab0fb?"
                                className="self-center max-w-full aspect-[0.99] w-[137px]"
                            />
                            <div className="mt-4 text-xl font-bold leading-7">
                                Something for everyone
                            </div>
                            <div className="mt-4 text-[16px] leading-6">
                                Archery, badminton, and jungle trek for adventure enthusiasts
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col max-md:w-full">
                        <div className="flex flex-col grow py-px tracking-wider text-center text-white max-md:mt-7">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c1851976e6319e73bd1a20b2d7c6cb4b95c184c4b6a9474dd7b4702041df46d?"
                                className="self-center max-w-full aspect-square w-[137px]"
                            />
                            <div className="mt-4 text-xl font-bold leading-7">
                                Unmatched Views
                            </div>
                            <div className="mt-4 text-[16px] leading-6">
                                Spectacular views of the Himalayas from the George Everest Peak
                                trek
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  max-md:w-full">
                        <div className="flex flex-col grow pb-7 tracking-wider text-center text-white max-md:mt-7">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dccc26b0ace3d1c01eb0ad7bf9909bcd84b9eb46243c8ebfdf61308e67862d85?"
                                className="self-center max-w-full aspect-square w-[137px]"
                            />
                            <div className="mt-4 text-xl font-bold leading-7">
                                Achieve Serenity
                            </div>
                            <div className="mt-4 text-[16px] leading-6">
                                Serene ambiance amidst the lush greenery for relaxation
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  max-md:w-full">
                        <div className="flex flex-col grow tracking-wider text-center text-white max-md:mt-7">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/907e344b50bb041e0e8b54b926cb84f404121a273867fed20f3bb5842f455ec8?"
                                className="self-center max-w-full aspect-[0.99] w-[137px]"
                            />
                            <div className="mt-4 text-xl font-bold leading-7">
                                Personalized for you
                            </div>
                            <div className="mt-4 text-[16px] leading-6">
                                Personalized picnics and BBQ for an intimate dining experience
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Link href={"/"} className="flex justify-center self-center px-8 py-2 mt-10 rounded-sm text-base italic leading-6 text-[#29422C] bg-[#D5D5D5] max-md:mt-10">
                Our Experiences
            </Link>
        </div>
    )
}

export default Aminities