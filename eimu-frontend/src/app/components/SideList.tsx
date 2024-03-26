import Link from "next/link"
import { MovieListEntry } from "../model/list-data"
import Image from "next/image"
import { Button } from "@nextui-org/react"
export default async function SideList({
    title,
    link,
    data,
}: {
    title: string,
    link: string,
    data: [MovieListEntry]
}) {
    return <div className="mt-2">
        <div className=" px-14 py-2 flex justify-between items-center">
            <div className="text-3xl">{title}</div>
            <div><Link href={link} className=" hover:text-red-400">Xem thêm</Link></div>
        </div>
        <div className="flex px-14 gap-5 w-screen overflow-x-auto items-start snap-x">
            <div className="flex flex-wrap gap-4 items-center border-2 rounded-full hover:bg-white hover:text-black absolute left-5 my-32">
                <Button color="primary" variant="ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </Button>
            </div>
            {data.map((entry) => (
                <div key={entry.id}>
                    <a href="#">
                        <div
                            className="aspect-[2/3] grid place-items-center w-44"
                            style={{ "background": `center / cover no-repeat url('${entry.thumbUrl}')` }}>
                            {/* <Image
                                src={entry.thumbUrl}
                                className="max-w-44 rounded-sm"
                                width={176}
                                height={99}
                                alt={entry.name}
                            /> */}
                        </div>
                        <div className="mt-2 hover:text-sky-300">{entry.name}</div>
                    </a>
                </div>
            ))
            }
            <div className="flex flex-wrap gap-4 items-center border-2 rounded-full hover:bg-white hover:text-black absolute right-5 my-32">
                <Button color="primary" variant="ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </Button>
            </div>
        </div>
    </div>
}