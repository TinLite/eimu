'use client';
import "@/app/globals.css";
import { signOut } from "next-auth/react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <body className={`${inter.className}`}>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {children}
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-slate-950 w-80 p-4 h-screen gap-2">
            <li className=''>
              <Link href={'/'} className='text-white hover:text-green-500 font-bold py-5'>
                Trang chủ
              </Link>
            </li>
            <li className=''>
              <Link href={'/user/detail'} className={`${(pathname === "/user/detail") ? "active" : ""}  hover:text-green-500 py-5`}>
                Thông tin tài khoản
              </Link>
            </li>
            <li className=''>
              <Link href={'/user/history'} className={`${(pathname === "/user/history") ? "active" : ""}  hover:text-green-500 py-5`}>
                Lịch sử xem
              </Link>
            </li>
            <li className=' border-b-2'>
              <Link href={'/user/follows'} className={`${(pathname === "/user/follows") ? "active" : ""} hover:text-green-500 py-5`}>
                Danh sách theo dõi
              </Link>
            </li>
            <li className=''>
              <a onClick={(e) => { signOut() }} className='text-white hover:text-green-500 font-bold py-5'>
                Đăng xuất
              </a>
            </li>
          </ul>
        </div>
      </div>
    </body>
  );
}

