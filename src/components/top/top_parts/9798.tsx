import { KaiseiDecol } from "@/app/fonts"

const kaiseiDecol = KaiseiDecol

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