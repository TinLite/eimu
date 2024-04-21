"use client";
import { MovieTag } from "@/app/model/MovieTagModels";
import { getAllTag } from "@/app/repositories/MovieTagRepository";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import React from "react";

export default function GenresDropdown({
    genresTag,
}: {
    genresTag: [MovieTag]
}) {
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