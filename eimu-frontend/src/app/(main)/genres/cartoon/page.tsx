import React from "react";
import Genres from "../genres";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLatestMovies , getLatestMoviesByTag} from "@/app/repositories/MovieRepository";

export default async function Genre() {
    const cartoon_movie_list = await getLatestMoviesByTag("45c48cce2e2d7fbdea1afc51c7c6ad26,fbd7939d674997cdb4692d34de8633c4")

    return (
        <>
            <Genres genre = "Cartoon" data={cartoon_movie_list["items"]} />
        </>
    )
}
