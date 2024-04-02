import React from "react";
import Genres from "../genres";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLatestMovies , getLatestMoviesByTag} from "@/app/repositories/MovieRepository";

export default async function Genre() {
    const chinese_historical_movie_list = await getLatestMoviesByTag("a8baa56554f96369ab93e4f3bb068c22")

    return (
        <>
            <Genres genre = "Cổ Trang" data={chinese_historical_movie_list["items"]} />
        </>
    )
}
