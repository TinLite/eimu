import React from "react";
import SearchPage from "../Search";
import { getLatestMoviesByTag, getSearchMovie } from "@/app/repositories/MovieRepository";

export default async function Search({
    params,
    searchParams
}: {
    params: { id?: [string] }
    searchParams : {page?:number, query: string}
}) {
    const {page, query} = searchParams
    // const movie_list = await getLatestMoviesByTag(params.id ?? [], Number(searchParams.page), 21)
    const movieList = await getSearchMovie(query, (page || 1), 21)
    return (<SearchPage data={movieList} query={query} />)
}
