import React from "react";
import Genres from "../genres";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLatestMovies , getLatestMoviesByTag} from "@/app/repositories/MovieRepository";

export default async function Genre() {
    const drama_movie_list = await getLatestMoviesByTag("c51ce410c124a10e0db5e4b97fc2af39")

    return (
        <>
            <Genres genre = "Chính Kịch" data={drama_movie_list["items"]} />
        </>
    )
}
