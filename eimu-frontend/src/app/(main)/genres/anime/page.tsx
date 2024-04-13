import React from "react";
import Genres from "../genres";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLatestMovies , getLatestMoviesByTag} from "@/app/repositories/MovieRepository";

export default async function Genre() {
    const anime_movie_list = await getLatestMoviesByTag("d2ddea18f00665ce8623e36bd4e3c7c5,45c48cce2e2d7fbdea1afc51c7c6ad26")

    return (
        <>
            <Genres genre = "Anime" data={anime_movie_list["items"]} />
        </>
    )
}
