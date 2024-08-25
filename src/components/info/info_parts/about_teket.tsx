"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { FaAngleDown } from "react-icons/fa";
import { headers } from "next/headers";

export default function AboutTeket() {
    return(
        <div className="w-full shadow-md rounded-md">
            <p className="text-[3vw] text-white bg-[darkturquoise] py-[2.2vw] px-[3vw] rounded-t-md">申し込みはTeketを通して行います</p>
            <p className="text-[darkturquoise] text-[3vw] pt-[2vw] leading-[160%] pb-[3vw] px-[3vw] text-justify rounded-b-lg bg-white font-normal tracking-wide">Teketはインターネット上でイベント等のチケットを取得することができるサービスです。南高祭に参加するにはこのチケットが必要です。</p>
        </div>
    )
}

export function TeketType() {
    const [isOpen, setOpne] = useState(false)

    const variants = {
        open:{
            height:"auto"
        },
        close:{
            height:"20vw"
        },
        down:{
            rotate:0
        },
        up:{
            rotate:"180deg"
        }
    }

    const setMenu = () => {
        if(isOpen == true) {
            setOpne(false)
        } else {
            setOpne(true)
        }
    }

    return(
        <div className="w-full shadow-md rounded-md">
            <div className="text-[3vw] text-white bg-slate-400 py-[2.2vw] px-[3vw] rounded-t-md flex items-center">申し込みに関して <motion.div variants={variants} className=" cursor-pointer mx-2 text-[4vw]" animate={isOpen? "up": "down"} onClick={setMenu} ><FaAngleDown></FaAngleDown></motion.div></div>
            <motion.div variants={variants} animate={isOpen? "open" : "close"} className="text-slate-400 text-[3vw] pt-[3vw] leading-[160%] pb-[3vw] px-[3vw] text-justify rounded-b-lg bg-white font-normal tracking-wide overflow-hidden">
                <p>※急激な校内の人員増加による危険防止のため、9:30入場と12:30入場の2種類の「入場用QRコード」をご用意しております。そのため、9:30入場の「入場用QRコード」は枚数に制限を設けております。先着順となりますので、ご理解とご協力をお願いいたします。</p>
                <p className="mt-[3vw]">※teketの利用には、メールアドレスの登録が必要となります。本校では、来場者の人数を把握し、万一の場合の連絡先の確保のために本システムを利用しておりますが、本校でメールアドレスの情報は入手しておりません。teketシステムの個人情報の取扱いにご同意いただいたうえで、ご登録・お手続きください。</p>
            </motion.div>
        </div>
    )
}