import React from 'react'
import SideList from '@/app/components/SideList';
import { getLatestMovies, getLatestMoviesByTag } from "@/app/repositories/MovieRepository";
import InforMovie from '@/app/components/InforMovie';
import Movie from '@/app/components/Movie';
import Comment from '@/app/components/Comment';

export default async function Detail() {
    const new_movie_list = await getLatestMovies()
    return (
        <div className='text-white'>
            <InforMovie />
            <Movie />
            <SideList title="Đề xuất cho bạn" link="#" data={new_movie_list.items} />
            <Comment />
        </div >
    )
}
