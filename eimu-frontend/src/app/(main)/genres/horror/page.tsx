import React from "react";
import Genres from "../genres";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLatestMovies , getLatestMoviesByTag} from "@/app/repositories/MovieRepository";

export default async function Genre() {
    const horror_movie_list = await getLatestMoviesByTag("70efdf2ec9b086079795c442636b55fb")

    return (
        <>
            <Genres genre = "Lịch Sử" data={horror_movie_list["items"]} />
        </>
    )
}