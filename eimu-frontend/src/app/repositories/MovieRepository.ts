'use server';
import { EpisodeServer, Movie } from "@/app/model/MovieModels";
import { PaginatedMovieList, PaginatedMovieListWithTags } from "@/app/model/Pageable";

export async function getLatestMovies(page: string | number | undefined = "1"): Promise<PaginatedMovieList> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie?page=${page}`, { next: { revalidate: 30 } })).json() as PaginatedMovieList;
}

export async function getLatestMoviesByTag(tagIds: string | string[], page?: number): Promise<PaginatedMovieListWithTags> {
    var combinedTagIds = (typeof tagIds == "string" ? tagIds : tagIds.join(","))
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie?page=${page || 1}&tags=${combinedTagIds}`, { next: { revalidate: 60 } })).json() as PaginatedMovieListWithTags;
}

export async function getMovieDetail(movieId: string): Promise<Movie> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie/${movieId}`, { next: { revalidate: 1 } })).json() as Movie;
}

export async function getSearchMovie(movieName: string, page: number = 1): Promise<PaginatedMovieList> {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie?query=${movieName}&page=${page}`, { next: { revalidate: 30 } })).json() as PaginatedMovieList;
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
    posterUrl?: string,
    thumbUrl?: string,
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