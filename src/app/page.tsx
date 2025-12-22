import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CallToAction from "@/components/CtA";

export default function Home() {
    return (
        <main className="min-h-screen bg-white text-black">
            <div className="flex flex-col gap-10">
                <Hero/>
                <Features/>
                <CallToAction/>
            </div>
        </main>
    );
}