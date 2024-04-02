import React from "react";
import Genres from "../genres";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLatestMovies , getLatestMoviesByTag} from "@/app/repositories/MovieRepository";

export default async function Genre() {
    const fantasy_movie_list = await getLatestMoviesByTag("9bf31c7ff062936a96d3c8bd1f8f2ff3")

    return (
        <>
            <Genres genre = "Giả Tưởng" data={fantasy_movie_list["items"]} />
        </>
    )
}