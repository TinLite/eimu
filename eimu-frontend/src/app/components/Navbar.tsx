import React from "react";
import Image from "next/image";
const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 px-6 bg-[#001731] text-white z-50">
            <ul className="flex items-center justify-between h-full px-4 ">
                <div className="flex items-center">
                    <li className="">
                        <a href="#">
                            <Image src='/images/Eimu-logo-removebg-preview.png' alt='eimu'
                                width={70}
                                height={20} />
                        </a>
                    </li>
                    <li className="ml-4 "><a href="#" className="hover:text-black p-6 hover:bg-sky-200">Phim mới</a></li>
                    <li className="ml-4 "><a href="#" className="hover:text-black p-6 hover:bg-sky-200">Phim bộ</a></li>
                    <li className="ml-4 "><a href="#" className="hover:text-black p-6 hover:bg-sky-200">Phim lẻ</a></li>
                    <li className="ml-4 "><a href="#" className="hover:text-black p-6 hover:bg-sky-200">Thể loại</a></li>
                </div>
                <li className="ml-4"><div><input className="w-60 h-8 bg-[#000D1C] text-cyan-50" type="text" name="" id="" placeholder=" Tìm kiếm..." /></div></li>
                <div className="flex items-center">
                    <li className=" ml-4 group"><a href="#" className="flex items-center group-hover:text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div className="flex-initial w-20 ml-1">Lịch sử</div>
                    </a></li>
                    <li className="ml-4 group"><a href="#" className="flex items-center group-hover:text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                        </svg>
                        <div className="flex-initial w-20 ml-1">Theo dõi</div>
                    </a></li>
                    <li className="ml-4"><a href="#" className="px-4 py-2 rounded-md bg-blue-50 text-[#006FEE] flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <span className="ml-1">Đăng nhập</span></a></li>
                </div>
                {/* Add more menu items as needed */}
            </ul>
        </nav>
    )
};
export default Navbar;