"use client"

import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";

import Link from "next/link";
import { SquareButtonPinkShadow2 } from "./parts/square_button";
import { easeOut, motion } from 'framer-motion'
import { useAnimate } from "framer-motion";
import { KaiseiDecol } from "@/app/fonts";
import { transform } from "framer-motion/dom";

const kaiseiDecol = KaiseiDecol

export default function Header() {
    const [targetMenu, menuAnimate] = useAnimate()
    const [targetButton, disappearAnimate] = useAnimate()
    const [targetIcon, rotateAnimate] = useAnimate()
    const [menu, setMenu] = useState(false)
    
    const hoverAnimation = {
        
    }

    const showMenu = ()=> {
        if(menu == false) {
            setMenu(true)
            menuAnimate(targetMenu.current, { height: "100vh",}, {ease:"easeOut", duration:0.25}, )
            disappearAnimate(targetButton.current, {opacity:0}, {ease:"easeOut", duration:0.1})
            rotateAnimate(targetIcon.current, {width:"10vw" ,transform:"translate(1vw,2%) rotate(135deg)"}, {ease:"easeOut", duration:0.25})
        } else {
            setMenu(false)
            menuAnimate(targetMenu.current, { height:0,}, {ease:"easeInOut", duration:0.3})
            disappearAnimate(targetButton.current, {opacity:1}, {ease:"easeOut",duration:0.2, delay:0.3})
            rotateAnimate(targetIcon.current, {width:"8vw",   transform:"translate(0,0) rotate(0deg)"}, {ease:"easeOut", duration:0.25})
        }
    }

    const clickLink = () => {
        setMenu(false)
        menuAnimate(targetMenu.current, { height:0,}, {ease:"easeInOut", duration:0.3})
        disappearAnimate(targetButton.current, {opacity:1}, {ease:"easeOut",duration:0.2, delay:0.3})
            rotateAnimate(targetIcon.current, {width:"8vw",   transform:"translate(0,0) rotate(0deg)"}, {ease:"easeOut", duration:0.25})
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
                
                <div className="flex items-center opacity-90 z-10 ml-[3vw] ">
                    <Link ref={targetButton} href={"/info"}>
                        <div className={`w-[28vw] `}>
                            {/* <RoundButtonPink text={"参加申し込み"} size={40}></RoundButtonPink> */}
                            <SquareButtonPinkShadow2 text="参加申し込み" ></SquareButtonPinkShadow2>
                        </div>
                    </Link>

                    {/* <div className={`${menu == false && "hidden"} w-[28vw]`}>
                        <SquareButtonWhite text="参加申し込み"></SquareButtonWhite>   
                    </div> */}
                    <div ref={targetIcon} className="w-[8vw] aspect-square cursor-pointer text-white ml-[2vw] mr-[3vw] opacity-80 z-20">
                        <BsPlusLg  className= "size-full"
                    onClick={showMenu}></BsPlusLg>
                    </div>
                    

                </div>
                <div ref={targetMenu} className={`overflow-hidden w-screen h-0  bg-gradient-to-br opacity-[0.92]  from-[#05a8bd] via-[#05bd92] to-[#f3e50a] absolute top-0 left-0 z-0 `}>    

                    <div className={`flex flex-col ${kaiseiDecol.className} text-white text-[6.5vw] mt-[15vw] w-full items-center`}>
                        <Link href={"/info"}  onClick={clickLink}>
                            <p className="my-[2vw] opacity-80">参加方法</p>
                        </Link>
                        <Link href={"/"} onClick={clickLink}>
                            <p className="my-[2vw] opacity-80">トップ</p>
                        </Link>
                        <Link href={"/event"}  onClick={clickLink}>
                            <p className="my-[2vw] opacity-80">展示一覧</p>
                        </Link>
                        <Link href={"/info#access"}  onClick={clickLink}>
                            <p className="my-[2vw] opacity-80">アクセス</p>
                        </Link>
                        <Link href={"/map"}  onClick={clickLink}>
                            <p className="my-[2vw] opacity-80">マップ</p>
                        </Link> 
                        <Link href={"/timetable"}  onClick={clickLink}>
                            <p className="my-[2vw] opacity-80">タイムテーブル</p>
                        </Link>
                        <Link href={"/gallery"}  onClick={clickLink}>
                            <p  className="my-[2vw] opacity-80">ギャラリー</p>
                        </Link>
                    </div>
                </div>
            </div>
            

        </header>
    )
}