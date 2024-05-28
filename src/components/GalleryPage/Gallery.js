"use client"
import React, { useEffect, useState } from "react";
import LazyLoad from 'react-lazy-load';


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import GallerData from "../../utils/GalleryData"


const Gallery = () => {
    const [gallery, setGallery] = useState([]);
    const [index, setIndex] = useState("");
    const [isAll, setIsAll] = useState(true);

    const [filterGallery, setFilterGallery] = useState([GallerData]);
    const [isFilter, setIsFilter] = useState(false);

    const [imgSelect, setImgSelect] = useState([]);
    const [previewImage, setPreviewImage] = useState(false);
    const [imgSelectIndex, setImgSelectIndex] = useState(0);


    const handleClick = (e, ind) => {
        setIsAll(false);
        setIndex(ind);

        if (e.target.value.toLowerCase() === "all") {
            setIsAll(true);
            const allImages = (GallerData ?? []).reduce(
                (accumulator, currentValue) => {
                    if (currentValue.Required) {
                        return accumulator.concat(currentValue.Images);
                    }
                    return accumulator;
                },
                []
            );

            setGallery([...allImages]);
            setIsFilter(false);
        } else {
            const filterData = GallerData?.filter((i) => {
                return i.Category.toLowerCase() === e.target.value.toLowerCase();
            });

            setFilterGallery([...filterData]);
            setIsFilter(true);
        }
    };

    const slideRight = () => {
        if (imgSelectIndex === imgSelect.length - 1) return setImgSelectIndex(0);
        setImgSelectIndex(imgSelectIndex + 1);
    };

    const slideLeft = () => {
        if (imgSelectIndex <= 0) return setImgSelectIndex(imgSelect.length - 1);
        setImgSelectIndex(imgSelectIndex - 1);
    };

    useEffect(() => {
        const allImages = GallerData.reduce(
            (accumulator, currentValue) => {
                if (currentValue.Required) {
                    return accumulator.concat(currentValue.Images);
                }
                // If 'Required' is false, just return the accumulator as is
                return accumulator;
            },
            []
        );
        setGallery([...allImages]);
    }, []);
    return (
        <div id="gallery" className="mt-20">


            {GallerData && (
                <div className="maxwidth !mt-10  px-5 ">
                    <div className="flex max-md:overflow-scroll justify-center gap-0 lg:gap-2">
                        <button
                            className={`text-[16px] capitalize font-medium  px-5 py-2 max-md:bg-${isAll ? "[#978667]" : "[#5B5B5B]"}`}
                            value={"all"}
                            style={{
                                color: isAll ? "#978667" : "#5B5B5B",
                            }}
                            onClick={(e) => {
                                handleClick(e);
                            }}
                        >
                            All
                        </button>
                        {GallerData.map((i, ind) => {
                            if (i.Required) {
                                return (
                                    <button
                                        value={i.Category}
                                        className={`text-[16px] capitalize font-medium  px-5 py-2 max-md:bg-${ind === index ? "[#978667]" : "[#5B5B5B]"}`}
                                        style={{
                                            color: ind === index ? "#978667" : "#5B5B5B",
                                        }}
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

                    {!isFilter && (
                        <>
                            <div className="max-md:hidden grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
                                {gallery?.map((i, index) => {
                                    return (
                                        <div className="w-[100%] md:max-h-[250px]">
                                            <LazyLoad className="w-[100%] md:max-h-[250px]" height={250} offset={300} threshold={0.95} >
                                                <img
                                                    src={i}
                                                    alt=""
                                                    className="w-[100%] h-[100%] object-cover hover:scale-90 transition-all duration-200"
                                                    onClick={() => {
                                                        setImgSelectIndex(index);
                                                        setImgSelect([...gallery]);
                                                        setPreviewImage(true);
                                                    }}
                                                />
                                            </LazyLoad>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="md:hidden">
                                <Swiper
                                    loop={true}
                                    autoplay={{
                                        delay: 4000,
                                    }}
                                    pagination={{
                                        el: "#bullets-Portfolio",
                                    }}
                                    navigation={{
                                        prevEl: ".prev-btn",
                                        nextEl: ".next-btn",
                                    }}
                                    slidesPerView={1}
                                    spaceBetween={20}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },

                                    }}
                                    modules={[Pagination, Autoplay, Navigation]}
                                >
                                    {gallery?.map((i, index) => {
                                        return (

                                            <SwiperSlide>
                                                <div className="w-[100%] md:max-h-[250px] max-md:mt-5">
                                                    <LazyLoad className="w-[100%] md:max-h-[250px]" height={250} offset={300} threshold={0.95} >
                                                        <img
                                                            src={i}
                                                            alt=""
                                                            className="w-[100%] h-[100%] object-cover hover:scale-90 transition-all duration-200"
                                                            onClick={() => {
                                                                setImgSelectIndex(index);
                                                                setImgSelect([...gallery]);
                                                                setPreviewImage(true);
                                                            }}
                                                        />
                                                    </LazyLoad>
                                                </div>
                                            </SwiperSlide>

                                        );
                                    })}
                                </Swiper>
                            </div>
                        </>
                    )}


                    {isFilter && (
                        <>
                            <div className="max-md:hidden grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
                                {filterGallery[0]?.Images?.map((i, index) => {
                                    return (
                                        <div className="w-[100%] md:max-h-[250px] ">
                                            <LazyLoad className="w-[100%] md:max-h-[250px]" height={250} offset={300} threshold={0.95} >
                                                <img
                                                    src={i}
                                                    alt=""
                                                    className="w-[100%] h-[100%] object-cover hover:scale-90 transition-all duration-200"
                                                    onClick={() => {
                                                        setImgSelectIndex(index);
                                                        setImgSelect([...filterGallery[0].Images]);
                                                        setPreviewImage(true);
                                                    }}
                                                />
                                            </LazyLoad>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="md:hidden">
                                <Swiper
                                    loop={true}
                                    autoplay={{
                                        delay: 4000,
                                    }}
                                    pagination={{
                                        el: "#bullets-Portfolio",
                                    }}
                                    navigation={{
                                        prevEl: ".prev-btn",
                                        nextEl: ".next-btn",
                                    }}
                                    slidesPerView={1}
                                    spaceBetween={20}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },

                                    }}
                                    modules={[Pagination, Autoplay, Navigation]}
                                >
                                    {filterGallery[0]?.Images?.map((i, index) => {
                                        return (

                                            <SwiperSlide>
                                                <div className="w-[100%] md:max-h-[250px] max-md:mt-5">
                                                    <LazyLoad className="w-[100%] md:max-h-[250px]" height={250} offset={300} threshold={0.95} >
                                                        <img
                                                            src={i}
                                                            alt=""
                                                            className="w-[100%] h-[100%] object-cover hover:scale-90 transition-all duration-200"
                                                            onClick={() => {
                                                                setImgSelectIndex(index);
                                                                setImgSelect([...gallery]);
                                                                setPreviewImage(true);
                                                            }}
                                                        />
                                                    </LazyLoad>
                                                </div>
                                            </SwiperSlide>

                                        );
                                    })}
                                </Swiper>
                            </div>
                        </>
                    )}
                </div>
            )}
            {/* {previewImage && (
        <div className="fixed  top-0 left-0 w-[100%] h-[100vh] bg-[#000000c6] z-[9999] flex flex-col justify-center items-center px-5">
          <div className="relative w-[100%] max-sm:h-[250px] sm:h-[90%] md:w-[90%] m-auto">

            <img
              src={imgSelect[imgSelectIndex]}
              loading="lazy"
              decoding="async"
              aria-hidden="true"
              alt={""}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            <IoClose
              className="text-4xl text-white bg-[#978667] h-8 w-8 sm:w-10 sm:h-10 md:h-12 md:w-12   flex justify-center items-center rounded-full mb-4 cursor-pointer absolute top-[-4%] right-[-2%]"
              onClick={() => {
                setPreviewImage(false);
                window.document.body.classList.remove("bg_salmon");
              }}
            />
          </div>
          <span
            className="fixed top-[50%] left-[2rem]  p-4 bg-[#978667] cursor-pointer rounded-lg"
            onClick={() => {
              slideLeft();
            }}
          >
            <IoMdArrowDropleftCircle size={20} className="text-white" />
          </span>
          <span
            className="fixed top-[50%] right-[2rem]  p-4 bg-[#978667] cursor-pointer rounded-lg"
            onClick={() => {
              slideRight();
            }}
          >
            <IoMdArrowDroprightCircle size={20} className="text-white" />
          </span>
        </div>
      )} */}

            <div className="md:hidden flex justify-center items-center gap-3 mt-6">
                <button className=" prev-btn bg-transparent border-none active:scale-95">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M34 17C34 20.3623 33.003 23.6491 31.135 26.4447C29.267 29.2403 26.612 31.4193 23.5056 32.7059C20.3993 33.9926 16.9811 34.3293 13.6835 33.6733C10.3858 33.0174 7.35668 31.3983 4.97919 29.0208C2.6017 26.6433 0.982605 23.6142 0.326656 20.3165C-0.329292 17.0189 0.00736618 13.6007 1.29406 10.4944C2.58074 7.38804 4.75968 4.733 7.55531 2.86502C10.3509 0.997033 13.6377 0 17 0C21.5087 0 25.8327 1.79107 29.0208 4.97918C32.2089 8.1673 34 12.4913 34 17ZM26.7143 15.7857H11.9607L18.7364 8.97721L17 7.28571L7.28572 17L17 26.7143L18.7364 24.9815L11.9607 18.2143H26.7143V15.7857Z"
                            fill="#978667"
                        />
                    </svg>
                </button>
                <button className=" next-btn bg-transparent border-none active:scale-95">
                    <svg
                        width="40"
                        height="40"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 17C0 20.3623 0.997033 23.6491 2.86502 26.4447C4.733 29.2403 7.38804 31.4193 10.4944 32.7059C13.6007 33.9926 17.0189 34.3293 20.3165 33.6733C23.6142 33.0174 26.6433 31.3983 29.0208 29.0208C31.3983 26.6433 33.0174 23.6142 33.6733 20.3165C34.3293 17.0189 33.9926 13.6007 32.7059 10.4944C31.4193 7.38804 29.2403 4.733 26.4447 2.86502C23.6491 0.997033 20.3623 0 17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17ZM7.28571 15.7857H22.0393L15.2636 8.97721L17 7.28571L26.7143 17L17 26.7143L15.2636 24.9815L22.0393 18.2143H7.28571V15.7857Z"
                            fill="#978667"
                        />
                    </svg>
                </button>
            </div>








        </div>
    );
};

export default Gallery;
