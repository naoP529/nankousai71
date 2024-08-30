
import Image from "next/image"
import type { Metadata } from "next";
import { Suspense } from "react"
import GetEvent from "@/components/event/get_event"
import Loading from "@/components/global/parts/loading"

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export const metadata: Metadata = {
    title: "展示一覧 | 第71回南高祭",
    description: "南高・南高附属中最大の行事へようこそ。南高創立70周年・附属中創立10周年を迎えた今年、歴代の南高生から引き継がれた、「みんなが仲間に みんなが楽しく みんなで創ろう」の精神を次世代へと繋ぎます。",
};

export default function page() {
    return(
        <div className="pt-[min(15vw,80px)] h-screen bg-white">
            <div className="w-full h-[35vw] lg:h-60 relative">
                <Image src={"/event_placeholder.jpg"} alt="展示の様子" fill priority className="object-cover z-0 opacity-95"></Image>
                {/* <div className="w-full h-full absolute  z-[5] opacity-15 bg-gradient-to-r from-[#05a8bd] via-[#05bd92] to-[#f3e50a]"></div> */}
                <div className="w-full h-full absolute z-[6] flex ">
                    <p className={`${kaiseiDecol.className} ml-[3vw] my-auto text-[10vw] lg:text-7xl text-white font-bold`}>展示一覧</p>
                </div>
            </div>
            <Suspense
                fallback={
                    <Loading></Loading>  
                } 
            >
                <GetEvent></GetEvent>
            </Suspense>
        </div>
    )
}