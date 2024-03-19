import React from "react";
import Image from "next/image";
const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 px-6 bg-[#001731] text-white z-50">
            {/* Your menu items go here */}
            <ul className="flex items-center justify-between h-full px-4">
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
                    <li className="ml-4 hover:text-green-400"><a href="#">Lịch sử</a></li>
                    <li className="ml-4 hover:text-green-400"><a href="#">Theo dõi</a></li>
                    <li className="ml-4 p"><a href="#" className="px-6 py-2 rounded-md bg-blue-50 text-[#006FEE]">Login</a></li>
                </div>
                {/* Add more menu items as needed */}
            </ul>
        </nav>
    )
};
export default Navbar;