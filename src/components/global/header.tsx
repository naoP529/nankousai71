"use client"

import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { SquareButtonPinkShadow2 } from "./parts/square_button";
import { animate, easeOut, motion } from 'framer-motion'
import { useAnimate } from "framer-motion";
import { KaiseiDecol } from "@/app/fonts";
import { PiDotsThreeFill } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { tree } from "next/dist/build/templates/app-page";

const kaiseiDecol = KaiseiDecol

export default function Header() {
    const [targetMenu, menuAnimate] = useAnimate()
    const [targetButton, disappearAnimate] = useAnimate()
    const [targetIcon, rotateAnimate] = useAnimate()
    const [animateKey, setAnimateKey] = useState("")
    const [menu, setMenu] = useState(false)
    const [targetPink, pinkAnimate] = useAnimate()
    const [targetLogo, logoAnimate] = useAnimate()
    const [pullDown, setPullDown] = useState(false)
    const [hamburgerAnime, setHamburgerAnmie] = useAnimate()
    const [hamburger, setHamburger] = useState(true)
    const hoverAnimation = {
        
    }

    const clickButton = () => {
        pinkAnimate(targetPink.current, { scale:[1, 1.8, 1], opacity:[0.25,0,0], borderWidth:[6, 2, 6]}, {ease:"easeOut", duration:0.7})
    }

    const clickLogo = () => {
        logoAnimate(targetLogo.current, {scale:[1, 4, 1], opacity:[0.25,0,0], borderWidth:[6, 2, 6]}, {ease:"easeOut", duration:0.5})
    }

    const showMenu = ()=> {
        if(menu == false) {
            setMenu(true)
            setHamburger(false)
            menuAnimate(targetMenu.current, { height: "100vh",}, {ease:"easeOut", duration:0.25}, )
            disappearAnimate(targetButton.current, {opacity:0}, {ease:"easeOut", duration:0.1})
            rotateAnimate(targetIcon.current, {scale:1.5 ,transform:"rotate(135deg)", opacity:100}, {ease:"easeOut", duration:0.25})
            setHamburgerAnmie(hamburgerAnime.current, {opacity:0}, {ease:"easeOut", duration:0.25})
        } else {
            setMenu(false)
            menuAnimate(targetMenu.current, { height:0,}, {ease:"easeInOut", duration:0.3})
            disappearAnimate(targetButton.current, {opacity:1}, {ease:"easeOut",duration:0.2, delay:0.3})
            rotateAnimate(targetIcon.current, {scale:1,   transform:"rotate(0deg)", opacity:0}, {ease:"easeOut", duration:0.25})
            setHamburgerAnmie(hamburgerAnime.current, {opacity:80}, {ease:"easeOut", duration:0.25})
            setHamburger(true)
        }
    }

    const clickLink = () => {
        setMenu(false)
        menuAnimate(targetMenu.current, { height:0,}, {ease:"easeInOut", duration:0.3, delay:0.2})
        disappearAnimate(targetButton.current, {opacity:1}, {ease:"easeOut",duration:0.2, delay:0.3})
        rotateAnimate(targetIcon.current, {scale:1,   transform:"rotate(0deg)", opacity:0}, {ease:"easeOut", duration:0.25})
        setHamburgerAnmie(hamburgerAnime.current, {opacity:80}, {ease:"easeOut", duration:0.25})
    }

    const parent = {
        tap:{scale:0.6, opacity:0.8, transition:{duration:0.3}}
    }
    const child = {
        click:{width:200, height:200,opacity:0, borderWidth:6, transition:{duration:0.3}}
    }

    const links = [
        {link:"/info", name:"参加方法"}, 
        {link:"/", name:"トップ"}, 
        {link:"/event", name:"展示一覧"}, 
        {link:"/info#access", name:"アクセス"}, 
        {link:"/map", name:"マップ"}, 
        {link:"/timetable", name:"タイムテーブル"},
        {link:"/gallery", name:"ギャラリー"},
    ]

    const links_pc = [
        {link:"/event", name:"イベント"}, 
        {link:"/info#access", name:"アクセス"}, 
        {link:"/map", name:"マップ"}, 
        {link:"/timetable", name:"タイムテーブル"},
        {link:"/gallery", name:"ギャラリー"},
    ]

    const link_pc_mini = [
        {link:"/event", name:"イベント"}, 
        {link:"/map", name:"マップ"}, 
        {link:"/timetable", name:"タイムテーブル"},
    ]

    const pullDownMenu = () => {
        if(pullDown == false ) {
            setPullDown(true)
        } else {
            setPullDown(false)
        }
     }

    return(
        <header className="w-full h-[15vw] relative max-h-20 md:max-h-[13vw] lg:max-h-20">
            <div className="absolute w-full h-full  bg-gradient-to-br  from-[#05a8bd] via-[#05bd92] to-[#f3e50a] opacity-80 -z-10"></div>
            <div className={ `${pullDown ? "flex" : "hidden"} absolute top-[90px] right-44 rounded-lg   bg-gradient-to-br  from-[#05bda4] to-[#f3e50a] flex-col items-start pb-4  drop-shadow-lg opacity-90 xl:hidden`}>
                <IoMdClose className="ml-auto mr-2 text-white mt-2 text-xl" onClick={pullDownMenu}></IoMdClose>
                <Link href={"/gallery"}>
                    <p className={` px-4  text-white font-bold  text text-2xl ${kaiseiDecol.className} pb-2 `}>#ギャラリー</p>
                </Link>
                <Link href={"/info#access"}>
                    <p className={`px-4  text-white font-bold  tethite text-2xl ${kaiseiDecol.className} py-2 `}>#アクセス</p>
                </Link>
            </div>
            <div className="w-full h-full flex items-center justify-between">
                <Link href={"/"} onClick={clickLogo}>
                    <motion.div whileHover={{scale:1.05, opacity:1}} whileTap={{scale:0.9}} transition={{type:"spring", duration:0.2, bounce:0.2}} className="relative ml-[3.5vw] flex items-center opacity-90 xl:ml-10 ">
                        <Image src={"/70周年ロゴB.png"} alt="70周年ロゴ" width={500} height={500} className="h-[6.8vw] w-[7vw] lg:w-10 lg:h-10 xl:translate-y-[0.1rem]"></Image>
                        <p className={` text-white font-light text-[6vw] lg:text-4xl -translate-y-[5%] xl:-translate-y-0mx-[1.2vw] lg:mx-2 ${kaiseiDecol.className}`}>南高祭</p>
                        <div ref={targetLogo}  className="absolute border-white opacity-0 w-10 h-10 border-0 rounded-full top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2"></div>
                    </motion.div>
                </Link>

                <div className={`hidden xl:flex flex-grow justify-end items-center mr-6 text-white text-2xl ${kaiseiDecol.className}`}>
                    {links_pc.map((value, i) => (
                        <Link href={value.link} onClick={clickLink} key={i}>
                            <motion.div key={value.name} whileHover={{scale:1.05, opacity:1}} whileTap={"tap"} variants={parent} onTapStart={e => setAnimateKey(value.name)} transition={{type:"spring", duration:0.3, bounce:0.2}} className="opacity-90 relative">
                                    <p  className="opacity-100 2xl:ml-14 xl:ml-10" >
                                        {value.name}
                                    </p>
                            </motion.div>
                        </Link>
                    ))}
                    {/* <BsThreeDots className="mx-5 text-2xl cursor-pointer"  ></BsThreeDots> */}
                </div>

                <div className={`hidden lg:flex xl:hidden flex-grow justify-end items-center text-white text-2xl ${kaiseiDecol.className}`}>
                    {link_pc_mini.map((value, i) => (
                        <Link href={value.link} onClick={clickLink} key={i}>
                            <motion.div key={value.name} whileHover={{scale:1.05, opacity:1}} whileTap={"tap"} variants={parent} onTapStart={e => setAnimateKey(value.name)} transition={{type:"spring", duration:0.3, bounce:0.2}} className="opacity-90 relative">
                                    <p  className="opacity-100 ml-10" >
                                        {value.name}
                                    </p>
                            </motion.div>
                        </Link>
                    ))}
                    {/* <BsThreeDots className="mx-5" onClick={pullDownMenu}></BsThreeDots> */}
                </div>
                
                <div className="flex items-center  z-10 ml-[3vw] lg:mr-7 lg:ml-2">
                    <Link ref={targetButton} href={"/info"} onClick={clickButton}>
                        <motion.div whileHover={{scale:1.05, opacity:1}}  whileTap={{scale:0.95}} transition={{type:"spring", duration:0.2, bounce:0.1}} className={`relative w-[28vw] opacity-90 lg:w-[170px]`}>
                            {/* <RoundButtonPink text={"参加申し込み"} size={40}></RoundButtonPink> */}
                            <SquareButtonPinkShadow2 text="参加申し込み" ></SquareButtonPinkShadow2>
                            <div ref={targetPink} className="w-full h-full opacity-0 absolute border-[6px] rounded-md top-0 left-0 z-0 border-[#e564ff] "></div>
                        </motion.div>
                    </Link>

                    {/* <div className={`${menu == false && "hidden"} w-[28vw]`}>
                        <SquareButtonWhite text="参加申し込み"></SquareButtonWhite>   
                    </div> */}
                    <motion.div   className="lg:hidden w-[8vw] aspect-square cursor-pointer text-white ml-[2vw] mr-[3vw] opacity-70 z-20 relative">
                        <motion.div className={`size-full absolute opacity-80`} onClick={showMenu} whileHover={{opacity:1}} transition={{duration:0.1}} ref={hamburgerAnime}>
                            <CiMenuFries className={`size-full`} ></CiMenuFries>    
                        </motion.div>
                        <motion.div  ref={targetIcon}  className= {`opacity-0 size-full absolute `} onClick={showMenu}>
                            <BsPlusLg className="size-full"></BsPlusLg>
                        </motion.div>    
                    </motion.div>
                    

                </div>
                <div ref={targetMenu} className={`overflow-hidden w-full h-0  bg-gradient-to-br opacity-[0.92]  from-[#05a8bd] via-[#05bd92] to-[#f3e50a] absolute top-0 left-0 z-0 `}>    

                    <div className={`flex flex-col ${kaiseiDecol.className} text-white text-[6.5vw] mt-[15vw] w-full items-center`}>
                        {links.map((value) => (
                            <Link href={value.link} onClick={clickLink} key={value.name}>
                                <motion.div key={value.name} whileHover={{scale:1.2, opacity:1}} whileTap={"tap"} variants={parent} onTapStart={e => setAnimateKey(value.name)} transition={{type:"spring", duration:0.3, bounce:0.2}} className="opacity-90 relative">
                                        <p  className=" my-[2vw] opacity-100" >
                                            {value.name}
                                        </p>
                                    
                                    {/* <motion.div variants={child} animate={animateKey == value.name && "click"}  className="absolute border-white opacity-100 border-0 rounded-full top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2"></motion.div> */}
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            

        </header>
    )
}