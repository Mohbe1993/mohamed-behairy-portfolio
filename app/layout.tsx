



import "./globals.css";
import Navbar from "./components/navbar";





export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`w-[100vw] bg-[url('/imgs/shutterstock-1665254809.webp')] bg-cover bg-center  bg-no-repeat  overflow-x-hidden`}>

                <Navbar />
                {children}
            </body>

        </html>
    );
}