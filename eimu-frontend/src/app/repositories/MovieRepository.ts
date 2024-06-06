'use server';
import { Movie } from "@/app/model/MovieModels";
import { PaginatedMovieList, PaginatedMovieListWithTags } from "@/app/model/Pageable";

export async function getLatestMovies(page: string | number | undefined = "1"): Promise<PaginatedMovieList> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie?page=${page}`, { next: { revalidate: 30 } })).json() as PaginatedMovieList;
}

export async function getLatestMoviesByTag(tagIds: string | string[],  page?: number, size: number = 20): Promise<PaginatedMovieListWithTags> {
    var combinedTagIds = (typeof tagIds == "string" ? tagIds : tagIds.join(","))
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie?page=${page || 1}&size=${size}&tags=${combinedTagIds}`, { next: { revalidate: 60 } })).json() as PaginatedMovieListWithTags;
}

export async function getMovieDetail(movieId: string): Promise<Movie> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie/${movieId}`, { next: { revalidate: 30 } })).json() as Movie;
}

export async function getSearchMovie(movieName: string, page: number = 1,size : number = 20 ): Promise<PaginatedMovieList> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie?query=${movieName}&size=${size}&page=${page}`, { next: { revalidate: 30 } })).json() as PaginatedMovieList;
}