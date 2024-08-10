import Pamphlet from "@/components/gallery/pamphlet"
import Gallery from "@/components/gallery/gallery"

export default function page() {
    return(
        <div className="pt-[25vw]  bg-white">
            <Pamphlet></Pamphlet>
            <div className="mt-[15vw]">
                <Gallery></Gallery>
            </div>
        </div>
    )
}