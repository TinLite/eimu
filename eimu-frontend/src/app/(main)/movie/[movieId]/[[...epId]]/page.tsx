import React from 'react'
import SideList from '@/app/components/SideList';
import { getLatestMovies, getMovieDetail } from "@/app/repositories/MovieRepository";
import MovieInfo from '@/app/components/MovieInfo';
import MoviePlayer from '@/app/components/MoviePlayer';
import Comment from '@/app/components/Comment';

export default async function Detail({ params }: { params: { movieId: string, epId?: string } }) {
    const movieId = params.movieId
    const epId = params.epId ?? "1"
    const movieDetail = await getMovieDetail(movieId)
    const new_movie_list = await getLatestMovies()
    return (
        <div className='text-gray-200 max-w-screen-xl mx-auto mt-4'>
            <MovieInfo movie={movieDetail} />
            <MoviePlayer />
            <SideList title="Đề xuất cho bạn" link="#" data={new_movie_list.items} />
            <Comment />
        </div >
    )
}
