"use server"

import { serverClient } from "@/utils/supabase/server"

export async function getEventDetails(name:string) {
    const supabase = await serverClient()

    const {data:event} = await supabase.from('contents').select(`title, genre, type, comment, place, time, available`).eq("name", name);
    const {data:detail} = await supabase.from('introduction').select(`title, content`).eq("name", name)

    if(event == null || detail == null) {
        return "failed"
    }

    let newEvent:any = []
    newEvent = event[0]
    
    if(event[0].time == null) {   
        newEvent.time = "全日開催" 
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

    const result = {
        event:newEvent, detail:detail
    }

    return result
}
