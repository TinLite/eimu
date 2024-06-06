'use client'
import { MovieTileListing } from '@/app/components/MovieListing';
import '@/app/globals.css';
import { MovieTag } from '@/app/model/MovieTagModels';
import { PaginatedMovieListWithTags } from '@/app/model/Pageable';
import { BreadcrumbItem, Breadcrumbs, Pagination } from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
export default function Genre({
    data,
    tags
}: {
    data: PaginatedMovieListWithTags,
    tags?: MovieTag[]
}) 
{
    const router= useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const handlePageChange = (newPage:number) => {
        const params = new URLSearchParams(searchParams)
        params.set("page",newPage.toString())
        router.push(`${pathname}?${params.toString()}`)
    };
    return (
        <div className='text-white max-w-screen-xl mx-auto px-12'>
            <Breadcrumbs className='py-8' size='lg'>
                <BreadcrumbItem href="/">Trang chủ</BreadcrumbItem>
                <BreadcrumbItem>{tags?.map((entry) => entry.value).join(" - ") ?? `Phim mới`}</BreadcrumbItem>
            </Breadcrumbs>
            <MovieTileListing data={data.items} />
            <div className='flex justify-center'>
            <Pagination showControls total={data.pageable.totalPages} initialPage={data.pageable.page} onChange={handlePageChange} />         
            </div>
        </div>   
    );
};


