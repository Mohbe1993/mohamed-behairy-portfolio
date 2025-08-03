import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});





export const metadata: Metadata = {
    title: "About",
    description: "About Me",
};



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/imgs/contact-us-background-eps-vector-600nw-2491405611.webp')] bg-cover bg-center `}
            >
                {children}
            </body>
       
    );
}
