
import Date2 from "./top_parts/9798"
import RoundButtonPink from "../global/parts/rounded_button"
import { RoundButtonBlue } from "../global/parts/rounded_button"
import { RoundButtonRed } from "../global/parts/rounded_button"
import { text } from "stream/consumers"
import Link from "next/link"


const kaiseiDecol = Kaisei_Decol({weight:["700"],subsets:["latin"]})

export default function Date() {
    return(
        <div className="w-full my-24">
            <h2 className={`${kaiseiDecol.className} text-center text-[10vw] text-[darkturquoise]`}>開催日時</h2>
            <Date2></Date2>
            <div className="my-[7vw] flex justify-center">
                <Link href={"/info"}>
                    <div className="-translate-x-1 w-[45vw]">
                        <RoundButtonPink text={"参加申し込み"} size={50}></RoundButtonPink>
                    </div>
                </Link>

            </div>
            <div className="flex justify-around mt-[10vw] mb-[20vw]">
                <Link href={"/info#access"}>
                    <div className="w-[40vw]">
                        <RoundButtonBlue text={"アクセス"} size={40}></RoundButtonBlue>
                    </div>
                </Link>
                <Link href={"/info#attention"}>
                    <div className="w-[40vw]">
                        <RoundButtonRed text={"注意事項"} size={40} ></RoundButtonRed>
                    </div>
                </Link>
            </div>
        </div>
    )
}