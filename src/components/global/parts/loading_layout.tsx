"use client"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import { LoadingPage } from "./loading"

export function LoadingLayout() {
    return(
        <AnimatePresence key={"loading"} mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            <motion.div initial={{height:"100vh"}} animate={{height:0}} exit={{height:"100vh"}} transition={{duration:0.7, }} className="absolute z-20 top-0 left-0 w-screen h-0 overflow-hidden">
              <LoadingPage></LoadingPage>
            </motion.div>
        </AnimatePresence>
    )
}