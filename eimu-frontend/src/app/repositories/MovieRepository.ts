import { PaginatedMovieList } from "@/app/model/Pageable";
import { Movie } from "@/app/model/MovieModels";

export async function getLatestMovies(): Promise<PaginatedMovieList> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie`)).json() as PaginatedMovieList;
}

export async function getLatestMoviesByTag(tagIds: string | string[]): Promise<PaginatedMovieList> {
    var combinedTagIds = (typeof tagIds == "string" ? tagIds : tagIds.join(","))
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie?tags=${combinedTagIds}`)).json() as PaginatedMovieList;
}

export async function getMovieDetail(movieId: string): Promise<Movie> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie/${movieId}`)).json() as Movie;
}