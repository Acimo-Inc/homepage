import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CallToAction from "@/components/CtA";
import {FaRegCopyright} from "react-icons/fa";

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-black">
            <Navbar/>
            <div className="flex flex-col gap-10">
                <Hero/>
                <Features/>
                <CallToAction/>
            </div>

            <footer className="py-8 text-neutral-500 text-sm border-t border-gray-100 mt-10 text-center">
                <p>
                    <span className={"text-2xl align-middle relative top-[2px]"}>&copy; </span>
                    {new Date().getFullYear()} Acimo Inc. All rights reserved.
                </p>
            </footer>

        </main>
    );
}