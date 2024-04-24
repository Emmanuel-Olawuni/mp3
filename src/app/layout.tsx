import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// import{  NextTopLoader } from 'nextjs-toploader'
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/personal/Header";
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
    <html lang="en">
        <body className={inter.className}>
      <NextUIProvider>
          <Header />
          {children}
      </NextUIProvider>
        </body>
    </html>
  );
}
