import { Kaisei_Decol } from "next/font/google"
import Image from "next/image"
import { SquareButtonPinkShadow } from "../global/parts/square_button"
import Link from "next/link"

const kaiseiDecol = Kaisei_Decol({weight:["400","700"],subsets:["latin"]})

export default function Guide() {
    return(
        <div className="bg-[darkturquoise] pt-[23vw] pb-[10vw]  text-white">
            <h2 className={`${kaiseiDecol.className} text-[8vw] text-center` }>パンフレット配布中！</h2>
            <div className="w-[60vw] mx-auto h-auto relative my-[7vw]">
                <Link href={"/gallery"}>
                    <Image src={"/ダウンロード.jpeg"} alt="パンフレット" width={2000} height={1200} className="rounded-md w-full aspect-auto drop-shadow-lg "></Image>
                </Link>     
            </div>
            <p className={`${kaiseiDecol.className} text-[5vw] text-center` }>1階のエントランスにて受領可能<br />おひとり様1部まで</p>
            <Link href={"/gallery"}>
                <div className="w-[40vw] mx-auto my-[7vw]">
                    <SquareButtonPinkShadow text="電子版はこちら"></SquareButtonPinkShadow>
                </div>
            </Link>   
        </div>
    )
}