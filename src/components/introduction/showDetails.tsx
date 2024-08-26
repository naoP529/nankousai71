"use client"

import Image from "next/image"
import { MdOutlinePlace } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import NotReady from "../global/parts/notReady";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { KaiseiDecol } from "@/app/fonts";
import { FaAngleDown } from "react-icons/fa";
import Keion from "./Keion";
import { HowToPay } from "./atentions";
import GetFood from "./show_foods";
import SadouClub from "./sadou_club";
import Pranetarium_tiket from "./atentions";

const kaiseiDecol = KaiseiDecol

type eventData = {
    event:{
        title:string,
        comment:string,
        place:string,
        time:Array<string>,
        type:string,
        tags:Array<string>,
        available:boolean
    },
    detail:Array<{
        title:string,
        content:string
    }>,
    name:string
}

type detail = Array<{
    title:string,
    content:string
}>

export default function ShowDetails (
    {event, detail, name}:eventData
) {
    const [date, setDate] = useState(false)

    const onMenuClicked = () => {
        if(date == false) {
            setDate(true)
        } else {
            setDate(false)
        }
    }

    const variants = {
        hidden:{
            height:0
        },
        menu:{
            height:"auto"
        },
        close:{
            rotate:0
        },
        open:{
            rotate:"180deg"
        }
    }

    const Tags = [
        {id:"tenji", name:"展示", color:"from-blue-500 via-indigo-500 to-purple-500"},
        {id:"food", name:"フード", color:"from-orange-400 via-orange-400 to-yellow-400"},
        {id:"class", name:"クラス展示", color:"from-blue-500 via-indigo-500 to-purple-500"},
        {id:"club", name:"部活動展示", color:"from-blue-500 via-indigo-500 to-purple-500"},
        {id:"junior", name:"中学", color:"from-pink-300 via-rose-400 to-red-400"},
        {id:"high", name:"高校", color:"from-sky-400 via-blue-400 to-indigo-400"},
        {id:"act", name:"体験", color:"from-green-300 via-teal-400 to-cyan-500"},
        {id:"live", name:"ライブ", color:"from-purple-300 via-fuchsia-400 to-pink-400"},
        {id:"perform", name:"パフォーマンス", color:"from-blue-400 via-sky-300 to-sky-200"},
        {id:"attraction", name:"アトラクション", color:"from-red-200 via-purple-400 to-blue-500"},
        {id:"shopping", name:"ショッピング", color:"from-red-200 to-purple-400"},
        {id:"horror", name:"ホラー", color:"from-red-500 to-rose-300"},
        {id:"cafe", name:"食堂", color:"from-orange-400 via-orange-400 to-yellow-400"},
        {id:"pta", name:"PTA", color:"from-yellow-300 via-lime-400 to-green-400"},
        {id:"rest", name:"休憩", color:"from-cyan-500 to-yellow-300"},
        {id:"j-1", name:"中学1年", color:" from-yellow-300  to-amber-400"},
        {id:"j-2", name:"中学2年", color:"from-sky-400 via-blue-400 to-indigo-400"},
        {id:"j-3", name:"中学3年", color:"from-pink-300 via-rose-400 to-red-400"},
        {id:"h-1", name:"高校1年", color:"from-sky-400 via-blue-400 to-indigo-400"},
        {id:"h-2", name:"高校2年", color:"from-pink-300 via-rose-400 to-red-400"},
        {id:"h-3", name:"高校3年", color:"from-yellow-300 to-amber-400"},
        {id:"other", name:"その他", color:"from-sky-600 to-sky-200"},
    ]

    const imgs = [
        {name:"", img:""}
    ]

    let img_tag = ""
    
    if(imgs.some(
        n => n.name == name
    )) {
        console.log("aaaaaaaa")
        const found = imgs.find((e) => e.name == name)
        if(found != null) {
            img_tag = found.img
        }
    } else {
        if(event.type == "フード") {
            img_tag = "/burger-2762431_1920.jpg"
        } else {
            img_tag = "/AdobeStock_335757173.jpeg"
        }
    }

    let newDetails:detail = []

    for(let i = 0; i < detail.length; i++) {
        if(detail[i].content.includes("テキスト") == false) {
            newDetails.push(detail[i])
        }
    }

    const setTextColor = (e:any, type:string) => {
        let result = ""

        if(e.includes("クラス展示") || e.includes("部活動展示")){
            result = " from-blue-500 via-indigo-500 to-purple-500"
        }

        if(e.includes("PTA")) {
            result = "from-yellow-300 via-lime-400 to-green-400"
        }

        if(e.includes("フード")) {
            result = "from-orange-400 via-orange-400 to-yellow-400"
        }
        
        if(e.includes("ライブ")) {
            result = "from-purple-300 via-fuchsia-400 to-pink-400"
        }

        if(e.includes("パフォーマンス")) {
            result = " from-blue-400 via-sky-300 to-sky-200"
        }

        if(e.includes("体験")) {
            result = " rom-green-300 via-teal-400 to-cyan-500"
        }

        if(e.includes("アトラクション")) {
            result = "from-red-300 via-purple-400 to-blue-500"
        }

        if(e.includes("休憩")) {
            result = "from-cyan-500 to-yellow-300"
        }

        if(type == "bg") {
            result += " bg-gradient-to-br"
        } else if(type == "text") {
            if(result == "") {
                result = "bg-gradient-to-br bg-clip-text text-transparent from-sky-600 to-sky-100 "
            } else {
                result += " bg-gradient-to-br bg-clip-text text-transparent "
            }
        }

        return result
    }
 
    return(
        <div className="mt-[min(15vw,112px)] bg-white">
            <div className="w-full h-[35vw] relative">
                <Image src={img_tag} alt="ヘッダー画像" fill priority className="object-cover z-0 opacity-95 brightness-90"></Image>
                <div className="w-auto h-full absolute z-[6] flex ">
                    <p className={`${kaiseiDecol.className} pl-[3vw] my-auto text-[10vw] text-white font-bold`}>{name}</p>
                </div>
            </div>
            <div className="mt-[6vw] px-[3vw]">
                <p className={`text-[3.5vw] font-medium tracking-tight  text-white px-[3vw] py-[0.2vw] rounded-full  inline-block  text-left  my-[0.vw] translate-y-[0%]   ${setTextColor(event.tags, "bg")}`}>
                    タイトル            
                </p>
                <p className={`text-[8vw] font-bold  tracking-tight  text-left ${kaiseiDecol.className} ${setTextColor(event.tags, "text")}`}>{event.title}</p>
            </div>
            <div className="mx-[3.5vw] mt-[4vw] text-[4.5vw] leading-[160%] text-slate-500 ">
                <p className="flex items-center mb-[1vw]">
                    <MdOutlinePlace className="translate-y-[5%] mr-[0.5%]"/>
                    {event.place}    
                </p>
                <div className="flex items-center">
                    <IoTimeOutline className=" translate-y-[7%] mr-[0.5%]" />
                    {event.time.length == 1 ? event.time[0] : "開催日時"}
                    {event.time.length != 1 &&
                    <div onClick={onMenuClicked} className={`flex cursor-pointer items-center ml-auto text-[4vw] `}>
                        もっと見る
                        <motion.div variants={variants} animate={date == true? "open" : "close"} className="">
                            <FaAngleDown></FaAngleDown>
                        </motion.div> 
                    </div>
                    }
                    
                </div>
                {event.time.length > 1 && <motion.div variants={variants} animate={date==true ? "menu" : "hidden"} className="mt-[2vw]  rounded-lg w-full overflow-hidden ">
                    {event.time.map((value, index) => (
                        <div key={index} className="flex items-center   mb-[3vw] ml-[10vw]">
                            <p className="w-[20vw] text-[4vw]">第{index + 1}回</p>
                            <p className="w-[50vw] text-center  text-[5vw]">{value}</p>
                        </div>
                    ))}
                </motion.div>}
                
            </div>
            <div className="w-full my-[7vw] px-[6vw]">
                    <p className={`text-[3.5vw] font-medium tracking-tight text-slate-500 text-center ${kaiseiDecol.className}`}>{event.comment}</p>
            </div>
            {name == "プラネタリウム" &&
                <div className="w-full px-[4vw] mb-[15vw]">
                    <Pranetarium_tiket></Pranetarium_tiket>
                </div>
            }
            {name == "茶道部" &&
                <div className="w-full px-[4vw] pb-[3vw]">
                    <SadouClub></SadouClub>
                </div>
            }
            {name == "高校軽音楽部" &&
                <Keion></Keion>
            }
            {event.tags.includes("高校3年") && 
                <div className="w-full px-[4vw] mb-[10vw]">
                    <HowToPay></HowToPay>
                </div>
            }
            {event.tags.includes("フード") &&
                <div className="w-full px-[4vw] mb-[15vw]">
                    <GetFood name={name}></GetFood>
                </div>
            }
            {event.available == true ?
            <div>
                
                <div className="w-auto">
                {newDetails.map((value) => (
                    <div key={value.title} className="mb-[12vw]  mx-[4vw] ">
                        <div className="flex shadow-slate-100 shadow-md">
                            <div className=" w-[2vw] bg-gradient-to-b from-[#01e1e5] to-[#039fa2]"></div>
                            <p className={`${kaiseiDecol.className} text-[7vw] ml-[2vw] py-[1vw] bg-gradient-to-b from-[#01e1e5] to-[#009294]  text-transparent bg-clip-text font-bold`}>{value.title}</p>
                        </div>
                        <div className="ml-[2vw] mr-[3vw] my-[3vw] text-[4vw] text-[#00b2b5] font-light tracking-[-0.01rem]  opacity-80 leading-[160%] text-justify">
                            <p> &ensp;{value.content}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            : <div className="py-[15vw] my-[5vw] rounded-lg bg-slate-50 mx-[4vw]">
                <NotReady></NotReady>
            </div>
            }
            

            
            <div className="my-[5vw] pb-[10vw]">
                <p className={`my-[3vw] ${kaiseiDecol.className} text-[5vw] text-[darkturquoise] text-center`}>・・・関連タグ・・・</p>
                <div className=" flex flex-wrap mx-[3vw] justify-start">
                    {event.tags.map((value) => (
                        <Link key={value} href={{pathname:"/event", query:{type:value} }}>
                            <div className={`my-[2vw] w-[26vw] aspect-[3/1] bg-gradient-to-br ${Tags.find((item) => (item.name == value))?.color} rounded-md flex mx-[2vw] opacity-90`}>
                                <p className="m-auto  text-[3vw]  text-gray-50 font-medium">{value}</p>
                            </div>
                        </Link>    
                    ))} 
                </div>

            </div>
        </div>
    )
}