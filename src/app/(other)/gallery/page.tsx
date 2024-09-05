import Pamphlet from "@/components/gallery/pamphlet"
import Gallery from "@/components/gallery/gallery"
import type { Metadata } from "next";
import BackTo from "@/components/global/back_button";

export const metadata: Metadata = {
    title: "ギャラリー | 第71回南高祭・展示の部2024",
    description: "南高・南高附属中最大の行事へようこそ。南高創立70周年・附属中創立10周年を迎えた今年、歴代の南高生から引き継がれた、「みんなが仲間に みんなが楽しく みんなで創ろう」の精神を次世代へと繋ぎます。",
};

export default function page() {
    return(
        <div className="pt-[25vw] h-screen bg-white 2xl:py-40 lg:py-32">
            <Pamphlet></Pamphlet>
            <div className="mt-[15vw] lg:mt-36">
                <Gallery></Gallery>
            </div>
            <div>
                <BackTo link="/" name="トップ"></BackTo>
            </div>
        </div>
    )
}