"use client"

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image"

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function page() {
    const mapImages = [
        {floor:"1階", href:"/map_placeholder.jpg"},
        {floor:"2階", href:"/map_placeholder.jpg"},
        {floor:"3階", href:"/map_placeholder.jpg"},
        {floor:"4階", href:"/map_placeholder.jpg"},
        {floor:"5階", href:"/map_placeholder.jpg"},
        {floor:"6階", href:"/map_placeholder.jpg"},
    ]


    return (
        <div className="py-[30vw]">
            <h2 className={`${kaiseiDecol.className} text-center text-[12vw] text-[darkturquoise]`}>フロアマップ</h2>

            <div className="my-[15vw] w-full">
                {mapImages.map((value) => (
                    <div className="my-[15vw]" key={value.href}>
                        <div className="flex  mx-[3vw] mb-[5vw]">
                            <div className=" w-[2vw] bg-[darkturquoise]"></div>
                            <p className={`${kaiseiDecol.className} text-[10vw] ml-[2vw] text-[darkturquoise] `}>{value.floor}</p>
                        </div>
                        <TransformWrapper
                            smooth={true} 
                            wheel={{
                                step:0.5,
                                smoothStep:0.0022
                            }}
                            initialScale={1}
                            minScale={0.5}
                        >
                            <TransformComponent
                                wrapperStyle={{
                                    width:"90vw",
                                    marginLeft:"3vw",
                                    marginRight:"3vw",
                                    borderRadius:"2vw",
                                    cursor:"pointer",
                                    border:"solid",
                                    borderWidth:"0.8vw",
                                    borderColor:"#EEEEEE"
                                }}

                                contentStyle={{
                                    width:"120vw",
                                    padding:"",
                                }}
                            >
                                <Image src={value.href} alt="フロアマップ" width={1000} height={2000}></Image>
                            </TransformComponent>
                        </TransformWrapper>
                    </div>
                ))}

            </div>
        </div>
    )
}