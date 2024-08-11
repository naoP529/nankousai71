

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function Loading() {
    return(
        <div className="w-full h-[50vw] flex">
            <p className={`${kaiseiDecol.className} m-auto text-[6vw] bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 bg-clip-text text-transparent `}>・・・読み込み中・・・</p>
        </div>
    )
}