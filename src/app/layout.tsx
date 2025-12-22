// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {FaRegCopyright} from "react-icons/fa";

export const metadata: Metadata = {
    title: "Acimo.ai",
    description: "Bridging the AI divide for underserved populations",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <style>
                @import url(&#39;https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap&#39;);
            </style>
        </head>
        <body className={"antialiased bg-white text-black"}>
        <Navbar/>
        {children}
        <footer className="py-8 text-neutral-500 text-sm border-t border-gray-100 mt-10 text-center">
            <p>
                <span className={"text-2xl align-middle relative top-[2px]"}>&copy; </span>
                {new Date().getFullYear()} Acimo Inc. All rights reserved.
            </p>
        </footer>
        </body>
        </html>
    );
}