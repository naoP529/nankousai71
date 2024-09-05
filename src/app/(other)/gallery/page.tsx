import Pamphlet from "@/components/gallery/pamphlet"
import Gallery from "@/components/gallery/gallery"
import type { Metadata } from "next";
import BackTo from "@/components/global/back_button";

export const metadata: Metadata = {
    title: "ギャラリー | 第71回南高祭・展示の部2024",
    description: "南高・南高附属中最大の行事へようこそ。南高創立70周年・附属中創立10周年を迎えた今年、歴代の南高生から引き継がれた、「みんなが仲間に みんなが楽しく みんなで創ろう」の精神を次世代へと繋ぎます。",
};

export default function page() {
    const jsonLd = {
        "@context": "http://schema.org",
        "@type": "Event",
        "name": "南高祭",
        "startDate": "2024-09-07T09:30",
        "location": {
            "@type": "Place",
            "name": "横浜市立南高等学校・附属中学校",
            "address": {
            "@type": "PostalAddress",
            "addressRegion": "神奈川県",
            "addressLocality": "横浜市",
            "streetAddress": "港南区東永谷2丁目1-1"
                }
        },
        "description": "展示の様子を写真でご紹介します。また、現在エントランスにてパンフレットを無料で配布しています。ぜひお受け取りください！",
        "image": [
            "https://drive.google.com/file/d/137obuAzNIB6r-501h6D0-6SoFgLnqXd3/view?usp=drive_link"
        ],
    };

    return(
        <div className="pt-[25vw] h-screen bg-white 2xl:py-40 lg:py-32">
            <Pamphlet></Pamphlet>
            <div className="mt-[15vw] lg:mt-36">
                <Gallery></Gallery>
            </div>
            <div>
                <BackTo link="/" name="トップ"></BackTo>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    )
}