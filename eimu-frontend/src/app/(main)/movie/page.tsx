import React from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { ScrollShadow } from "@nextui-org/react";
import SideList from '@/app/components/SideList';
import { getLatestMovies, getLatestMoviesByTag } from "@/app/repositories/MovieRepository";
import { Textarea } from "@nextui-org/react";
import { Avatar } from "@nextui-org/react";

export default async function Detail() {
    const new_movie_list = await getLatestMovies()
    return (
        <div className='text-white'>
            <div className='bg-[#1A1C22] mx-14 h-[500px]'>
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
            <div className='bg-[#1A1C22] mx-14 my-14 h-[600px]'>
                <div className='flex'>
                    <div className='mx-5'>
                        <div className="text-sm breadcrumbs">
                            <ul>
                                <li><span className='font-bold text-lg'>Phim sẽ gầy</span></li>
                                <li><span className='font-bold text-lg'>Tập fullHD</span></li>
                            </ul>
                        </div>
                        <div className='bg-black h-[530px] w-[1000px]'>Video</div>
                    </div>
                    <div className='mx-5 my-5'>Tập phim</div>
                </div>
            </div>
            <SideList title="Đề xuất cho bạn" link="#" data={new_movie_list.items} />

            <div className='bg-[#1A1C22] max-h-full h-full px-6 py-4 mx-14 my-5'>
                <div className='flex'>
                    <div className='mr-2 mb-5'>Bình luận</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                    </svg>
                </div>
                <div className="w-full grid grid-cols-12 gap-4 bg-black rounded-lg mb-10">
                    <Textarea
                        key="bordered"
                        variant="bordered"
                        labelPlacement="outside"
                        placeholder="Nhập bình luận của bạn..."
                        className="col-span-12 md:col-span-12 mb-6 md:mb-0"
                    />
                    <Button color='primary' className=''>Gửi</Button>
                </div>
                <div className='flex max-h'>
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large mr-7" />
                    <div className='bg-sky-950 w-full rounded-md px-5 py-2'>
                        <div>Tao tên là OOP</div>
                        <div>Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo Mẹ Mày Béo</div>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                <div className=' mr-4'>like</div>
                                <div>trả lời</div>
                            </div>
                            <div>
                                <div className="collapse">
                                    <input type="checkbox" />
                                    <div className="collapse-title">
                                        Xem thêm
                                    </div>
                                    <div className="collapse-content">
                                        <div className='flex'>
                                            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large mr-7" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
