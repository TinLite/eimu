import Link from "next/link"
import { MovieListEntry } from "../model/list-data"
import Image from "next/image"
import ButtonBack from "@/app/components/button-back"
import ButtonNext from "@/app/components/button-next"

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
        <div className="flex px-14 gap-5 w-screen overflow-x-auto items-center">
            <ButtonBack />
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
            <ButtonNext />
        </div>
    </div>
}