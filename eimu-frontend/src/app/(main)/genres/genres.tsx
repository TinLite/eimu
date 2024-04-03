import React from 'react';
import { MovieListEntry } from '@/app/model/MovieModels';
import '@/app/globals.css'
import { MovieTag } from '@/app/model/MovieTagModels';
import { unstable_noStore as noCache } from 'next/cache';
import { MovieTileListing } from '@/app/components/MovieListing';

export default function Genre({
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
                <h2 className="text-2xl font-semibold py-8">Trang chủ / {tags?.map((entry) => entry.value).join(" - ") ?? `Phim mới`}</h2>
            </div>
            <MovieTileListing data={data} />
        </div>
    );
};


