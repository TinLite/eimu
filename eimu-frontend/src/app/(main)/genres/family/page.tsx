import React from "react";
import Genres from "../genres";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getLatestMovies , getLatestMoviesByTag} from "@/app/repositories/MovieRepository";

export default async function Genre() {
    const family_movie_list = await getLatestMoviesByTag("aab3238922bcc25a6f606eb525ffdc56")

    return (
        <>
            <Genres genre = "Gia Đình" data={family_movie_list["items"]} />
        </>
    )
}