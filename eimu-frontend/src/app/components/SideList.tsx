'use client'

import Link from "next/link";
import { MovieListEntry } from "@/app/model/MovieModels";
import { useRef } from "react";
export default function SideList({
    title,
    link,
    data,
}: {
    title: string,
    link: string,
    data: [MovieListEntry]
}) {
    const ref = useRef<any>(null)

    function scrollLeft() {
        if (ref.current) {
            ref.current.scrollLeft -= 200;
        }
    }

    function scrollRight() {
        if (ref.current) {
            ref.current.scrollLeft += 200;
        }
    }

    return <div className="mt-2 relative">
        <div className=" px-16 py-2 flex justify-between items-end">
            <div className="text-3xl">{title}</div>
            <div><Link href={link} className=" hover:text-sky-400">Xem thêm</Link></div>
        </div>
        <div ref={ref} className="flex px-16 gap-5 w-full overflow-x-hidden items-start scroll-smooth">
            {data.map((entry) => (
                <Link href={`/movie/${entry.id}`} key={entry.id} className="block">
                    <div
                        className="aspect-[2/3] grid place-items-center w-44"
                        style={{ "background": `center / cover no-repeat url('${entry.thumbUrl}')` }}>
                    </div>
                    <div className="mt-2 hover:text-sky-300">{entry.name}</div>
                </Link>
            ))
            }
        </div>
        <button onClick={scrollLeft} className="h-full bg-gradient-to-r px-4 from-[#000D1C] hover:from-blue-950 hover:pr-16 transition-all top-0 left-0 absolute">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>
        <button onClick={scrollRight} className="h-full bg-gradient-to-l px-4 from-[#000D1C] hover:from-blue-950 hover:pl-16 transition-all top-0 right-0 absolute">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </button>
    </div>
}