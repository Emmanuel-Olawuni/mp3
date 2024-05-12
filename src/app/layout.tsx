import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// import{  NextTopLoader } from 'nextjs-toploader'
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/personal/Header";
import Footer from "@/components/personal/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Docx to Mp3",
  description: "Convert docx to mp3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en h-full bg-white">
      <body className={`${inter.className}  h-full `}>
        <NextUIProvider>
          <Header />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
