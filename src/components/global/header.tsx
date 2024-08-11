"use client"

import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";

import Link from "next/link";
import { SquareButtonPinkShadow2 } from "./parts/square_button";

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Header() {
    const color = ["05a8bd", "f3e50a"]
    const [menu, setMenu] = useState(false)
    
    const showMenu = ()=> {
        if(menu == false) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }

    return(
        <header className="w-full h-[15vw] relative max-h-28">
            <div className="absolute w-full h-full  bg-gradient-to-br  from-[#05a8bd] via-[#05bd92] to-[#f3e50a] opacity-80 -z-10"></div>
            <div className="w-full h-full flex items-center justify-between">
                <Link href={"/"}>
                    <div className="ml-[3.5vw] flex items-center opacity-90">
                        <Image src={"/70周年ロゴB.png"} alt="70周年ロゴ" width={500} height={500} className="h-[6.5vw] w-[7vw]"></Image>
                        <p className={`text-white font-light text-[6vw] -translate-y-[5%] mx-[1.2vw] ${kaiseiDecol.className}`}>南高祭</p>
                    </div>
                </Link>
                
                <div className="flex items-center opacity-90 z-10">
                    <Link href={"/info"}>
                        <div className={`w-[28vw] ${menu == true && "hidden"}`}>
                            {/* <RoundButtonPink text={"参加申し込み"} size={40}></RoundButtonPink> */}
                            <SquareButtonPinkShadow2 text="参加申し込み" ></SquareButtonPinkShadow2>
                        </div>
                    </Link>

                    {/* <div className={`${menu == false && "hidden"} w-[28vw]`}>
                        <SquareButtonWhite text="参加申し込み"></SquareButtonWhite>   
                    </div> */}
                    <BsPlusLg className={`cursor-pointer text-white mr-[3vw] opacity-80 z-20 ${menu == true ? "ml-[1vw] translate-x-[1vw] tra rotate-45 size-[10vw]" : " size-[8vw] ml-[3vw]"}`}
                    onClick={showMenu}></BsPlusLg>

                </div>
                <div className={`w-screen h-screen  bg-gradient-to-br opacity-[0.92]  from-[#05a8bd] via-[#05bd92] to-[#f3e50a] absolute top-0 left-0 z-0 ${menu == false && "hidden"}`}>
                    

                    <div className={`flex flex-col ${kaiseiDecol.className} text-white text-[6.5vw] mt-[15vw] w-full items-center`}>
                        <Link href={"/info"}>
                            <p className="my-[2vw]">参加方法</p>
                        </Link>
                        <Link href={"/"}>
                            <p className="my-[2vw]">トップ</p>
                        </Link>
                        <Link href={"/event"}>
                            <p className="my-[2vw]">展示一覧</p>
                        </Link>
                        <Link href={"/info#access"}>
                            <p className="my-[2vw]">アクセス</p>
                        </Link>
                        <Link href={"/map"}>
                            <p className="my-[2vw]">マップ</p>
                        </Link> 
                        <Link href={"/timetable"}>
                            <p className="my-[2vw]">タイムテーブル</p>
                        </Link>
                        <Link href={"/gallery"}>
                            <p className="my-[2vw]">ギャラリー</p>
                        </Link>
                    </div>
                </div>
            </div>
            

        </header>
    )
}