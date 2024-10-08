"use server"

import { serverClient } from "@/utils/supabase/server"

type band_type = {
    name:string,
    time:string,
    comment:string,
    available:boolean
}

type new_data = {
    name:string,
    time:string,
    comment:string,
    available:boolean,
    timeStamp:Array<number>,
    timeText:Array<string>
}

export async function getBandData() {
    const supabase = await serverClient()

    const {data:band} = await supabase.from('band').select(`*` );

    if(band == null) {
        return "failed"
    }
    let new_data:Array<new_data>  = []

    let edit_data = band.map(({name, time, comment, available}:band_type) => {
        const split = time.split(" ")

        const split_map = split.map((i:string) =>{
            const splitTime = i.split("~")
            const edit_Times = splitTime.map((value) => (
                value.split("-")
            )) 
            const new_edit_Times = edit_Times.map((value) => {
                var newData = []
                if(value[3].charAt(0) == "0") {
                    newData = [value[3].replace("0", ""),value[4]]
                } else {
                    newData = [value[3], value[4]]
                }
                return newData
            })
            const time_numbers = edit_Times.map((value) => (
                value.map((e) => (
                    Number(e)
                ))
            ))
            const timesAsDate = time_numbers.map((e) => {
                const date = new Date(e[0], e[1] - 1, e[2], e[3], e[4])
                console.log("date:"+ date)
                return new Date(e[0], e[1] - 1, e[2], e[3], e[4])
            })
            const timeAsTimeStamp = timesAsDate.map((value) => (Math.floor(value.getTime() / 1000)))
            let timeText = ["",new_edit_Times[0][0] + ":" + new_edit_Times[0][1], new_edit_Times[1][0] + ":" + new_edit_Times[1][1]]

            if(i.includes("09-07") || i.includes("9-7")) {
                timeText[0] = "9/7"
            } else {
                timeText[0] = "9/8"
            }
            new_data.push({
                name:name, time:i, comment:comment, available:available, timeStamp:timeAsTimeStamp, timeText:timeText
            })
        })
    })

    const on97 = new_data.filter((value) => (
        value.timeText[0] == "9/7"
    ))

    const on98 = new_data.filter((value) => (
        value.timeText[0] == "9/8"
    ))

    const sorted97 = Array.from(on97).sort((a,b) => {
        return a.timeStamp[0] - b.timeStamp[0]
    })

    const sorted98 = Array.from(on98).sort((a,b) => {
        return a.timeStamp[0] - b.timeStamp[0]
    })

    const sorted = sorted97.concat(sorted98)

    console.log(sorted)

    return sorted
}