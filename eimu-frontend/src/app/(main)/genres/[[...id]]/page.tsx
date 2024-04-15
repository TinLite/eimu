import React from "react";
import Genres from "../genres";
import { getLatestMoviesByTag } from "@/app/repositories/MovieRepository";

export default async function Genre({
    params,
    searchParams
}: {
    params: { id?: [string] }
    searchParams : {page?:string}
}) {
    const movie_list = await getLatestMoviesByTag(params.id ?? [],Number(searchParams.page))
    return (<Genres data={movie_list} tags={movie_list.tags}/>)
}

