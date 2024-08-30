import MainTitle from "@/components/top/main_title"
import { MainTitlePC } from "@/components/top/main_title"
import Date from "@/components/top/date"
import Header from "@/components/global/header"
import Events from "@/components/top/event"
import Guide from "@/components/top/guide"
import Map from "@/components/top/map"

export default function page() {
  return(
    <main className="w-full " > 
      <div className="lg:hidden">
        <MainTitle></MainTitle>
      </div>
      <div className="hidden lg:block" >
        <MainTitlePC></MainTitlePC>
      </div>
      <div className="w-full sticky top-0 z-50" >
        <Header></Header>
      </div>
      <div className="z-0 w-full" id="date">
        <Date></Date>
        <Events></Events>
        <Map></Map>
        <Guide></Guide>
      </div>
    </main>
  )
}