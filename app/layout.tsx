



import "./globals.css";
import Navbar from "./components/navbar";





export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`w-[100vw] bg-[url('/imgs/shutterstock-1665254809.webp')] g-cover bg-center bg-fixed   overflow-x-hidden`}>

                <Navbar />
                {children}
            </body>

        </html>
    );
}