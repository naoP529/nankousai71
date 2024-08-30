"use client"
import { SquareButtonPinkShadow2 } from "../global/parts/square_button"
import Image from "next/image"
import { FaExclamationCircle } from "react-icons/fa";
import AccessTags from "./info_parts/access_tags";
import { skeleton } from "@/components/global/skeleton";
import { toBase64 } from "@/components/global/skeleton";
import Link from "next/link";
import Modal from "react-modal"
import { useState } from "react";

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol


export default function Access() {
    const [isOpen, setOpen] = useState(false)

    const roots = [
        {id:"kamioooka", title:"上大岡駅", walk:"26", bus:true, img:"/placeholder.png", busStop:[{name:"①京急バス", destination:"南高校前", bus:["南高校前行"], type:"modal", href:""}, {name:"⑨神奈中バス", destination:"南高校前", bus:["芹が谷行", "東戸塚駅行", "上大岡循環"], type:"link", href:"https://www.kanachu.co.jp/dia/diagram/search?snid=00102366&sk=&st=0&k=%E5%8D%97%E9%AB%98%E6%A0%A1%E5%89%8D(%E6%A8%AA%E6%B5%9C%E5%B8%82%E6%B8%AF%E5%8D%97%E5%8C%BA)&rt=0&t=0&sdid=00113527"}]},
        {id:"kounan", title:"港南中央駅", walk:"22", bus:true, img:"/placeholder.png", busStop:[{name:"②総合庁舎前", destination:"南高校前", bus:["芹が谷行","上大岡行"], type:"link", href:"https://www.kanachu.co.jp/dia/diagram/search?snid=00102499&sk=&st=0&k=%E5%8D%97%E9%AB%98%E6%A0%A1%E5%89%8D(%E6%A8%AA%E6%B5%9C%E5%B8%82%E6%B8%AF%E5%8D%97%E5%8C%BA)&rt=0&t=0&sdid=00113527"}, {name:"②港南橋", destination:"南高校前", bus:["芹が谷行","上大岡行"], type:"link", href:"https://www.kanachu.co.jp/dia/diagram/search?fromStopNo=11153"}]},
        {id:"kaminagaya",title:"上永谷駅", walk:"15", bus:false, type:"none"}
    ]

    const modalStyle = {
        overlay:{
            top:0,
            left:0,
            backgroundColor:"rgb(0 0 0 / 0.5)",
            zIndex:10000
        },
        content:{
            top:"15vh",
            left:"5vw",
            right:"5vw",
            bottom:"auto",
            height:"auto",
            padding:0,
            borderRadius:"1rem"
        }
    }

    return(
        <div className="mt-[10vw] pt-[20vw] pb-[10vw]  2xl:pt-32 lg:pt-24 lg:mt-5 lg:pb-10  bg-[darkturquoise] text-white">
            <h2 className={`${kaiseiDecol.className} text-center text-[12vw] 2xl:text-8xl lg:text-6xl`}>アクセス</h2>
            <p className="text-[3.5vw] text-center mt-[1vw] mb-[4vw] 2xl:text-2xl lg:text-xl lg:mt-6 2xl:mb-16 lg:mb-10">必ず公共交通機関を使ってご来校ください</p>   
            <div className="mx-4">
                <AccessTags></AccessTags>
                <p className="text-[3vw] text-center mt-[2vw] lg:text-xl lg:mt-5">タグから探す（横にスクロール可能）</p>
            </div>
            <Modal style={modalStyle} isOpen={isOpen}  onRequestClose={() => setOpen(false)}>
                <Image src={"/上大岡＿時刻表.jpg"} alt="上大岡_時刻表" width={1000} height={2000} className="w-full aspect-auto"></Image>
            </Modal>
            {roots.map((value) => ( 
                <div key={value.id} id={value.id} className="mx-[5vw] my-[12vw] lg:mt-10 lg:mb-28 lg:mx-10">
                    <div className="flex">
                        <div className=" w-[2vw] lg:w-4 bg-white"></div>
                        <p className={`${kaiseiDecol.className} text-[7vw] ml-[2vw] py-[1vw] lg:ml-4 lg:py-6 2xl:text-6xl lg:text-5xl  text-white font-bold`}>{value.title}</p>
                    </div>
                    <div className="lg:flex items-center 2xl:my-8 lg:my-5">
                        <p className={`text-[3.5vw] font-medium tracking-tight  text-[darkturquoise] px-[5vw] py-[0.2vw] rounded-full  inline-block  text-left mt-[6vw] mb-[0.5vw] translate-y-[0%] bg-white 2xl:text-2xl lg:text-lg 2xl:px-10 2xl:py-2 lg:m-0 lg:mr-4 lg:px-6 lg:py-1`}>
                            徒歩            
                        </p>
                        <div className="flex items-center justify-between flex-grow lg:justify-start">
                            <p className="text-white text-[4vw] ml-[0.5vw] 2xl:text-4xl lg:text-2xl lg:ml-0">{value.title}より徒歩{value.walk}分</p>
                            <div className="w-[25vw] mr-[2vw] -translate-y-[30%] lg:translate-y-0 lg:w-40 lg:ml-20">
                                <SquareButtonPinkShadow2 text="ガイド開始"></SquareButtonPinkShadow2>
                            </div>
                        </div>
                    </div> 
                    {value.bus == true && 
                    <div>
                        <p className={`text-[3.5vw] font-medium tracking-tight px-[5vw]  text-[darkturquoise] py-[0.2vw] rounded-full  inline-block  text-left  mt-[7vw] mb-[4vw] translate-y-[0%]  bg-white 2xl:text-2xl lg:text-lg 2xl:px-10 2xl:py-2 lg:m-0 lg:mr-4 lg:mb-3 lg:px-6 lg:py-1`}>
                            バス         
                        </p>
                        <div className="lg:flex">
                            <div className="w-full lg:w-[50%] relative">
                                <Image src={value.img!} alt="バス停マップ" width={1000} height={500} className="lg:rounded-xl w-full aspect-auto lg:aspect-[3/2] rounded-lg" placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 160))}`}></Image>
                                <p className="absolute -top-[6vw] left-1/2 -translate-x-1/2 text-[3.5vw] lg:text-xl lg:-top-8">のりば案内</p>
                            </div>
                            
                            <div className="mt-[5vw] lg:mt-0 2xl:ml-8 lg:ml-4 flex-grow">
                                {value.busStop!.map((value) => (
                                    <div key={value.name} className="my-[6vw] 2xl:my-4 2xl:mb-8 lg:my-4">
                                        <div className="flex justify-between items-center">
                                            <p className="text-[6vw] font-medium 2xl:text-5xl lg:text-2xl">{value.name}</p>
                                            {value.type == "link" ? 
                                                <Link href={value.href} target="_blank">
                                                    <div className="w-[23vw] 2xl:w-44 lg:w-32 mr-[1vw] translate-y-[10%] lg:translate-y-0">
                                                        <SquareButtonPinkShadow2 text="時刻表"></SquareButtonPinkShadow2>
                                                    </div>
                                                </Link>
                                            : <div className="w-[23vw]  2xl:w-44 lg:w-32  mr-[1vw] translate-y-[10%] lg:translate-y-0" onClick={() => setOpen(true)}>
                                                <SquareButtonPinkShadow2 text="時刻表"></SquareButtonPinkShadow2>
                                            </div>
                                            }
                                            
                                        </div>
                                        <div className="flex justify-around mt-[3vw] 2xl:mt-10 lg:my-3 lg:justify-start lg:ml-2 lg:items-center">
                                            <p className="2xl:text-3xl lg:text-xl hidden xl:block">行き先：</p>
                                            {value.bus.map((value) => (
                                                <div key={value} className="rounded-lg bg-white 2xl:mr-6 lg:mr-2">
                                                    <p className={`text-[3.5vw] 2xl:text-2xl lg:text-lg font-medium tracking-tight  text-[darkturquoise] py-[1vw] px-[4vw] 2xl:py-3 2xll:px-8  inline-block lg:py-1 lg:px-5`}>
                                                        {value}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex text-[4.5vw] 2xl:text-[1.7rem] lg:text-base justify-center items-center mt-[3vw] 2xl:mt-10 lg:mt-5">
                                            <FaExclamationCircle className="text-white"></FaExclamationCircle>
                                            <p className="lg:hidden">南高校前で下車</p>
                                            <p className="hidden lg:block">南高校前で下車・料金等はHPをチェック</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    }
                    
                </div>
            ))}
        </div>
    )
}