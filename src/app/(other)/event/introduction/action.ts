"use server"

import { serverClient } from "@/utils/supabase/server"

export async function getEventDetails(name:string) {
    const supabase = await serverClient()

    const {data:event} = await supabase.from('contents').select(`*` );

    const {data:new_event} = await supabase.from('new_content').select(`*`);

    const allEvents = event?.concat(new_event)

    if(allEvents == null) {
        return "failed"
    }

    let newContent = allEvents?.find((value) => (
        value.name == name
    ))

    // console.log(newContent)

    const {data:detail} = await supabase.from('introduction').select(`title, content`).eq("name", name)

    let details:any = []

    if(detail == null) {
        if(newContent != null) {
            details = [{title:"何か", content:"テキストテキスト"}]     
        } else {
            return "failed"
        }
    } else {
        details = detail
    }

    let newEvent = newContent
    
    if(newContent.time == null) {   
        newEvent.time = ["終日開催"] 
    } else {
        const splitTime = newContent.time.split(" ")
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
                if(value[3].length == 1){
                    return value[2] + ":0" + value[3]
                } else {
                    return value[2] + ":" + value[3]
                }
            })

            var text:string = ""
            if(time[0].includes("9-7")) {
                text = "9/7  "+ timeNeo[0] + "~" + timeNeo[1]
            } else {
                text = "9/8  "+ timeNeo[0] + "~" + timeNeo[1]
            }
            newTimes.push(text)
        }
        newEvent.time= newTimes
    }
   
    let tags = [newEvent.type]
    
    let keyword = ["高校", "中学"] 
    for(let i = 0; i < keyword.length; i++) {
        if(name.includes(keyword[i])) {
            tags.push(keyword[i])
        }
    }

    if(name.includes("組")) {
        tags.push(name.slice(0, -2))
    }

    if(newEvent.type.includes("展示")) {
        tags.push("展示")
    }

    if(newEvent.genre != null) {
        tags.push(newEvent.genre)
    }

    newEvent.tags = tags

    // console.log(tags)

    const result = {
        event:newEvent, detail:details
    }

    return result
}
