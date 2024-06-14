'use server';
import { EpisodeServer, Movie } from "@/app/model/MovieModels";
import { PaginatedMovieList, PaginatedMovieListWithTags } from "@/app/model/Pageable";

export async function getLatestMovies(page: string | number | undefined = "1"): Promise<PaginatedMovieList> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie?page=${page}`, { next: { revalidate: 30 } })).json() as PaginatedMovieList;
}

export async function getLatestMoviesByTag(tagIds: string | string[], page?: number, size: number = 20): Promise<PaginatedMovieListWithTags> {
    var combinedTagIds = (typeof tagIds == "string" ? tagIds : tagIds.join(","))
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie?page=${page || 1}&tags=${combinedTagIds}&size=${size}`, { next: { revalidate: 60 } })).json() as PaginatedMovieListWithTags;
}

export async function getMovieDetail(movieId: string): Promise<Movie | undefined> {
    const response = await fetch(`${process.env.BACKEND_ADDRESS}/movie/${movieId}`, { next: { revalidate: 30 } })
    if (response.ok)
        return await response.json() as Movie;
}

export async function getSearchMovie(movieName: string, page: number = 1,size : number = 20 ): Promise<PaginatedMovieList> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie?query=${movieName}&size=${size}&page=${page}`, { next: { revalidate: 30 } })).json() as PaginatedMovieList;
}

export async function setEpisodeServerList(movieId: string, episodeList : EpisodeServer[]) {
    var response = await fetch(`${process.env.BACKEND_ADDRESS}/movie/${movieId}/update`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(episodeList),
        cache: "no-cache"
    });
    return response.ok;
}

export async function setDetail(movieId: string, updatedDetail: {
    name?: string,
    year?: number,
    originalName?: string,
    description?: string,
    director?: string,
    language?: string,
    casts?: string,
    totalEpisodes?: number,

}) {
    var response = await fetch(`${process.env.BACKEND_ADDRESS}/movie/${movieId}/updateDetail`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedDetail),
        cache: "no-cache"
    });
    return response.ok;
}

export async function updateTagList(movieId: string, tags: string[]) {
    var response = await fetch(`${process.env.BACKEND_ADDRESS}/movie/${movieId}/updateTags`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tags),
        cache: "no-cache"
    });
    return response.ok;
}