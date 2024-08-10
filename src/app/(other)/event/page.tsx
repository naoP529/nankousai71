
import Image from "next/image"
import { Kaisei_Decol } from "next/font/google"
import { Suspense } from "react"
import GetEvent from "@/components/event/get_event"
import Loading from "@/components/global/parts/loading"

const kaiseiDecol = Kaisei_Decol({weight:["400","700"],subsets:["latin"]})

export default function page() {
    return(
        <div className="pt-[min(15vw,112px)]">
            <div className="w-full h-[35vw] relative">
                <Image src={"/event_placeholder.jpg"} alt="展示の様子" fill priority className="object-cover z-0 opacity-95"></Image>
                {/* <div className="w-full h-full absolute  z-[5] opacity-15 bg-gradient-to-r from-[#05a8bd] via-[#05bd92] to-[#f3e50a]"></div> */}
                <div className="w-full h-full absolute z-[6] flex ">
                    <p className={`${kaiseiDecol.className} ml-[3vw] my-auto text-[10vw] text-white font-bold`}>展示一覧</p>
                </div>
            </div>
            <Suspense
                fallback={
                    <Loading></Loading>  
                } 
            >
                <GetEvent></GetEvent>
            </Suspense>
        </div>
    )
}