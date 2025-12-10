// app/layout.tsx
import type { Metadata } from "next";
import {Newsreader, Playfair_Display} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const googleSansFlex = localFont({ src: '../assets/GoogleSansFlex.ttf', variable: "--font-google-sans" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader" });

export const metadata: Metadata = {
    title: "Acimo - Scalable Navigation",
    description: "World’s first scalable navigation device for all levels of visual loss",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${googleSansFlex.className} ${newsreader.variable} antialiased bg-white text-black`}>
        {children}
        </body>
        </html>
    );
}