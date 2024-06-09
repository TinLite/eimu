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
          <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden absolute top-0 left-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-slate-950 w-80 p-4 h-screen gap-2">
            <li>
              <Link href={'/'} className='text-white font-bold py-8 block'>
                Trở về trang chủ
              </Link>
            </li>
            <li>
              <Link href={'/user/detail'} className={`${(pathname === "/user/detail") ? "active" : ""} py-3`}>
                Thông tin tài khoản
              </Link>
            </li>
            <li>
              <Link href={'/user/history'} className={`${(pathname === "/user/history") ? "active" : ""} py-3`}>
                Lịch sử xem
              </Link>
            </li>
            <li>
              <Link href={'/user/follows'} className={`${(pathname === "/user/follows") ? "active" : ""} py-3`}>
                Danh sách theo dõi
              </Link>
            </li>
            <li className='mt-auto'>
              <button onClick={(e) => { signOut() }} className='font-bold btn btn-error btn-outline'>
                Đăng xuất
              </button>
            </li>
          </ul>
        </div>
      </div>
    </body>
  );
}

