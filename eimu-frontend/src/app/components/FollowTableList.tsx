'use client';
import { MovieListEntry } from "@/app/model/MovieModels";
import { Page } from "@/app/model/Pageable";
import { removeFollow } from "@/app/repositories/MovieFollowRepository";
import { Button, Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';



export default function FollowTableList({ movie, userId }: { movie: Page<MovieListEntry>, userId: string }) {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const handlePageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams)
        params.set("page", newPage.toString())
        router.push(`${pathname}?${params.toString()}`)
    };
    return (
        <div className='w-full px-32'>
            <div className='grid justify-center py-10 border-b-2 border-white font-bold text-3xl mb-4'>Danh sách theo dõi</div>
            <div className="flex flex-col gap-3 text-black">
                <Table
                    className="text-white"
                    bgcolor="default"
                    aria-label="Example static collection table"
                >
                    <TableHeader>
                        <TableColumn>Poster</TableColumn>
                        <TableColumn>Tên Phim</TableColumn>
                        <TableColumn>
                            Bỏ theo dõi
                        </TableColumn>
                    </TableHeader>
                    {/* {movie.items.length > 0 ? ( */}
                    <TableBody>
                        {movie.items?.map((e) => (
                            <TableRow key={e.id}>
                                <TableCell>
                                    <div
                                        className="aspect-[2/3] grid place-items-center w-14"
                                        style={{ "background": `center / cover no-repeat url('${e.posterUrl}')` }}>
                                    </div>
                                </TableCell>
                                <TableCell><a href={`/movie/${e.id}`} >{e.name} ({e.originalName})</a></TableCell>
                                <TableCell>
                                    <Button className="btn btn-ghost btn-sm" onClick={() => removeFollow(userId, e.id).then(() => router.refresh())}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    {/* ) : (
                        <p>Bạn không chưa theo dõi phim.</p>
                    )} */}
                </Table>
                <Pagination showControls total={movie.pageable.totalPages} initialPage={movie.pageable.page} onChange={handlePageChange} className="flex justify-center" />
            </div>
        </div>
    )
}
