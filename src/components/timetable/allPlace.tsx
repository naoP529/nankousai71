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
    console.log(content)
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
        {target:["高校ダンス部", "書道部", "吹奏楽部"], color:"bg-gradient-to-br from-blue-400 via-sky-300 to-sky-300"},
        {target:["高校軽音楽部", "弦楽部", "中学演劇部","高校演劇部"], color:"bg-gradient-to-br from-purple-300 via-fuchsia-400 to-pink-400 "},
        {target:["茶道部", "プラネタリウム"], color:"bg-gradient-to-br from-green-300 via-teal-400 to-cyan-400 "},
        {target:["学校説明"],color:"bg-gradient-to-br from-sky-500 to-sky-200"},
    ]

    const images = [
        {name:"高校軽音楽部", img:"/Firefly ドラム ギター キーボード ライブ 36783.jpg"},
        {name:"高校ダンス部", img:"/Firefly kPOP ダンス シルエット ステージの上 複数人 21761 (1).jpg"},
        {name:"プラネタリウム", img:"/Firefly Planetarium 星空 67264.jpg"},
        {name:"高校演劇部", img:"/Firefly across the border 83580.jpg"},
        {name:"科学部", img:"/Firefly 科学部 試験管 フラスコ 机 白 人無し 19210 (1).jpg"},
        {name:"弦楽部", img:"/Firefly 弦楽部 バイオリン 教室 59986.jpg"},
        {name:"高校料理部", img:"/Firefly 厨房 お菓子作り 白 23408.jpg"},
        {name:"文芸同好会", img:"/Firefly 本 おとぎ話 47001.jpg"},
        {name:"美術部", img:"/美術部_背景.png"},
        {name:"茶道部", img:"/Firefly 茶道 和室 日本庭園 49822.jpg"},
        {name:"食堂", img:"/食堂.png"},
    ]

    const imageTag = (name:string) => {
        const found = images.find((value) => (
            value.name == name
        ))

        if(found == null) {
            return "/AdobeStock_335757173.jpeg"
        } else {
            return found.img
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

    const edit_timeText = (e:string) => {
        const deleteYear = e.replace("2024-", "")
        const deleteDay = deleteYear.replace("9-7-", "")
        const deleteSunday = deleteDay.replace("9-8-", "")

        var split = deleteSunday.split("-")
        if(split[1].length == 1) {
            split[1] = "0" + split[1]
        }
        return split[0] + "：" + split[1]
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
            borderRadius:"0.5rem"
        }
    }

    const modalStyle_pc = {
        overlay:{
            top:0,
            left:0,
            backgroundColor:"rgb(0 0 0 / 0.5)",
            zIndex:5000
        },
        content:{
            top:"10vh",
            margin:"1rem auto",
            width:"min(600px,80vw)",
            bottom:"auto",
            height:"auto",
            backgroundColor:"white",
            borderRadius:"0.5rem"
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
            <Modal isOpen={isOpen} style={modalStyle_pc} onRequestClose={() => setModal(false)} className="">
                <div className={`flex items-center justify-between lg:text-2xl  text-[4vw] lg:pb-3 lg:mb-0  mb-[1vw]`}>
                    <p className={`${event_color.find((m) => m.target.includes(modalData.name))?.color} bg-clip-text  text-transparent font-medium`}>{modalData.name}</p>
                    <AiOutlineClose className="text-gray-400 mr-[1vw] lg:text-2xl text-[5vw] cursor-pointer lg:mr-2" onClick={() => setModal(false)}></AiOutlineClose>
                </div>
                {/* <p className={`text-[4vw] ${event_color.find((m) => m.target.includes(modalData.name))?.color} bg-clip-text text-transparent font-medium mb-[1vw]`}>{modalData.name}</p> */}
                <Image src={imageTag(modalData.name)} alt="イメージ画像"  width={2000} height={100} className="w-full aspect-video  object-cover rounded-md"></Image>
                <p className={`text-[5vw] lg:text-4xl ${event_color.find((m) => m.target.includes(modalData.name))?.color} bg-clip-text text-transparent font-medium my-[1vw]`}>{modalData.title}</p>
                <div className="flex items-center text-[3vw] lg:text-2xl">
                    <IoTimeOutline></IoTimeOutline>
                    <p className="mx-[0.5%] relative bottom-[0.2vw]">{modalData.time}</p>
                </div>
                <div className="flex items-center text-[3vw] lg:text-2xl mt-[0.5vw]">
                    <MdOutlinePlace></MdOutlinePlace>
                    <p className="relative bottom-[0.1vw]">{modalData.place}</p>
                </div>
                <div className="w-[40%] lg:max-w-[200px] mx-auto mt-[2vw]">
                    <Link href={{pathname:"/event/introduction", query:{name:modalData.name}}}>
                        <SquareButtonPinkShadow2 text="もっと見る"></SquareButtonPinkShadow2> 
                    </Link>   
                </div>
            </Modal>
            {/* <Modal isOpen={isOpen} style={modalStyle_pc} onRequestClose={() => setModal(false)} className="hidden lg:block">
                <div className={`flex items-center justify-between text-2xl  py-3`}>
                    <p className={`${event_color.find((m) => m.target.includes(modalData.name))?.color} ml-4 bg-clip-text text-transparent font-medium`}>{modalData.name}</p>
                    <AiOutlineClose className="text-gray-400 mr-4 text-2xl cursor-pointer" onClick={() => setModal(false)}></AiOutlineClose>
                </div>
                <Image src={imageTag(modalData.name)} alt="イメージ画像"  width={2000} height={100} className="w-full aspect-[2.3/1]  object-cover rounded-md"></Image>
                <p className={`text-4xl ${event_color.find((m) => m.target.includes(modalData.name))?.color} ml-4 bg-clip-text text-transparent font-medium my-4`}>{modalData.title}</p>
                <div className="flex items-center text-2xl ml-4">
                    <IoTimeOutline></IoTimeOutline>
                    <p className="mx-[0.5%] relative bottom-[0.2vw]">{modalData.time}</p>
                </div>
                <div className="flex items-center text-2xl mt-2 ml-4">
                    <MdOutlinePlace></MdOutlinePlace>
                    <p className="relative bottom-[0.1vw]">{modalData.place}</p>
                </div>
                <div className="w-[27%] mx-auto py-4">
                    <Link href={{pathname:"/event/introduction", query:{name:modalData.name}}}>
                        <SquareButtonPinkShadow2 text="もっと見る"></SquareButtonPinkShadow2> 
                    </Link>   
                </div>
            </Modal> */}
            <motion.div className="mt-[5vw] mb-[7vw] 2xl:mb-10 2xl:my-12 lg:my-6 flex justify-center items-center" >
                <motion.p variants={variantsForButton} animate={day=="9/7" ? "sep7T" : "sepT"} transition={{duration:0.3, ease:"easeOut"}} className="font-medium text-[8vw] lg:text-3xl 2xl:text-4xl text-[#0fc5dd]">9/7</motion.p>
                <motion.div className="w-[12%] 2xl:w-16 lg:w-14 mx-3 lg:mx-5 aspect-[11/7] rounded-full translate-y-[6%] relative cursor-pointer" variants={variantsForButton} onClick={radioClicked} animate={day == "9/7" ? "sep7" : "sep8"} transition={{duration:0.5, ease:"easeOut"}}> 
                    <motion.div variants={variantsForButton}  animate={day=="9/7" ? "sep7B" :"sep8B"} transition={{duration:0.15, ease:"easeOut"}}  className="h-[86%] aspect-square rounded-full bg-white top-[7%] absolute" ></motion.div>
                </motion.div> 
                <motion.p variants={variantsForButton} animate={day=="9/8" ? "sep8T" : "sepT"} transition={{duration:0.5, ease:"easeOut"}} className="font-medium text-[8vw] lg:text-3xl 2xl:text-4xl">9/8</motion.p> 
            </motion.div>
            <div className="flex w-full relative lg:hidden">
                <div className="pt-[14vw] w-full absolute left-0  bg-white -top-[0.85rem] flex flex-col pointer-events-none ">
                    {times.map((value, index) => (
                        <div key={index} className={`w-full h-[20vw] flex`}>
                            <p className={`text-sm inline-block text-gray-400  font-medium pl-[1.5vw]  z-20 w-[12%]`}>{value}</p>
                            <div className="border-t-2 ml-1 flex-grow relative top-3 opacity-60"></div>
                        </div>
                    ))}
                </div>
                <div className="w-full z-10">
                    <ScrollContainer className="ml-[13%]  h-[160vw]">  
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
                                            console.log( events)
                                            var event_array:Array<event_type> | never[] = []

                                            if(day == "9/7") {
                                                if(events?.onSep7 == null) {
                                                    return 
                                                }
                                                event_array = events?.onSep7
                                                console.log(event_array)
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
            <div className="w-full z-10 hidden lg:flex relative h-[85svh] px-8">
                <div className="2xl:mt-20 mt-14 pl-5 w-full absolute left-0 -top-[0.85rem] grid grid-rows-[repeat(7,1fr)] h-full pointer-events-none ">
                    {times.map((value, index) => (
                        <div key={index} className={`w-full h-full flex flex-wrap`}>
                            <p className="2xl:text-xl text-base inline-block text-gray-400 font-medium shadow-stone-50 z-20">{value}</p>
                            <div className="border-t-2 ml-2 flex-grow relative top-3 opacity-80"></div>
                            <div className={`border-t-2 ml-14 w-full relative opacity-40  ${index == times.length -1 && "hidden"}`}></div>
                        </div>
                    ))}
                </div>
                <div className={`pl-14 grid grid-cols-[repeat(7,1fr)] 2xl:grid-rows-[80px,repeat(7,1fr)] grid-rows-[56px,repeat(7,1fr)] relative grid-flow-row w-full h-full`}>
                        {places.map((value, index) => (
                            <div key={index} className="mt-1 2xl:mb-5 2xl:mx-5 mx-2 mb-3 rounded-md bg-slate-100 flex justify-center items-center" style={{backgroundColor:colorsForHeader[index]}}>
                                <p className="text-gray-600 2xl:text-lg text-sm">{value}</p>
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
                                        console.log( events)
                                        var event_array:Array<event_type> | never[] = []

                                        if(day == "9/7") {
                                            if(events?.onSep7 == null) {
                                                return 
                                            }
                                            event_array = events?.onSep7
                                            console.log(event_array)
                                        } else {
                                            if(events?.onSep8 == null) {
                                                return 
                                            }
                                            event_array = events?.onSep8
                                        }
                                        
                                        const event_div = event_array.map((e, n) => 
                                            <div key={n} className={`absolute 2xl:w-[80%] w-[85%] z-20 rounded cursor-pointer drop-shadow-md flex flex-wrap justify-center  ${event_color.find((m) => m.target.includes(e.name))?.color} ${Number(e.contentLength.replace("%", "")) < 18 ? "items-center" : "pt-5"}`}
                                            style={{top:e.startPosition,height:e.contentLength,}} onClick={() => eventClicked(e, value)}>
                                                <p className="text-slate-100 font-light 2xl:text-[1.2rem] text-sm">{e.name}</p>
                                                <div className={`${Number(e.contentLength.replace("%", "")) < 20 ? "hidden" : "xl:block hidden"} opacity-85 w-full 2xl:px-10 px-5 2xl:text-lg text-sm font-light text-slate-100 `}>
                                                    <p className="flex justify-between mb-1">
                                                        <span>開始</span>
                                                        <span>{edit_timeText(e.start)}</span>
                                                    </p>
                                                    <p className="flex justify-between">
                                                        <span>終了</span>
                                                        <span>{edit_timeText(e.end)}</span>
                                                    </p>  
                                                </div>
                                            </div>
                                        )

                                        return event_div
                                    }())}
                                </div>
                                

                            </div>
                        ))}
                    </div>      
                </div>
            {/* <div className="flex justify-center lg:hidden">
                <p className=" text-gray-500 bg-slate-100 text-[3vw] inline-block px-10  rounded-lg mt-[1vw]">横にスライドしてさらに表示</p>
            </div> */}
        </div>
            
               
        
    )
}