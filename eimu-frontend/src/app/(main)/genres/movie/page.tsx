import React from "react";
import Genres from "../genres";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLatestMovies , getLatestMoviesByTag} from "@/app/repositories/MovieRepository";

export default async function Genre() {
    const theater_movie_list = await getLatestMoviesByTag("a87ff679a2f3e71d9181a67b7542122c")

    return (
        <>
            <Genres genre ="Phim lẻ" data={theater_movie_list["items"]} />
        </>
    )
}
