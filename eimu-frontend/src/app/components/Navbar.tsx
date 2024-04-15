import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 xl:px-20 bg-[#001731] text-gray-200 z-50">
            <div className="flex items-center justify-between">
                <div className="flex ">
                    <Link href={"/"} className="">
                        <Image src='/images/Eimu-logo-removebg-preview.png' alt='eimu'
                            width={65}
                            height={20} />
                    </Link>
                    <Link href={"/genres"} className="px-4 flex items-center hover:text-sky-400 transition-colors">Phim mới</Link>
                    <Link href={"/genres/eccbc87e4b5ce2fe28308fd9f2a7baf3"} className="px-4 flex items-center hover:text-sky-400 transition-colors">Phim bộ</Link>
                    <Link href={"/genres/a87ff679a2f3e71d9181a67b7542122c"} className="px-4 flex items-center hover:text-sky-400 transition-colors">Phim lẻ</Link>
                    <div className="dropdown dropdown-hover px-4 content-center">
                        <div tabIndex={0} role="button" className=""><Link href={""} className="flex items-center hover:text-sky-400">
                            Thể loại
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-1">
                                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                            </svg>
                        </Link>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 text-white rounded-box w-52">
                            <li><Link href={"/genres/8f14e45fceea167a5a36dedd4bea2543"}>Hành động</Link></li>
                            <li><Link href={"/genres/2a79ea27c279e471f4d180b08d62b00a"}>Tình cảm</Link></li>
                            <li><Link href={"/genres/45c48cce2e2d7fbdea1afc51c7c6ad26/d2ddea18f00665ce8623e36bd4e3c7c5"}>Anime</Link></li>
                        </ul>
                    </div>
                </div>
                <div><input type="text" placeholder="Tìm kiếm..." className="input input-bordered w-full h-10 bg-blue-50 max-w-xs text-black" /></div>
                <div className="flex items-center">
                    <Link href={""} className="flex items-center hover:text-green-400 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <div className="flex-initial w-20 ml-1">Lịch sử</div>
                    </Link>
                    <Link href={""} className="flex items-center hover:text-green-400 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                        </svg>
                        <div className="flex-initial w-20 ml-1">Theo dõi</div>
                    </Link>
                    <Link href={"/login"} className="px-4 py-2 rounded-md bg-blue-50 text-[#006FEE] flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                        </svg>
                        <span className="ml-1">Đăng nhập</span></Link>
                </div>
            </div>
        </nav >
    )
};
export default Navbar;