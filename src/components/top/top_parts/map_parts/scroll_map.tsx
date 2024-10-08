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
        <div className="w-full aspect-square  rounded-full  p-[1%] lg:p-[6px] bg-gradient-to-br from-sky-500 via-[#05bd92] to-[#f3e50a]">
            <div className="w-full h-full rounded-full  bg-white relative lg:hidden">
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
                        smoothStep:0.0022
                    }}
                    initialScale={0.7}
                    minScale={0.3}
                >
                    <TransformComponent 
                        wrapperStyle={{
                            height:"100%",          width:"100%",        borderRadius:"50%", cursor:"pointer"
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
            <div className="hidden lg:block w-full h-full bg-white relative rounded-full">
                <TransformWrapper
                    smooth={true} 
                    wheel={{
                        step:0.7,
                        smoothStep:0.0014
                    }}
                    initialPositionY={-1200}
                    initialPositionX={-1000}
                    initialScale={1.2}
                    minScale={0.3}
                >
                    <TransformComponent 
                        wrapperStyle={{
                            height:"100%",          width:"100%",        borderRadius:"50%", cursor:"pointer"
                        }}

                        contentStyle={{
                            width:"150vw",
                            padding:"40vw",
                        }}
                    >
                    <Image src={img} alt="あ" width={1000} height={1000}></Image>
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </div>
    )
}