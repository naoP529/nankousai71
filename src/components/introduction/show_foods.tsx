"use client"
import { useState, useEffect } from "react"
import { getFoodData } from "./get_food"
import Loading from "../global/parts/loading";
import { MdOutlineRestaurant } from "react-icons/md";
import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

type foods = {
    name:string,
    menu:string,
    value:number,
    type:string
}

type Props = {
    name:string
}

export default function GetFood(
    {name}:Props
) {
    const [data, setData] = useState<Array<foods>>()

    useEffect(() => {
        const getData = async () => {
            const result = await getFoodData()
            if(result == null || result == "failed") {
                console.log("failed")
                return
            }
            const foundData = result.filter((value) => (
                value.name == name
            ))
            setData(foundData)
        }

        getData()
    },[])


    

    return (
        <div className="w-full">
            {data? <div className="w-full">
                <div className="flex text-[10vw] items-center text-orange-400 justify-center mb-[4vw]">
                    <MdOutlineRestaurant className="relative top-[0.5vw]"></MdOutlineRestaurant>
                    <p className={`${kaiseiDecol.className} ml-[0.5vw]`}>メニュー</p>
                </div>
                {data.map((value, index) => (
                    <div key={index} className="w-full border-2 shadow-md border-gray-200 h-[18vw] mb-[5vw] p-2">
                        <div className="border-2 h-full  border-orange-300 flex items-center text-[5vw] text-gray-500">
                            <p className="ml-[2vw] flex-grow">{value.menu}</p>
                            <p className="mr-[2vw]"> {value.value}円</p>
                        </div>
                    </div>
                ))}
            </div> : <div className="pt-[10vw]">
                <Loading></Loading>
            </div> }
        </div>
    )
}