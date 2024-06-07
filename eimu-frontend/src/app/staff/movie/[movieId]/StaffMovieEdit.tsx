'use client';
import { Episode, EpisodeServer, Movie } from "@/app/model/MovieModels";
import { MovieTag } from "@/app/model/MovieTagModels";
import { useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
    const {pending} = useFormStatus()
    return (<button type="submit" className="btn btn-primary w-full mb-2" disabled={pending}>Cập nhật thông tin phim</button>)
}

export function StaffMovieEdit({ movie, tags, detailSubmitAction }: { movie: Movie, tags: MovieTag[], detailSubmitAction: (prevState: any, formData: FormData) => Promise<{message: string}>}) {
    const arearef = useRef<HTMLTextAreaElement>(null);

    const [state, formAction] = useFormState(detailSubmitAction, {message: ""})

    const areachange = () => {
        arearef.current!.style.height = "auto";
        arearef.current!.style.height = (arearef.current!.scrollHeight) + "px";
    }
    const [formChanged, setFormChanged] = useState(false);
    return (
        <form onSubmit={() => setFormChanged(false)} action={formAction} onChange={() => setFormChanged(true)} className="*:py-2 hover:[&_input]:text-blue-400 [&_input]:transition-colors hover:[&_textarea]:text-blue-400 [&_textarea]:transition-colors">
            <div className="flex gap-8">
                <div
                    className="aspect-[2/3] grid place-items-center w-44 rounded-2xl"
                    style={{ "background": `center / cover no-repeat url('${movie?.thumbUrl}')` }}>
                    <div className="cursor-pointer w-full h-full grid place-items-center bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity">Chỉnh sửa</div>
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                    <div className="flex">
                        <div className="flex-grow *:w-full">
                            <input name="name" className="text-2xl font-bold bg-transparent" defaultValue={movie?.name} />
                            <input name="originalName" className="bg-transparent" defaultValue={movie?.originalName} />
                        </div>
                    </div>
                    <div>
                        <h4>Tag: &nbsp;
                            <button type="button" className="link italic opacity-50 hover:opacity-hover">(chỉnh sửa)</button>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <span key={index} className="bg-neutral px-1">{tag.value}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-2">Đạo diễn: <input name="director" className="bg-transparent flex-grow" defaultValue={movie?.director} /></div>
                    <div className="flex gap-2">Diễn viên: <input name="casts" className="bg-transparent flex-grow" defaultValue={movie?.casts} /></div>
                    <div className="flex gap-2">Năm phát hành: <input name="year" className="bg-transparent flex-grow" defaultValue={movie?.year} /></div>
                </div>
            </div>
            <div>
                <h1 className="text-xl font-bold">Mô tả phim</h1>
                <textarea name="description" onFocus={() => areachange()} ref={arearef} onChange={() => areachange()} className="w-full bg-transparent" defaultValue={movie?.description}></textarea>
            </div>
            {formChanged &&
                <SubmitButton />
            }
        </form>
    )
}

export function StaffEpisodeEdit({episodeServerList} : {episodeServerList: EpisodeServer[]}) {
    const [disabledStatus, setDisabledStatus] = useState(false);
    const [disabledMessage, setDisabledMessage] = useState("");
    const [episodeServer, setEpisodeServer] = useState(0);
    const [episodeId, setEpisodeId] = useState(0);
    const editModal = useRef<HTMLDialogElement>(null);
    const [episode, setEpisode] = useState<Episode>();
    const editId = useRef<HTMLInputElement>(null);
    function editEpisode(serverId: number, episodeId: number) {
        setEpisodeId(episodeId);
        setEpisode(episodeServerList[episodeServer].episodeList[episodeId]);
        editModal.current!.showModal();
    }
    const episodeIdChangeHandler = (newId: string) => {
        newId = newId.trim();
        if (newId == "") {
            setDisabledStatus(true);
            setDisabledMessage("ID không được để trống");
            return;
        }
        if (episode?.id.toString() != newId && episodeServerList[episodeServer].episodeList.find(e => e.id == newId)) {
            setDisabledStatus(true);
            setDisabledMessage("ID này đã tồn tại");
            return;
        }
        setDisabledStatus(false);
        setDisabledMessage("");
    }
    return (
        <>
            <div className="">
                <div className="sticky top-0">
                    <h1 className="text-xl font-bold mb-2">Tập phim</h1>
                    <div role="tablist" className="tabs tabs-bordered w-fit">
                        {episodeServerList.map((s, i) =>
                            <button key={i} onClick={() => setEpisodeServer(i)} role="tab" className={`tab${episodeServer === i && ` tab-active`}`}>{s.serverName}</button>
                        )}
                        <button className="tab">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="grid gap-2 grid-cols-12 mt-2">
                    {episodeServerList[episodeServer].episodeList.map((episode, i) => {
                        return (
                            <button key={episode.id} onClick={() => editEpisode(episodeServer, i)} className="px-2 py-1 bg-base-200 rounded-lg text-center">{episode.name}</button>
                        )
                    })}
                </div>
            </div>
            <dialog ref={editModal} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Chỉnh sửa tập phim</h3>
                    <form method="dialog" className="absolute top-2 right-2"><button className="btn btn-sm btn-circle">X</button></form>
                    <form action="">
                        <p className="py-4">
                            <label className="input flex items-center gap-2">
                                ID tập:
                                <input onChange={(e) => episodeIdChangeHandler(e.target.value)} name="id" defaultValue={episodeServerList[episodeServer].episodeList[episodeId].id} />
                            </label>
                            <label className="input flex items-center gap-2">
                                Tên tập:
                                <input name="name" defaultValue={episodeServerList[episodeServer].episodeList[episodeId].name} />
                            </label>
                            <label className="input flex items-center gap-2">
                                Embed URL:
                                <input name="embed" className="flex-grow" defaultValue={episodeServerList[episodeServer].episodeList[episodeId].embed} />
                            </label>
                        </p>
                        <div className="modal-action items-center gap-2">
                            <div className="text-error">{disabledMessage}</div>
                            <button className="btn btn-primary" disabled={disabledStatus}>Cập nhật</button>
                        </div>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop"><button></button></form>
            </dialog>
        </>
    )
}