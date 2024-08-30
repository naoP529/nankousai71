"use server"
import { serverClient } from "@/utils/supabase/server"

export async function getEvents() {
    const supabase = await serverClient()

    const {data:event} = await supabase.from('contents').select(`*` );

    const {data:new_event} = await supabase.from('new_content').select(`*`);

    const allEvents = event?.concat(new_event)

    if(allEvents == null) {
        return
    }

    return allEvents
}