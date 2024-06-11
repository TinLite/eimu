'use client';
import { MovieHistoryEntry } from "@/app/model/MovieHistoryModels";
import { Movie } from "@/app/model/MovieModels";
import { deleteHistory } from "@/app/repositories/UserWatchHistory";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import React from "react";
const colors = ["default", "primary", "secondary", "success", "warning", "danger"];

export default function HistoryTableList({
    movie,
    userId,
    ep
}: {
    movie: Movie[],
    userId: string,
    ep: MovieHistoryEntry[];
}) {
    const router = useRouter();
    const [selectedColor, setSelectedColor] = React.useState("default");
    const data = movie.map((v) => {
        const historyEntry = ep.find((va) => va.movieId == v.id)!
        const episodeDetail = v.episodes[0].episodeList.find((ve) => ve.id == historyEntry.watchedEpisode)!
        return {
            ...v,
            history: historyEntry,
            episode: episodeDetail
        }
    })
    return (
        <div className='w-full px-32'>
            <div className='grid justify-center py-10 border-b-2 border-white font-bold text-3xl mb-4'>Lịch sử xem</div>
            <div className="flex flex-col gap-3 text-black">
                <Table
                    className="text-white"
                    bgcolor={selectedColor}
                    aria-label="Example static collection table"
                >
                    <TableHeader>
                        <TableColumn>Poster</TableColumn>
                        <TableColumn>Tên Phim</TableColumn>
                        <TableColumn>Đã xem đến tập</TableColumn>
                        <TableColumn>Xóa lịch sử</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {data.map((e) => (
                            <TableRow key={e.id}>
                                <TableCell>
                                    <div
                                        className="aspect-[2/3] grid place-items-center w-14"
                                        style={{ "background": `center / cover no-repeat url('${e.posterUrl}')` }}>
                                    </div>
                                </TableCell>
                                <TableCell><a href={`/movie/${e.id}`} >{e.name} ({e.originalName})</a></TableCell>

                                <TableCell key={e.episode.id}>{e.episode.name}</TableCell>
                                <TableCell>
                                    <Button className="btn btn-ghost btn-sm" onClick={() => deleteHistory(userId, e.id).then(() => router.refresh())}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
