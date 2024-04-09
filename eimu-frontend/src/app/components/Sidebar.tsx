import { Avatar, Link } from '@nextui-org/react'
import React from 'react'

export default function MenuAccY() {
    return (
        <ul className=" bg-[#001731] w-96 p-5 rounded-b-box h-screen">
            <div className='flex items-center pb-10 border-b-2'>
                <Avatar src="/images/tien.jpg" className="w-16 h-16 mr-6" />
                <span className='font-bold text-xl text-white'>TIẾN CTUT</span>
            </div>
            <li className=''>
                <Link href={'/'} className='text-white hover:text-green-500 font-bold py-5'>
                    Trang chủ
                </Link>
            </li>
            <li className=''>
                <Link href={'/user/detail'} className='text-white hover:text-green-500 py-5'>
                    Thông tin tài khoản
                </Link>
            </li>
            <li className=''>
                <Link href={'/user/history'} className='text-white hover:text-green-500 py-5'>
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
