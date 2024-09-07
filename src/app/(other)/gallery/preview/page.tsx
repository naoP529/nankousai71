"use client"
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { skeleton } from "@/components/global/skeleton";
import { toBase64 } from "@/components/global/skeleton";
import NotFound from "@/components/global/parts/notFound";
import BackTo from "@/components/global/back_button";

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Page() {
    const img_tags = [
        {title:"第71回南高祭ポスター", img:"/第71回 南高祭ポスター（376x524mm）.jpg", artist:"作者不明"},
        {title:"rondo表紙", img:"/rondo.jpg",  artist:"作者不明"},
        {title:"ご来場お待ちしております", img:"/1725741490270.jpg",  artist:"作者不明"},
    ]

    const params = useSearchParams();
    const title = params.get("title")?.toString()

    const found = img_tags.find((value) => value.title == title)

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
        "description": "イラスト・写真のプレビューです。",
        "image": [
          "https://drive.google.com/file/d/137obuAzNIB6r-501h6D0-6SoFgLnqXd3/view?usp=drive_link"
        ],
      };

    return(
        <div className="w-full pt-[25vw] h-screen bg-white 2xl:py-40 lg:py-32">
            <title>プレビュー | 第71回南高祭・展示の部2024</title>
            <div>
                {title == "パンフレット" ? <div>

                </div>: <div>
                    {found ? <div className="w-full bg-white pb-[20vw]">
                        <h2 className={`mb-[8vw] ${kaiseiDecol.className} text-center text-[12vw] text-[darkturquoise] lg:mb-20  lg:text-6xl 2xl:text-8xl`}>プレビュー</h2>
                        <Image src={found.img} alt={found.title} width={2000} height={3000} placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 128))}`} className="w-[90%] aspect-auto mx-auto drop-shadow-lg lg:w-auto lg:h-[80svh]" priority></Image>
                        <p className="text-[5vw] text-center mt-[5vw] mb-[2vw] text-slate-600 lg:text-5xl lg:mt-14 lg:">{found.title}</p>
                        <p className="text-[4vw] text-right mr-[5vw] text-slate-800 lg:text-4xl">作者：{found.artist}</p>
                        <BackTo link="/gallery" name="ギャラリー"></BackTo>
                    </div>
                    :  <NotFound text="ギャラリー" link="/gallery"></NotFound>
                    // <div className="mt-[30vw] w-screen">
                    // <p className={`text-[7vw] ${kaiseiDecol.className} text-center bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 bg-clip-text text-transparent`}>ページが見つかりません</p>
                    //     <Link href={"/gallery"}>
                    //         <div className="w-[40vw] my-[4vw] mx-auto">
                    //             <SquareButtonPinkShadow text="ギャラリーに戻る"></SquareButtonPinkShadow>
                    //         </div>
                    //     </Link>
                    // </div>
                    }
                </div>}
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </div>
    )
}