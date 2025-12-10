"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {BsArrowUpRight} from "react-icons/bs";

export default function Navbar() {
    const links = ["Product", "Specifications", "Levels of Automation", "About"];

    return (
        <motion.nav
            initial={{ y: -5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-white/80 backdrop-blur-md"
        >
            <div className="text-3xl font-logo tracking-tight">Acimo</div>

            <div className="hidden md:flex space-x-8">
                {links.map((link) => (
                    <Link key={link} href="#" className="text-sm font-bold hover:text-neutral-600 transition-colors">
                        {link}
                    </Link>
                ))}
            </div>

            <button className="bg-black text-white px-6 py-4 rounded-full text-sm font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center">
                Shop Now <BsArrowUpRight />
            </button>
        </motion.nav>
    );
}