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
import { CookingClubNotice } from "./atentions";

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
        {name:"高校軽音楽部", img:"/Firefly ドラム ギター キーボード ライブ 36783.jpg"},
        {name:"高校ダンス部", img:"/Firefly kPOP ダンス シルエット ステージの上 複数人 21761 (1).jpg"},
        {name:"プラネタリウム", img:"/Firefly Planetarium 星空 67264.jpg"},
        {name:"高校演劇部", img:"/Firefly across the border 83580.jpg"},
        {name:"科学部", img:"/Firefly 科学部 試験管 フラスコ 机 白 人無し 19210 (1).jpg"},
        {name:"弦楽部", img:"/Firefly 弦楽部 バイオリン 教室 59986.jpg"},
        {name:"高校料理部", img:"/Firefly 厨房 お菓子作り 白 23408.jpg"},
        {name:"文芸同好会", img:"/Firefly 本 おとぎ話 47001.jpg"},
        {name:"美術部", img:"/美術部_背景.png"},
        {name:"茶道部", img:"/Firefly 茶道 和室 日本庭園 49822.jpg"},
        {name:"食堂", img:"/食堂.png"},
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
            result = " from-green-300 via-teal-400 to-cyan-500"
        }

        if(e.includes("アトラクション")) {
            result = "from-red-300 via-purple-400 to-blue-500"
        }

        if(e.includes("休憩")) {
            result = "from-cyan-500 to-yellow-300"
        }

        if(type == "bg") {
            if(result == "") {
                result = "bg-gradient-to-br from-sky-600 to-sky-100 "
            } else {
                result += " bg-gradient-to-br"
            }
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
        <div className="mt-[min(15vw,80px)]  md:mt-[13vw]  lg:mt-[min(15vw,80px)] bg-white min-h-screen">
            <div className="w-full h-[35vw] lg:h-60 relative">
                <Image src={img_tag} alt="ヘッダー画像" fill priority className="object-cover object-center z-0 opacity-95 brightness-90"></Image>
                <div className="w-auto h-full absolute z-[6] flex ">
                    <p className={`${kaiseiDecol.className} pl-[3vw] my-auto text-[10vw] lg:text-7xl text-white font-bold`}>{name}</p>
                </div>
            </div>
            <div className="max-w-[1100px] lg:mx-auto pb-[20vw] lg:pb-[5vw] bg-white lg:px-4 lg:shadow-md ">
                <div className="pt-[6vw] px-[3vw]  lg:pt-2 lg:px-6">
                    <p className={`text-[3.5vw] font-medium tracking-tight  text-white px-[3vw] py-[0.2vw] rounded-full  inline-block  text-left  my-[0.7vw] translate-y-[0%]   ${setTextColor(event.tags, "bg")} lg:text-lg lg:px-8 lg:py-1 lg:mt-6 lg:mb-2`}>
                        タイトル           
                    </p>
                    <p className={`text-[8vw] font-bold leading-[140%] lg:leading-[125%] tracking-tight  text-left ${kaiseiDecol.className} ${setTextColor(event.tags, "text")} lg:text-7xl`}>{event.title}</p>
                </div>
                <div className="mx-[3.5vw] mt-[4vw] text-[4.5vw] lg:text-3xl lg:mx-6 lg:mt-8 leading-[160%] text-slate-500 ">
                    <p className="flex items-center mb-[1vw] lg:mb-3">
                        <MdOutlinePlace className="translate-y-[5%] mr-[0.5%]"/>
                        {event.place}    
                    </p>
                    <div className="flex items-center">
                        <IoTimeOutline className=" translate-y-[7%] mr-[0.5%]" />
                        {event.time.length == 1 ? event.time[0] : "開催日時"}
                        {event.time.length != 1 &&
                        <div onClick={onMenuClicked} className={`flex cursor-pointer items-center ml-auto text-[4vw] lg:text-3xl `}>
                            もっと見る
                            <motion.div variants={variants} animate={date == true? "open" : "close"} className="">
                                <FaAngleDown></FaAngleDown>
                            </motion.div> 
                        </div>
                        }
                        
                    </div>
                    {event.time.length > 1 && <motion.div variants={variants} animate={date==true ? "menu" : "hidden"} className="mt-[2vw] lg:mt-4  rounded-lg w-full overflow-hidden ">
                        {event.time.map((value, index) => (
                            <div key={index} className="flex items-center   mb-[3vw] ml-[10vw] lg:mb-8">
                                <p className="w-[20vw] text-[4vw] lg:text-3xl">第{index + 1}回</p>
                                <p className="w-[50vw] text-center  text-[5vw] lg:text-4xl">{value}</p>
                            </div>
                        ))}
                    </motion.div>}
                    
                </div>
                <div className="w-full my-[7vw] px-12 lg:my-10">
                        <p className={`text-[3.5vw] lg:text-2xl font-medium tracking-tight text-slate-500 text-center ${kaiseiDecol.className}`}>{event.comment}</p>
                </div>
                {name == "プラネタリウム" &&
                    <div className="w-full px-[4vw] mb-[15vw] lg:px-6 lg:mb-6 lg:w-[80%] lg:mx-auto">
                        <Pranetarium_tiket></Pranetarium_tiket>
                    </div>
                }
                {name == "茶道部" &&
                    <div className="w-full px-[4vw]  lg:px-5 pb-[3vw] lg:pb-14">
                        <SadouClub></SadouClub>
                    </div>
                }
                {name == "高校軽音楽部" &&
                    <Keion></Keion>
                }
                {event.tags.includes("高校3年") && 
                    <div className="w-full px-[4vw] lg:px-6 mb-[10vw] lg:mb-14 lg:w-[80%] lg:mx-auto">
                        <HowToPay></HowToPay>
                    </div>
                }
                {name == "高校料理部" && 
                    <div className="w-full px-[4vw] lg:px-6 mb-[10vw] lg:mb-14 lg:w-[80%] lg:mx-auto">
                        <CookingClubNotice></CookingClubNotice>
                    </div>
                }
                {event.tags.includes("フード") &&
                    <div className="w-full px-[4vw] lg:px-6 mb-[15vw] lg:w-[80%] lg:mx-auto lg:mb-6">
                        <GetFood name={name}></GetFood>
                    </div>
                }
                {event.available == true ?
                <div>
                    
                    <div className="w-auto">
                    {newDetails.map((value) => (
                        <div key={value.title} className="mb-[12vw]  mx-[4vw] lg:mx-8 lg:mb-14 lg:my-2">
                            <div className="flex shadow-slate-100 shadow-md">
                                <div className=" w-[2vw] lg:w-4 bg-gradient-to-b from-[#01e1e5] to-[#039fa2]"></div>
                                <p className={`${kaiseiDecol.className} text-[7vw] lg:text-4xl lg:ml-6 lg:py-4 ml-[2vw] py-[1vw] bg-gradient-to-b from-[#01e1e5] to-[#009294]  text-transparent bg-clip-text font-bold`}>{value.title}</p>
                            </div>
                            <div className="ml-[2vw] mr-[3vw] my-[3vw] text-[4vw] lg:ml-4 lg:mr-6 lg:text-2xl lg:my-5 lg:leading-[150%] text-[#00b2b5] font-light tracking-[-0.01rem]  opacity-80 leading-[160%] text-justify">
                                <p> &ensp;{value.content}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                : <div className="py-[15vw] my-[5vw] rounded-lg bg-slate-50 mx-[4vw] lg:mx-6 lg:py-16 lg:my-0">
                    <NotReady></NotReady>
                </div>
                }
                

                
                <div className="my-[5vw] lg:mt-14 lg:mb-0 lg:pb-14 rounded-lg  lg:mx-6">
                    <p className={`my-[3vw] ${kaiseiDecol.className} text-[5vw] text-[darkturquoise] text-center lg:text-4xl lg:py-8 lg:my-0`}>・・・関連タグ・・・</p>
                    <div className=" flex flex-wrap mx-[3vw] justify-start lg:mx-8 ">
                        {event.tags.map((value) => (
                            <Link key={value} href={{pathname:"/event", query:{type:value} }}>
                                <div className={`my-[2vw] w-[26vw] aspect-[3/1] bg-gradient-to-br ${Tags.find((item) => (item.name == value))?.color} rounded-md flex mx-[2vw] opacity-90 lg:ml-0 lg:mr-8 lg:max-w-44 lg:mb-6 lg:mt-0`}>
                                    <p className="m-auto  text-[3vw] lg:text-lg text-gray-50 font-medium">{value}</p>
                                </div>
                            </Link>    
                        ))} 
                    </div>

                </div>
            </div> 
        </div>
    )
}