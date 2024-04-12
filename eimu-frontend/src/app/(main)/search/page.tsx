import React from 'react';
import { MovieListEntry } from '@/app/model/MovieModels';
import '@/app/globals.css'
import { MovieTag } from '@/app/model/MovieTagModels';
import { unstable_noStore as noCache } from 'next/cache';
import { MovieTileListing } from '@/app/components/MovieListing';
import { Image, ScrollShadow } from "@nextui-org/react";
import Link from 'next/link';

export default function search({
    data,
    tags
}: {
    data: [MovieListEntry],
    tags?: [MovieTag]
}) {
    noCache(); // Do not cache the render of this page
    return (
        <div className='text-white max-w-screen-xl mx-auto px-12'>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold py-8">Tìm kiếm: Tên Phim</h2>
            </div>
            {/* <MovieTileListing data={data} />  */}
            <div className='flex mb-8'>
                <Link href={"#"}>
                    <Image
                        width={150}
                        alt="NextUI hero Image"
                        src="https://phim.nguonc.com/public/images/Film/140627.jpg"
                    />
                </Link>
                <div className='mx-6'>
                    <div>
                        <span className='mr-2'>Tên phim:</span>
                        <Link href={"#"}>Sengoku Youko</Link>
                    </div>
                    <div className='flex'>
                        <div className='mr-2'>Thể loại: </div>
                        <ul className='flex'>
                            <li className='mr-2'>Nhật Bản</li>
                            <li className='mr-2'>Phim bộ</li>
                            <li className='mr-2'>Hoạt Hình</li>
                        </ul>
                    </div>
                    <div>Năm: 2013</div>
                    <div>Nội dung:</div>
                    <ScrollShadow hideScrollBar className="w-full max-w-3xl max-h-32">
                        Tama - một Yêu Hồ đem lòng yêu con người, thề bảo vệ họ khỏi cái ác, ngay cả khi phải chiến đấu lại với đồng loại. Trong khi người anh em của cô là Jinka lại ghét loài người. Hai anh em gặp gỡ Hyodo Shinsuke - một lãng khách đang muốn học cách trở nên mạnh mẽ, làm nên một câu chuyện thú vị về Tiên Đạo và Yêu Hồ trong thời Chiến Quốc. Những con người họ gặp gỡ, những nơi họ đến, và những cuộc chiến đấu của họ sẽ trở thành huyền thoại.
                    </ScrollShadow>
                </div>
            </div>
            <div className='flex mb-8'>
                <Link href={"#"}>
                    <Image
                        width={150}
                        alt="NextUI hero Image"
                        src="https://phim.nguonc.com/public/images/Film/140627.jpg"
                    />
                </Link>
                <div className='mx-6'>
                    <div>
                        <span className='mr-2'>Tên phim:</span>
                        <Link href={"#"}>Sengoku Youko</Link>
                    </div>
                    <div className='flex'>
                        <div className='mr-2'>Thể loại: </div>
                        <ul className='flex'>
                            <li className='mr-2'>Nhật Bản</li>
                            <li className='mr-2'>Phim bộ</li>
                            <li className='mr-2'>Hoạt Hình</li>
                        </ul>
                    </div>
                    <div>Năm: 2013</div>
                    <div>Nội dung:</div>
                    <ScrollShadow hideScrollBar className="w-full max-w-3xl max-h-32">
                        Tama - một Yêu Hồ đem lòng yêu con người, thề bảo vệ họ khỏi cái ác, ngay cả khi phải chiến đấu lại với đồng loại. Trong khi người anh em của cô là Jinka lại ghét loài người. Hai anh em gặp gỡ Hyodo Shinsuke - một lãng khách đang muốn học cách trở nên mạnh mẽ, làm nên một câu chuyện thú vị về Tiên Đạo và Yêu Hồ trong thời Chiến Quốc. Những con người họ gặp gỡ, những nơi họ đến, và những cuộc chiến đấu của họ sẽ trở thành huyền thoại.
                    </ScrollShadow>
                </div>
            </div>
            <div className='flex mb-8'>
                <Link href={"#"}>
                    <Image
                        width={150}
                        alt="NextUI hero Image"
                        src="https://phim.nguonc.com/public/images/Film/140627.jpg"
                    />
                </Link>
                <div className='mx-6'>
                    <div>
                        <span className='mr-2'>Tên phim:</span>
                        <Link href={"#"}>Sengoku Youko</Link>
                    </div>
                    <div className='flex'>
                        <div className='mr-2'>Thể loại: </div>
                        <ul className='flex'>
                            <li className='mr-2'>Nhật Bản</li>
                            <li className='mr-2'>Phim bộ</li>
                            <li className='mr-2'>Hoạt Hình</li>
                        </ul>
                    </div>
                    <div>Năm: 2013</div>
                    <div>Nội dung:</div>
                    <ScrollShadow hideScrollBar className="w-full max-w-3xl max-h-32">
                        Tama - một Yêu Hồ đem lòng yêu con người, thề bảo vệ họ khỏi cái ác, ngay cả khi phải chiến đấu lại với đồng loại. Trong khi người anh em của cô là Jinka lại ghét loài người. Hai anh em gặp gỡ Hyodo Shinsuke - một lãng khách đang muốn học cách trở nên mạnh mẽ, làm nên một câu chuyện thú vị về Tiên Đạo và Yêu Hồ trong thời Chiến Quốc. Những con người họ gặp gỡ, những nơi họ đến, và những cuộc chiến đấu của họ sẽ trở thành huyền thoại.
                    </ScrollShadow>
                </div>
            </div>
        </div>
    );
};