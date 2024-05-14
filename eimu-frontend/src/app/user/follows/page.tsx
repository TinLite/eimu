
import FollowTableList from '@/app/components/FollowTableList';
import { getFollowList, isAlreadyFollowed } from '@/app/repositories/MovieFollowRepository';
import { getLatestMovies } from '@/app/repositories/MovieRepository';
import { getUserDetail } from '@/app/repositories/UserRepository';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../auth.config';

export default async function Follow({ searchParams }: { searchParams: { page?: number, query?: string } }) {
  const session = await getServerSession(authOptions);
  var userDetail = await getUserDetail(session?.user?.email!);
  var getfollow = await getFollowList(userDetail?.email!);
  var movieList = await getLatestMovies(searchParams.page);
  var followed = isAlreadyFollowed(userDetail?.email!, " movieList")
  return (
    <div>
      <div className='text-white'>
        <FollowTableList movieList={movieList.items} />
      </div>
    </div>
  )
}
