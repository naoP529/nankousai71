"use client"
import { useState, useEffect } from "react";
import ScrollContainer from "react-indiana-drag-scroll"
import Image from "next/image";
import { MdOutlinePlace } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import Link from "next/link";
import { Kaisei_Decol } from "next/font/google";
import { useSearchParams } from "next/navigation";

const kaiseiDecol = Kaisei_Decol({weight:["400","700"],subsets:["latin"]})

type Props = {
    contents:Array<{
        name:string;
        place:string;
        time:string;
        comment:string;
        title:string;
        available:boolean;
        img:string;
        types:Array<string>;
        tags:Array<string>;
    }>
}

export default function ShowEvent(
    {contents}:Props
) {
    let new_contents = contents

    let compare = (a:any,b:any) => {
        if(a.name > b.name) {
            return 1;
        } else {
            return -1
        }
    }

    new_contents.sort(compare)

    for(let i = 0; i < new_contents.length; i++) {
        if(new_contents[i].time == "allTime") {
            new_contents[i].time = "全日開催"
        }
    }

    const Tags = [
        {id:"tenji", name:"展示", color:"from-blue-500 via-indigo-500 to-purple-500"},
        {id:"food", name:"フード", color:"from-orange-400 via-orange-400 to-yellow-400"},
        {id:"class", name:"クラス展示", color:"from-blue-500 via-indigo-500 to-purple-500"},
        {id:"club", name:"部活動展示", color:"from-blue-500 via-indigo-500 to-purple-500"},
        {id:"junior", name:"中学", color:"from-pink-300 via-rose-400 to-red-400"},
        {id:"high", name:"高校", color:"from-sky-400 via-blue-400 to-indigo-400"},
        {id:"act", name:"体験", color:"from-green-300 via-teal-400 to-cyan-500"},
        {id:"live", name:"ライブ", color:"from-purple-300 via-fuchsia-400 to-pink-400"},
        {id:"attraction", name:"アトラクション", color:"from-green-300 via-teal-400 to-cyan-500"},
        {id:"cafe", name:"食堂", color:"from-orange-400 via-orange-400 to-yellow-400"},
        {id:"pta", name:"PTA", color:"from-yellow-200 via-lime-400 to-green-400"},
        {id:"j-1", name:"中学1年", color:" from-yellow-300  to-amber-400"},
        {id:"j-2", name:"中学2年", color:"from-sky-400 via-blue-400 to-indigo-400"},
        {id:"j-3", name:"中学3年", color:"from-pink-300 via-rose-400 to-red-400"},
        {id:"h-1", name:"高校1年", color:"from-sky-400 via-blue-400 to-indigo-400"},
        {id:"h-2", name:"高校2年", color:"from-pink-300 via-rose-400 to-red-400"},
        {id:"h-3", name:"高校3年", color:"from-yellow-300 to-amber-400"},
    ]

    // const textColors = [
    //     { name:"中学1年", color:"text-amber-500"},
    //     { name:"中学2年", color:"text-blue-700"},
    //     { name:"中学3年", color:"text-red-700"},
    //     { name:"高校1年", color:"text-blue-700"},
    //     { name:"高校2年", color:"text-red-700"},
    //     { name:"高校3年", color:"text-amber-500"},
    // ]

    const setTextColor = (e:any) => {
        let result = ""

        if(e.includes("フード")) {
            result = "bg-gradient-to-br bg-clip-text text-transparent from-orange-400 via-orange-400 to-yellow-400"
            return result
        }
        
        if(e.includes("ライブ")) {
            result = "bg-gradient-to-br bg-clip-text text-transparent from-purple-300 via-fuchsia-400 to-pink-400"
            return result
        }

        if(e.includes("クラス展示") || e.includes("部活動展示")){
            result = "bg-gradient-to-br bg-clip-text text-transparent from-blue-500 via-indigo-500 to-purple-500"
            return result
        }

        if(result == "") {
            result = "text-black"
        } 

        return result
    }


    const memo = ["from-red-500 to-amber-400 via-orange-400", "from-yellow-300 via-amber-300 to-orange-400", "from-blue-500 via-indigo-500 to-purple-500", "from-yellow-300 via-green-400 to-cyan-400", "from-yellow-200 via-lime-400 to-green-400", "from-green-300 via-teal-400 to-cyan-500"]

    const params = useSearchParams();
    const type = params.get("type")?.toString()
    let types:Array<string> = []

    if(type != undefined) {
        types.push(type)
    }

    
    const selectCard = (newData:Array<string>) => {
        if(newData.length == 0) {
            // console.log("タグ無し")
            return new_contents
        } else {
            const find_tag = (item:any) => {
                const tags = item.tags
                for(let i =0; i < tags.length; i++) {
                    if(newData.includes(tags[i])) {
                        return true
                    }
                }
    
                return false
            }
    
            let found = new_contents.filter(find_tag)
    
            return found
        }
}

    const initContent = (tag:string | undefined) => {
        if(tag == undefined) {
            return new_contents
        }

        const selected = selectCard([tag])
        return selected
    }

    const [selected, setSelected] = useState<string[]>(types)

    const [allTags, setTags] = useState(Tags)

    const [selected_card, setSelectCard] = useState(initContent(type))
    const [notfound, setNotfound] = useState(false)

 
    const tagButtonChange = (e:any) => {
        // let nullOrNot = false
        let newData:Array<string> = []

        if(e.target.checked) {
            let newArray = selected
            newArray.push(e.target.value)
            setSelected(newArray)
            newData = newArray 
            // console.log(newData) 
        } else {
            const newArray =selected.filter(tag=> tag != e.target.value)
            // if(newArray.length ==0) {
            //     nullOrNot = true
            // } 
            setSelected(newArray)
            newData = newArray
            // console.log(newData)
        }
        // alert(selected[0])

        const selectedData = selectCard(newData)
        // console.log(selectedData)
        setSelectCard(selectedData)
        console.log(selectedData.length)
        if(selectedData.length == 0) {
            setNotfound(true)
        } else {
            setNotfound(false)
        }
    } 

    return(
        <div>
            <div className="">
                <ScrollContainer>
                    <div className="flex mt-[5vw] ">
                        {allTags.map((value) => (
                            <div className={`flex-shrink-0  cursor-pointer  rounded-lg mx-[2vw] bg-gradient-to-br p-[0.5%] ${value.color} h-[10vw]   inline-block ${selected.includes(value.name) == true && "drop-shadow-lg relative bottom-[1vw]"}`}>    
                                <input 
                                    id={value.id}
                                    value={value.name} 
                                    type="checkbox"
                                    onChange={tagButtonChange}
                                    checked={selected.includes(value.name)}
                                    className="hidden"
                                />
                                <label 
                                    htmlFor={value.id}
                                    className={`text-[4vw] 
                                    font-medium cursor-pointer flex h-full relative`}
                                >
                                    <div className={`z-0 bg-white absolute rounded-md h-full w-full ${selected.includes(value.name) == true && "hidden"}`}></div>
                                    <p className={`px-[4vw] my-auto  z-[5]
                                     ${selected.includes(value.name) == true && "text-white font-light"} bg-gradient-to-br text-transparent bg-clip-text ${value.color} `}>
                                        {value.name}
                                    </p>
                                </label>
                            </div>
                        ))}
                    </div>
                    
                </ScrollContainer>
                <div className="w-full flex">
                    <p className="inline-block mx-auto drop-shadow px-[5vw] py-[1vw] rounded-lg bg-slate-100 text-[2.5vw] text-gray-500 mt-[4vw]">横にスクロールしてさらに表示</p>
                </div>
            </div>
            {/* <div>
                {selected.map((value) => (
                    <p>{value}</p>
                ))}
            </div> */}
            <div className="bg-white pb-[10vw]">
                {notfound == true && 
                    <div className="w-full h-[35vw] flex">
                        <p className={`${kaiseiDecol.className} m-auto text-[7vw] bg-gradient-to-br from-fuchsia-500 via-purple-400 to-sky-400 bg-clip-text text-transparent `}>・・・該当なし・・・</p>
                    </div>
                }

                {selected_card.map((value) => (
                    <div className="mx-[4vw] h-[36vw] mt-[8vw]
                    bg-slate-100  flex justify-between p-[0.2vw] opacity-90 drop-shadow rounded-lg">
                        <div className="w-full h-full rounded-md bg-white flex">
                            <div className="flex-grow rounded-l-md pl-[2vw] pr-[0.5vw] my-auto flex flex-col">
                                <Link href={{pathname:"/event/introduction", query:{name:value.name}}}>
                                    <p className={`${setTextColor(value.tags)} pl-[0.5vw] text-[2.5vw] font-normal`}>{value.name}</p>
                                    <p className={`${setTextColor(value.tags)} font-medium  mb-[2.5%] ${value.title.length < 12 ? "text-[4.8vw] mt-[1%]" : "text-[3.5vw] mt-[1.2%]"} leading-[130%]`}>{value.title}</p>
                                </Link>
                                <div className="text-[2.5vw] leading-[160%]">
                                    <p className="flex items-center">
                                        <MdOutlinePlace className="translate-y-[2%] mr-[0.5%]"/>
                                        {value.place}    
                                    </p>
                                    <p className="flex items-center">
                                        <IoTimeOutline className=" translate-y-[7%] mr-[0.5%]" />
                                        {value.time}
                                    </p>
                                </div>
                                <div className={`w-full flex  ${value.title.length < 12 ? "my-[5%]": "my-[3%]"}`}>
                                    {value.types.map((value) => (
                                        <div className={`w-1/3 aspect-[3.3/1] bg-gradient-to-br ${Tags.find((item) => (item.name == value))?.color} rounded-md flex mr-[5%] opacity-90`}>
                                            <p className="m-auto text-[2vw] text-gray-50 font-medium">{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="h-full aspect-square">
                                <Image src={value.img} alt="展示イラスト" width={1000} height={1000} className=" h-full w-full rounded-r-md object-cover"></Image>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}