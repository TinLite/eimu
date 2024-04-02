import React from "react";
import Genres from "../genres";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLatestMovies , getLatestMoviesByTag} from "@/app/repositories/MovieRepository";

export default async function Genre() {
    const aventure_movie_list = await getLatestMoviesByTag("c9f0f895fb98ab9159f51fd0297e236d")

    return (
        <>
            <Genres genre = "Phiêu Lưu" data={aventure_movie_list["items"]} />
        </>
    )
}

