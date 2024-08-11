import { SquareButtonPinkShadow2 } from "../global/parts/square_button"
import Image from "next/image"
import { BsExclamationCircle } from "react-icons/bs";
import { FaExclamationCircle } from "react-icons/fa";
import AccessTags from "./info_parts/access_tags";

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol


export default function Access() {
    const roots = [
        {id:"kamioooka", title:"上大岡駅", walk:"26", bus:true, img:"/placeholder.png", busStop:[{name:"①京急バス", destination:"南高校前", bus:["南高校前行"]}, {name:"⑨神奈中バス", destination:"南高校前", bus:["芹が谷行", "東戸塚駅行", "上大岡循環"]}]},
        {id:"kounan", title:"港南中央駅", walk:"22", bus:true, img:"/placeholder.png", busStop:[{name:"②総合庁舎前", destination:"南高校前", bus:["芹が谷行","上大岡行"]}, {name:"②港南橋", destination:"南高校前", bus:["芹が谷行","上大岡行"]}]},
        {id:"kaminagaya",title:"上永谷駅", walk:"15", bus:false}
    ]

    return(
        <div className="mt-[30vw] pt-[20vw] pb-[10vw] bg-[darkturquoise] text-white">
            <h2 className={`${kaiseiDecol.className} text-center text-[12vw]`}>アクセス</h2>
            <p className="text-[3.5vw] text-center mt-[1vw] mb-[4vw] ">必ず公共交通機関を使ってご来校ください</p>   
            <div className="">
                <AccessTags></AccessTags>
                <p className="text-[3vw] text-center mt-[2vw]">タグから探す（横にスクロール可能）</p>
            </div>
            {roots.map((value) => (
                <div key={value.id} id={value.id} className="mx-[5vw] my-[12vw]">
                    <div className="flex">
                        <div className=" w-[2vw] bg-white"></div>
                        <p className={`${kaiseiDecol.className} text-[7vw] ml-[2vw] py-[1vw] text-white font-bold`}>{value.title}</p>
                    </div>
                    <p className={`text-[3.5vw] font-medium tracking-tight  text-[darkturquoise] px-[5vw] py-[0.2vw] rounded-full  inline-block  text-left mt-[6vw] mb-[0.5vw] translate-y-[0%] bg-white `}>
                        徒歩            
                    </p>
                    <div className="flex items-center justify-between">
                        <p className="text-white text-[4vw] ml-[0.5vw]">{value.title}より徒歩{value.walk}分</p>
                        <div className="w-[25vw] mr-[2vw] -translate-y-[30%]">
                            <SquareButtonPinkShadow2 text="ガイド開始"></SquareButtonPinkShadow2>
                        </div>
                    </div>
                    {value.bus == true && 
                    <div>
                        <p className={`text-[3.5vw] font-medium tracking-tight px-[5vw]  text-[darkturquoise] py-[0.2vw] rounded-full  inline-block  text-left  mt-[7vw] mb-[4vw] translate-y-[0%]  bg-white `}>
                            バス         
                        </p>
                        <div className="w-full relative">
                            <Image src={value.img!} alt="バス停マップ" width={1000} height={500} className="w-full aspect-auto rounded-lg"></Image>
                            <p className="absolute -top-[6vw] left-1/2 -translate-x-1/2 text-[3.5vw]">のりば案内</p>
                        </div>
                        <div className="mt-[5vw]">
                            {value.busStop!.map((value) => (
                                <div key={value.name} className="my-[6vw]">
                                    <div className="flex justify-between">
                                        <p className="text-[6vw] font-medium">{value.name}</p>
                                        <div className="w-[23vw] mr-[1vw] translate-y-[10%]">
                                            <SquareButtonPinkShadow2 text="時刻表"></SquareButtonPinkShadow2>
                                        </div>
                                    </div>
                                    <div className="flex justify-around ">
                                        {value.bus.map((value) => (
                                            <div key={value} className="rounded-lg bg-white mt-[3vw]">
                                                <p className={`text-[3.5vw] font-medium tracking-tight  text-[darkturquoise] py-[1vw] px-[4vw]   inline-block`}>
                                                    {value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex text-[4.5vw] justify-center items-center mt-[3vw]">
                                        <FaExclamationCircle className="text-white"></FaExclamationCircle>
                                        <p className="">南高校前で下車</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    }
                    
                </div>
            ))}
        </div>
    )
}