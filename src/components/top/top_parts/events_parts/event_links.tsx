"use client"

import Image from "next/image"
import { Kaisei_Decol } from "next/font/google"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { RoundButtonTurquoise } from "../../../global/parts/rounded_button";
import { RoundButtonPurple } from "../../../global/parts/rounded_button";
import { RoundButtonOrange } from "../../../global/parts/rounded_button";
import { URLSearchParams } from "url";
import { useRouter } from "next/router";
import '@splidejs/splide/css';
import Link from "next/link";

const kaiseiDecol = Kaisei_Decol({weight:["400","700"],subsets:["latin"]})

// const classToEvent = (e:any) => {
//     const params = new URLSearchParams();
//     params.append("type", e.target.value)
//     const href = `/event?${params}`;
//     const router = useRouter();
//     router.push(href)
// }

export default function ClassEvent() {
    return(
        <div className="w-full aspect-[16/10] relative">
            {/* <Image src={"/水たまり2.png"} alt="背景(水たまり)" fill className="z-0"></Image> */}
            <div className="absolute w-full h-full bg-white z-0 rounded-[20%]"></div>
            <div className="w-full  absolute z-10 my-[4vw] flex flex-wrap items-center">
                <div className="flex flex-col w-[45%] ml-[8vw] ">
                    <p className={`${kaiseiDecol.className} text-left text-[darkturquoise] text-[8vw] mt-[7vw]`}>クラス展示</p>
                    <p className={`text-[darkturquoise] font-normal text-justify text-[3.5vw] leading-[150%] tracking-tight my-[2vw]`}>27クラスによる色彩豊かな展示を体験できます。</p>
                </div>         
                <div className="grow bg-yellow-100 aspect-[5/4] ml-[5vw] mr-[8vw] mt-[8vw]  relative"> 
                    <Image src={"/IMG_20240705_174147757.jpg"} alt="展示の様子" fill className="rounded-xl opacity-90 object-cover "></Image>
                </div>
                <div className="w-full mt-[7vw]">
                    <Link href={{pathname:"/event", query:{type:"クラス展示"}}}>
                        <button className="w-[28vw] mx-auto">
                            <RoundButtonTurquoise  text="もっと見る" size={40}></RoundButtonTurquoise >
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export function ClubEvent() {
    return(
        <div className="w-full aspect-[16/10] relative">
            {/* <Image src={"/水たまり.png"} alt="背景(水たまり)" fill className="z-0"></Image> */}
            <div className="absolute w-full h-full bg-white z-0 rounded-[20%]"></div>
            <div className="w-full  absolute z-10 my-[4vw] flex flex-wrap items-center">
                <div className="flex flex-col w-[45%] ml-[8vw] ">
                    <p className={`${kaiseiDecol.className} text-left text-[darkturquoise] text-[8vw] mt-[7vw]`}>部活動展示</p>
                    <p className={`text-[darkturquoise] font-normal text-justify text-[3.5vw] leading-[150%] tracking-tight my-[2vw]`}>中高の部活動によるアクティビティや体験の数々</p>
                </div>         
                <div className="grow bg-yellow-100 aspect-[5/4] ml-[5vw] mr-[8vw] mt-[8vw]  relative"> 
                    <Image src={"/IMG_20240705_174147757.jpg"} alt="展示の様子" fill className="rounded-xl opacity-90 object-cover "></Image>
                </div>
                <div className="w-full mt-[7vw]">
                    <Link href={{pathname:"/event", query:{type:"部活動展示"}}}>
                        <button value={"部活動展示"} className="w-[28vw] mx-auto">
                            <RoundButtonPurple  text="もっと見る" size={40}></RoundButtonPurple>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export function FoodEvent() {
    return(
        <div className="w-full  aspect-[16/10] relative">
            {/* <Image src={"/水たまり.png"} alt="背景(水たまり)" fill className="z-0"></Image> */}
            <div className="absolute w-full h-full bg-white z-0 rounded-[20%]"></div>
            <div className="w-full  absolute z-10 my-[4vw] flex flex-wrap items-center">
                <div className="flex flex-col w-[45%] ml-[8vw] ">
                    <p className={`${kaiseiDecol.className} text-left text-[darkturquoise] text-[8vw] mt-[7vw]`}>フード販売</p>
                    <p className={`text-[darkturquoise] font-normal text-justify text-[3.5vw] leading-[150%] tracking-tight my-[2vw]`}>高校3年、PTAなどによる絶品フードとドリンク</p>
                </div>         
                <div className="grow bg-yellow-100 aspect-[5/4] ml-[5vw] mr-[8vw] mt-[8vw]  relative"> 
                    <Image src={"/IMG_20240705_174147757.jpg"} alt="展示の様子" fill className="rounded-xl opacity-90 object-cover "></Image>
                </div>
                <div className="w-full mt-[7vw]">
                    <Link href={{pathname:"/event", query:{type:"フード"}}}>
                        <button value={"フード"} className="w-[28vw] mx-auto">
                            <RoundButtonOrange   text="もっと見る" size={40}></RoundButtonOrange >
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}