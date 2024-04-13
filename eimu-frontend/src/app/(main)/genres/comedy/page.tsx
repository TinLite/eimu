import React from "react";
import Genres from "../genres";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLatestMovies , getLatestMoviesByTag} from "@/app/repositories/MovieRepository";

export default async function Genre() {
    const comedy_movie_list = await getLatestMoviesByTag("d3d9446802a44259755d38e6d163e820")

    return (
        <>
            <Genres genre = "Hài Hước" data={comedy_movie_list["items"]} />
        </>
    )
}