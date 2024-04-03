import React from 'react'
import SideList from '@/app/components/SideList';
import { getLatestMovies, getLatestMoviesByTag, getMovieDetail } from "@/app/repositories/MovieRepository";
import MovieInfo from '@/app/components/MovieInfo';
import MoviePlayer from '@/app/components/MoviePlayer';
import Comment from '@/app/components/Comment';

export default async function Detail({ params }: { params: { movieId: string, epId?: string } }) {
    const movieId = params.movieId
    const epId = params.epId // Every components should have a fall-safe check for nullable so no need to check it here.
    const movieDetail = await getMovieDetail(movieId)
    const recommended_list = await getLatestMoviesByTag(movieDetail.tags) // TODO: Actually fix this and move to another endpoint
    return (
        <div className='text-gray-200 max-w-screen-xl mx-auto mt-4'>
            <MovieInfo movie={movieDetail} />
            <MoviePlayer movie={movieDetail} episodeNumber={epId} />
            <SideList title="Đề xuất cho bạn" link="#" data={recommended_list.items} />
            <Comment />
        </div >
    )
}
