import ClassEvent from "./top_parts/events_parts/event_links"
import { ClubEvent } from "./top_parts/events_parts/event_links"
import { FoodEvent } from "./top_parts/events_parts/event_links"
import { EventLinkPC } from "./top_parts/events_parts/event_links"
import SquareButton from "../global/parts/square_button"
import Link from "next/link"

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Events() {
    return(
        <div className="bg-[darkturquoise] pt-[23vw] pb-[10vw] font-bold lg:py-24 text-white  text-center">
            <h2 className={`${kaiseiDecol.className} text-[10vw] 2xl:text-7xl lg:text-5xl`}>展示・イベント</h2>
            <Link href={"/event"}>
                <div className="w-[35vw] mx-auto mt-[5vw] lg:max-w-[200px] lg:mt-10">
                    <SquareButton text="一覧で見る"></SquareButton>
                </div>
            </Link> 
            <div className="my-[14vw] lg:hidden">
                <ClassEvent></ClassEvent>
                <div className="my-[12vw]">
                    <ClubEvent></ClubEvent>
                </div>
                <div className="m">
                    <FoodEvent></FoodEvent>
                </div>
            </div>
            <div className="w-full hidden lg:block">
                <EventLinkPC></EventLinkPC>
            </div>
        </div>
    )
}