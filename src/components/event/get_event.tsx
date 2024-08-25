import { serverClient } from "@/utils/supabase/server";
import ShowEvent from "./show_event_all";

export default async function GetEvent() {
    const supabase = await serverClient()

    const {data:events} = await supabase.from('contents').select(`*` );

    const {data:new_event} = await supabase.from('new_content').select(`*` );

    const allEvents = events?.concat(new_event)

    let eventData = []

    
    for(let i = 0; i < allEvents!.length; i++) {
        const item = allEvents![i]
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
            item.time = ["終日開催"]
        } else {
            const splitTime = item.time.split(" ")
            const editedTimeText = splitTime.map((value:string) => (
                value.split("~")
            ))
            var newTimes:any = []
            for(let i = 0; i < editedTimeText.length; i++) {
                const time = editedTimeText[i]
                const newTime = time.map((value:string) =>(
                    value.replace("2024-", "").split("-")
                ))
                const timeNeo = newTime.map((value:Array<string>) => {
                    // console.log(item.name)
                    // console.log(splitTime + " "+ value[3])
                    if(value[3].length == 1){
                        return value[2] + ":0" + value[3]
                    } else {
                        return value[2] + ":" + value[3]
                    }
                })

                var result:string = ""
                if(time[0].includes("9-7")) {

                    result = "9/7 "+ timeNeo[0] + "~" + timeNeo[1]
                } else {
                    result = "9/8 "+ timeNeo[0] + "~" + timeNeo[1]
                }
                newTimes.push(result)
            }
            item.time= newTimes
        }


        item.types = types
        item.tags = tags
        item.img = `/${item.name}.png`

        const {type,language, genre, create_at,id, ...newItem} = item

        eventData.push(newItem)
    }



    return(
        <div>
            <ShowEvent contents={eventData}></ShowEvent>
        </div>
    )
}