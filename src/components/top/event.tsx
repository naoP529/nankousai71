import ClassEvent from "./top_parts/events_parts/event_links"
import { ClubEvent } from "./top_parts/events_parts/event_links"
import { FoodEvent } from "./top_parts/events_parts/event_links"

import SquareButton from "../global/parts/square_button"
import Link from "next/link"

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Events() {
    return(
        <div className="bg-[darkturquoise] pt-[23vw] pb-[10vw] font-bold text-white  text-center">
            <h2 className={`${kaiseiDecol.className} text-[10vw]`}>展示・イベント</h2>
            <Link href={"/event"}>
                <div className="w-[35vw] mx-auto mt-[5vw]">
                    <SquareButton text="一覧で見る"></SquareButton>
                </div>
            </Link> 
            <div className="my-[14vw]">
                <ClassEvent></ClassEvent>
                <div className="my-[12vw]">
                    <ClubEvent></ClubEvent>
                </div>
                <div className="m">
                    <FoodEvent></FoodEvent>
                </div>
            </div>

        </div>
    )
}