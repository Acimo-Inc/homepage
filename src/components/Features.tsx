"use client";
import {motion} from "framer-motion";
import {FiLink, FiGlobe, FiUser, FiActivity} from "react-icons/fi";
import Image from "next/image";
import {BsArrowUpRight} from "react-icons/bs";

const features = [
    {
        icon: <FiLink className="w-6 h-6"/>,
        title: "End-to-end implementation",
        desc: "Zodiac knows your destination through you mobile phone app, it guides you through the process.",
    },
    {
        icon: <FiGlobe className="w-6 h-6"/>,
        title: "Access anywhere",
        desc: "Canes and robots are hard to help you locate doors, steps, and gaps. Zodiac detects them via sensors.",
    },
    {
        icon: <FiUser className="w-6 h-6"/>,
        title: "Real-time feedback",
        desc: "Zodiac computes via custom algorithm in your phone, transfers feedback via our custom PCB.",
    },
    {
        icon: <FiActivity className="w-6 h-6"/>,
        title: "Increased safety and accuracy",
        desc: "Zodiac involves as database and total users increase.",
    },
];

const steps = [
    {
        id: "01",
        title: "One headset and one chest band",
        desc: "With our easy-to-use setup, you can unpack, get prepared, and walk in minutes.",
    },
    {
        id: "02",
        title: "Customizable configuration",
        desc: "Adaptable to your specific requirements and preferences, both on software and hardware.",
    },
    {
        id: "03",
        title: "Route memory",
        desc: "Zodiac remembers your favorite route and in-house environment.",
    },
];

export default function FeatureGrid() {
    return (
        <>
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-neutral-100">
                <div className="mb-16">
                    <p className="text-sm font-mono mb-16 text-neutral-400 uppercase">Product</p>
                    <h2 className="text-4xl md:text-5xl font-serif mb-8">Zodiac, L2-equivalent navigator</h2>
                    <p className="text-neutral-500 max-w-xl">
                        Zodiac makes you feel the world without crashing into it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {features.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: idx * 0.1}}
                            className="flex flex-col items-start border-t-2 pt-8 border-neutral-100"
                        >
                            <div className="mb-6">{item.icon}</div>
                            <h3 className="text-lg font-serif mb-4">{item.title}</h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    className="w-full relative aspect-[2/1] rounded-3xl overflow-hidden bg-neutral-100"
                >
                    <Image src="/placeholder.png" alt="Street Scene" fill className="object-cover" />
                </motion.div>
            </section>
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-neutral-100">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-serif max-w-3xl">
                        Zodiac is well-rounded in all aspects
                    </h2>
                    <button
                        className="bg-black md:mt-0 text-white px-6 py-4 rounded-full text-sm font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center">
                        Shop Now <BsArrowUpRight />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={step.id}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: idx * 0.1}}
                            className="border-t-2 pt-8 border-neutral-100"
                        >
                            <div className="text-6xl text-neutral-400 mb-8 font-sans">{step.id}</div>
                            <h3 className="text-xl font-serif font-medium mb-4">{step.title}</h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    className="w-full relative aspect-[2/1] rounded-3xl overflow-hidden bg-neutral-100"
                >
                     <Image src="/placeholder.png" alt="Street Scene" fill className="object-cover" />
                </motion.div>
            </section>
        </>
    );
}