import Link from "next/link"
import Image from "next/image"
import { skeleton } from "@/components/global/skeleton";
import { toBase64 } from "@/components/global/skeleton";

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Gallery () {

    const img_tags = [
        {title:"第71回南高祭ポスター", img:"/第71回 南高祭ポスター（376x524mm）.jpg"},
        {title:"rondo表紙", img:"/rondo.jpg"},
        {title:"ご来場お待ちしております", img:"/1725741490270.jpg",  artist:"作者不明"},
        // {title:"rondo表紙", img:"/rondo.jpg"},
        // {title:"rondo表紙", img:"/rondo.jpg"},
        // {title:"rondo表紙", img:"/rondo.jpg"},
        // {title:"rondo表紙", img:"/rondo.jpg"},
    ]

    return(
        <div className="w-full bg-white">   
            <h2 className={`mb-[5vw] ${kaiseiDecol.className} text-center text-[12vw] 2xl:text-8xl lg:text-6xl lg:mb-16 text-[darkturquoise] `}>ギャラリー</h2>
            <div className="w-full px-5 lg:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 grid-cols-[repeat(auto-fit,minmax(140px,1fr))] lg:gap-16 grid pb-[10vw] lg:pb-20 lg:px-20">
                {img_tags.map((value) => (
                    <Link key={value.title} href={{pathname:"/gallery/preview", query:{title:value.title} }} replace>
                        <div className="bg-white drop-shadow-lg rounded-md cursor-pointer mb-3">
                            <Image src={value.img} alt="image" width={1000} height={1000}  className="w-full aspect-square object-cover object-left-top rounded-t-md" placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 128))}`}></Image>
                            <p className="pt-[1.5vw]  text-center text-nowrap text-xs lg:text-2xl lg:pt-4 overflow-hidden ">{value.title}</p>
                            <p className="text-[0.6rem] pr-[1.5vw] pb-[1vw] text-right lg:pr-4 lg:text-xl lg:pt-1 lg:pb-3 text-gray-500">もっと見る→</p>
                        </div>
                    </Link>
                ))}
                {["", "", "", ""].map((value, index) => (
                    <div key={index}></div>
                ))}
            </div>
        </div>
    )
}