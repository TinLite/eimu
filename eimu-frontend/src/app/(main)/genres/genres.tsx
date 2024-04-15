'use client'
import React, { useState, useEffect } from 'react';
import { MovieListEntry } from '@/app/model/MovieModels';
import '@/app/globals.css'
import { MovieTag } from '@/app/model/MovieTagModels';
import { MovieTileListing } from '@/app/components/MovieListing';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import {Pagination} from "@nextui-org/react";
import { PaginatedMovieListWithTags } from '@/app/model/Pageable';
import { getLatestMovies } from '@/app/repositories/MovieRepository';
export default function Genre({
    data,
    tags
}: {
    data: PaginatedMovieListWithTags,
    tags?: [MovieTag]
}) 
{
    const [currentPage, setCurrentPage] = useState(1);  
    useEffect(() => {
       getLatestMovies();
    }, [currentPage]);

    const handlePageChange = (newPage:number) => {
        setCurrentPage(newPage + 1 );
    };
    return (
        <div className='text-white max-w-screen-xl mx-auto px-12'>
            <Breadcrumbs className='py-8' size='lg'>
                <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
                <BreadcrumbItem>{tags?.map((entry) => entry.value).join(" - ") ?? `Phim mới`}</BreadcrumbItem>
            </Breadcrumbs>
            <MovieTileListing data={data.items} />
            <div className='flex justify-center'>
            <Pagination showControls total={10} initialPage={1} onChange={handlePageChange} />         
            </div>
        </div>   
    );
};


