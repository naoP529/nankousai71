"use client"
import { time } from "console";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SquareButtonPinkShadow } from "@/components/global/parts/square_button";
import { Kaisei_Decol } from "next/font/google"
import NotFound from "@/components/global/parts/notFound";

const kaiseiDecol = Kaisei_Decol({weight:["400","700"],subsets:["latin"]})

export default function page() {
    const img_tags = [
        {title:"第71回南高祭ポスター", img:"/第71回 南高祭ポスター（376x524mm）.jpg", artist:"作者不明"},
        {title:"rondo表紙", img:"/rondo.jpg",  artist:"作者不明"},
    ]

    const params = useSearchParams();
    const title = params.get("title")?.toString()

    const found = img_tags.find((value) => value.title == title)

    return(
        <div className="w-full pt-[25vw]">
            {found ? <div className="w-full pb-[20vw]">
                <h2 className={`mb-[8vw] ${kaiseiDecol.className} text-center text-[12vw] text-[darkturquoise] `}>プレビュー</h2>
                <Image src={found.img} alt={found.title} width={2000} height={3000} className="w-[90%] aspect-auto mx-auto drop-shadow-lg" priority></Image>
                <p className="text-[5vw] text-center mt-[5vw] mb-[2vw] text-slate-600">{found.title}</p>
                <p className="text-[4vw] text-right mr-[5vw] text-slate-800 ">作者：{found.artist}</p>
                <Link href={"/gallery"} className="fixed  bottom-0 left-0">
                    <p className="text-[5vw] ml-[3vw] mb-[2vw] text-gray-200 hover:text-gray-800">←ギャラリーに戻る</p>
                </Link>
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
        </div>
    )
}