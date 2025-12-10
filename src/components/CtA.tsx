"use client";
import { motion } from "framer-motion";
import {BsArrowUpRight} from "react-icons/bs";

export default function CallToAction() {
    return (
        <section className="py-48 px-6 bg-white flex flex-col items-center justify-center text-center border-t border-neutral-100">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-serif mb-8"
            >
                Connect with us
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-neutral-600 max-w-xl mb-12 text-lg"
            >
                Schedule a quick call to learn how Zodiac can help people with visual loss navigate across cities, streets, floors, and transportation.
            </motion.p>

            <motion.a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-200 flex items-center justify-center"
            >
                Contact (Calendly.com) <BsArrowUpRight />
            </motion.a>
        </section>
    );
}