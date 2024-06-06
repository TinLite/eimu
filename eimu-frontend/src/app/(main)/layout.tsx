import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import "@/app/globals.css";
import { getServerSession } from "next-auth/next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s | Project Eimu',
    default: 'Project Eimu'
  },
  description: '',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getServerSession()
  return (
      <body className={`${inter.className} bg-[#000D1C]`}>
        <Navbar />
        <div className="pt-16">
          <Suspense fallback={<div>Loading...</div>}>
          {children}
          </Suspense>
        </div>
        <Footer />
      </body>
  );
}
