"use client"

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image"


type Props = {
    img:string
}

export default function ScrollMap(
    {img}:Props
) {
    return(
        <div className="w-full aspect-square rounded-full p-[1%] bg-gradient-to-br from-sky-500 via-[#05bd92] to-[#f3e50a]">
            <div className="w-full h-full rounded-full  bg-white relative">
                {/* <div className="w-full h-full bg-[darkturquoise] absolute rounded-full opacity-[0.3] pointer-events-none"></div> */}
                {/* <ScrollContainer ignoreElements="tips" className="w-full h-full rounded-full">
                    <div className="w-[150vw] p-[10vw]"> 
                        <div className="tips">
                            
                        </div>
                        <Image src={"/map_placeholder.jpg"}alt="フロアマップ" width={1000} height={1000} className=" aspect-auto"></Image>        
                    </div>
                </ScrollContainer> */}

                <TransformWrapper
                    smooth={true} 
                    wheel={{
                        step:0.7,
                        smoothStep:0.0025
                    }}
                    initialScale={0.8}
                    minScale={0.3}
                >
                    <TransformComponent 
                        wrapperStyle={{
                            height:"100%",          width:"100%",        borderRadius:"50%",
                        }}

                        contentStyle={{
                            width:"150vw",
                            padding:"",
                        }}
                    >
                        <Image src={img} alt="あ" width={1000} height={1000}></Image>
                    </TransformComponent>
                </TransformWrapper>
            </div>

        </div>
    )
}