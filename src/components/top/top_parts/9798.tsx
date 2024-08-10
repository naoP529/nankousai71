import { Kaisei_Decol } from "next/font/google"

const kaiseiDecol = Kaisei_Decol({weight:["700"],subsets:["latin"]})

export default function Date2 () {
    return(
        <div>
            <p className={`${kaiseiDecol.className} text-[20vw] text-[darkturquoise] flex justify-center`}>
                <span>
                    9/7
                </span>
                <span className="-mx-[2vw]">
                    ・
                </span>
                <span>
                    9/8
                </span>
            </p>
        </div>
    )
}