"use client"
import ScrollContainer from "react-indiana-drag-scroll"
import { Link as Scroll } from 'react-scroll';

export default function AccessTags() {
    const tags= [
        {name:"上大岡駅", id:"kamioooka"},
        {name:"港南中央駅", id:"kounan"},
        {name:"上永谷駅", id:"kaminagaya"},
        {name:"京浜急行", id:"kamioooka"},
        {name:"ブルーライン", id:"kaminagaya"},
        {name:"京急バス", id:"kaminagaya"},
        {name:"神奈中バス", id:"kounan"},
        {name:"江ノ電バス", id:"kamioooka"},
        {name:"横浜市営バス", id:"kamioooka"},
    ]

    return(
        <div>
            <ScrollContainer>
                <div className="flex mt-[5vw] ">
                    {tags.map((value) => (
                        <Scroll to={value.id} smooth className="cursor-pointer p-[1vw] h-[10vw] inline-block flex-shrink-0 mx-[2vw] bg-white rounded-lg">    
                                <div 
                                    className={`text-[4vw] 
                                    font-medium  flex h-full relative`}
                                >
                                    <p className={`px-[4vw] my-auto  z-[5]
                                        text-[darkturquoise] `}>
                                        {value.name}
                                    </p>
                                </div>
                        </Scroll>
                        
                    ))}
                </div>
            </ScrollContainer>
        </div>
    )
}