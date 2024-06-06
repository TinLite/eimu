
import HistoryTableList from '@/app/components/HistoryTableList';
import { getHistoryList } from '@/app/repositories/UserWatchHistory';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../auth.config';

export default async function History() {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.email!;
    const gethistory = getHistoryList(userId);
    return (
        <div className='text-white'>
            <HistoryTableList />
        </div>
    )
}
