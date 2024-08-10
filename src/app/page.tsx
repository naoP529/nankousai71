import MainTitle from "@/components/top/main_title"
import Date from "@/components/top/date"
import Header from "@/components/global/header"
import Events from "@/components/top/event"
import Guide from "@/components/top/guide"
import Map from "@/components/top/map"

export default function page() {
  return(
    <main className="w-full ">
      <MainTitle></MainTitle>
      <div className="w-full sticky top-0 z-50">
        <Header></Header>
      </div>
      <div className="z-0 w-full">
        <Date></Date>
        <Events></Events>
        <Map></Map>
        <Guide></Guide>
      </div>
    </main>
  )
}