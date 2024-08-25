import Image from "next/image";
import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Attention() {
    const attentions = [
        {title:"落とし物・迷子", content:"本部(1階エントランス)にて対応いたします。"},
        {title:"飲食について", content:"くすのき広場にて、高校3年生によるフード販売の他、1階にて食堂が営業しております。食べ歩き、決められた場所以外での飲食は禁止です。"},
        {title:"ゴミについて", content:"くすのき広場、食堂で購入したもののみ、くすのき広場と食堂に設置したゴミ箱にお捨てください。"},
        {title:"写真撮影について", content:"一般の方の写真・動画の撮影、並びに写真・動画のSNSへの投稿は固く禁止します。"},
        {title:"立ち入り禁止エリア", content:"6階は立ち入り禁止エリアです。その他、通行禁止の通路がありますのでご注意ください。"},
    ]

    return(
        <div className="py-[20vw] ">
            <div>
                <h2 className={`${kaiseiDecol.className} text-center text-[12vw] text-red-500 font-bold`}>注意事項</h2>
            </div>
            <div className="mx-[5vw] my-[10vw]">
                {attentions.map((value,index) => (
                    <div className="mb-[10vw]" key={index}>
                        <div className="flex">
                            <div className=" w-[2vw] bg-red-600"></div>
                            <p className={`${kaiseiDecol.className} text-[7vw] ml-[2vw] py-[1vw] text-red-600 font-bold`}>{value.title}</p>
                        </div>
                        <p className="my-[3vw] text-red-600  text-[3.8vw] ml-[0.5vw]">{value.content}</p>
                        {index == 1  &&
                            <Image src={"/飲食可・ゴミ箱.png"} alt="ゴミ箱・飲食エリア" width={1000} height={800} className="mt-[1vw] w-full aspect-auto"></Image>
                        }
                        {index == 2 &&
                            <Image src={"/飲食可・ゴミ箱.png"} alt="ゴミ箱・飲食エリア" width={1000} height={800} className="mt-[1vw] w-full aspect-auto"></Image>
                        }
                    </div>
                    
                ))}
            </div>
        </div>
        
    )
}