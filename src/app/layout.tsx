import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Kiwi_Maru } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { LoadingLayout } from "@/components/global/parts/loading_layout";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

const kiwi_Maru = Kiwi_Maru({weight:["300","400","500"], subsets:["latin"]})

export const metadata: Metadata = {
  title: "祭現不可能 | 第71回南高祭・展示の部2024",
  description: "横浜市立南高校・南高附属中最大の行事へようこそ。「みんなが仲間に みんなが楽しく みんなで創ろう」の精神を基に、たくさんの魅力的な展示を公開しています。フード販売や生演奏なども開催予定。ぜひ気軽にお越しください！",
  openGraph:{images:"https://drive.google.com/file/d/137obuAzNIB6r-501h6D0-6SoFgLnqXd3/view?usp=drive_link", type:"website", description:"南高・南高附属中最大の行事へようこそ。どなたでも来場可。魅力的な催し物をたくさん用意しています。"},
  other:{
    "google-site-verification":["0oZkaqm-Q6yVAvi6FkC6TXOroxI5c0S2dUMsxRa__uw"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestUrl = headers().get("x-url")

  return (
    <html lang="jp">
      <body className={`${kiwi_Maru.className}`}>
            {children}
        <Analytics />
        
      </body>
    </html>
  );
}
