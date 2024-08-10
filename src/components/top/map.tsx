"use client"

import { Kaisei_Decol } from "next/font/google"
import { RoundButtonTurquoise } from "../global/parts/rounded_button"
import ScrollMap from "./top_parts/map_parts/scroll_map"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { useState } from "react";
import Link from "next/link";

const kaiseiDecol = Kaisei_Decol({weight:["400","700"],subsets:["latin"]})

export default function Map() {
    const imgs = [
        {img:"/map_placeholder.jpg", test:"bg-slate-50"},
        {img:"/map_placeholder.jpg", test:"bg-slate-100"},
        {img:"/map_placeholder.jpg", test:"bg-slate-200"},
        {img:"/map_placeholder.jpg", test:"bg-slate-300"},
        {img:"/map_placeholder.jpg", test:"bg-slate-300"},
        {img:"/map_placeholder.jpg", test:"bg-slate-300"},
    ]

    const properties = ["text-[10vw]", "font-bold", "text-transparent", "bg-clip-text", "bg-gradient-to-br", "from-sky-500", "via-[#05bd92]", "to-[#f3e50a]"]

    const styles = properties.map((value) => (
        ` [&_.swiper-button-prev::after]:${value} [&_.swiper-button-next::after]:${value}`
    ))

    const [active, setActiveSlide] = useState(1)

    const getActiveSlide = (swiper:any) => {
        let i = swiper.realIndex
        setActiveSlide(i + 1)
    }

    return(
        <div className="my-[20vw]">
            <h2 className={`${kaiseiDecol.className} text-center text-[11vw] text-[darkturquoise] font-bold`}>フロアマップ</h2>       
            <Link href={"/map"} >
                <div className="w-[35vw] mx-auto my-[3vw]">
                    <RoundButtonTurquoise text="別ページで見る" size={40}></RoundButtonTurquoise>
                </div>   
            </Link>
            <div className="relative">
                <div className="text-[15vw] left-[3vw] top-[-2%] absolute  z-10">
                    <p className={`${kaiseiDecol.className} bg-gradient-to-br text-transparent bg-clip-text from-sky-500 via-[#05bd92] to-[#f3e50a]  tracking-wide`}>{active}F</p>  
                </div>    
 
                <Swiper
                    onInit={getActiveSlide}
                    onRealIndexChange={getActiveSlide}
                    modules={[Navigation]}
                    centeredSlides={true}
                    slidesPerView={1}
                    speed={300}
                    loop={true}
                    navigation
                    className={` 
                        [&_.swiper-button-prev]:w-[4vw]
                        [&_.swiper-button-next]:w-[4vw]
                        ${styles.join(" ")}
                        [&_.swiper-button-prev::after]:bg-gradient-to-br
                        [&_.swiper-button-prev::after]:text-transparent
                        [&_.swiper-button-prev::after]:bg-clip-text
                        [&_.swiper-button-prev::after]:from-sky-500
                        [&_.swiper-button-prev::after]:via-[#05bd92]
                        [&_.swiper-button-prev::after]:to-[#0af3c4]
                        [&_.swiper-button-next::after]:bg-gradient-to-br
                        [&_.swiper-button-next::after]:text-transparent
                        [&_.swiper-button-next::after]:bg-clip-text
                        [&_.swiper-button-next::after]:from-sky-500
                        [&_.swiper-button-next::after]:via-[#05bd92]
                        [&_.swiper-button-next::after]:to-[#c8f30a]
                     z-0 `}
                >
                    {imgs.map((value) => (
                        <SwiperSlide>
                            <div className="w-[82vw] mx-auto my-[10vw]">
                                <ScrollMap img={value.img}></ScrollMap>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            
{/* 
            <div className="w-[85vw] mx-auto my-[7vw]">
                <ScrollMap img="/map_placeholder.jpg"></ScrollMap>
            </div> */}
        </div>
    )
}