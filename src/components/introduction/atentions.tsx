export default function Pranetarium_tiket () {
    return (    
        <div className="w-full shadow-md rounded-md">
            <p className="text-[3vw] lg:text-lg lg:py-3 lg:px-5 text-white from-blue-500 via-indigo-600 to-indigo-900 bg-gradient-to-br py-[2.2vw] px-[3vw] rounded-t-md">整理券が必要です。</p>
            <p className=" bg-gradient-to-br bg-clip-text text-transparent from-blue-600 via-indigo-600 to-indigo-800 text-[3vw] pt-[2vw] leading-[160%] pb-[3vw] px-[3vw] text-justify rounded-b-lg bg-white font-normal tracking-wide lg:text-lg lg:py-5 lg:px-5">プラネタリウム観賞には事前に配布する整理券が必要です。配布場所は3階の生物・化学センター。午前の部は9:30、午後の部は12:30から配布を始めます。無くなり次第終了となりますのでご了承ください。</p>
        </div>
    )
}

export function HowToPay () {
    return(
        <div className="w-full shadow-md rounded-md">
            <p className="text-[3vw] lg:text-lg lg:py-3 lg:px-5 text-white from-orange-400 via-orange-400 to-yellow-400 bg-gradient-to-br py-[2.2vw] px-[3vw] rounded-t-md">支払い方法</p>
            <p className="from-orange-400 bg-gradient-to-br bg-clip-text text-transparent via-orange-400 to-yellow-400 text-[3vw] pt-[2vw] leading-[160%] pb-[3vw] px-[3vw] text-justify rounded-b-lg bg-white font-normal tracking-wide lg:text-lg lg:py-5 lg:px-5">高校3年生のフードは、交通系IC（SUICA, PASMO等）による支払いに対応しています。これまで通り現金もご利用いただけます。（※校内でのチャージはできません。）</p>
        </div>
    )
}

export function CookingClubNotice() {
    return(
        <div className="w-full shadow-md rounded-md">
            <p className="text-[3vw] lg:text-lg lg:py-3 lg:px-5 text-white from-orange-400 via-orange-400 to-yellow-400 bg-gradient-to-br py-[2.2vw] px-[3vw] rounded-t-md">整理券を配布します</p>
            <p className="from-orange-400 bg-gradient-to-br bg-clip-text text-transparent via-orange-400 to-yellow-400 text-[3vw] pt-[2vw] leading-[160%] lg:leading-[170%] pb-[3vw] px-[3vw] text-justify rounded-b-lg bg-white font-normal tracking-wide lg:text-lg lg:py-5 lg:px-5 ">7日の9:30~と15:30~の2回に渡って3回の320教室前にて整理券を配布します。支払いは現金となります。（料理部の販売は7日のみですのでご注意ください。）</p>
        </div>
    )
}