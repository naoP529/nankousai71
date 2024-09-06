import Image from "next/image";
import { FaExclamationCircle } from "react-icons/fa";
import { FaExclamationTriangle } from "react-icons/fa";
import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Attention() {
    const attentions = [
        {title:"落とし物・迷子", content:"本部(1階職員室)にて対応いたします。", type:""},
        {title:"飲食について", content:"くすのき広場にて、高校3年生によるフード販売の他、1階にて食堂が営業しております。食べ歩き、決められた場所以外での飲食は禁止です。", type:""},
        {title:"ゴミについて", content:"くすのき広場、食堂で購入したもののみ、くすのき広場と食堂に設置したゴミ箱にお捨てください。", type:""},
        {title:"写真撮影について", content:"写真・動画のSNSへの投稿はご遠慮ください。", type:"notAllowed"},
        {title:"立ち入り禁止エリア", content:"6階は立ち入り禁止エリアです。その他、通行禁止の通路がありますのでご注意ください。", type:"notAllowed"},
    ]

    return(
        <div className="py-[18vw] 2xl:pt-36 lg:pt-20 lg:pb-20 lg:max-w-[1200px] lg:mx-auto">
            <div>
                <h2 className={`text-center text-[12vw] text-red-500 font-normal 2xl:text-8xl lg:text-6xl`}>注意事項</h2>
            </div>
            <div className="mx-[5vw] my-[6vw] lg:my-12 lg:mx-10">
                {attentions.map((value,index) => (
                    <div className="mb-[10vw] lg:mb-12" key={index}>
                        <div className="flex text-red-600 items-center xl:text-5xl lg:text-4xl  font-medium text-[7vw]">
                            {value.type == "notAllowed" ? <FaExclamationTriangle></FaExclamationTriangle> : <FaExclamationCircle></FaExclamationCircle>}
                            <p className={`ml-[2vw] py-[1vw] lg:ml-4 lg:py-4 `}>{value.title}</p>
                        </div>
                        <p className="my-[3vw] font-light text-red-600  text-[3.8vw] ml-[0.5vw] xl:text-3xl lg:text-2xl xl:my-4 lg:my-2">{value.content}</p>
                        {index == 1  &&
                            <div className="w-[60%] mx-auto lg:mt-12 lg:mb-0 mt-[7vw]">
                                <p className="text-center lg:text-xl my-2 text-sm">・・・くすのき広場周辺図・・・</p>
                                <Image src={"/飲食可・ゴミ箱.png"} alt="ゴミ箱・飲食エリア" width={1000} height={800} className=" w-full aspect-auto"></Image>
                            </div>     
                        }
                    </div>
                    
                ))}
            </div>
        </div>
        
    )
}