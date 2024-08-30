"use client"
import ScrollContainer from "react-indiana-drag-scroll"
import { Link as Scroll } from 'react-scroll';
import { motion } from "framer-motion";

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
                <div className="flex mt-[5vw] lg:mt-0">
                    {tags.map((value) => (
                        <Scroll key={value.id} to={value.id} smooth className="cursor-pointer  inline-block flex-shrink-0 mx-[2vw] lg:mx-3">    
                                <motion.div 
                                    className={`text-[4vw] 2xl:text-2xl lg:text-xl
                                    font-medium  flex p-[1vw] h-[10vw] lg:h-auto 2xl:p-4 lg:px-2 relative bg-white rounded-lg`}
                                    whileHover={{opacity:0.8}} transition={{duration:0.1}}
                                >
                                    <p className={`px-[4vw] 2xl:px-8 lg:px-4 my-auto  z-[5]
                                        text-[darkturquoise] `}>
                                        {value.name}
                                    </p>
                                </motion.div>
                        </Scroll>
                        
                    ))}
                </div>
            </ScrollContainer>
        </div>
    )
}