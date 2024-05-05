'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`);
    }
    var timer: string | number | NodeJS.Timeout | undefined
    function debounceSearch(term: string) {
        clearInterval(timer);
        timer = setTimeout(() => {
            handleSearch(term);
        }, 500);
    }

    return (
        <input type="text" className="input w-full input-ghost input-bordered mb-4" placeholder="Tìm kiếm..."
        onChange={(e) => debounceSearch(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}/>
    )
}