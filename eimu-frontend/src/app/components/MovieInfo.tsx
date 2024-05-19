"use client";
import { Movie } from '@/app/model/MovieModels';
import { ScrollShadow } from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { MovieTag } from '../model/MovieTagModels';
export default function MovieInfo({ movie, tags, isFollowed, isLogged, followClick, unfollowClick }: { movie: Movie, tags?: MovieTag[], isLogged: boolean, isFollowed?: boolean, followClick: () => Promise<boolean>, unfollowClick: () => Promise<boolean> }) {
    const [followed, setFollowed] = useState(isFollowed ?? false);
    async function follow() {
        if (isLogged) {
            if (followed) {
                const result = await unfollowClick()
                if (result)
                    setFollowed(false);
            } else {
                const result = await followClick()
                if (result)
                    setFollowed(true);
            }
        } else {
            signIn();
        }
    }
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
                        <button className='bg-yellow-500 hover:bg-yellow-600 text-white btn flex-grow'>Đánh giá</button>
                        {/* btn fllow film */}
                        <div className='tooltip tooltip-bottom' data-tip={`Ấn để ${(followed ? `theo dõi và lưu phim` : `huỷ theo dõi và xoá khỏi phim đã lưu`)}.`}>
                            <button onClick={follow} className='aspect-square btn btn-ghost text-blue-500 grid place-items-center'>
                                {(followed) ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53" />
                                    </svg>                                  
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
                                    </svg>
                                }
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-span-5 my-5 mx-5'>
                    <h1 className='mb-4 uppercase text-3xl'>{movie.name}</h1>
                    {/* Tags */}
                    <div className='flex gap-4 mb-4'>
                        {tags?.map((element) => (
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
