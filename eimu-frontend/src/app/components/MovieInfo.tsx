import React from 'react'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { ScrollShadow } from '@nextui-org/react'
import { Movie } from '@/app/model/MovieModels'
import { getTagsDetail } from '../repositories/MovieTagRepository'
export default async function MovieInfo({ movie }: { movie: Movie }) {
    const tags = await getTagsDetail(movie.tags)
    return (
        <div className='bg-[#1A1C22] rounded-sm'>
            <div className='grid grid-cols-6'>
                <div className='mx-5 my-5'>
                    <div>
                        <div
                            className="rounded-sm aspect-[2/3] w-full"
                            style={{ "background": `center / cover no-repeat url('${movie.thumbUrl}')` }}>
                        </div>
                    </div>
                    <div className='flex mt-5'>
                        <Button className='bg-blue-500  border-2 border-pink-600'>Theo dõi</Button>
                        <Button className='bg-yellow-400 border-2 border-pink-600'>Đánh giá</Button>
                    </div>
                </div>
                <div className='col-span-5 my-5 mx-5'>
                    <h1 className='mb-4 uppercase text-3xl'>{movie.name}</h1>
                    {/* Tags */}
                    <div className='flex gap-4 mb-4'>
                        {tags.map((element) => (
                            <Link key={element.id} href={`#`} className='bg-gray-800 px-2 hover:bg-blue-800 transition-colors'>{element.value}</Link>
                        ))}
                    </div>
                    <div className='text-gray-300'>
                        <div>Năm phát hành: <Link href={""}>2023</Link></div>
                        <div>Đạo diễn: <span>{movie.director ?? "Chưa cập nhật"}</span></div>
                        <div>Diễn viên: <span>{movie.casts ?? "Chưa cập nhật"}</span></div>
                        <span>Nội dung:</span>
                        <ScrollShadow hideScrollBar className="w-full max-h-44">
                            {movie.description}
                        </ScrollShadow>
                    </div>
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
    )
}
