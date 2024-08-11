"use client"
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { skeleton } from "@/components/global/skeleton";
import { toBase64 } from "@/components/global/skeleton";


import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Pamphlet () {
    const img = [
        "/ダウンロード.jpeg",
        "/ダウンロード.jpeg",
        "/ダウンロード.jpeg",
        "/ダウンロード.jpeg",
        "/ダウンロード.jpeg",
        "/ダウンロード.jpeg",
        "/ダウンロード.jpeg",
        "/ダウンロード.jpeg",
    ]


    return(
        <div className="w-full">
            <h2 className={`pb-[5vw] ${kaiseiDecol.className} text-center text-[12vw] text-[darkturquoise]`}>パンフレット</h2>
            <div className='relative'>
                <Swiper
                    modules={[Navigation, Pagination]}
                    centeredSlides={true}
                    slidesPerView={1}
                    speed={300}
                    navigation={{
                        prevEl: "#button_prev",
                        nextEl: "#button_next"
                    }}
                    pagination={{el:"#pagination",clickable:true}}
                >
                    {img.map((value) => (
                        <SwiperSlide key={value}>
                            <div className="w-[75vw] mx-auto drop-shadow-lg">
                                <Image src={value} alt='パンフレット' width={2000} height={1000} className='w-full aspect-auto' placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 128))}`} ></Image>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='relative mt-[3vw]'>
                    <div className='swiper-pagination !relative [&_.swiper-pagination-bullet]:bg-slate-500 [&_.swiper-pagination-bullet]:mx-[1vw] [&_.swiper-pagination-bullet]:h-[2.5vw] [&_.swiper-pagination-bullet]:w-[2.5vw] [&_.swiper-pagination-bullet-active]:!bg-[darkturquoise]' id='pagination'></div>
                </div>
                <div className='w-full px-[1.5vw] absolute top-[calc(50%_-_5.5vw)] -translate-y-1/3 flex justify-between z-10 text-[8vw] opacity-80 text-[darkturquoise]'>
                    <div id="button_prev" className="relative cursor-pointer">
                        <IoIosArrowDropleftCircle></IoIosArrowDropleftCircle>
                    </div>
                    <div id="button_next" className="relative cursor-pointer">
                        <IoIosArrowDroprightCircle></IoIosArrowDroprightCircle>
                    </div>
                </div>

                
            </div>
        </div>
    )
}