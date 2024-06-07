import { addHistory } from '@/app/repositories/UserWatchHistory';
import { ScrollShadow } from '@nextui-org/react';
import { unstable_noStore as noCache } from 'next/cache';
import { Movie } from '../model/MovieModels';

export default async function MoviePlayer({ movie, episodeNumber, userId }: { movie: Movie, episodeNumber?: String, userId: string }) {
    var ep = movie.episodes[0].episodeList.find(
        (episode) => episode.id == episodeNumber
    ) ?? movie.episodes[0].episodeList[0];

    if (userId) {
        addHistory(userId, movie.id, ep.id);
    }

    noCache();
    return (
        <div className='bg-[#1A1C22] my-8'>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex-grow'>
                    <div className="text-sm breadcrumbs mx-4">
                        <ul>
                            <li className='font-bold text-lg'>{movie.name}</li>
                            <li className='font-bold text-lg'>Tập {ep.name}</li>
                        </ul>
                    </div>
                    <div className='bg-black aspect-video'>
                        <iframe src={ep.embed} allowFullScreen className='w-full h-full'></iframe>
                    </div>
                </div>
                <div className='mx-10 my-5'>
                    Tập phim
                    <ScrollShadow>
                        <div className='grid gap-2 grid-cols-12 lg:grid-cols-5 place-items-stretch mt-2 max-h-[30vw] border-t-2 pt-2'>
                            {movie.episodes[0].episodeList.map((episode) => {
                                if (ep.name === episode.name) {
                                    return <div key={ep.id} className='px-2 py-1 bg-blue-800 rounded-lg text-center'>{episode.name}</div>;
                                } else {
                                    return <div key={ep.id}><a href={`/movie/${movie.id}/${episode.id}`} className='block px-3 py-1 bg-gray-950 hover:bg-blue-950 transition-colors rounded-lg text-center'>{episode.name}</a></div>;
                                }
                            })}
                        </div>
                    </ScrollShadow>
                </div>
            </div>
        </div>
    )
}
