import EimuPagination from "@/app/components/staff/EimuPagination";
import SearchBar from "@/app/components/staff/SearchBar";
import TableMovie from "@/app/components/staff/TableMovie";
import { getLatestMovies, getSearchMovie } from "@/app/repositories/MovieRepository";

export default async function movie({searchParams}: {searchParams: { page?: number, query?: string }}) {
    var movieList;

    if (searchParams.query) {
        movieList = await getSearchMovie(searchParams.query, searchParams.page);
    } else {
        movieList = await getLatestMovies(searchParams.page);
    }
    
    return (
        <div className="max-w-3xl mx-auto py-4">
            <SearchBar />
            <div className="overflow-auto w-full h-[80lvh]">
                <TableMovie movieList={movieList.items} />
            </div>
            <div className="grid place-items-center mt-4">
                <EimuPagination currentPage={movieList.pageable.page} totalPage={movieList.pageable.totalPages} />
            </div>
        </div>
    )
}