import { skeleton } from "@/components/global/skeleton";
import { toBase64 } from "@/components/global/skeleton";
import Image from "next/image"

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function HowToApply() {
    const steps = [
        {step:"STEP1",text:"上の「申し込みページへ」ボタンからteketのページを開きます。", img:""},
        {step:"STEP2", text:"「チケット情報を表示」を押します。", img:"/step2.jpg"},
        {step:"STEP3", text:"日付と時間帯を選択します。", img:"/step3.jpg"},
        {step:"STEP4", text:"日程選択後に、該当するチケットの「選択」を押します。", img:"/step4.jpg"},
        {step:"STEP5", text:"チケット選択後、今一度正しいチケットが選択されているかを確認し、下のボタンを押します。(「購入」とありますが、料金は発生しません。必要に応じて、お使いのメールアドレスでログイン・会員登録をしてください。)", img:"/step5.jpg"},
        {step:"STEP6", text:"再度チケットを確認し、「確定する」を押します。（料金は発生しません。）", img:"/step6.jpg"},
        {step:"STEP7", text:"南高祭展示の部へご来校する日までに、入手した「入場用QRコード」を「スマートフォンへダウンロード」または「QRコード画像を印刷」してください。", img:"/step7.png"},
        {step:"STEP8", text:"南高祭展示の部へご来校する日に、受付にて「ダウンロードまたは印刷した入場用QRコード」をご提示いただき、ご入場いただきます。（ ご入場時には、パンフレット「rondo」をお渡しするとともに、入場確認のためのリストバンドをつけさせていただきますのでご承知おきください。）", img:""},
    ]
    
    return(
        <div className="w-full"> 
            {steps.map((value) => (
                <div key={value.step} className="my-[12vw]">
                    <div className="flex">
                        <div className="ml-[5vw] w-[2vw] bg-[darkturquoise]"></div>
                        <p className={`${kaiseiDecol.className} text-[10vw] ml-[2vw] text-[darkturquoise] `}>{value.step}</p>
                    </div>
                    <div className="mx-[5vw] my-[4vw] text-[3.8vw] text-[darkturquoise] leading-8">
                        <p>{value.text}</p>
                    </div>
                    {value.img != "" &&
                        <div className="mt-[6vw] mb-[15vw] mx-[5vw] border-2 border-gray-100 drop-shadow-sm rounded-md">    
                            <Image src={value.img} alt="説明画像" width={1000} height={2000}  className="rounded-md w-full aspect-auto" placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 240))}`}></Image>
                        </div>
                    }    
                </div>
            ))}
        </div>
    )
}