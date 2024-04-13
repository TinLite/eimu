import React from "react";
import Genres from "../genres";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLatestMovies , getLatestMoviesByTag} from "@/app/repositories/MovieRepository";

export default async function Genre() {
    const historical_movie_list = await getLatestMoviesByTag("c74d97b01eae257e44aa9d5bade97baf")

    return (
        <>
            <Genres genre = "Lịch Sử" data={historical_movie_list["items"]} />
        </>
    )
}
