'use client'
import '@/app/globals.css';
import { MovieListEntry } from '@/app/model/MovieModels';
import { PaginatedMovieList } from '@/app/model/Pageable';
import { getSearchMovie } from '@/app/repositories/MovieRepository';
import { Pagination } from '@nextui-org/react';
import { unstable_noStore as noCache } from 'next/cache';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchPage({ searchParams }: 
    { searchParams: 
        { 
            query?: string, 
            page?: string 
        } 
    }) 
{
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState<PaginatedMovieList | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getSearchMovie(searchParams.query || "", currentPage, 21);
            setData(result);
        };
        fetchData();
    }, [searchParams.query, currentPage]);

    const router = useRouter();
    const pathname = usePathname();
    const handlePageChange = (newPage:number) => {
        const params = new URLSearchParams(searchParams)
        params.set("page",newPage.toString())
        router.push(`${pathname}?${params.toString()}`)
    };

    // const handlePageChange = (page: number) => {
    //     setCurrentPage(page);
    // };

    noCache(); // Do not cache the render of this page

    return (
        <div className='text-white px-12'>
            <h2 className="text-2xl font-semibold py-8">Kết quả tìm kiếm: {searchParams.query}</h2>
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
            {data && (
                 <div className='flex justify-center'>
                <Pagination showControls total={data.pageable.totalPages} initialPage={data.pageable.page} onChange={handlePageChange} />
                </div>
            )}
        </div>
    );
}