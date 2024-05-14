import { getMovieDetail } from "@/app/repositories/MovieRepository"
import { getTagsDetail } from "@/app/repositories/MovieTagRepository"

export default async function StaffMovieDetail({ params }: { params: { movieId: string } }) {
    const { movieId } = params
    const movie = await getMovieDetail(movieId)
    const tags = await getTagsDetail(movie.tags)
    return (
        <div className="px-8 *:py-2">
            <div className="flex gap-8">
                <div
                    className="aspect-[2/3] grid place-items-center w-44 rounded-2xl"
                    style={{ "background": `center / cover no-repeat url('${movie.thumbUrl}')` }}>
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                    <div className="flex">
                        <div className="flex-grow *:w-full">
                            <input className="text-2xl font-bold bg-transparent" defaultValue={movie.name} />
                            <input className="bg-transparent" defaultValue={movie.originalName} />
                        </div>
                        <div className="">
                            <div className="btn btn-outline btn-primary">Chỉnh sửa thông tin phim</div>
                        </div>
                    </div>
                    <div>
                        <h4>Tag: &nbsp;
                            <button className="link italic opacity-50 hover:opacity-hover">(chỉnh sửa)</button>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span key={index} className="bg-neutral px-1">{tag.value}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-bold">Mô tả phim</h1>
                {/* TODO: Make this textarea's heigh expandable (and make it unshrinkable if possible)
                This might help https://stackoverflow.com/a/48460773 but we may need to export some parts
                into client components. I just want to play some games or learning something new now.
                Honestly, it's a pain in the ass to deal with server/client rendering architecure bullshit. */}
                <textarea className="w-full bg-transparent" defaultValue={movie.description}></textarea>
            </div>
            <dialog id="MovieDetailEditModal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Chỉnh sửa phim!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}