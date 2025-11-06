import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BlueEllipse from "./components/layout/BlueEllipse";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Next Athlete",
    description: "Crafted by zamanShahed",
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} antialiased bg-[#E7F2F5] pt-[108px] pl-[120px] pr-[40px] max-w-[1440px] mx-auto`}
                style={{
                    fontFamily: inter.style.fontFamily,
                }}
            >
                <BlueEllipse />
                <Topbar />
                <Sidebar />
                {children}
            </body>
        </html>
    );
}
