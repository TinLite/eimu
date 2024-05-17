import { getMovieDetail } from "@/app/repositories/MovieRepository"
import { getTagsDetail } from "@/app/repositories/MovieTagRepository"
import StaffMovieEdit from "./StaffMovieEdit"

export default async function StaffMovieDetail({ params }: { params: { movieId: string } }) {
    const { movieId } = params
    const movie = await getMovieDetail(movieId)
    const tags = await getTagsDetail(movie.tags)
    return (
        <StaffMovieEdit movie={movie} tags={tags}/>
    )
}