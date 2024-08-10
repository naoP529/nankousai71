import { serverClient } from "@/utils/supabase/server";
import ShowEvent from "./show_event_all";

export default async function GetEvent() {
    const supabase = await serverClient()

    const {data:events} = await supabase.from('contents').select(`*` );


    let eventData = []

    
    for(let i = 0; i < events!.length; i++) {
        const item = events![i]
        let tags = [item.type, item.name]
        let types = [item.type]
        
        let keyword = ["高校", "中学"] 
        for(let i = 0; i < keyword.length; i++) {
            if(item.name.includes(keyword[i])) {
                tags.push(keyword[i])
            }
        }

        if(item.name.includes("組")) {
            tags.push(item.name.slice(0, -2))
        }

        if(item.name.includes("高校3年")) {
            tags.push("フード")
        }

        if(item.type.includes("展示")) {
            tags.push("展示")
        }

        if(item.genre != null) {
            tags.push(item.genre)
            types.push(item.genre)
        }

        if(item.time == null) {
            item.time = "allTime"
        }

        item.types = types
        item.tags = tags
        item.img = "/450-20180828001840181017.jpg"

        const {type,language, genre, create_at,id, ...newItem} = item

        eventData.push(newItem)
    }



    return(
        <div>
            <ShowEvent contents={eventData}></ShowEvent>
        </div>
    )
}