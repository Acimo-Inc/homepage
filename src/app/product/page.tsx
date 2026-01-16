"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function WaitlistForm() {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const [iframeSrc, setIframeSrc] = useState("");

    useEffect(() => {
        const baseUrl = "https://wt.ls/embed/6dc02e07-7920-46fd-b1ee-7874699a362e?transparent=true&fullpage=false&parentReferrer=";
        const params = new URLSearchParams(window.location.search);
        const r = params.get("r");

        if (r) {
            const url = new URL(baseUrl);
            url.searchParams.set("r", r);
            setIframeSrc(url.toString());
        } else {
            setIframeSrc(baseUrl);
        }
    }, []);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            console.log("Received message:", event.data);

            if (event.data && typeof event.data.height === "number" && iframeRef.current) {
                console.log("Setting iframe height to:", event.data.height);
                iframeRef.current.style.height = `${event.data.height}px`;
            }
        };

        window.addEventListener("message", handleMessage);

        const iframe = iframeRef.current;
        if (iframe) {
            iframe.onload = () => {
                console.log("Iframe loaded");
                setTimeout(() => {
                    try {
                        iframe.contentWindow?.postMessage({ type: 'getHeight' }, '*');
                    } catch (e) {
                        console.error("Could not communicate with iframe:", e);
                    }
                }, 500);
            };
        }

        return () => window.removeEventListener("message", handleMessage);
    }, [iframeSrc]);

    if (!iframeSrc) return null;

    return (
        <iframe
            ref={iframeRef}
            id="waitlist-aMXY"
            src={iframeSrc}
            style={{
                width: "100%",
                border: "none",
                minHeight: "600px",
                height: "100%",
                display: "block"
            }}
            allow="web-share; clipboard-read; clipboard-write *"
            width="100%"
            seamless
        />
    );
}

export default function ProductPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            <section className="pt-28 pb-16 px-6 md:px-12 max-w-5xl mx-auto flex flex-col gap-6">
                <p className="text-sm font-mono text-neutral-400 uppercase">Product</p>
                <h1 className="text-5xl md:text-6xl font-serif text-neutral-900">Zodiac V3</h1>
                <div className="my-8 w-full relative aspect-[16/9] rounded-3xl overflow-hidden bg-neutral-100">
                    <Image src="/Zodiac V3.png" alt="Zodiac V3" fill className="object-cover" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-neutral-400 text-sm md:text-base">
                    <div><strong>Battery: </strong>3.7V 650mAh (typical)</div>
                    <div><strong>Connectivity: </strong>BLE Smartphone Tethering</div>
                    <div><strong>Haptics: </strong>4x vibration motors, 10mm diameter, 2.7mm thick</div>
                    <div><strong>Antenna: </strong>32mm NFC Coil & Integrated BLE</div>
                </div>
            </section>

            <section className="pb-24 px-6 md:px-12 max-w-5xl mx-auto">
                <div className="rounded-3xl border border-neutral-200 p-10 bg-neutral-50">
                    <p className="text-sm font-mono text-neutral-400 uppercase mb-4">Waitlist</p>
                    <WaitlistForm />
                </div>
            </section>
        </main>
    );
}