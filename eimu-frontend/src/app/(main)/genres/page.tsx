import React from "react";
import Genres from "./genres";
import Link from "next/link";
import { useParams } from "next/navigation";
export const metadata = {
    title: 'Tên theo từng tag'
}
export default async function Genre() {
    const new_movie_list = await (await fetch("http://51.79.144.118:12594/movie")).json()

    return (
        <>
            <Genres data={new_movie_list["items"]} />
        </>
    )
}

