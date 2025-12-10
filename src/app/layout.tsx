// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

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
        <head>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Google+Sans+Code:ital,wght@0,300..800;1,300..800&family=Google+Sans+Flex:opsz,wght@6..144,1..1000&family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap');
            </style>
        </head>
        <body className={"antialiased bg-white text-black"}>
        {children}
        </body>
        </html>
    );
}