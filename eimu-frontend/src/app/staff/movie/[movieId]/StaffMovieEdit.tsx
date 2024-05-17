'use client';
import { Movie } from "@/app/model/MovieModels";
import { MovieTag } from "@/app/model/MovieTagModels";
import { useRef, useState } from "react";

export default function StaffMovieEdit({ movie, tags }: { movie: Movie, tags: MovieTag[] }) {
    const arearef = useRef<HTMLTextAreaElement>(null);
    const areachange = () => {
        arearef.current!.style.height = "auto";
        arearef.current!.style.height = (arearef.current!.scrollHeight) + "px";
    }
    const [formChanged, setFormChanged] = useState(false);
    const [episodeServer, setEpisodeServer] = useState(0);
    const [episodeId, setEpisodeId] = useState(0);
    const editModal = useRef<HTMLDialogElement>(null);
    function editEpisode(serverId: number, episodeId: number) {
        setEpisodeId(episodeId);
        editModal.current!.showModal();
    }
    return (
        <div className="">
            <div className="bg-primary text-white text-center py-2">Thông tin ở trang này có thể được chỉnh sửa</div>
            <div className="px-8">
                <form onChange={() => setFormChanged(true)} className="*:py-2 hover:[&_input]:text-blue-400 [&_input]:transition-colors hover:[&_textarea]:text-blue-400 [&_textarea]:transition-colors">
                    <div className="flex gap-8">
                        <div
                            className="aspect-[2/3] grid place-items-center w-44 rounded-2xl"
                            style={{ "background": `center / cover no-repeat url('${movie.thumbUrl}')` }}>
                            <div className="cursor-pointer w-full h-full grid place-items-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity">Chỉnh sửa</div>
                        </div>
                        <div className="flex flex-col gap-2 flex-grow">
                            <div className="flex">
                                <div className="flex-grow *:w-full">
                                    <input className="text-2xl font-bold bg-transparent" defaultValue={movie.name} />
                                    <input className="bg-transparent" defaultValue={movie.originalName} />
                                </div>
                                {/* <div className="">
                            <div className="btn btn-outline btn-primary">Chỉnh sửa thông tin phim</div>
                        </div> */}
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
                            <div className="flex gap-2">Đạo diễn: <input className="bg-transparent flex-grow" defaultValue={movie.director} /></div>
                            <div className="flex gap-2">Diễn viên: <input className="bg-transparent flex-grow" defaultValue={movie.casts} /></div>
                            <div className="flex gap-2">Năm phát hành: <input className="bg-transparent flex-grow" defaultValue={movie.year} /></div>

                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Mô tả phim</h1>
                        {/* TODO: Make this textarea's heigh expandable (and make it unshrinkable if possible)
                This might help https://stackoverflow.com/a/48460773 but we may need to export some parts
                into client components. I just want to play some games or learning something new now.
                Honestly, it's a pain in the ass to deal with server/client rendering architecure bullshit. */}
                        <textarea onFocus={() => areachange()} ref={arearef} onChange={() => areachange()} className="w-full bg-transparent" defaultValue={movie.description}></textarea>
                    </div>
                    {formChanged &&
                        <button type="submit" className="btn btn-primary w-full mb-2">Cập nhật thông tin phim</button>
                    }
                </form>
                <div className="">
                    <div className="sticky top-0">
                        <h1 className="text-xl font-bold mb-2">Tập phim</h1>
                        <div role="tablist" className="tabs tabs-bordered w-fit">
                            {movie.episodes.map((s, i) =>
                                <button onClick={() => setEpisodeServer(i)} role="tab" className={`tab${episodeServer === i && ` tab-active`}`}>{s.serverName}</button>
                            )}
                            <button className="tab">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="grid gap-2 grid-cols-12 mt-2">
                        {movie.episodes[episodeServer].episodeList.map((episode, i) => {
                            return (
                                <button key={episode.id} onClick={() => editEpisode(episodeServer, i)} className="px-2 py-1 bg-base-200 rounded-lg text-center">{episode.name}</button>
                            )
                        })}
                    </div>
                </div>
            </div>
            <dialog ref={editModal} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Chỉnh sửa tập phim</h3>
                    <form method="dialog" className="absolute top-2 right-2"><button className="btn btn-sm btn-circle">X</button></form>
                    <p className="py-4">
                        <label className="input flex items-center gap-2">
                            ID tập:
                            <input placeholder={movie.episodes[episodeServer].episodeList[episodeId].id} />
                        </label>
                        <label className="input flex items-center gap-2">
                            Tên tập:
                            <input placeholder={movie.episodes[episodeServer].episodeList[episodeId].name} />
                        </label>
                        <label className="input flex items-center gap-2">
                            Embed URL:
                            <input className="flex-grow" placeholder={movie.episodes[episodeServer].episodeList[episodeId].embed} />
                        </label>
                    </p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Đóng</button>
                        </form>
                        <button className="btn btn-primary">Cập nhật</button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop"><button></button></form>
            </dialog>
        </div>)
}