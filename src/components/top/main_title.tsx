import Image from "next/image"
import { KaiseiDecol } from "@/app/fonts";
import { RiArrowDownWideFill } from "react-icons/ri";
import Link from "next/link";

const kaiseiDecol = KaiseiDecol


export default function MainTitle() {
    return(
        <div className="h-[100svh] w-full overflow-hidden relative">
            <Image src={"/南高祭ポスター背景.png"} alt="背景" fill  priority className="object-cover -z-10 object-top"></Image>
            <Image src={"/センター鳥.png"} alt="ちゅんちゅん" width={500} height={500} priority className="aspect-auto w-[26%] top-[81.5vw] left-[43.5%] absolute z-10"></Image>
            <Image src={"/鳥1.png"} alt="ちゅんちゅん1号" width={500} height={500} priority className="aspect-auto w-[35%] top-[14vw] left-[65%] absolute z-10"></Image>
            <Image src={"/鳥2.png"} alt="ちゅんちゅん2号" width={500} height={500} priority className="aspect-auto w-[28%] top-[18vw] left-[42%] absolute z-20"></Image>
            <Image src={"/鳥3.png"} alt="ちゅんちゅん3号" width={500} height={500} priority className="aspect-auto w-[30%] top-[12vw] left-[82%] absolute z-30"></Image>
            <Image src={"/鳥4.png"} alt="ちゅんちゅん4号" width={500} height={500} priority className="aspect-auto w-[57%] top-[2.5vw] left-[43%] absolute z-40"></Image>
            <Image src={"/鳥5.png"} alt="ちゅんちゅん5号" width={500} height={500} priority className="aspect-auto w-[22%] top-[-9vw] left-[87%] absolute z-50"></Image>
            <Image src={"/鳥6.png"} alt="ちゅんちゅん6号" width={500} height={500} priority className="aspect-auto w-[21%] top-[-19.5vw] left-[68%] absolute z-60"></Image>
            <Image src={"/鳥7.png"} alt="ちゅんちゅん7号" width={500} height={500} priority className="aspect-auto w-[28%] top-[-8.5vw] left-[42%] absolute z-70 rotate-[20deg]"></Image>
            <div>
                <h1 className={
                    `absolute left-[6vw] top-[6vw] text-white ${kaiseiDecol.className}
                    flex flex-col text-[25vw] md:text-[18vw] leading-[100%] opacity-90 font-bold`
                }>
                   <span>祭</span>
                   <span>現</span> 
                   <span>不</span>
                   <span>可</span>
                   <span>能</span>
                </h1>
            </div>
            <div className="absolute w-[43vw] top-[112vw] md:hidden left-[50%]">
                <Link href={"/info"}>
                    <Image priority src={"/流氷.png"} alt="流氷" width={500} height={500} className=""></Image>
                    <button className={`${kaiseiDecol.className} absolute top-[38%] left-[12%] text-[5.5vw] text-[#15b5b8]`}>参加申し込み</button>
                </Link>
            </div>
            <p className="absolute bottom-[3vw] right-[3vw] text-white opacity-80 
            text-[3.5vw] ">@イラスト</p>
            <p className={`absolute top-[155vw] md:top-[80svh] left-[7vw] text-[7.5vw] md:text-[6vw] text-white opacity-90 z-40
                ${kaiseiDecol.className}`}>南高祭71st</p>
            <RiArrowDownWideFill className="absolute text-white bottom-[1%] left-1/2 -translate-x-1/2 size-[12vw] opacity-85"></RiArrowDownWideFill>
        </div>
    )
}

export function MainTitlePC() {
    const links = [
        {name:"開催日時", id:""},
        {name:"イベント", id:"/event"},
        {name:"マップ", id:"/map"},
        {name:"タイムテーブル", id:"/timetable"},
    ]

    return(
        <div className="h-[100svh] w-full overflow-hidden relative">
            <Image src={"/ぽスターpc.png"} alt="背景" fill  priority className="object-cover 2xl:hidden -z-10 object-top"></Image>
            <Image src={"/ポスターpc 2.png"} alt="背景" fill  priority className="object-cover hidden 2xl:block -z-10 object-top"></Image>
            <div className={
                `ml-[5vw] my-[5vw] text-white ${kaiseiDecol.className}
                  opacity-90`
            }>
                <h1 className="text-8xl xl:text-9xl font-bold ">祭現不可能</h1>
                <p className=" text-5xl xl:text-6xl font-bold my-8 xl:my-12">南高祭71st</p>
                <div className="xl:text-4xl text-2xl xl:mt-28 mt-16">
                    {links.map((value, i) => {
                        if(i == 0) {
                            return( <Link key={i} href="#date">
                                <p  className="mb-1 xl:mb-4" >#{value.name}</p>
                            </Link>)
                        } else {
                            return(
                                <Link key={i} href={value.id}>
                                   <p  className="mb-1 xl:mb-4" >#{value.name}</p> 
                                </Link>
                            )
                        }
                    })}
                </div>
            </div>
            <div className="absolute w-[30vw] top-[50svh] left-[50%]">
                <Link href={"/info"}>
                    <Image priority src={"/流氷.png"} alt="流氷" width={500} height={500} className="w-[60%]"></Image>
                    <button className={`${kaiseiDecol.className} absolute top-[40%] left-[10%] text-2xl xl:text-[2vw] text-[#15b5b8]`}>参加申し込み</button>
                </Link>
            </div>
            <RiArrowDownWideFill className="absolute text-white bottom-[1%] left-1/2 -translate-x-1/2 size-10 xl:size-16 opacity-85"></RiArrowDownWideFill>
        </div>
    )
}