"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">

            <motion.h1
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-5xl mx-auto mb-36 mt-12"
            >
                World’s first scalable navigation device for all levels of visual loss
            </motion.h1>

            <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.3, duration: 0.5}}
                className="relative w-full max-w-5xl mx-auto"
            >
                <div className="relative z-10 mx-auto w-2/3 aspect-[16/10]
                        rounded-t-[2rem] rounded-b-none
                        border-t-[14px] border-x-[14px] border-b-0 border-black
                        bg-black overflow-hidden shadow-2xl">
                    <div
                        className="relative w-full h-full rounded-t-[1.2rem] rounded-b-none overflow-hidden bg-gray-100">
                        <Image src="/placeholder.png" alt="Street Scene" fill className="object-cover"/>
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-3/5 bg-neutral-300 rounded-[2.5rem]"></div>
            </motion.div>
        </section>
    );
}