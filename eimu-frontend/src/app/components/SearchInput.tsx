import search from "@/app/(main)/search/page";
import { Input } from "@nextui-org/react";
import React, { useState } from "react";
'use client'

const SearchInput = () => {

    const [searchQuery, setSearchQuery] = useState(
        search ? search.get("query") : null
    );

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();

        const encodedSearchQuery == encodeURI=(searchQuery || "");
        Router.push
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };
    return (
        <form onSubmit={onSearch}>
            <Input
                classNames={{
                    base: "max-w-full w-[18rem] h-10",
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Tìm kiếm..."
                size="sm"
                value={search}
                type={"search"}
                name={"search"}
                startContent={
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                }
                onChange={event => setSearchQuery(event.target.value)}
            />
        </form>
    )
}
export default SearchInput;