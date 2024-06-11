import { authOptions } from '@/../auth.config';
import Comment from '@/app/components/Comment';
import MovieInfo from '@/app/components/MovieInfo';
import MoviePlayer from '@/app/components/MoviePlayer';
import SideList from '@/app/components/SideList';
import { addFollow, isAlreadyFollowed, removeFollow } from '@/app/repositories/MovieFollowRepository';
import { getLatestMoviesByTag, getMovieDetail } from "@/app/repositories/MovieRepository";
import { getTagsDetail } from '@/app/repositories/MovieTagRepository';
import { createRate, getRate } from '@/app/repositories/RateRepository';
import { getUserDetail } from '@/app/repositories/UserRepository';
import { getMovieHistory } from '@/app/repositories/UserWatchHistory';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';
import { z } from 'zod';

export default async function Detail({ params }: { params: { movieId: string, epId?: string } }) {
    const movieId = params.movieId
    var epId = params.epId // Every components should have a fall-safe check for nullable so no need to check it here.
    const session = await getServerSession(authOptions);
    var userDetail = undefined
    var isUserFollowedMovie = false
    const userId = session?.user?.email
    if (userId) {
        userDetail = await getUserDetail(userId);
        isUserFollowedMovie = await isAlreadyFollowed(userId, movieId)
    }

    const movieDetail = await getMovieDetail(movieId)
    if (!movieDetail) {
        return notFound();
    }
    const tags = await getTagsDetail(movieDetail.tags)
    const recommended_list = await getLatestMoviesByTag(movieDetail.tags) // TODO: Actually fix this and move to another endpoint

    const unfollowHandler = async () => {
        "use server";
        if (!userId) {
            return false;
        }
        return await removeFollow(userId, movieId)
    }
    const followHandler = async () => {
        "use server";
        if (!userId) {
            return false;
        }
        return await addFollow(userId, movieId)
    }

    const rateHandle = async (formData: FormData) => {
        "use server";
        if (!userId) {
            return;
        }
        const rateValidator = z.object({
            rating: z.number().min(0).max(10)
        })
        if (!formData.get("rating")) {
            return
        }
        const data = parseInt(formData.get("rating")!.toString())
        const result = rateValidator.safeParse({
            rating: data
        });
        if (!result.success) {
            return;
        } else {
            return await createRate(movieId, userId, result.data.rating)
        }
    }

    var historyWatching = await getMovieHistory(userId!, movieId);
    //check lich sua
    if (!epId && historyWatching) {
        epId = historyWatching.watchedEpisode
    }
    var getrate = await getRate(movieId);
    return (
        <div className='text-gray-200 max-w-screen-xl mx-auto mt-4'>
            <MovieInfo rateHandler={rateHandle} movie={movieDetail} tags={tags} isLogged={userDetail !== undefined} isFollowed={isUserFollowedMovie} followClick={followHandler} unfollowClick={unfollowHandler} rate={getrate.AvgMovie} />
            <MoviePlayer movie={movieDetail} episodeNumber={epId} userId={userId!} />
            <SideList title="Đề xuất cho bạn" link="#" data={recommended_list.items} />
            <Comment movie={movieDetail} userDetail={userDetail} userId={userId ?? undefined} />
        </div >
    )
}
