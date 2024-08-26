"use client"
import ScrollContainer from "react-indiana-drag-scroll"
import { easeOut, motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Modal from "react-modal";
import { MdOutlinePlace } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { SquareButtonPinkShadow2 } from "../global/parts/square_button"
import Link from "next/link"

type event_type = {
    start:string,
    end:string,
    name:string,
    title:string,
    startPosition:string, 
    contentLength:string,
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

type newEventType = {
    start:string,
    end:string,
    name:string,
    title:string,
    startPosition:string, 
    contentLength:string,
    time:string
}

export default function AllPlace (
    {content}:events
) {
    const [day, setDay] = useState("9/7")

    const places = [
        "メインアリーナ", "サブアリーナ", "南高ホール", "職員室前", "プラネタリウム", "513教室", "和室"
    ]

    const times = ["9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00"]

    const grid_properties = ["col-[1/_span_1]", "col-[2/_span_1]", "col-[3/_span_1]", "col-[4/_span_1]", "col-[5/_span_1]","col-[6/_span_1]" ,"col-[7/_span_1]"]

    const generatePosition = (index:number):string => {
        const result = "opacity-90 absolute row-[2/_span_8] top-0 bottom-0 left-0 right-0 " + grid_properties[index] 
        return result
    }

    const colorsForHeader = ["#ffd6ff","#ead6ff","#d6d6ff","#d6eaff","#d6ffea","#d6ffff", "#d6ffd6",]

    // const setClassName = (textA:string, textB:string) => {
    //     const result = "absolute px-[5%] bg-slate-400  w-auto z-20 " + textA + " " + textB
    //     return result
    // }
    const variantsForButton = {
        sep7:{
            backgroundColor:"#0fc5dd"
        },  
        sep8:{
            backgroundColor:"#05bd92"
        },
        sep7B: {
            left:"4%",
        },
        sep8B:{
            left:"40%"
        },
        sep7T:{
            color:"#0fc5dd",
        },
        sep8T:{
            color:"#05bd92",
        },
        sepT:{
            color:"#cbd5e1",
        }
    }

    const radioValues = ["9/7", "9/8"]

    const radioClicked = () => {
        if(day =="9/7") {
            setDay("9/8")
        } else {
            setDay("9/7")
        }
    }

    const event_color = [
        {target:["高校ダンス部", "書道部", "吹奏楽部"], color:"bg-gradient-to-br from-blue-400 via-sky-300 to-sky-200"},
        {target:["高校軽音楽部", "弦楽部", "中学演劇部","高校演劇部"], color:"bg-gradient-to-br from-purple-300 via-fuchsia-400 to-pink-400 "},
        {target:["茶道部", "プラネタリウム"], color:"bg-gradient-to-br from-green-200 via-teal-400 to-cyan-400 "},
        {target:["学校説明"],color:"bg-gradient-to-br from-sky-500 to-sky-100"},
    ]

    const images = [
        {name:"", src:""}
    ]

    const imageTag = (name:string) => {
        const found = images.find((value) => (
            value.name == name
        ))

        if(found == null) {
            return "/AdobeStock_335757173.jpeg"
        } else {
            return found.src
        }
    }

    const [isOpen, setModal] = useState(false)
    const [modalData, setModalData] = useState<any>({})

    const eventClicked = (e:event_type, place:string) => {
        var newEvent:any = e
        const time = [e.start, e.end]
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

        var result:string = ""
        if(time[0].includes("9-7")) {

            result = "9/7 "+ timeNeo[0] + "~" + timeNeo[1]
        } else {
            result = "9/8 "+ timeNeo[0] + "~" + timeNeo[1]
        }

        newEvent.time = result
        newEvent.place = place
        setModalData(newEvent)
        setModal(true)
    }

    const modalStyle = {
        overlay:{
            top:0,
            left:0,
            backgroundColor:"rgb(0 0 0 / 0.5)",
            zIndex:10000
        },
        content:{
            top:"30vh",
            left:"10vw",
            right:"10vw",
            bottom:"auto",
            height:"auto",
            backgroundColor:"white",
            borderRadius:"1rem"
        }
    }

    return(
        // <Rnd 
        //     default={{x:0, y:0, width:"100%", height:"200vw"}}
        //     enableResizing={{ top:false, right:false, bottom:true, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
        //     disableDragging={true}
        //     className="relative bg-red-500"
        // >
        // </Rnd>
        <div className="w-full h-auto ">
            <Modal isOpen={isOpen} style={modalStyle} onRequestClose={() => setModal(false)}>
                <div className={`flex items-center justify-between text-[4vw]  mb-[1vw]`}>
                    <p className={`${event_color.find((m) => m.target.includes(modalData.name))?.color} bg-clip-text text-transparent font-medium`}>{modalData.name}</p>
                    <AiOutlineClose className="text-gray-400 mr-[1vw] text-[5vw] cursor-pointer" onClick={() => setModal(false)}></AiOutlineClose>
                </div>
                {/* <p className={`text-[4vw] ${event_color.find((m) => m.target.includes(modalData.name))?.color} bg-clip-text text-transparent font-medium mb-[1vw]`}>{modalData.name}</p> */}
                <Image src={imageTag(modalData.name)} alt="イメージ画像"  width={2000} height={100} className="w-full aspect-video  object-cover rounded-md"></Image>
                <p className={`text-[5vw] ${event_color.find((m) => m.target.includes(modalData.name))?.color} bg-clip-text text-transparent font-medium my-[1vw]`}>{modalData.title}</p>
                <div className="flex items-center text-[3vw]">
                    <IoTimeOutline></IoTimeOutline>
                    <p className="mx-[0.5%] relative bottom-[0.2vw]">{modalData.time}</p>
                </div>
                <div className="flex items-center text-[3vw] mt-[0.5vw]">
                    <MdOutlinePlace></MdOutlinePlace>
                    <p className="relative bottom-[0.1vw]">{modalData.place}</p>
                </div>
                <div className="w-[40%] mx-auto mt-[2vw]">
                    <Link href={{pathname:"/event/introduction", query:{name:modalData.name}}}>
                        <SquareButtonPinkShadow2 text="もっと見る"></SquareButtonPinkShadow2> 
                    </Link>   
                </div>
            </Modal>
            <motion.div className="mt-[5vw] mb-[7vw] flex justify-center items-center" >
                <motion.p variants={variantsForButton} animate={day=="9/7" ? "sep7T" : "sepT"} transition={{duration:0.3, ease:"easeOut"}} className="font-medium text-[8vw] text-[#0fc5dd]">9/7</motion.p>
                <motion.div className="w-[12%] mx-3 aspect-[11/7] rounded-full translate-y-[6%] relative cursor-pointer" variants={variantsForButton} onClick={radioClicked} animate={day == "9/7" ? "sep7" : "sep8"} transition={{duration:0.5, ease:"easeOut"}}> 
                    <motion.div variants={variantsForButton}  animate={day=="9/7" ? "sep7B" :"sep8B"} transition={{duration:0.15, ease:"easeOut"}}  className="h-[86%] aspect-square rounded-full bg-white top-[7%] absolute" ></motion.div>
                </motion.div> 
                <motion.p variants={variantsForButton} animate={day=="9/8" ? "sep8T" : "sepT"} transition={{duration:0.5, ease:"easeOut"}} className="font-medium text-[8vw] ">9/8</motion.p> 
            </motion.div>
            <div className="flex w-full relative ">
                <div className="mt-[14vw] w-full absolute left-0 -top-[0.85rem] flex flex-col pointer-events-none ">
                    {times.map((value, index) => (
                        <div key={index} className={`w-full h-[20vw] flex`}>
                            <p className="text-sm inline-block drop-shadow-lg font-medium shadow-stone-50 z-20">{value}</p>
                            <div className="border-t-2 ml-2 flex-grow relative top-3 opacity-60"></div>
                        </div>
                    ))}
                </div>
                <div className="w-full z-10">
                    <ScrollContainer className="px-[12%]  h-[160vw]">  
                        <div className={`grid grid-cols-[repeat(7,32vw)] grid-rows-[14vw,repeat(7,20vw)] relative grid-flow-row`}>
                            {places.map((value, index) => (
                                <div key={index} className="mt-1 mb-3 mx-2 rounded-md bg-slate-100 flex justify-center items-center" style={{backgroundColor:colorsForHeader[index]}}>
                                    <p className="text-gray-600 text-sm">{value}</p>
                                </div>
                            ))}
                            {
                                (function () {
                                    const list:any = []
                                    for(let i = 0; i < 49; i++) {
                                        if(i < 42) {
                                            list.push(
                                                <div key={i} ></div>
                                            )
                                        } else {
                                            list.push(
                                                <div key={i} ></div>
                                            )
                                        }   
                                    } 
                                    return list
                                }())
                            }
                            {places.map((value, index) => (
                                <div key={index} className={`${generatePosition(index)}`}>
                                    <div className= "w-full h-full relative flex justify-center">
                                        {(function() {
                                            const events = content.find((e) => (e.place == value))?.event
                                            console.log(events)
                                            var event_array:Array<event_type> | never[] = []

                                            if(day == "9/7") {
                                                if(events?.onSep7 == null) {
                                                    return 
                                                }
                                                event_array = events?.onSep7
                                            } else {
                                                if(events?.onSep8 == null) {
                                                    return 
                                                }
                                                event_array = events?.onSep8
                                            }
                                            
                                            const event_div = event_array.map((e, n) => 
                                                <div key={n} className={`absolute w-[95%] z-20 rounded cursor-pointer drop-shadow-md flex justify-center pt-2 ${event_color.find((m) => m.target.includes(e.name))?.color}`}
                                                style={{top:e.startPosition,height:e.contentLength,}} onClick={() => eventClicked(e, value)}>
                                                    <p className="text-slate-100 font-light">{e.name}</p>
                                                </div>
                                            )

                                            return event_div
                                        }())}
                                    </div>
                                    

                                </div>
                            ))}
                        </div>                    
                    </ScrollContainer>
                </div>
            </div>
            <div className="flex justify-center">
                <p className=" text-gray-500 bg-slate-100 text-[3vw] inline-block px-10  rounded-lg mt-[1vw]">横にスライドしてさらに表示</p>
            </div>
        </div>
            
               
        
    )
}