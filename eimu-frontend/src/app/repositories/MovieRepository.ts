import { PaginatedMovieList, PaginatedMovieListWithTags } from "@/app/model/Pageable";
import { Movie } from "@/app/model/MovieModels";
import { MovieListEntry } from "@/app/model/MovieModels";

export async function getLatestMovies(): Promise<PaginatedMovieList> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie`)).json() as PaginatedMovieList;
}

export async function getLatestMoviesByTag(tagIds: string | string[]): Promise<PaginatedMovieListWithTags> {
    var combinedTagIds = (typeof tagIds == "string" ? tagIds : tagIds.join(","))
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie?tags=${combinedTagIds}`)).json() as PaginatedMovieListWithTags;
}

export async function getMovieDetail(movieId: string): Promise<Movie> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie/${movieId}`)).json() as Movie;
}

export async function getSearchMovie(movieName: string): Promise<MovieListEntry> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie?query=${movieName}`)).json() as MovieListEntry;
} 