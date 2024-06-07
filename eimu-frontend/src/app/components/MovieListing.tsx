import { unstable_noStore as noCache } from "next/cache";
import { MovieListEntry } from "../model/MovieModels";

export async function MovieTileListing({
    data
}: {
    data: MovieListEntry[]
}) {
    noCache(); // Do not cache the render of this page, because it's a waste of memory for this
    return (<div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {data.map((entry) => (
            <div className='max-w-44' key={entry.id}>
                <a href={`/movie/${entry.id}`} key={entry.id} className='max-w-44'>
                    <div
                        className="aspect-[2/3] place-items-center w-full grid"
                        style={{ "background": `center / cover no-repeat url('${entry.thumbUrl}')` }}>{ }
                    </div>
                    <h3>{entry.name}</h3>
                </a>
            </div>
        ))}
    </div>)
}