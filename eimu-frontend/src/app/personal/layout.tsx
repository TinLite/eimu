import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "/globals.css";
import '@/app/globals.css'
import Image from "next/image";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: {
    template: '%s | Project Eimu',
    default: 'Project Eimu'
  },
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=" bg-[#111319] h-screen">
      <body className="">
        <div className="">
          {children}
        </div>
      </body>
    </html>
  )
}
