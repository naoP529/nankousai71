
import AboutTeket from "./info_parts/about_teket"
import HowToApply from "./info_parts/howtoapply"
import { SquareButtonPinkShadow } from "../global/parts/square_button"


import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Application() {
    return(
        <div className="pt-[30vw] ">
            <div className="w-full ">
                <h2 className={`${kaiseiDecol.className} text-center text-[12vw] text-[darkturquoise]`}>申し込み方法</h2>
                <div className="w-[45vw] mx-auto my-[4vw]  opacity-95">
                    {/* <RoundButtonTarqu text="申し込みページへ" size={50}></RoundButtonTarqu> */}
                    {/* <SquareButtonPinkWhite text="申し込みページへ"></SquareButtonPinkWhite> */}
                    <SquareButtonPinkShadow text="申し込みページへ"></SquareButtonPinkShadow>
                </div>
            </div>
            <div className="w-[90vw] mx-auto my-[15vw] opacity-95">
                <AboutTeket></AboutTeket>
            </div>
            <div className="py-[15vw] ">
                <HowToApply></HowToApply>
            </div>
        </div>
        
    )
}