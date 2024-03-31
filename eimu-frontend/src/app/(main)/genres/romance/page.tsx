import React from "react";
import Genres from "../genres";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLatestMovies , getLatestMoviesByTag} from "@/app/repositories/MovieRepository";

export default async function Genre() {
    const romance_movie_list = await getLatestMoviesByTag("2a79ea27c279e471f4d180b08d62b00a")

    return (
        <>
            <Genres data={romance_movie_list["items"]} />
        </>
    )
}
