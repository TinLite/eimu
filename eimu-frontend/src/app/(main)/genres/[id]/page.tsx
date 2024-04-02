import React from "react";
import Genres from "../genres";
import { getLatestMoviesByTag } from "@/app/repositories/MovieRepository";

export default async function Genre({
    params
}: {
    params: { id: string }
}) {
    const id = params.id
    const new_movie_list = await getLatestMoviesByTag(id)
    
    return (
        <>
            <Genres data={new_movie_list.items} />
        </>
    )
}

