import DropdownSearch from "@/app/components/DropdownSearch";
import GenresDropdown from "@/app/components/navbar/GenresDropdown";
import { getAllTag } from "@/app/repositories/MovieTagRepository";
import { authOptions } from "@app/../../auth.config";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { getUserDetail } from "../repositories/UserRepository";
import { LoginButton, UserNavComponent } from "./navbar/LoginLogout";
import SearchBar from "./navbar/SearchBar";
const Navbar = async () => {
    const session = await getServerSession(authOptions);
    const genresTag = await getAllTag();
    var userDetail = undefined;
    if (session?.user?.email)
        userDetail = await getUserDetail(session.user.email)
    return (
        <nav className="fixed top-0 left-0 w-full h-16 xl:px-20 bg-[#001731] text-gray-200 z-50">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link href={"/"} className="">
                        <Image src='/images/Eimu-logo-removebg-preview.png' alt='eimu'
                            width={65}
                            height={20} />
                    </Link>
                    <Link href={"/genres"} className="px-4 hover:text-sky-400 transition-colors">Phim mới</Link>
                    <Link href={"/genres/eccbc87e4b5ce2fe28308fd9f2a7baf3"} className="px-4 hover:text-sky-400 transition-colors">Phim bộ</Link>
                    <Link href={"/genres/a87ff679a2f3e71d9181a67b7542122c"} className="px-4 hover:text-sky-400 transition-colors">Phim lẻ</Link>
                    <GenresDropdown genresTag={genresTag} />
                </div>
                <SearchBar />

                <div className="flex items-center">
                    <Link href={"/user/history"} className="flex items-center hover:text-green-400 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <div className="flex-initial w-20 ml-1">Lịch sử</div>
                    </Link>
                    <Link href={"/user/follows"} className="flex items-center hover:text-green-400 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                        </svg>
                        <div className="flex-initial w-20 ml-1">Theo dõi</div>
                    </Link>
                    {userDetail
                        ? (<UserNavComponent user={userDetail} />)
                        : (<LoginButton />)
                    }
                </div>
            </div>
        </nav >
    )
};

export default Navbar;