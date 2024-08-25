
import Image from "next/image"


import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol


type Props = {
    text:string,
}

export default function SquareButton(
    {text}:Props
) {
    return(
        <div className="w-full aspect-[3/1] relative rounded-xl border-2 border-white">
            {/* <div className="w-full h-full absolute bg-white opacity-20 rounded-lg"></div> */}
            <Image src={"/レイヤー 2.png"} alt="ドット背景" fill className="opacity-80 rounded-xl"></Image>
            <div className="w-full h-full flex">
                <p className="text-[4.5vw] font-normal inline-block m-auto">{text}</p>
            </div>
            
        </div>
    )
}

export function SquareButtonPinkShadow(
    {text}:Props
) {
    return(
        <div className="w-full aspect-[3.2/1] rounded-lg relative drop-shadow-lg">
            <div className="w-full h-full rounded-lg bg-white">
                <div className="w-full h-full bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 absolute opacity-70 rounded-md"></div>
                <div className="h-full w-full absolute z-10 flex">
                    <p className={`text-white m-auto text-[4.5vw]`}>{text}</p>
                </div>
            </div>
        </div>
    )
}

export function SquareButtonPinkShadow2(
    {text}:Props
) {
    return(
        <div className="w-full aspect-[3/1] rounded-lg relative drop-shadow-lg">
            <div className="w-full h-full rounded-md bg-white">
                <div className="w-full h-full bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 absolute opacity-70 rounded-md"></div>
                <div className="h-full w-full absolute z-10 flex">
                    <p className={`text-white m-auto text-[3.5vw] ${kaiseiDecol.className}`}>{text}</p>
                </div>
            </div>
        </div>
    )
}

export function SquareButtonWhite(
    {text}:Props
) {
    return(
        <div className="w-full aspect-[3/1] rounded-lg relative drop-shadow-lg">
            <div className="w-full h-full rounded-md">
                {/* <div className="w-full h-full bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 absolute opacity-70 rounded-md"></div> */}
                <div className="h-full w-full absolute z-10 flex">
                    <p className={`text-white m-auto text-[3.5vw] ${kaiseiDecol.className}`}>{text}</p>
                </div>
            </div>
        </div>
    )
}

export function SquareButtonPinkWhite(
    {text}:Props
) {
    return(
        <div className="w-full aspect-[3.2/1] relative ">
            <div className="w-full h-full bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 absolute p-[2%] z-0 rounded-lg">
                <div className="w-full h-full bg-white rounded-md"></div>
            </div>
            <div className="h-full w-full absolute z-10 flex">
                <p className="bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 bg-clip-text text-transparent m-auto text-[4.5vw]font-medium">{text}</p>
            </div>
        </div>
    )
}