import { Movie } from '@/app/model/MovieModels'
import { Button, ScrollShadow } from '@nextui-org/react'
import { unstable_noStore as noCache } from 'next/cache'
import Link from 'next/link'
import { getTagsDetail } from '../repositories/MovieTagRepository'
export default async function MovieInfo({ movie }: { movie: Movie }) {
    noCache();
    const tags = await getTagsDetail(movie.tags)

    return (
        <div className='bg-gray-950 rounded-sm'>
            <div className='grid grid-cols-6'>
                <div className='mx-5 my-5'>
                    <div>
                        <div
                            className="rounded-sm aspect-[2/3] w-full"
                            style={{ "background": `center / cover no-repeat url('${movie.thumbUrl}')` }}>
                        </div>
                    </div>
                    <div className='flex mt-5 gap-2'>
                        <Button className='bg-yellow-400 flex-grow'>Đánh giá</Button>
                        {/* btn fllow film */}
                        <Button className='border-2 bg-transparent min-w-0 text-blue-500 border-blue-600 rounded-xl aspect-square w-10 grid place-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                        </Button>
                    </div>
                </div>
                <div className='col-span-5 my-5 mx-5'>
                    <h1 className='mb-4 uppercase text-3xl'>{movie.name}</h1>
                    {/* Tags */}
                    <div className='flex gap-4 mb-4'>
                        {tags.map((element) => (
                            <Link key={element.id} href={`/genres/${element.id}`} className='bg-gray-800 px-2 hover:bg-blue-800 transition-colors'>{element.value}</Link>
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
