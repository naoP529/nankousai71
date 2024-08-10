import Link from "next/link"
import { SquareButtonPinkShadow } from "@/components/global/parts/square_button"
import { Kaisei_Decol } from "next/font/google"

const kaiseiDecol = Kaisei_Decol({weight:["400","700"],subsets:["latin"]})

type Props = {
    text:string,
    link:string
}

export default function NotFound(
    {text, link}:Props
) {
    return(
        <div className="mt-[30vw] w-screen">
                <p className={`text-[7vw] ${kaiseiDecol.className} text-center bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 bg-clip-text text-transparent`}>ページが見つかりません</p>
                <Link href={link}>
                    <div className="w-[40vw] my-[4vw] mx-auto">
                        <SquareButtonPinkShadow text={`${text}に戻る`}></SquareButtonPinkShadow>
                    </div>
                </Link>
            </div>
    )
}