import Application from "@/components/info/application"
import Attention from "@/components/info/attention"
import Access from "@/components/info/access"

export default function page() {
    return(
        <div className="">
            <Application></Application>
            <div id="access">
                <Access></Access>
            </div>
            <div id="attention">
                <Attention></Attention>
            </div>
        </div>
    )
}