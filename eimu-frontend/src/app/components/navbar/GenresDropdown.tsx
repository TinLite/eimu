"use client";
import { MovieTag } from "@/app/model/MovieTagModels";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

export default function GenresDropdown({
    genresTag,
}: {
    genresTag: MovieTag[]
}) {
    return (
        <div className="dropdown dropdown-hover px-4">
            <div className="flex items-center hover:text-sky-400">
                Thể loại
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-1">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[450px] gap-3 grid grid-cols-3">
                {genresTag.map((e) => (
                    <a
                        className="hover:text-sky-500"
                        key={e["id"]}
                        href={`/genres/${e["id"]}`}
                    >
                        {e["value"]}
                    </a>
                ))}
            </ul>
        </div>
    )
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                    className="border-none"
                >
                    <div className="flex items-center hover:text-sky-400">
                        Thể loại
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-1">
                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" className="">
                {genresTag.map((e) => (
                    <DropdownItem
                        className=""
                        key={e["id"]}
                        href={`/genres/${e["id"]}`}
                    >
                        {e["value"]}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}