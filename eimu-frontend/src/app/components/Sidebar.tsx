import { getUserDetail } from '@/app/repositories/UserRepository';
import { Avatar, Link } from '@nextui-org/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../auth.config';

export default async function MenuAccY() {
    const session = await getServerSession(authOptions);
    var userDetail = await getUserDetail(session?.user?.email!);
    return (
        <ul className=" bg-[#001731] w-72 p-5 rounded-b-box h-screen">
            <div className='flex items-center pb-10 border-b-2'>
                <Avatar src="/images/tien.jpg" className="w-16 h-16 mr-6" />
                <span className='font-bold text-xl text-white'>{userDetail?.name}</span>
            </div>
            <li className=''>
                <Link href={'/'} className='text-white hover:text-green-500 font-bold py-5'>
                    Trang chủ
                </Link>
            </li>
            <li className=''>
                <Link href={'/user/detail'} className='  text-white hover:text-green-500 py-5'>
                    Thông tin tài khoản
                </Link>
            </li>
            <li className=''>
                <Link href={'/user/history'} className=' text-white hover:text-green-500 py-5 '>
                    Lịch sử xem
                </Link>
            </li>
            <li className=' border-b-2'>
                <Link href={'/user/follows'} className='text-white hover:text-green-500 py-5'>
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
