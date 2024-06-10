import { authOptions } from '@/../auth.config';
import Comment from '@/app/components/Comment';
import MovieInfo from '@/app/components/MovieInfo';
import MoviePlayer from '@/app/components/MoviePlayer';
import SideList from '@/app/components/SideList';
import { addFollow, isAlreadyFollowed, removeFollow } from '@/app/repositories/MovieFollowRepository';
import { getLatestMoviesByTag, getMovieDetail } from "@/app/repositories/MovieRepository";
import { getTagsDetail } from '@/app/repositories/MovieTagRepository';
import { getUserDetail } from '@/app/repositories/UserRepository';
import { getMovieHistory } from '@/app/repositories/UserWatchHistory';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';

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

    var historyWatching = await getMovieHistory(userId!, movieId);
    //check lich sua
    if (!epId && historyWatching) {
        epId = historyWatching.watchedEpisode
    }

    return (
        <div className='text-gray-200 max-w-screen-xl mx-auto mt-4'>
            <MovieInfo movie={movieDetail} tags={tags} isLogged={userDetail !== undefined} isFollowed={isUserFollowedMovie} followClick={followHandler} unfollowClick={unfollowHandler} />
            <MoviePlayer movie={movieDetail} episodeNumber={epId} userId={userId!} />
            <SideList title="Đề xuất cho bạn" link="#" data={recommended_list.items} />
            <Comment movie={movieDetail} userDetail={userDetail} userId={userId ?? undefined} />
        </div >
    )
}
