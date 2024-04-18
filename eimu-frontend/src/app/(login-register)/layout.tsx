import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "/globals.css";
import '@/app/globals.css'
import Image from "next/image";
import { getServerSession } from "next-auth";

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
      <body>
        <div>
          <Image src="/images/hagiang.jpg"
            className=''
            // placeholder='blur'
            fill={true}
            style={{
              "objectFit": "cover"
            }}
            alt="Background image" />
          {children}
        </div>
      </body>
  )
}
