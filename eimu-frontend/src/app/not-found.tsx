'use client';
import '@/app/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export default function NotFound() {
    return (
        <body className={`${inter.className}`}>
            <div className='w-screen h-screen flex items-center place-items-center justify-center'>
                <div>
                    <div className='relative'>
                        <h1 className='text-9xl text-center font-black'>404</h1>
                        <h2 className='text-center uppercase bg-black font-bold absolute top-1/2 w-full -translate-y-1/2'>Trang không tồn tại</h2>
                    </div>
                    <button onClick={() => history.back()} className='btn btn-ghost btn-block mt-4'>Trở về trang trước</button>
                </div>
            </div>
        </body>

    )
}