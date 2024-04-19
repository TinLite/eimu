import React from 'react';
import { MovieListEntry } from '@/app/model/MovieModels';
import '@/app/globals.css'
import { unstable_noStore as noCache } from 'next/cache';
import { Image, ScrollShadow } from "@nextui-org/react";
import Link from 'next/link';
import { getSearchMovie } from '@/app/repositories/MovieRepository';

export default async function search(
    { searchParams }
        : {
            searchParams: {
                query?: string,
                page?: string
            }
        }
) {
    console.log(searchParams.query)
    var searchMovie = await getSearchMovie(searchParams.query || "")
    noCache(); // Do not cache the render of this page
    return (
        <div className='text-white px-12'>
            <h2 className="text-2xl font-semibold py-8">Kết quả tìm kiếm: {searchParams.query}</h2>
            {/* <MovieTileListing data={data} />  */}
            <div className='grid grid-cols-3 gap-8'>
                {searchMovie.items.map((e) => (
                    <Link key={e.id} href={`/movie/${e.id}`} className='grid grid-cols-4 '>
                        <div
                            className="aspect-[2/3] grid place-items-center w-24"
                            style={{ "background": `center / cover no-repeat url('${e.thumbUrl}')` }}>
                        </div>
                        <div className='col-span-3'>
                            <div className='text-xl'>{e.name} ({e.year || "N/A"})</div>
                            <ul className='flex gap-2 mb-4'>
                                <li className='bg-gray-800 px-2  transition-colors'>Nhật Bản</li>
                                <li className='bg-gray-800 px-2  transition-colors'>Phim bộ</li>
                                <li className='bg-gray-800 px-2  transition-colors'>Hoạt Hình</li>
                            </ul>
                            {/* <ScrollShadow hideScrollBar className="w-full max-w-3xl max-h-12">
                        Tama - một Yêu Hồ đem lòng yêu con người, thề bảo vệ họ khỏi cái ác, ngay cả khi phải chiến đấu lại với đồng loại. Trong khi người anh em của cô là Jinka lại ghét loài người. Hai anh em gặp gỡ Hyodo Shinsuke - một lãng khách đang muốn học cách trở nên mạnh mẽ, làm nên một câu chuyện thú vị về Tiên Đạo và Yêu Hồ trong thời Chiến Quốc. Những con người họ gặp gỡ, những nơi họ đến, và những cuộc chiến đấu của họ sẽ trở thành huyền thoại.
                    </ScrollShadow> */}
                            <p className='text-ellipsis overflow-hidden line-clamp-3 text-gray-400'
                            >{e.description}</p>
                        </div>
                    </Link>
                ))}
            </div >
        </div >
    );
};