import { skeleton } from "@/components/global/skeleton";
import { toBase64 } from "@/components/global/skeleton";
import Image from "next/image"

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function HowToApply() {
    const steps = [
        {step:"STEP1",text:"テストテストテストテスト", img:"/placeholder1.jpg"},
        {step:"STEP2", text:"テストテストテストテスト", img:"/placeholder2.jpg"},
        {step:"STEP3", text:"テストテストテストテスト", img:"/placeholder3.jpg"},
    ]
    
    return(
        <div className="w-full"> 
            {steps.map((value) => (
                <div key={value.step} className="my-[15vw]">
                    <div className="flex">
                        <div className="ml-[6vw] w-[2vw] bg-[darkturquoise]"></div>
                        <p className={`${kaiseiDecol.className} text-[10vw] ml-[2vw] text-[darkturquoise] `}>{value.step}</p>
                    </div>
                    <div className="mx-[6vw] my-[3vw] text-[5vw] text-[darkturquoise] ">
                        <p>{value.text}</p>
                    </div>
                    <div className="my-[5vw] mx-[6vw] ">
                        <Image src={value.img} alt="説明画像" width={1000} height={2000}  className="rounded-md w-full aspect-auto" placeholder={`data:image/svg+xml;base64,${toBase64(skeleton(128, 128))}`}></Image>
                    </div>
                </div>
            ))}
        </div>
    )
}