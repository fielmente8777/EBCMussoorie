import { MdCall } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex flex-col py-10">
            <div className="self-center max-md:px-3 w-full max-w-[1280px] max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-[#D5D5D5] max-md:mt-10">
                            <div className="text-[22px] font-medium leading-8">
                                Everest Base Camp Mussoorie
                            </div>
                            <div className="mt-6 text-[20px] tracking-wider leading-8 max-md:mt-10">
                                Discover Your Mountain Oasis: Experience Luxury Camping at
                                Everest Base Camp Mussoorie!
                            </div>
                            <div className="flex mt-6 gap-3 my-auto">
                                <Link href={"/"}>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf5ed5930caa39e43a1df132120331034f55619238fe1167bafa85863bc51b72?"
                                        className="shrink-0 w-10 aspect-square"
                                    />
                                </Link>
                                <Link href={"/"}>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2149fce7a5c8e41e1538ff8d7f3f16e4fd1fba1ab57416d769c107ce83375c5a?"
                                        className="shrink-0 w-10 aspect-square"
                                    />
                                </Link>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col tracking-wider text-[#D5D5D5] max-md:mt-10">
                            <div className="text-[22px] font-medium leading-8">
                                Important Links
                            </div>
                            <div className="flex flex-col mt-6 text-[20px] leading-8 max-md:mt-10">
                                <Link href="">About Us</Link>
                                <Link href="">  Activities Contact</Link>
                                <Link href="">Our Rooms Gallery</Link>
                                <Link href="">Park Cafe</Link>
                                <Link href="">A Glamper's Guide</Link>


                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[31%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow text-[20px] font-medium text-[#D5D5D5] max-md:mt-10">
                            <div className="text-[22px] tracking-wider leading-8">Reach Out</div>
                            <div className="flex items-start gap-3.5 mt-6 leading-8 max-md:mt-10">
                                <FaLocationDot size={28} className="mt-1" />
                                <div className="flex-auto">
                                    Everest Base Camp Mussoorie, Park Estate, Hathipaon Road,
                                    Mussoorie, Uttarakhand, 248179
                                </div>
                            </div>
                            <div className="flex  items-center gap-3.5 mt-5 tracking-wider whitespace-nowrap leading-[145%]">
                                <MdCall size={20} />
                                <div className="flex-auto my-auto">+91-8595274861</div>
                            </div>
                            <Link href="https://www.google.com/maps/place/Everest+Base+Camp,+Near+George+Everest+House/@30.4592973,78.0227301,17z/data=!3m1!4b1!4m9!3m8!1s0x3908d170d61d91cb:0x84607e0d71c4450f!5m2!4m1!1i2!8m2!3d30.4592927!4d78.025305!16s%2Fg%2F11fp31k5lj?hl=en&entry=ttu"
                                target="_blank"
                                rel="noreferrer"
                                className="flex justify-center px-8 py-2 mt-5 text-base rounded-sm leading-6 text-center text-[#29422C] bg-[#D5D5D5] max-md:px-5">
                                Get Direction On Map
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-neutral-900 py-5 mt-9">
                <div className="flex gap-5 max-w-[1280px] mx-auto justify-between  w-full text-sm tracking-wider leading-4 text-white  max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-2">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f6efe96f6a0500617a91ec790ee323c5c70b008cec2b8c9fefa5fe9c9c9459?"
                            className="shrink-0 self-start w-3 aspect-square fill-zinc-100"
                        />
                        <div className="flex-auto">Copyright content here</div>
                    </div>
                    <div className="flex gap-5 justify-between self-start whitespace-nowrap">
                        <div>COMPLIANCE</div>
                        <div>PRIVACY</div>
                        <div>TERMS</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer