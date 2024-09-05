import Application from "@/components/info/application"
import Attention from "@/components/info/attention"
import Access from "@/components/info/access"
import type { Metadata } from "next";
import BackTo from "@/components/global/back_button";

export const metadata: Metadata = {
    title: "インフォメーション | 第71回南高祭・展示の部2024",
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
        "description": "来場チケットの入手はこちらから。開催地へのアクセス方法などもご紹介します。",
        "image": [
            "https://drive.google.com/file/d/137obuAzNIB6r-501h6D0-6SoFgLnqXd3/view?usp=drive_link"
        ],
        "offers": {
            "@type": "Offer",
            "price": "0",
            "url":"https://teket.jp/6636/37971"
        }
    };
    return(
        <div className="">
            <Application></Application>
            <div id="access">
                <Access></Access>
            </div>
            <div id="attention">
                <Attention></Attention>
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