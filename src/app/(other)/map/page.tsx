"use client"

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image"
import Link from "next/link";
import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function page() {
    const mapImages = [
        {floor:"1階", href:"/フロアマップ1.png"},
        {floor:"2階", href:"/フロアマップ2.png"},
        {floor:"3階", href:"/フロアマップ3.png"},
        {floor:"4階", href:"/フロアマップ4.png"},
        {floor:"5階", href:"/フロアマップ5.png"},
    ]
    const imgs = [
        {img:"/フロアマップ1.png", test:[
            {num:"1",name:"高校3年1組"},
            {num:"2",name:"高校3年2組"},
            {num:"3",name:"高校3年3組"},
            {num:"4",name:"高校3年4組"},
            {num:"5",name:"高校3年5組"},
            {num:"6",name:"生徒会本部"},
            {num:"7",name:"高校文芸同好会"},
            {num:"8",name:"書道部"},
        ]},
        {img:"/フロアマップ2.png", test:[
            {num:"9",name:"中学1年1組"},
            {num:"10",name:"中学1年2組"},
            {num:"11",name:"中学1年3組"},
            {num:"12",name:"中学1年4組"},
            {num:"13",name:"高校1年1組"},
            {num:"14",name:"高校1年2組"},
            {num:"15",name:"高校1年3組"},
            {num:"16",name:"高校1年4組"},
            {num:"17",name:"高校1年5組"},
            {num:"18",name:"M-BOX"},
            {num:"19",name:"美術部"},
            {num:"20",name:"図書委員会"},
            {num:"21",name:"書道部"},
            {num:"22",name:"高校軽音楽部"},
            {num:"23",name:"高校ダンス部"},
            {num:"24",name:"吹奏楽部"},
            {num:"25",name:"茶道部"},
            {num:"26",name:"中学演劇部"},
            {num:"27",name:"高校演劇部"},
            {num:"28",name:"弦楽部"},
        ]},
        {img:"/フロアマップ3.png", test:[
            {num:"29",name:"70・10周年委員会"},
            {num:"30",name:"PTA"},
            {num:"31",name:"PTA合唱団"},
            {num:"32",name:"風の章実行委員会"},
            {num:"33",name:"高校料理部"},
            {num:"34",name:"PTAリサイクル"},
            {num:"35",name:"科学部"},
            {num:"36",name:"プラネタリウム"},
        ]},
        {img:"/フロアマップ4.png", test:[
            {num:"37",name:"中学2年1組"},
            {num:"38",name:"中学2年2組"},
            {num:"39",name:"中学2年3組"},
            {num:"40",name:"中学2年4組"},
            {num:"41",name:"高校2年1組"},
            {num:"42",name:"高校2年2組"},
            {num:"43",name:"高校2年3組"},
            {num:"44",name:"高校2年4組"},
            {num:"45",name:"高校2年5組"},
        ]},
        {img:"/フロアマップ5.png", test:[
            {num:"46",name:"中学3年1組"},
            {num:"47",name:"中学3年2組"},
            {num:"48",name:"中学3年3組"},
            {num:"49",name:"中学3年4組"},
            {num:"50",name:"母親の読書会"},
            {num:"51",name:"学校説明"},
            {num:"52",name:"港南区選挙管理委員会"},
            {num:"53",name:"同窓会"},
        ]},
    ]


    return (
        <div className="py-[30vw]">
            <h2 className={`${kaiseiDecol.className} text-center text-[12vw] text-[darkturquoise]`}>フロアマップ</h2>

            <div className="my-[15vw] w-full">
                {mapImages.map((value, index) => (
                    <div className="my-[15vw]" key={value.href}>
                        <div className="flex  mx-[4vw] mb-[7vw] relative">
                            <div className=" w-[2vw] bg-[darkturquoise]"></div>
                            <p className={`${kaiseiDecol.className} text-[10vw] ml-[2vw] text-[darkturquoise] `}>{value.floor}</p>
                            <p className="left-1/2 -translate-x-1/2 -bottom-1/3 absolute text-nowrap text-[3vw] bg-gray-300 px-[2vw] text-white rounded-xl">ズーム・ドラッグで全体を見渡せます</p>
                        </div>
                        <TransformWrapper
                            smooth={true} 
                            wheel={{
                                step:0.5,
                                smoothStep:0.003
                            }}
                            initialPositionX={-100}
                            initialPositionY={-100}
                            centerZoomedOut={false}

                            initialScale={1.2}
                            minScale={0.5}
                        >
                            <TransformComponent
                                wrapperStyle={{
                                    width:"auto",
                                    aspectRatio:"1/1",
                                    margin:"0 4vw",
                                    borderRadius:"2vw",
                                    cursor:"pointer",
                                    border:"solid",
                                    borderWidth:"0.8vw",
                                    borderColor:"#EEEEEE"
                                }}

                                contentStyle={{
                                    width:"120vw",
                                    padding:"10vw",
                                }}
                            >
                                <Image src={value.href} alt="フロアマップ" width={1000} height={2000}></Image>
                            </TransformComponent>
                        </TransformWrapper>
                        <div className="  mt-[3vw]">
                            <p className="text-center text-[3.5vw] text-gray-400">展示一覧</p>
                            <div className="flex flex-wrap mx-[4vw] justify-center mt-[1vw]">
                                {imgs[index].test.map((value, index) => (
                                    <div key={index} className="pr-[2vw]">
                                        <Link href={{pathname:"/event/introduction", query:{name:value.name}}} className="text-[2.8vw] text-gray-500">#{value.num} {value.name}</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}