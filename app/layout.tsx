import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "./components/layout/Topbar";

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
        className={`${inter.variable} antialiased bg-[#E7F2F5]`}
        style={{
          fontFamily: inter.style.fontFamily,
        }}
      >
        <Topbar/>
        {children}
      </body>
    </html>
  );
}
