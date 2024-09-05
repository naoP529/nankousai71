import MainTitle from "@/components/top/main_title"
import { MainTitlePC } from "@/components/top/main_title"
import Date from "@/components/top/date"
import Header from "@/components/global/header"
import Events from "@/components/top/event"
import Guide from "@/components/top/guide"
import Map from "@/components/top/map"

export default function page() {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "Event",
    "name": "南高祭",
    "startDate": "2024-09-07T09:30",
    "location": {
      "@type": "Place",
      "name": "横浜市立南高等学校・附属中学校",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "神奈川県",
        "addressLocality": "横浜市",
        "streetAddress": "港南区東永谷2丁目1-1"
		  }
    },
    "description": "南高・南高附属中最大の行事へようこそ。フード販売やバンドの生演奏を含む、たくさんの魅力的な展示を公開しています。どなたも入場無料。ぜひ気軽にお越しください！",
    "image": [
      "https://drive.google.com/file/d/137obuAzNIB6r-501h6D0-6SoFgLnqXd3/view?usp=drive_link"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "url":"https://teket.jp/6636/37971"
    }
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}