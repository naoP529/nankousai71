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
  description: "南高・南高附属中最大の行事へようこそ。南高創立70周年・附属中創立10周年を迎えた今年、歴代の南高生から引き継がれた、「みんなが仲間に みんなが楽しく みんなで創ろう」の精神を次世代へと繋ぎます。",
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
