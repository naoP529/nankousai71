import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Kiwi_Maru } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { LoadingLayout } from "@/components/global/parts/loading_layout";

const inter = Inter({ subsets: ["latin"] });

const kiwi_Maru = Kiwi_Maru({weight:["300","400","500"], subsets:["latin"]})

export const metadata: Metadata = {
  title: "祭現不可能 | 第71回南高祭",
  description: "南高・南高附属中最大の行事へようこそ。南高創立70周年・附属中創立10周年を迎えた今年、歴代の南高生から引き継がれた、「みんなが仲間に みんなが楽しく みんなで創ろう」の精神を次世代へと繋ぎます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestUrl = headers().get("x-url")

  return (
    <html lang="jp">
      <body className={`${kiwi_Maru.className} bg-gradient-to-b from-cyan-300  `}>
          <div className="relative">
            <div className="w-full h-full bg-white absolute -z-10"></div>
            <div className="md:hidden z-0">
              {children}
            </div>
            <div className="fixed top-0 left-0 z-[9999]">
              <LoadingLayout></LoadingLayout>
            </div> 
          </div>
        
        {requestUrl &&
        <div className="">
          <iframe className="mx-auto hidden md:block w-[50vh] h-[100vh] scrollbar-y drop-shadow-xl" src={requestUrl}></iframe>
        </div>
        }
        
        
      </body>
    </html>
  );
}
