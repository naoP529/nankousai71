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
    ]

    return(
        <div className="w-full bg-white">   
            <h2 className={`mb-[5vw] ${kaiseiDecol.className} text-center text-[12vw] text-[darkturquoise] `}>ギャラリー</h2>
            <div className="w-full px-[5vw] flex flex-wrap justify-around pb-[10vw]">
                {img_tags.map((value) => (
                    <Link key={value.title} href={{pathname:"/gallery/preview", query:{title:value.title} }} replace>
                        <div className="w-[40vw] bg-white drop-shadow-lg rounded-md cursor-pointer">
                        <Image src={value.img} alt="image" width={1000} height={1000}  className="w-full aspect-square object-cover object-left-top rounded-t-md" placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 128))}`}></Image>
                        <p className="px-[2vw]  pt-[1.5vw]  text-center text-nowrap text-[3vw] overflow-hidden ">{value.title}</p>
                        <p className="text-[2vw] pr-[1.5vw] pb-[1vw] text-right">もっと見る→</p>
                    </div>
                    </Link>
                    
                ))}
            </div>
        </div>
    )
}