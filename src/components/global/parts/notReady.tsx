

import { KaiseiDecol } from "@/app/fonts";

const kaiseiDecol = KaiseiDecol

export default function NotReady() {
    return(
        <div>
            <p className={`text-[5vw] ${kaiseiDecol.className} text-center bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 bg-clip-text text-transparent`}>準備中です...</p>
        </div>
    )
}