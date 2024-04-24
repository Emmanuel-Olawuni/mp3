import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// import{  NextTopLoader } from 'nextjs-toploader'
import { NextUIProvider } from "@nextui-org/react";
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
      <NextUIProvider>
        <body className={inter.className}>{children}</body>
      </NextUIProvider>
    </html>
  );
}
