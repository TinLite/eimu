'use client'
import React from 'react';
import { MovieListEntry } from '@/app/model/MovieModels';
import '@/app/globals.css'
import { MovieTag } from '@/app/model/MovieTagModels';
import { MovieTileListing } from '@/app/components/MovieListing';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';

export default function Genre({
    data,
    tags
}: {
    data: [MovieListEntry],
    tags?: [MovieTag]
}) {
    return (
        <div className='text-white max-w-screen-xl mx-auto px-12'>
            <Breadcrumbs className='py-8' size='lg'>
                <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
                <BreadcrumbItem>{tags?.map((entry) => entry.value).join(" - ") ?? `Phim mới`}</BreadcrumbItem>
            </Breadcrumbs>
            <MovieTileListing data={data} />
        </div>
    );
};


