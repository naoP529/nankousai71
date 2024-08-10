import Header from "@/components/global/header";
import { Kaisei_Decol } from "next/font/google"


const kaiseiDecol = Kaisei_Decol({weight:["400","700"],subsets:["latin"]})

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <div className="w-full fixed top-0 left-0 z-40">
              <Header></Header>
            </div>
            <div className="z-0">
              {/* <div className="relative">
                <div className="w-full h-full bg-white absolute -z-10"></div>
                <div className="z-0">
                  {children}
                </div>
              </div> */}
              {children}
            </div>
            
        </div>
    );
}