'use client'

import Link from "next/link"
import { MovieListEntry } from "@/app/model/MovieModels"
import Image from "next/image"
import { Button } from "@nextui-org/react"
export default function SideList({
    title,
    link,
    data,
}: {
    title: string,
    link: string,
    data: [MovieListEntry]
}) {
    return <div className="mt-2 relative">
        <div className=" px-16 py-2 flex justify-between items-center">
            <div className="text-3xl">{title}</div>
            <div><Link href={link} className=" hover:text-red-400">Xem thêm</Link></div>
        </div>
        <div className="flex px-16 gap-5 w-full overflow-x-scroll items-start">
            {data.map((entry) => (
                <a href={`/movie/${entry.id}`} key={entry.id} className="block">
                    <div
                        className="aspect-[2/3] grid place-items-center w-44"
                        style={{ "background": `center / cover no-repeat url('${entry.thumbUrl}')` }}>
                    </div>
                    <div className="mt-2 hover:text-sky-300">{entry.name}</div>
                </a>
            ))
            }
        </div>
        <button className="h-full bg-gradient-to-r px-4 from-[#000D1C] hover:from-blue-950 hover:pr-16 transition-all top-0 left-0 absolute">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>
        <button className="h-full bg-gradient-to-l px-4 from-[#000D1C] hover:from-blue-950 hover:pl-16 transition-all top-0 right-0 absolute">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </button>
    </div>
}