import NotReady from "@/components/global/parts/notReady";
import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function page() {
    return(
        <div className="py-[30vw] h-screen bg-white">
            <h2 className={`${kaiseiDecol.className} text-center text-[12vw] text-[darkturquoise]`}>フロアマップ</h2>
            <div className="my-[10vw]">
                <NotReady></NotReady>
            </div>
        </div>
    )
}