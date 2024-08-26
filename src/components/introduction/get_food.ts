"use server"

import { serverClient } from "@/utils/supabase/server"

export async function getFoodData() {
    const supabase = await serverClient()

    const {data:food} = await supabase.from('food').select(`name, menu, value, type` );

    if(food == null) {
        return "failed"
    }

    return food
}