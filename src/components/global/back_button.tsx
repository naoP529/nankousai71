"use client" 
import { IoCaretBackCircleSharp } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";
import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

type Props = {
        name:string,
        link:string
}

export default function BackTo(
    {name, link}:Props
) {
    const container = {
        hover:{
            scale:1.02,
            opacity:1
        },
        initial:{
            scale:1,
            opacity:0.8
        }
    }

    const items = {
        hover:{
            width:"auto"
        },
        initial:{
            width:0
        }
    }

    return(
        <div className=" text-gray-800 fixed bottom-[3svh] left-[2vw] ">
            <motion.div variants={container} whileHover={"hover"} initial={"initial"} className="hidden lg:block">
                <Link href={link} className="items-center flex bg-white rounded-full shadow-lg border-2 border-slate-100">
                    <div className="text-6xl">
                        <IoCaretBackCircleSharp></IoCaretBackCircleSharp>
                    </div>
                    <motion.div variants={items}  className="overflow-hidden text-nowrap text-3xl">
                        <p className={`mr-[1vw] -translate-y-[2%] ${kaiseiDecol.className}`}>{name}に戻る</p>
                    </motion.div>
                </Link> 
            </motion.div> 
            <div className="lg:hidden">
                <Link href={link} className="items-center flex bg-white rounded-full shadow-md border-2 border-slate-100">
                    <div className="text-[8vw] md:text-[7vw]">
                        <IoCaretBackCircleSharp></IoCaretBackCircleSharp>
                    </div>
                    <div   className="overflow-hidden text-nowrap text-3xl">
                        <p className={`mr-[2vw] -translate-y-[5%] text-[5vw] md:text-[4vw] ${kaiseiDecol.className}`}>{name}へ</p>
                    </div>
                </Link> 
            </div>  
        </div>
    )
}