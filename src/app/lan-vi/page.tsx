"use client";

import LevelsOfAutomation from "@/components/LevelsOfAutomation";
import { motion } from "framer-motion";

export default function LanViPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            <section className="pt-64 pb-24 px-6 md:px-12 max-w-6xl mx-auto flex flex-col gap-8">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm font-mono text-neutral-400 uppercase"
                >
                    Assistive Navigation
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-serif text-neutral-900 leading-tight mb-12"
                >
                    LAN-VI Taxonomy
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="text-lg text-neutral-600 max-w-6xl"
                >
                    The following table maps the Society of Automotive Engineers (SAE) J3016 standard to the domain of assistive technology for the visually impaired. It defines the division of responsibility between the human user and the assistive system regarding the Dynamic Ambulation Task (DAT).
                </motion.p>
            </section>

            <LevelsOfAutomation />
        </main>
    );
}
