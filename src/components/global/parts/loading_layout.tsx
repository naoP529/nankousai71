"use client"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import { LoadingPage } from "./loading"

export function LoadingLayout() {
    return(
        <AnimatePresence key={"loading"} mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            <motion.div initial={{opacity:1,}} animate={{opacity:0}} exit={{opacity:1}} transition={{duration:0.5}} className="pointer-events-none absolute z-20 top-0 left-0 w-screen h-screen overflow-hidden">
              <LoadingPage></LoadingPage>
            </motion.div>
        </AnimatePresence>
    )
}