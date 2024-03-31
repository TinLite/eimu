import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { ScrollShadow } from "@nextui-org/react";

export default function Detail() {
    return (
        <div>
            <div className='bg-[#1A1C22] mx-14 h-[500px] text-white'>
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
                    <div className=' infor my-5 mx-5' >
                        <h1 className='mb-6 uppercase text-3xl'>Phim Sẽ Gầy</h1>
                        <div className='flex my-2'>
                            <Link href={""} className='bg-black mr-3 p-1'>Hành động</Link>
                            <Link href={""} className='bg-black mr-3 p-1'>Viễn Tưởng</Link>
                        </div>
                        <div>Năm phát hành: <Link href={""}>2023</Link></div>
                        <div>Đạo diễn: <span>Tuấn Vũ, Quang Vinh, Quang Tiến, Hoàng Trân</span></div>
                        <div>Diễn viên: <span>Tuấn Vũ, Quang Vinh, Quang Tiến, Hoàng Trân</span></div>
                        <span>Nội dung:</span>
                        <ScrollShadow hideScrollBar className="w-full max-h-44">
                            Tony Stark. Thiên tài, tỷ phú, playboy, nhà tế học. Con trai của nhà phát minh huyền thoại và nhà thầu vũ khí Howard Stark. Khi Tony Stark được chỉ định để đưa ra một bài thuyết trình vũ khí cho một đơn vị Iraq do Lt. Coll James Rhodes, anh ta đã đưa ra một chuyến đi trên dòng kẻ thù. Đi xe mà kết thúc tồi tệ khi Humvee của Stark rằng anh ta đang cưỡi ngựa bị chiến binh địch tấn công. Anh ta sống sót - hầu như không - với một cái rương đầy đạn và một pin xe gắn liền với trái tim anh ta. Để tồn tại, anh ta xuất hiện với một cách để thu nhỏ pin và số liệu cho thấy pin có thể cung cấp năng lượng cho thứ khác. Do đó người đàn ông sắt được sinh ra. Anh ta sử dụng thiết bị nguyên thủy để thoát khỏi hang động ở Iraq. Khi trở về nhà, sau đó anh bắt đầu làm việc để hoàn thiện bộ đồ của người đàn ông sắt. Nhưng người đàn ông được phụ trách các ngành công nghiệp Stark có kế hoạch của riêng mình để chiếm lĩnh công nghệ của Tony cho các vấn đề khác. Tony Stark. Thiên tài, tỷ phú, playboy, nhà tế học. Con trai của nhà phát minh huyền thoại và nhà thầu vũ khí Howard Stark. Khi Tony Stark được chỉ định để đưa ra một bài thuyết trình vũ khí cho một đơn vị Iraq do Lt. Coll James Rhodes, anh ta đã đưa ra một chuyến đi trên dòng kẻ thù. Đi xe mà kết thúc tồi tệ khi Humvee của Stark rằng anh ta đang cưỡi ngựa bị chiến binh địch tấn công. Anh ta sống sót - hầu như không - với một cái rương đầy đạn và một pin xe gắn liền với trái tim anh ta. Để tồn tại, anh ta xuất hiện với một cách để thu nhỏ pin và số liệu cho thấy pin có thể cung cấp năng lượng cho thứ khác. Do đó người đàn ông sắt được sinh ra. Anh ta sử dụng thiết bị nguyên thủy để thoát khỏi hang động ở Iraq. Khi trở về nhà, sau đó anh bắt đầu làm việc để hoàn thiện bộ đồ của người đàn ông sắt. Nhưng người đàn ông được phụ trách các ngành công nghiệp Stark có kế hoạch của riêng mình để chiếm lĩnh công nghệ của Tony cho các vấn đề khác. Tony Stark. Thiên tài, tỷ phú, playboy, nhà tế học. Con trai của nhà phát minh huyền thoại và nhà thầu vũ khí Howard Stark. Khi Tony Stark được chỉ định để đưa ra một bài thuyết trình vũ khí cho một đơn vị Iraq do Lt. Coll James Rhodes, anh ta đã đưa ra một chuyến đi trên dòng kẻ thù. Đi xe mà kết thúc tồi tệ khi Humvee của Stark rằng anh ta đang cưỡi ngựa bị chiến binh địch tấn công. Anh ta sống sót - hầu như không - với một cái rương đầy đạn và một pin xe gắn liền với trái tim anh ta. Để tồn tại, anh ta xuất hiện với một cách để thu nhỏ pin và số liệu cho thấy pin có thể cung cấp năng lượng cho thứ khác. Do đó người đàn ông sắt được sinh ra. Anh ta sử dụng thiết bị nguyên thủy để thoát khỏi hang động ở Iraq. Khi trở về nhà, sau đó anh bắt đầu làm việc để hoàn thiện bộ đồ của người đàn ông sắt. Nhưng người đàn ông được phụ trách các ngành công nghiệp Stark có kế hoạch của riêng mình để chiếm lĩnh công nghệ của Tony cho các vấn đề khác.
                        </ScrollShadow>
                        <div className='flex mt-6 justify-center'>
                            <div className='mx-10 grid justify-items-center'>
                                <div className='mb-3 font-bold'>Quốc Gia</div>
                                <div>Nhật Bản</div>
                            </div>
                            <div className='mx-10 grid justify-items-center'>
                                <div className='mb-3 font-bold '>Số tập</div>
                                <div>12</div>
                            </div>
                            <div className='mx-10 grid justify-items-center'>
                                <div className='mb-3 font-bold'>Tình trạng</div>
                                <div>Đã hoàn thành</div>
                            </div>
                            <div className='mx-10 grid justify-items-center'>
                                <div className='mb-3 font-bold'>Đánh giá</div>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="Yellow" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                    <div>9.9</div>
                                </div>
                            </div>
                        </div>
                    </div>
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
