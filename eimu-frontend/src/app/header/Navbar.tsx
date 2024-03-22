import React from "react";
import Image from "next/image";
const Navbar: React.FC = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-16 px-6 bg-[#001731] text-white z-50">
            {/* Your menu items go here */}
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
                    <li className=" ml-4 group"><a href="#" className="flex items-center">
                        <svg className="flex-initial w-7 group-hover:fill-green-400" fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9zm0-16a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7z"></path> <path d="M15.03 14.75a1 1 0 0 1-.5-.134l-3.03-1.75A1 1 0 0 1 11 12V7.5a1 1 0 0 1 2 0v3.923l2.531 1.461a1 1 0 0 1-.501 1.866z"></path> </g></svg>
                        <div className="flex-initial w-20 group-hover:text-green-400">Lịch sử</div>
                    </a></li>
                    <li className="ml-4 group"><a href="#" className="flex items-center">
                        <svg className="flex-initial w-7 group-hover:fill-green-400" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>bookmark-multiple</title> <g id="Layer_2" data-name="Layer 2"> <g id="invisible_box" data-name="invisible box"> <rect width="48" height="48" fill="none"></rect> </g> <g id="icons_Q2" data-name="icons Q2"> <path d="M30,14V40l-7.6-5.8L20,32.4l-2.4,1.8L10,40V14H30M8,10a2,2,0,0,0-2,2V44a2,2,0,0,0,2,2,2.4,2.4,0,0,0,1.4-.5L20,37.4l10.6,8.1A2.4,2.4,0,0,0,32,46a2,2,0,0,0,2-2V12a2,2,0,0,0-2-2Z"></path> <path d="M16,2a2,2,0,0,0-2,2V6H38V37l.6.5A2.4,2.4,0,0,0,40,38a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2Z"></path> </g> </g> </g></svg>
                        <div className="flex-initial w-20 group-hover:text-green-400">Theo dõi</div>
                    </a></li>
                    <li className="ml-4"><a href="#" className="px-6 py-2 rounded-md bg-blue-50 text-[#006FEE]">Login</a></li>
                </div>
                {/* Add more menu items as needed */}
            </ul>
        </nav>
    )
};
export default Navbar;