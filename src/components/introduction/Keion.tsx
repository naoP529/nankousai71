"use client" 
import { useState, useEffect } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { getBandData } from "./get_band";
import { MdMusicNote } from "react-icons/md";
import Loading from "../global/parts/loading";
import { FaMusic } from "react-icons/fa6";

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
        <div className="w-full px-[5vw]">
            {data? 
                <div className="w-full">
                    {data.map((value, index) => (
                        <div key={index} className="rounded-md text-gray-600 my-[8vw] bg-gradient-to-br  from-purple-50 via-fuchsia-200 to-pink-200 drop-shadow-md">
                            <p className="font-medium px-[3vw] pt-[2vw] text-[4vw] flex items-center">
                                <span className="pr-[2vw]">{value.timeText[0]}</span>
                                <IoTimeOutline className="relative top-[0.1vw] mr-[1vw]"></IoTimeOutline>
                                <span>{value.timeText[1]}</span>
                                <span >~</span>
                                <span>{value.timeText[2]}</span>
                                
                            </p>
                            <div className="flex items-center justify-center text-[6vw] pt-[1.5vw] pb-[2vw]">
                                <MdMusicNote className="mr-[1vw] relative top-[0.1vw]"></MdMusicNote>
                                {value.name}
                            </div>
                            {value.comment == null ? <div>
                                <p className="text-center pb-[2.5vw] text-[3.5vw]">ぜひ聴きに来てください！</p>
                            </div> : <div>
                                <p></p>    
                            </div>}
                        </div>
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