import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { NextUIProvider } from "@nextui-org/react";
import Header from "@/components/personal/Header";
import Footer from "@/components/personal/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <NextTopLoader color="#000" />
          <ToastContainer
            position="top-right"
            rtl={false}
            pauseOnHover
            closeOnClick
            autoClose={4000}
          />
          <Header />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
