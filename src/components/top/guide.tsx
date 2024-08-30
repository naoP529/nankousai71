
import Image from "next/image"
import { SquareButtonPinkShadow } from "../global/parts/square_button"
import Link from "next/link"

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Guide() {
    return(
        <div className="bg-[darkturquoise] pt-[23vw] pb-[10vw] 2xl:pt-32 lg:py-20  text-white">
            <h2 className={`${kaiseiDecol.className} text-[8vw] text-center 2xl:text-7xl lg:text-5xl` }>パンフレット配布中！</h2>
            <div className="lg:flex justify-center lg:my-14">
                <div className="w-[60vw] mx-auto h-auto relative my-[7vw] lg:my-0 xl:max-w-[500px] lg:max-w-[400px] lg:mx-12">
                    <Link href={"/gallery"}>
                        <Image src={"/24年度rondo 暫定版-1.png"} alt="パンフレット" width={2000} height={1200} className="rounded-md w-full aspect-auto drop-shadow-lg "></Image>
                    </Link>     
                </div>
                <div className="lg:flex flex-col justify-center">
                    <p className={`${kaiseiDecol.className} text-[5vw] text-center xl:text-4xl lg:text-2xl` }>1階のエントランスにて受領可能<br/>おひとり様1部まで</p>
                    <Link href={"/gallery"}>
                        <div className="w-[40vw] mx-auto my-[7vw] lg:max-w-[230px] lg:my-10">
                            <SquareButtonPinkShadow text="電子版はこちら"></SquareButtonPinkShadow>
                        </div>
                    </Link>   
                </div>  
            </div>      
        </div>
    )
}