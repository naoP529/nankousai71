import Image from "next/image";
import AboutTeket from "./info_parts/about_teket"
import HowToApply from "./info_parts/howtoapply"
import { SquareButtonPinkShadow } from "../global/parts/square_button"
import { TeketType } from "./info_parts/about_teket";
import Link from "next/link";
import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Application() {
    return(
        <div className="pt-[30vw] 2xl:pt-40 lg:pt-32 ">
            <div className="w-full ">
                <h2 className={`${kaiseiDecol.className} text-center text-[12vw] text-[darkturquoise] 2xl:text-8xl lg:text-6xl`}>申し込み方法</h2>
                <div className="w-[45vw] lg:w-64 mx-auto my-[4vw] lg:my-14 opacity-95">
                    <Link href={"https://teket.jp/6636/37971"} target={"_blank"}>
                        <SquareButtonPinkShadow text="申し込みページへ"></SquareButtonPinkShadow>
                    </Link>
                    {/* <RoundButtonTarqu text="申し込みページへ" size={50}></RoundButtonTarqu> */}
                    {/* <SquareButtonPinkWhite text="申し込みページへ"></SquareButtonPinkWhite> */}
                    
                </div>
            </div>
            {/* <div className="flex justify-center my-[10vw] items-center">
                <Image src={"/20240821-094518.png"} alt="teketリンク" width={1000} height={1000} className="aspect-square w-[15vw] opacity-80"></Image>
                <p className="mx-3 text-[3vw]">（申し込みページのQRコード）</p>
            </div> */}
            <div >
                <div className="w-[90vw] lg:max-w-[700px] mx-auto mt-[12vw] lg:mt-14 opacity-95">
                    <AboutTeket></AboutTeket>
                </div>
                <div className="w-[90vw] lg:max-w-[700px] mx-auto mt-[10vw]  lg:my-14 opacity-95">
                    <TeketType></TeketType>
                </div>
            </div>

            <div className="pb-[5vw] lg:pb-12">
                <HowToApply></HowToApply>
            </div>
        </div>
        
    )
}