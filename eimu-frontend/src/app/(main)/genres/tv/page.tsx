import React from "react";
import Genres from "../genres";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLatestMovies , getLatestMoviesByTag} from "@/app/repositories/MovieRepository";

export default async function Genre() {
    const tv_movie_list = await getLatestMoviesByTag("eccbc87e4b5ce2fe28308fd9f2a7baf3")

    return (
        <>
            <Genres data={tv_movie_list["items"]} />
        </>
    )
}
