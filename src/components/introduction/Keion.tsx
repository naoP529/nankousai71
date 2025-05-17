"use client" 
import { useState, useEffect } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { getBandData } from "./get_band";
import { MdMusicNote } from "react-icons/md";
import Loading from "../global/parts/loading";
import { FaMusic } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { motion } from "framer-motion";

type band_type = {
    name:string,
    time:string,
    comment:string,
    available:boolean
}

type new_data = {
    name:string,
    time:string,
    comment:string,
    available:boolean,
    timeStamp:Array<number>,
    timeText:Array<string>
}

export default function Keion() {
    console.log("軽音楽部だよ")
    const [data, setData] = useState<Array<new_data>>()
    const [num, setNum] = useState(0)

    useEffect(() => {
        const getData = async () => {
            const result = await getBandData()
            if(result == null || result == "failed") {
                console.log("failed")
                return
            }
            setData(result)
        }

        getData()
    },[])

    const variants = {
        open:{
            height:"auto"
        },
        close: {
            height:0
        }
    }

    const numCon = (e:number) => {
        if(num == e + 1) {
            setNum(0)
        } else {
            setNum(e+1)
        }
    }

    return(
        <div className="w-full px-[5vw] lg:px-6 lg:pb-8">
            {data? 
                // <div className="w-full mx-auto lg:w-[70%]">
                //     {data.map((value, index) => (
                //         <div key={index} className="rounded-md text-gray-600 my-[8vw] lg:my-12 bg-gradient-to-br  from-purple-50 via-fuchsia-200 to-pink-200 drop-shadow-md">
                //             <p className="font-medium px-[3vw] pt-[2vw] lg:pt-4 lg:px-10 text-[4vw] lg:text-2xl flex items-center">
                //                 <span className="pr-[2vw]">{value.timeText[0]}</span>
                //                 <IoTimeOutline className="relative top-[0.1vw] mr-[1vw]"></IoTimeOutline>
                //                 <span>{value.timeText[1]}</span>
                //                 <span >~</span>
                //                 <span>{value.timeText[2]}</span>
                                
                //             </p>
                //             <div className="flex items-center justify-center text-[6vw] lg:text-4xl pt-[1.5vw] pb-[2vw] lg:pt-4 lg:pb-5">
                //                 <MdMusicNote className="mr-[1vw] relative top-[0.1vw]"></MdMusicNote>
                //                 {value.name}
                //             </div>
                //             {value.comment == null ? <div>
                //                 <p className="text-center pb-[2.5vw] lg:pb-6 text-[3.5vw] lg:text-2xl">ぜひ聴きに来てください！</p>
                //             </div> : <div>
                //                 <p></p>    
                //             </div>}
                //         </div>
                //     ))}
                // </div>
                <div className="w-[90%] mx-auto lg:w-[70%]">
                {data.map((value, index) => (
                    <motion.div initial={{opacity:0.9, scale:1}} whileHover={{opacity:1, scale:1.02}} transition={{ease:"easeInOut", duration:0.2}}  key={index} className="cursor-pointer rounded-xl my-[5vw] lg:my-12 shadow-sm drop-shadow-sm border-2 bg-white border-slate-100 " onClick={() => (numCon(index))}>
                        <div>
                            <p className="font-medium px-[3vw] pt-[2vw] lg:pt-4 lg:px-6 text-[3.5vw] lg:text-2xl flex items-center bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 bg-clip-text text-transparent  ">
                                <span className="pr-[1vw]">{value.timeText[0]}</span>
                                <GoClockFill className="relative top-[0.12vw] mr-[1vw] scale-90 text-purple-400"></GoClockFill>
                                <span>{value.timeText[1]}</span>
                                <span >~</span>
                                <span>{value.timeText[2]}</span>
                                <p className="border-t-2 translate-y-1/2"></p>
                        </p>
                        <div className="flex  items-center justify-end italic bg-gradient-to-br from-fuchsia-500  to-sky-400 bg-clip-text text-transparent text-[6vw] lg:text-4xl pt-[1.5vw] pb-[2vw] pr-[5%] lg:pt-4 lg:pb-5">
                                <MdMusicNote className="mr-[1vw] relative top-[0.1vw] text-purple-400 rotate-6"></MdMusicNote>
                                <p>{value.name}</p>
                            </div>
                            <p className="flex text-[2.5vw] lg:text-2xl  items-center absolute bottom-[10%] left-[3%] opacity-65">
                                <MdKeyboardDoubleArrowLeft className="translate-y-[2%]"></MdKeyboardDoubleArrowLeft>
                                view more
                            </p>
                        </div>
                        <motion.div className="w-[80%] opacity-85 rounded-lg border-2 border-slate-100 overflow-hidden" animate={num == index + 1 ? "open": "close"} variants={variants}>   
                            <div className="mx-4">
                                <div className="flex  items-center italic text-gray-800 text-[6vw] lg:text-4xl pt-[1.5vw] pb-[2vw] pr-[5%] lg:pt-4 lg:pb-5">
                                    <p className={`text-[3vw] font-medium tracking-tight bg-gradient-to-br from-fuchsia-500  to-sky-400  text-white px-[3vw] py-[0.2vw] rounded-full  inline-block  text-left  my-[0.7vw] translate-y-[0%]     lg:text-md lg:px-8 lg:py-[2px] lg:mt-6 lg:mb-2`}>
                                        バンド          
                                    </p>
                                    <p>{value.name}</p>
                                </div>
                            </div>
                            <div className="mx-4 rounded-xl bg-slate-300">
                                {data.filter((e) => (e.name == value.name)).map((content,n) => (
                                    <div key={n}>
                                        <p className={`text-[3.5vw] font-medium tracking-tight text-slate-500  bg-white px-[3vw] py-[0.2vw] rounded-full  inline-block  text-left  my-[0.7vw] translate-y-[0%]     lg:text-lg lg:px-8 lg:py-1 lg:mt-6 lg:mb-2`}>
                                            Live{n+1}         
                                        </p>
                                        <p className="font-medium px-[3vw] pt-[2vw] lg:pt-4 lg:px-6 text-[3.5vw] lg:text-2xl flex items-center text-white  ">
                                            <span className="pr-[1vw]">{content.timeText[0]}</span>
                                            <GoClockFill className="relative top-[0.12vw] mr-[1vw] scale-90 text-white"></GoClockFill>
                                            <span>{content.timeText[1]}</span>
                                            <span >~</span>
                                            <span>{content.timeText[2]}</span>
                                            <p className="border-t-2 translate-y-1/2"></p>
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="text-slate-300 text-center py-4">
                                {value.comment}
                            </div>
                        </motion.div>   
                    </motion.div>
                ))}
            </div>
            :
            <div className="pt-[10vw]">
                    <Loading></Loading>
                    {/* <p className={`text-[5vw] ${kaiseiDecol.className} text-center bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 bg-clip-text text-transparent`}>・・・読み込み中・・・</p> */}
            </div>}  
        </div>
    )
}