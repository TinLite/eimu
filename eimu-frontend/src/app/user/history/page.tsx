
import HistoryTableList from '@/app/components/HistoryTableList';
import { getMovieDetail } from '@/app/repositories/MovieRepository';
import { getHistoryList } from '@/app/repositories/UserWatchHistory';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../auth.config';

export default async function History() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.email!;
    const gethistory = await getHistoryList(userId);
    var history = undefined;
    if (gethistory) {
        history = await Promise.all(gethistory?.map((e) => getMovieDetail(e.movieId)))
    }

    return (
        <div className='text-white'>
            <HistoryTableList movie={history ?? []} userId={userId} ep={gethistory ?? []} />
        </div>
    )
}
