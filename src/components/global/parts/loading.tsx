import { Kaisei_Decol } from "next/font/google"

const kaiseiDecol = Kaisei_Decol({weight:["400","700"],subsets:["latin"]})

export default function Loading() {
    return(
        <div className="w-full h-[50vw] flex">
            <p className={`${kaiseiDecol.className} m-auto text-[6vw] bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 bg-clip-text text-transparent `}>・・・読み込み中・・・</p>
        </div>
    )
}