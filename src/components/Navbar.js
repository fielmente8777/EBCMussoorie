"use client"
import Link from "next/link"
import Logo from "../../public/logo.svg"
import Image from "next/image"
import { MdCall } from "react-icons/md";
import { usePathname } from "next/navigation";
const Navbar = () => {

    const pathname = usePathname();





    return (
        <>
            {
                pathname === "/" ? <HomeNav /> :
                    <div className="maxwidth mx-auto flex flex-col py-5">
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-md:flex-wrap max-md:max-w-full">
                                <Link href="tel+918595274861" className="flex items-center gap-2 px-5 my-auto text-lg leading-7 text-[#acacac]">
                                    <MdCall size={20} />
                                    <div className="my-auto text-[#acacac]">+91-85952 74861</div>
                                </Link>
                                <Link href={"/"} className="flex h-[100px] justify-center  max-md:ml-0 max-md:w-full">
                                    <Image
                                        loading="lazy"
                                        src={Logo}
                                        className="grow shrink-0 max-w-full aspect-[1.64] w-[218px] max-md:mt-10"
                                    />
                                </Link>
                                <div className="flex flex-col items-end max-md:ml-0">
                                    <div className="flex justify-end gap-2 self-stretch my-auto max-md:mt-10">

                                        <div className="w-[20%]"></div>
                                        <div className="flex gap-3 px-5 my-auto">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf5ed5930caa39e43a1df132120331034f55619238fe1167bafa85863bc51b72?"
                                                className="shrink-0 w-10 aspect-square"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2149fce7a5c8e41e1538ff8d7f3f16e4fd1fba1ab57416d769c107ce83375c5a?"
                                                className="shrink-0 w-10 aspect-square"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/085422748aa9b8d746e45e1f9749849a27dd3ebfef8b43b8b4dd62612f2759b7?"
                                                className="shrink-0 w-10 aspect-square"
                                            />
                                        </div>
                                        <button className="rounded-sm flex-1 justify-center w-[50px] py-2 text-lg font-semibold tracking-normal leading-7 text-[#29422C] bg-stone-300">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-5 justify-between self-center px-5 mt-6 text-lg leading-7 text-center text-white max-md:flex-wrap max-md:mt-10">

                                <Link href={"/about"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                                    About Us
                                </Link>
                                <Link href={"/activities"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                                    Activities
                                </Link>
                                {/* <Link href={"/contact"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                                    Contact Us
                                </Link> */}
                                <Link href={"/ourrooms"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                                    Our Rooms
                                </Link>
                                <Link href={"/gallery"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                                    Gallery
                                </Link>
                                <Link href={"/parkcafe"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                                    Park Cafe
                                </Link>
                                <Link href={"/glamper"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                                    A Glamper's Guide
                                </Link>
                                <Link href={"/blogs"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                                    Blog
                                </Link>

                            </div>
                        </>
                    </div>
            }

        </>

    )
}





const HomeNav = () => {
    return (
        <div className="bg-[#152116]">
            <div className="maxwidth mx-auto flex flex-col py-2 bg-">
                <div className="flex justify-between items-center gap-5 w-full max-md:flex-wrap max-md:max-w-full">
                    <Link href="tel+918595274861" className="flex items-center gap-2 px-5 my-auto text-lg leading-7 text-[#acacac]">
                        <MdCall size={20} />
                        <div className="my-auto text-[#acacac]">+91-85952 74861</div>
                    </Link>

                    <div className="flex gap-5 justify-between self-center px-5 text-lg leading-7 text-center text-white max-md:flex-wrap max-md:mt-10">

                        <Link href={"/about"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                            About Us
                        </Link>
                        <Link href={"/activities"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                            Activities
                        </Link>
                        {/* <Link href={"/contact"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                            Contact Us
                        </Link> */}
                        <Link href={"/ourrooms"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                            Our Rooms
                        </Link>
                        <Link href={"/gallery"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                            Gallery
                        </Link>
                        <Link href={"/parkcafe"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                            Park Cafe
                        </Link>
                        <Link href={"/glamper"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                            A Glamper's Guide
                        </Link>
                        <Link href={"/blogs"} className="px-2 text-[#acacac] cursor-pointer transition-all duration-[.3s] hover:bg-[#D5D5D5] hover:text-[#29422c] text-[18px] rounded-sm py-1">
                            Blog
                        </Link>

                    </div>

                    <div>
                        <button className="rounded-sm flex-1 justify-center  px-10 py-2 text-lg font-semibold tracking-normal leading-7 text-[] bg-stone-300">
                            Book Now
                        </button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Navbar