'use server';
import { PaginatedMovieList, PaginatedMovieListWithTags } from "@/app/model/Pageable";
import { Movie } from "@/app/model/MovieModels";

export async function getLatestMovies(): Promise<PaginatedMovieList> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie`, {next: {revalidate: 30}})).json() as PaginatedMovieList;
}

export async function getLatestMoviesByTag(tagIds: string | string[],page:number = 1): Promise<PaginatedMovieListWithTags> 
{
    var combinedTagIds = (typeof tagIds == "string" ? tagIds : tagIds.join(","))
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie?page${page}&tags=${combinedTagIds}`, {next: {revalidate: 60}})).json() as PaginatedMovieListWithTags;
}

export async function getMovieDetail(movieId: string): Promise<Movie> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie/${movieId}`, {next: {revalidate: 30}})).json() as Movie;
}