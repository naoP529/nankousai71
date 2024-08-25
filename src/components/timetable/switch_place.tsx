"use client"

type event_type = {
    start:Date,
    end:Date,
    name:string,
    title:string,
    startPosition:string, 
    contentLength:string
}

type events = {
    content:Array<{   
        place:string,
        event:{
            onSep7:Array<event_type>,
            onSep8:Array<event_type>
        }
    }>
}

export default function SwitchPlace({content}:events) {
    const places = [
        "メインアリーナ", "サブアリーナ", "南高ホール", "職員室前", "プラネタリウム", "321教室", "和室", "全て"
    ]

    return(
        <div>

        </div>
    )
}