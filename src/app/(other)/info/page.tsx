import Application from "@/components/info/application"
import Attention from "@/components/info/attention"
import Access from "@/components/info/access"
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "インフォメーション | 第71回南高祭",
    description: "南高・南高附属中最大の行事へようこそ。南高創立70周年・附属中創立10周年を迎えた今年、歴代の南高生から引き継がれた、「みんなが仲間に みんなが楽しく みんなで創ろう」の精神を次世代へと繋ぎます。",
};

export default function page() {
    return(
        <div className="">
            <Application></Application>
            <div id="access">
                <Access></Access>
            </div>
            <div id="attention">
                <Attention></Attention>
            </div>
        </div>
    )
}