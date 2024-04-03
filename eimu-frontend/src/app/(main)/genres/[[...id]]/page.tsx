import React from "react";
import Genres from "../genres";
import { getLatestMovies, getLatestMoviesByTag } from "@/app/repositories/MovieRepository";

export default async function Genre({
    params
}: {
    params: { id?: [string] }
}) {
    if (params.id) {
        const movie_list = await getLatestMoviesByTag(params.id);
        return (<Genres data={movie_list.items} tags={movie_list.tags} />)
    } else {
        const movie_list = await getLatestMovies();
        return (<Genres data={movie_list.items} />)
    }
}

