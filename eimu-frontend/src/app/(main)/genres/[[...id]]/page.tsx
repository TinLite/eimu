import React from "react";
import Genres from "../genres";
import { getLatestMoviesByTag } from "@/app/repositories/MovieRepository";
import { unstable_noStore as noCache } from "next/cache";

export default async function Genre({
    params
}: {
    params: { id?: [string] }
}) {
    const movie_list = await getLatestMoviesByTag(params.id ?? [])
    return (<Genres data={movie_list.items} tags={movie_list.tags}/>)
}

