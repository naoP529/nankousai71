
import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Attention() {
    const attentions = [
        "あいうえお",
        "かきくけこ",
        "さしすせそ",
        "たちつてと",
    ]

    return(
        <div className="py-[20vw] ">
            <div>
                <h2 className={`${kaiseiDecol.className} text-center text-[12vw] text-rose-600 font-bold`}>注意事項</h2>
            </div>
            <div className="mx-[5vw] my-[5vw]">
                {attentions.map((value) => (
                    <p key={value} className="text-[4.5vw] tracking-wide my-[2vw] font-normal text-rose-600">〇{value}</p>
                ))}
            </div>
        </div>
        
    )
}