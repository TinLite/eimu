import React from "react";
import Genres from "../genres";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLatestMovies , getLatestMoviesByTag} from "@/app/repositories/MovieRepository";

export default async function Genre() {
    const action_movie_list = await getLatestMoviesByTag("8f14e45fceea167a5a36dedd4bea2543")

    return (
        <>
            <Genres genre = "Hành Động" data={action_movie_list["items"]} />
        </>
    )
}
