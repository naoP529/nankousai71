import Image from "next/image"

export default function Kaze() {
    const data = [
        {name:"柊 三春", grade:"高校2年生", describe:"親友のさなは最近様子がおかしい気がする。あっ、そろそろ部活の演奏の練習を始めないと！", img:"/みはる.png"},
        {name:"佐藤 さな", grade:"高校2年生", describe:"進路を決めるのは面倒くさいし、大人になんてなりたくない。ずーっと高校生でいられたらいいのに。", img:"/さな.png"},
        {name:"榎本 蒼空", grade:"高校2年生", describe:"南高祭には全力投球の話し合いの進行係も任せとけ！でも、幼なじみのさなのやる気がないのはなんでなんだ？", img:"/そら.png"},
        {name:"七海 円", grade:"高校2年生？", describe:"進路決めで迷っている？それなら一生高校生でいようよ！大丈夫、将来のことで迷う心配はないよ。", img:"/まどか.png"},
        {name:"朝倉 カケル", grade:"高校3年生？", describe:"円さんはまた仲間に1人引き入れようとしている。メンバーが増えるのはうれしいけど、なんだろうこの不安感は。", img:"/かける.png"},
        {name:"木ノ下 笑麻", grade:"高校1年生？", describe:"勉強以外の思い出がなかったから、夢だった憧れの高校生活を楽しみたかったの。でも、なんだか違う気がします...", img:"/えま.png"}
    ]

    return(
        <div className="">
            <div>
                <p>タイトル</p>
                <Image src={"/一生高校生.png"} alt="タイトルロゴ" className="w-full aspect-auto rounded-md"></Image>
            </div>
            <div>
                <p>あらすじ</p>
                <div>
                    <p>淡々と高校生活を過ごしているさな。進路希望の提出は迫るが「なりたいものなんてないし面倒くさいし。」進路希望調査票を手持ち無沙汰にしていた。</p>
                    <p>そんなさなの元に現れたのは不思議な力を持つという同級生の女の子...!?</p>
                    <p>彼女の力を借りて最高の進路を見つけたはずだったが...</p>
                    <p>次第に本当に大切なことに気づき出していく。</p>
                </div>
            </div>
            <div>
                {data.map((value,i) => 
                    <div key={i} className="flex">
                        <div>
                            <Image src={value.img} alt="キャラ絵"></Image>
                        </div>
                        <div className="flex">
                            <p>{value.name}</p>
                            <p>{value.grade}</p>
                            <p className="">{value.describe}</p> 
                        </div>
                    </div>  
                )}
            </div>
        </div>
    )
}