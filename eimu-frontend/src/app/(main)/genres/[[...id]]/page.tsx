import { getLatestMoviesByTag } from "@/app/repositories/MovieRepository";
import Genres from "../genres";

export default async function Genre({
    params,
    searchParams
}: {
    params: { id?: string[] }
    searchParams: { page?: string }
}) {
    const movie_list = await getLatestMoviesByTag(params.id ?? [],  Number(searchParams.page), 21)
    return (<Genres data={movie_list} tags={movie_list.tags} />)
}

