"use client"

import { MdEventAvailable } from "react-icons/md";

const data = [
    {
        start:new Date(2024, 9, 7, 9, 45),
        end:new Date(2024, 9, 7, 10, 15)
    },
    {
        start:new Date(2024, 9, 7, 10, 15),
        end:new Date(2024, 9, 7, 10, 45)
    },
    {
        start:new Date(2024, 9, 7, 10, 45),
        end:new Date(2024, 9, 7, 11, 15)
    },
    {
        start:new Date(2024, 9, 7, 11, 15),
        end:new Date(2024, 9, 7, 11, 45)
    },
    {
        start:new Date(2024, 9, 7, 11, 45),
        end:new Date(2024, 9, 7, 12, 15)
    },
    {
        start:new Date(2024, 9, 7, 12, 45),
        end:new Date(2024, 9, 7, 13, 15)
    },
    {
        start:new Date(2024, 9, 7, 13, 15),
        end:new Date(2024, 9, 7, 13, 45)
    },
    {
        start:new Date(2024, 9, 7, 13, 45),
        end:new Date(2024, 9, 7, 14, 15)
    },
    {
        start:new Date(2024, 9, 7, 14, 15),
        end:new Date(2024, 9, 7, 14, 45)
    },
    {
        start:new Date(2024, 9, 7, 14, 45),
        end:new Date(2024, 9, 7, 15, 15)
    },
]

export default function SadouClub() {
    const now = new Date()

    let status = ""
    let onTime = ""
    let nextTime = ""
    const setTime = () => {
        if(now.getTime() < data[0].start.getTime()) {
            status = "yet"
            return
        }
        const array = data.map((value, index) => {
            if(value.start.getTime() <= now.getTime() && now.getTime() < value.end.getTime()) {
                status = "now"
                onTime =  `第${(index + 1)}回 ${value.start.getHours()}:${value.start.getMinutes()}~${value.end.getHours()}:${value.end.getMinutes()}`
                if(index == data.length -1) {
                    nextTime = "次回の公演はありません。"
                } else {
                    nextTime = `次回の公演は、第${index+2}回 ${data[index+1].start.getHours()}:${data[index+1].start.getMinutes()}~${data[index+1].end.getHours()}:${data[index+1].end.getMinutes()}です。`
                }
                return
            }
        })
        if(data[data.length - 1].end.getTime() <= now.getTime()) {
            status = "end"
        }
    }
    setTime()


    return(
        <div>
            {status == "yet" && 
                <div className="pb-[3vw]"> 
                    <p className="tracking-wide lg:text-3xl text-[4vw] ml-[2vw] flex items-center">
                    <MdEventAvailable className="mr-[0.5vw]"></MdEventAvailable>次回の公演</p>
                    <p className="2xl:text-6xl lg:text-5xl text-center text-[6vw] mt-[1vw] mb-[2vw]">第1回 9:45~10:15</p>
                </div>
            }
            {status == "now" &&
                <div className="pb-[2vw]">
                    <p className="tracking-wide text-[4vw] ml-[2vw] flex items-center"><MdEventAvailable className="mr-[0.5vw]"></MdEventAvailable>公演中</p>
                    <p className="text-center text-[6vw] mb-[2vw]">{onTime}</p>
                    <p className="text-center">{nextTime}</p>
                </div>  
            }
            {status == "end" &&
                <div className="pb-[2vw]">
                    <p className="text-center text-[7vw]">公演終了</p>
                    <p className="text-center mt-[1vw] text-[3.5vw]">皆様ご来場ありがとうございました！！</p>
                </div>
            }
            <div>
                <p className="text-center text-[4.5vw] lg:text-4xl mb-[2vw] lg:mb-6">・・・公演一覧・・・</p>
                <div className="flex flex-wrap justify-around">
                {data.map((value, index) => (
                    <div key={index} className="flex justify-between lg:text-3xl text-[4vw] w-[45%] lg:w-[40%] lg:my-2">
                        <p>第{(index + 1)}回 </p>
                        <p>{value.start.getHours()}:{value.start.getMinutes()}~{value.end.getHours()}:{value.end.getMinutes()}</p>
                    </div>
                ))}
                </div>
                
            </div>
        </div>
    )
}