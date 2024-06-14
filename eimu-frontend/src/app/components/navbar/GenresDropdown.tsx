"use client";
import { MovieTag } from "@/app/model/MovieTagModels";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

export default function GenresDropdown({
    genresTag = [],
}: {
    genresTag: MovieTag[],
    formatTag: MovieTag[],
    contentTag: MovieTag[]
}) {
    const countries = genresTag.filter((v) => v.category == "country");
    const formats = genresTag.filter((v) => v.category == "format");
    const contents = genresTag.filter((v) => v.category == "content");

    return (
        <div className="dropdown dropdown-hover px-4">
            <div className="flex items-center hover:text-sky-400">
                Thể loại
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 ml-1">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[450px]">
                <li className="menu-title"><span>Quốc gia</span></li>
                <div className="grid grid-cols-4 gap-4">
                    {countries.map((e) => (
                        <a
                            className="hover:text-sky-500"
                            key={e.id}
                            href={`/genres/${e.id}`}
                        >
                            {e.value}
                        </a>
                    ))}
                </div>
                <li className="menu-title "><span>Định dạng</span></li>
                <div className="grid grid-cols-4 gap-4">
                    {formats.map((e) => (
                        <a
                            className="hover:text-sky-500"
                            key={e.id}
                            href={`/genres/${e.id}`}
                        >
                            {e.value}
                        </a>
                    ))}
                </div>
                <li className="menu-title  "><span>Thể loại</span></li>
                <div className="grid grid-cols-4 gap-4">
                    {contents.map((e) => (
                        <a
                            className="hover:text-sky-500"
                            key={e.id}
                            href={`/genres/${e.id}`}
                        >
                            {e.value}
                        </a>
                    ))}
                </div>
            </ul>
        </div>
    );
}
