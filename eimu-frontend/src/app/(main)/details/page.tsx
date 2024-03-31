import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
export default function Detail() {
    return (
        <div>
            <div className='bg-[#1A1C22] mx-14 mt-16 h-[500px]'>
                <div className='flex'>
                    <div className='mx-5 my-5'>
                        <div><Image
                            src="https://phim.nguonc.com/public/images/Film/140627.jpg"
                            className=" rounded-lg border-2 border-sky-500"
                            width={270}
                            height={200}
                            alt=""
                        /></div>
                        <div className='flex mt-5'>
                            <Button className='h-[50px] w-[120px] bg-blue-500 rounded-lg mr-8'>Theo dõi</Button>
                            <Button className='h-[50px] w-[120px] bg-yellow-400 rounded-lg'>Đánh giá</Button>
                        </div>
                    </div>
                    <div className='my-5 mx-5'>info</div>
                </div>
            </div>
            <div className='bg-[#1A1C22] mx-14 mt-16 h-[600px]'>
                <div className='flex'>
                    <div className='mx-5'>
                        <div className='my-5'>Title</div>
                        <div className='bg-black h-[500px] w-[1000px]'>Video</div>
                    </div>
                    <div className='mx-5 my-10'>Tập phim</div>
                </div>
            </div>
        </div>
    )
}
