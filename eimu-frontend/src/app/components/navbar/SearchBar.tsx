'use client';

import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
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
    return (<div>
        <form method="get" onSubmit={handleSubmit}>
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
        </form>
        {/* <DropdownSearch /> */}
    </div>)
}