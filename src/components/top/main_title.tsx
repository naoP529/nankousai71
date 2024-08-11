import Image from "next/image"

import { RiArrowDownWideFill } from "react-icons/ri";
import Link from "next/link";

const kaiseiDecol = Kaisei_Decol({weight:["700"],subsets:["latin"]})


export default function MainTitle() {
    return(
        <div className="h-screen w-full overflow-x-hidden relative">
            <Image src={"/南高祭ポスター背景.png"} alt="背景" fill  priority className="object-cover -z-10 object-top"></Image>
            <Image src={"/センター鳥.png"} alt="ちゅんちゅん" width={500} height={500}  className="aspect-auto w-[26%] top-[81.5vw] left-[43.5%] absolute z-10"></Image>
            <Image src={"/鳥1.png"} alt="ちゅんちゅん1号" width={500} height={500} className="aspect-auto w-[35%] top-[14vw] left-[65%] absolute z-10"></Image>
            <Image src={"/鳥2.png"} alt="ちゅんちゅん2号" width={500} height={500} className="aspect-auto w-[28%] top-[18vw] left-[42%] absolute z-20"></Image>
            <Image src={"/鳥3.png"} alt="ちゅんちゅん3号" width={500} height={500} className="aspect-auto w-[30%] top-[12vw] left-[82%] absolute z-30"></Image>
            <Image src={"/鳥4.png"} alt="ちゅんちゅん4号" width={500} height={500} className="aspect-auto w-[57%] top-[2.5vw] left-[43%] absolute z-40"></Image>
            <Image src={"/鳥5.png"} alt="ちゅんちゅん5号" width={500} height={500} className="aspect-auto w-[22%] top-[-9vw] left-[87%] absolute z-50"></Image>
            <Image src={"/鳥6.png"} alt="ちゅんちゅん6号" width={500} height={500} className="aspect-auto w-[21%] top-[-19.5vw] left-[68%] absolute z-60"></Image>
            <Image src={"/鳥7.png"} alt="ちゅんちゅん7号" width={500} height={500} className="aspect-auto w-[28%] top-[-8.5vw] left-[42%] absolute z-70 rotate-[20deg]"></Image>
            <div>
                <h1 className={
                    `absolute left-[6vw] top-[6vw] text-white ${kaiseiDecol.className}
                    flex flex-col text-[25vw] leading-[100%] opacity-90`
                }>
                   <span>祭</span>
                   <span>現</span> 
                   <span>不</span>
                   <span>可</span>
                   <span>能</span>
                </h1>
            </div>
            <div className="absolute w-[43vw] top-[112vw] left-[50%]">
                <Link href={"/info"}>
                    <Image src={"/流氷.png"} alt="流氷" width={500} height={500} className=""></Image>
                    <button className={`${kaiseiDecol.className} absolute top-[38%] left-[12%] text-[5.5vw] text-[#15b5b8]`}>参加申し込み</button>
                </Link>
            </div>
            <p className="absolute bottom-[3vw] right-[3vw] text-white opacity-80 
            text-[3.5vw] ">@イラスト：黒田まりな</p>
            <p className={`absolute top-[155vw] left-[7vw] text-[7.5vw] text-white opacity-90 z-40
                ${kaiseiDecol.className}`}>南高祭71st</p>
            <RiArrowDownWideFill className="absolute text-white bottom-[1%] left-1/2 -translate-x-1/2 size-[12vw] opacity-85"></RiArrowDownWideFill>
        </div>
    )
}