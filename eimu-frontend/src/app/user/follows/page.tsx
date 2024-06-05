
import FollowTableList from '@/app/components/FollowTableList';
import { getFollowList, getFollowListWithMovieDetail, isAlreadyFollowed } from '@/app/repositories/MovieFollowRepository';
import { getLatestMovies } from '@/app/repositories/MovieRepository';
import { getUserDetail } from '@/app/repositories/UserRepository';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../auth.config';

export default async function Follow({ searchParams }: { searchParams: { page?: string } }) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.email!;
  var getfollow = await getFollowListWithMovieDetail(userId, Number(searchParams.page?? "1"), 10);

  return (
    <div>
      <div className='text-white'>
        <FollowTableList movie={getfollow!} userId={userId} />
      </div>
    </div >
  )
}
