
import HistoryTableList from '@/app/components/HistoryTableList'

export default async function History() {
    const new_movie_list = await (await fetch("http://51.79.144.118:12594/movie")).json()
    return (
        <div className='text-white'>
            <HistoryTableList />
        </div>
    )
}
