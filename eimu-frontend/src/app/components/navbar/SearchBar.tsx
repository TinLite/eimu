'use client';

import { MovieListEntry } from "@/app/model/MovieModels";
import { getSearchMovie } from "@/app/repositories/MovieRepository";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState<MovieListEntry[]>([]);
    const [isSubmitted, setIsSubmitted] = useState(false); // State to track if the search form is submitted
    const router = useRouter();

    const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setIsSubmitted(false); // Reset isSubmitted when search term changes
        if (event.target.value.trim() !== '') {
            const searchResults = await getSearchMovie(event.target.value);
            setResult(searchResults.items);
        } else {
            setResult([]);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (searchTerm) {
            setIsSubmitted(true); // Set isSubmitted to true when form is submitted
            router.push(`/search?query=${searchTerm}`);
        }
    };

    return (
        <div>
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
                {result.length !== 0 && !isSubmitted && ( // Conditionally render the dropdown based on isSubmitted state
                    <ul className="absolute my-3 bg-[#263238] w-[18rem] p-2 rounded-sm">
                        {result?.map((e) => (
                            <li key={e.id} className="py-2 border-b-1 border-black">
                                <a href={`/movie/${e.id}`} className="flex">
                                    <div
                                        className="max-w-16 w-full h-20"
                                        style={{ "background": `center / cover no-repeat url('${e.posterUrl}')` }}>{ }
                                    </div>
                                    <div className='ml-2'>
                                        <div>{e.name}</div>
                                        <div>{e.year}</div>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </form>
        </div>
    )
}
