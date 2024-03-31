import { unstable_noStore as noStore } from "next/cache"

export async function getLatestMovies() {
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie`)).json();
}

export async function getLatestMoviesByTag(tagId: string) {
    // noStore();
    return await (await fetch(`${process.env.BACKEND_ADDRESS}/movie?tags=${tagId}`)).json();
}