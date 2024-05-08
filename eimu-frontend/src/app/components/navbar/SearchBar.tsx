'use client';

import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useState } from "react";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchTerm) {
            router.push(`/search?query=${searchTerm}`);
        }
    };
    return (
        <div>
            <form method="get" onSubmit={handleSubmit}>
                <Dropdown>
                    <Input
                        classNames={{
                            base: "max-w-full w-[18rem] h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500",
                        }}
                        placeholder="Tìm kiếm..."
                        size="sm"
                        type="search"
                        id="search"
                        name="search"
                        onChange={handleSearchChange}
                        value={searchTerm}
                        startContent={
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        }
                    />
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem href="">
                            <div className="flex gap-4 w-[18rem]">
                                <div
                                    className="aspect-[2/3] grid place-items-center w-14"
                                    style={{ "background": `center / cover no-repeat url('https://phim.nguonc.com/public/images/Film/140627.jpg')` }}>
                                </div>
                                <div>
                                    <div>tên phim</div>
                                    <div>năm</div>
                                    <div>số tập</div>
                                </div>
                            </div>
                        </DropdownItem>
                        <DropdownItem href="">
                            <div className="flex gap-4 w-[18rem]">
                                <div
                                    className="aspect-[2/3] grid place-items-center w-14"
                                    style={{ "background": `center / cover no-repeat url('https://phim.nguonc.com/public/images/Film/140627.jpg')` }}>
                                </div>
                                <div>
                                    <div>tên phim</div>
                                    <div>năm</div>
                                    <div>số tập</div>
                                </div>
                            </div>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </form>
            {/* <DropdownSearch /> */}
        </div>
    )
}