import { getUserDetail } from '@/app/repositories/UserRepository';
import { Link } from '@nextui-org/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../auth.config';

export default async function Sidebar({
    pathname
}: {
    pathname: any
}) {
    const session = await getServerSession(authOptions);
    var userDetail = await getUserDetail(session?.user?.email!);
    return (
        <ul className="menu bg-[#001731] w-72 p-5 rounded-b-box h-screen">
            <li className=''>
                <Link href={'/'} className='text-white hover:text-green-500 font-bold py-5'>
                    Trang chủ
                </Link>
            </li>
            <li className=''>
                <Link href={'/user/detail'} className={`${(pathname === "/user/detail") ? "active" : ""}`}>
                    Thông tin tài khoản
                </Link>
            </li>
            <li className=''>
                <Link href={'/user/history'} className=' text-white hover:text-green-500 py-5 '>
                    Lịch sử xem
                </Link>
            </li>
            <li className=' border-b-2'>
                <Link href={'/user/follows?page=1'} className='text-white hover:text-green-500 py-5'>
                    Danh sách theo dõi
                </Link>
            </li>
            <li className=''>
                <Link href={''} className='text-white hover:text-green-500 font-bold pr-16 pt-5'>
                    Đăng xuất
                </Link>
            </li>
        </ul>
    )
}
