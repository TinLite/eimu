'use client'
import React, { useState, useEffect } from 'react';
import { Pagination } from '@nextui-org/react';
import { MovieListEntry } from '@/app/model/MovieModels';
import '@/app/globals.css';
import { unstable_noStore as noCache } from 'next/cache';
import { Image, ScrollShadow } from "@nextui-org/react";
import Link from 'next/link';
import { getSearchMovie } from '@/app/repositories/MovieRepository';
import { PaginatedMovieList, PaginatedMovieListWithTags } from '@/app/model/Pageable';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function SearchPage({ query, data }: 
    {
        query: string, 
        data: PaginatedMovieList
    }) 
{
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const handlePageChange = (newPage:number) => {
        const params = new URLSearchParams(searchParams)
        params.set("page",newPage.toString())
        router.push(`${pathname}?${params.toString()}`)
    };

    return (
        <div className='text-white px-12'>
            <h2 className="text-2xl font-semibold py-8">Kết quả tìm kiếm: {query}</h2>
            <div className='grid grid-cols-3 gap-8'>
                {data?.items.map((e: MovieListEntry) => (
                    <Link key={e.id} href={`/movie/${e.id}`} className='grid grid-cols-4 '>
                        <div
                            className="aspect-[2/3] grid place-items-center w-24"
                            style={{ "background": `center / cover no-repeat url('${e.thumbUrl}')` }}>
                        </div>
                        <div className='col-span-3'>
                            <div className='text-xl'>{e.name}{e.year}</div>
                            <p className='text-ellipsis overflow-hidden line-clamp-3 text-gray-400'>{e.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex justify-center mt-8'>
                <Pagination showControls total={data.pageable.totalPages} initialPage={data.pageable.page} onChange={handlePageChange} />
            </div>
        </div>
    );
}