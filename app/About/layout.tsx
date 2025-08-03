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
            className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen lg:h-1 bg-[url('/imgs/IMG_20250102_190105.jpg')] bg-cover bg-center bg-no-repeat`}
        >

            {children}
        </body>

    );
}
