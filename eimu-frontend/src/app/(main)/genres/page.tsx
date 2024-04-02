import React from "react";
import Genres from "./genres";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLatestMovies } from "@/app/repositories/MovieRepository";

export default async function Genre() {
    const new_movie_list = await getLatestMovies()

    return (
        <>
            <Genres genre = "Phim mới" data={new_movie_list["items"]} />
        </>
    )
}

