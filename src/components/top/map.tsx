"use client"


import { RoundButtonTurquoise } from "../global/parts/rounded_button"
import ScrollMap from "./top_parts/map_parts/scroll_map"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,EffectCoverflow } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-coverflow"
import { useState } from "react";
import Link from "next/link";

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Map() {
    const imgs = [
        {img:"/フロアマップ1.png", test:[
            {num:"1",name:"高校3年1組"},
            {num:"2",name:"高校3年2組"},
            {num:"3",name:"高校3年3組"},
            {num:"4",name:"高校3年4組"},
            {num:"5",name:"高校3年5組"},
            {num:"6",name:"生徒会本部"},
            {num:"7",name:"高校文芸同好会"},
            {num:"8",name:"書道部"},
        ]},
        {img:"/フロアマップ2.png", test:[
            {num:"9",name:"中学1年1組"},
            {num:"10",name:"中学1年2組"},
            {num:"11",name:"中学1年3組"},
            {num:"12",name:"中学1年4組"},
            {num:"13",name:"高校1年1組"},
            {num:"14",name:"高校1年2組"},
            {num:"15",name:"高校1年3組"},
            {num:"16",name:"高校1年4組"},
            {num:"17",name:"高校1年5組"},
            {num:"18",name:"M-BOX"},
            {num:"19",name:"美術部"},
            {num:"20",name:"図書委員会"},
            {num:"21",name:"書道部"},
            {num:"22",name:"高校軽音楽部"},
            {num:"23",name:"高校ダンス部"},
            {num:"24",name:"吹奏楽部"},
            {num:"25",name:"茶道部"},
            {num:"26",name:"中学演劇部"},
            {num:"27",name:"高校演劇部"},
            {num:"28",name:"弦楽部"},
        ]},
        {img:"/フロアマップ3.png", test:[
            {num:"29",name:"70・10周年委員会"},
            {num:"30",name:"PTA"},
            {num:"31",name:"PTA合唱団"},
            {num:"32",name:"風の章実行委員会"},
            {num:"33",name:"高校料理部"},
            {num:"34",name:"PTAリサイクル"},
            {num:"35",name:"科学部"},
            {num:"36",name:"プラネタリウム"},
        ]},
        {img:"/フロアマップ4.png", test:[
            {num:"37",name:"中学2年1組"},
            {num:"38",name:"中学2年2組"},
            {num:"39",name:"中学2年3組"},
            {num:"40",name:"中学2年4組"},
            {num:"41",name:"高校2年1組"},
            {num:"42",name:"高校2年2組"},
            {num:"43",name:"高校2年3組"},
            {num:"44",name:"高校2年4組"},
            {num:"45",name:"高校2年5組"},
        ]},
        {img:"/フロアマップ5.png", test:[
            {num:"46",name:"中学3年1組"},
            {num:"47",name:"中学3年2組"},
            {num:"48",name:"中学3年3組"},
            {num:"49",name:"中学3年4組"},
            {num:"50",name:"母親の読書会"},
            {num:"51",name:"学校説明"},
            {num:"52",name:"港南区選挙管理委員会"},
            {num:"53",name:"同窓会"},
        ]},
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
        <div className="my-[20vw] 2xl:my-28 lg:my-20">
            <h2 className={`${kaiseiDecol.className} text-center text-[11vw] 2xl:text-7xl lg:text-6xl text-[darkturquoise] font-bold`}>フロアマップ</h2>       
            <Link href={"/map"} >
                <div className="w-[35vw] mx-auto my-[3vw] lg:max-w-[200px] lg:my-8">
                    <RoundButtonTurquoise text="別ページで見る" size={40}></RoundButtonTurquoise>
                </div>   
            </Link>
            <div className="relative">
                <div className="text-[15vw] left-[3vw] top-[-8%] absolute 2xl:text-9xl xl:text-8xl lg:text-7xl lg:left-[25vw]  z-10">
                    <p className={`${kaiseiDecol.className} bg-gradient-to-br text-transparent bg-clip-text from-sky-500 via-[#05bd92] to-[#f3e50a]  tracking-wide`}>{active}F</p>  
                </div>    
 
                <div className="lg:hidden">
                    <Swiper
                        allowTouchMove={false}
                        onInit={getActiveSlide}
                        onRealIndexChange={getActiveSlide}
                        modules={[Navigation]}
                        centeredSlides={true}
                        slidesPerView={1}
                        speed={300}
                        loop={true}
                        navigation
                        className={` 
                            my-[5vw] mt-[10vw] lg:hidden
                            [&_.swiper-button-prev]:w-[3vw]
                            [&_.swiper-button-next]:w-[3vw]
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
                        {imgs.map((value,i) => (
                            <SwiperSlide key={value.img}>
                                <div className={`w-[82vw]  mx-auto`}>
                                    <ScrollMap img={value.img}></ScrollMap>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                
                <div className="hidden lg:block">
                    <Swiper
                        allowTouchMove={false}
                        onInit={getActiveSlide}
                        onRealIndexChange={getActiveSlide}
                        modules={[Navigation, EffectCoverflow]}
                        centeredSlides={true}
                        slidesPerView={2}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 300,
                            modifier: 0.8,
                            slideShadows: false
                        }}
                        speed={300}
                        loop={true}
                        navigation
                        className={` 
                            hidden  lg:mt-16 xl:mb-12 lg:mb-6 lg:block 
                            [&_.swiper-button-prev]:mx-[26vw]
                            [&_.swiper-button-next]:mx-[26vw]
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
                        {imgs.map((value,i) => (
                            <SwiperSlide key={value.img}>
                                <div className={`w-[82vw] 2xl:max-w-[700px] xl:max-w-[500px] lg:max-w-[400px] mx-auto rounded-full ${i+1 == active? "opacity-100" : "brightness-95 opacity-60 pointer-events-none"} `}>
                                    <ScrollMap img={value.img}></ScrollMap>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                
                <div className=" h-[25vw] xl:h-24 lg:h-28">
                    {/* <p className="text-center text-[3vw] text-gray-400">展示一覧</p> */}
                    <div className="flex flex-wrap mx-[4vw] lg:mx-[15vw] justify-center">
                        {imgs[active - 1].test.map((value, index) => (
                            <div key={index} className="pr-[2vw] 2xl:pr-8 lg:pr-5 xl:pb-2 lg:pb-1">
                                <Link href={{pathname:"/event/introduction", query:{name:value.name}}} className="xl:text-2xl lg:text-lg text-[2.8vw] text-gray-500">#{value.num} {value.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
{/* 
            <div className="w-[85vw] mx-auto my-[7vw]">
                <ScrollMap img="/map_placeholder.jpg"></ScrollMap>
            </div> */}
        </div>
    )
}