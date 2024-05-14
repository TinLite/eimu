'use client';
import { MovieListEntry } from "@/app/model/MovieModels";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { unstable_noStore as noCache } from "next/cache";
import React from "react";
const colors = ["default", "primary", "secondary", "success", "warning", "danger"];


export default function FollowTableList({ movieList }: { movieList: MovieListEntry[] }) {
    noCache(); // Do not cache the render of this page, because it's a waste of memory for this
    const [selectedColor, setSelectedColor] = React.useState("default");
    return (
        <div className='w-full px-32'>
            <div className='grid justify-center py-10 border-b-2 border-white font-bold text-3xl mb-4'>Danh sách theo dõi</div>
            <div className="flex flex-col gap-3 text-black">
                <Table
                    className="text-white"
                    bgcolor={selectedColor}
                    selectionMode="multiple"
                    aria-label="Example static collection table"
                >
                    <TableHeader>
                        <TableColumn>Poster</TableColumn>
                        <TableColumn>Tên Phim</TableColumn>
                        <TableColumn>Năm</TableColumn>
                        <TableColumn>Quốc gia</TableColumn>
                        <TableColumn>tình trạng</TableColumn>
                        <TableColumn>Số tập</TableColumn>
                        <TableColumn>
                            <button className="btn btn-ghost btn-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </TableColumn>
                    </TableHeader>
                    {movieList.length > 0 ? (
                        <TableBody>
                            {movieList.map(e => (
                                <TableRow key={e.id}>
                                    <TableCell>
                                        <div
                                            className="aspect-[2/3] grid place-items-center w-14"
                                            style={{ "background": `center / cover no-repeat url('${e.posterUrl}')` }}>
                                        </div>
                                    </TableCell>
                                    <TableCell>{e.name}</TableCell>
                                    <TableCell>{e.year}</TableCell>
                                    <TableCell>Nhật Bản</TableCell>
                                    <TableCell>Chưa hoàn thành</TableCell>
                                    <TableCell>12</TableCell>
                                    <TableCell>
                                        <button className="btn btn-ghost btn-sm">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    ) : (
                        <p>Bạn không chưa theo dõi phim.</p>
                    )}
                </Table>
            </div>
        </div>
    )
}
