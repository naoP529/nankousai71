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
                    <motion.div initial={{opacity:0.9, scale:1}} whileHover={{opacity:1, scale:1.02}} transition={{ease:"easeInOut", duration:0.2}}  key={index} className="cursor-pointer rounded-xl my-[5vw] lg:my-12 shadow-sm drop-shadow-sm border-2 bg-white border-slate-100 ">
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