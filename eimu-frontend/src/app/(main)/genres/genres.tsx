'use client'
import React from 'react';
import { MovieListEntry } from '@/app/model/MovieModels';
import '@/app/globals.css'
import { MovieTag } from '@/app/model/MovieTagModels';
import { MovieTileListing } from '@/app/components/MovieListing';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import {Pagination} from "@nextui-org/react";
import { PaginatedMovieListWithTags } from '@/app/model/Pageable';
function generatePagination(currentPage : number, totalPages : number) {
    const numPagesToDisplay = 4;

    const startPage = Math.max(1, currentPage - numPagesToDisplay);
    const endPage = Math.min(totalPages, currentPage + numPagesToDisplay);

    const paginationJSX = (
        <div className="pagination join">
            <ul className="pagination-list">
                {/* Add the "Previous" button */}
                {currentPage > 1 && (
                    <li className="pagination-item">
                        <a href={`?page=${currentPage - 1}`} className="pagination-link join-item btn">
                            Previous
                        </a>
                    </li>
                )}

                {/* Add the page numbers */}
                {[...Array(endPage - startPage + 1)].map((_, index) => {
                    const page = startPage + index;
                    return (
                        <li
                            key={page}
                            className={`pagination-item ${page === currentPage ? 'active' : ''}`}
                        >
                            <a href={`?page=${page}`} className="pagination-link ">
                                {page}
                            </a>
                        </li>
                    );
                })}

                {/* Add the "Next" button */}
                {currentPage < totalPages && (
                    <li className="pagination-item">
                        <a href={`?page=${currentPage + 1}`} className="pagination-link">
                            Next
                        </a>
                    </li>
                )}
            </ul>
        </div>
    );

    return paginationJSX;
}

// Example usage:
const currentPage = 1;
const totalPageCount = 20;
const paginationComponent = generatePagination(currentPage, totalPageCount);

export default function Genre({
    data,
    tags
}: {
    data: PaginatedMovieListWithTags,
    tags?: [MovieTag]
}) 
{
    return (
        <div className='text-white max-w-screen-xl mx-auto px-12'>
            <Breadcrumbs className='py-8' size='lg'>
                <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
                <BreadcrumbItem>{tags?.map((entry) => entry.value).join(" - ") ?? `Phim mới`}</BreadcrumbItem>
            </Breadcrumbs>
            <MovieTileListing data={data.items} />
            <div className='flex justify-center'>
            <Pagination showControls total={10} initialPage={1} />         
            </div>
        </div>   
    );
};


