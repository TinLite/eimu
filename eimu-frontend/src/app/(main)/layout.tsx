import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trang chủ",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="mt-16">{children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
