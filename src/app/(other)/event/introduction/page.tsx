"use client"
import Link from "next/link"
import { SquareButtonPinkShadow } from "@/components/global/parts/square_button"
import ShowDetails from "@/components/introduction/showDetails"
import { useSearchParams } from "next/navigation"
import { getEventDetails } from "./action"
import { useEffect } from "react"
import { useState } from "react"

import Loading from "@/components/global/parts/loading"
import NotFound from "@/components/global/parts/notFound"

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

type eventData = {
    event:{
        title:string,
        comment:string,
        place:string,
        time:string,
        type:string,
        tags:Array<string>,
        available:boolean
    },
    detail:Array<{
        title:string,
        content:string
    }>
}

export default function Page() {
    const [data, setData] = useState<eventData>()

    const params = useSearchParams()
    const name = params.get("name")?.toString()

    useEffect(() => {
        if(name == undefined) {
            return
        }

        const getData = async () => {
            const result = await getEventDetails(name) 
            if(result == null || result == "failed") {
                return
            }
            setData(result)
        }

        getData()
    },[])


    return(
        <div className="h-screen bg-white">
            {name?
            <div className="w-screen">
                {data? 
                <div>
                    <ShowDetails event={data.event} detail={data.detail} name={name}></ShowDetails>
                </div>  
                :
                <div className="pt-[35vw]">
                    <Loading></Loading>
                    {/* <p className={`text-[5vw] ${kaiseiDecol.className} text-center bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 bg-clip-text text-transparent`}>・・・読み込み中・・・</p> */}
                </div>
                }
            </div>
            : <NotFound text="展示一覧" link="/event"></NotFound>
            // <div className="mt-[30vw] w-screen">
            //     <p className={`text-[7vw] ${kaiseiDecol.className} text-center bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 bg-clip-text text-transparent`}>ページが見つかりません</p>
            //     <Link href={"/event"}>
            //         <div className="w-[40vw] my-[4vw] mx-auto">
            //             <SquareButtonPinkShadow text="展示一覧に戻る"></SquareButtonPinkShadow>
            //         </div>
            //     </Link>
            // </div>
            }
        </div>
    )
}