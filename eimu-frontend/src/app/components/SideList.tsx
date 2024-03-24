import Link from "next/link"
import { MovieListEntry } from "../model/list-data"
import Image from "next/image"
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
        <div className=" px-10 py-2 flex justify-between items-center">
            <div className="text-3xl">{title}</div>
            <div><Link href={link} className=" hover:text-red-400">Xem thêm</Link></div>
        </div>
        <div className="flex px-10 gap-6 w-screen overflow-x-auto">
            {data.map((entry) => (
                <div>
                    <a href="#">
                        <div className="aspect-[2/3]">
                            <Image
                                src={entry.thumbUrl}
                                className="max-w-44 rounded-sm"
                                width={176}
                                height={99}
                                alt={entry.name}
                            />
                        </div>
                        <div className="mt-2">{entry.name}</div>
                    </a>
                </div>
            ))
            }
        </div>
    </div>
}