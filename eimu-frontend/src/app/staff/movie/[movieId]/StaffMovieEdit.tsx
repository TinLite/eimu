'use client';
import { Episode, EpisodeServer, Movie } from "@/app/model/MovieModels";
import { MovieTag } from "@/app/model/MovieTagModels";
import { setEpisodeServerList } from "@/app/repositories/MovieRepository";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
    const { pending } = useFormStatus()
    return (<button type="submit" className="btn btn-primary w-full mb-2" disabled={pending}>Cập nhật thông tin phim</button>)
}

export function StaffMovieEdit({ movie, tags, allTags, detailSubmitAction }: { movie: Movie, tags: MovieTag[], allTags: MovieTag[], detailSubmitAction: (prevState: any, formData: FormData) => Promise<{ message: string }> }) {
    const arearef = useRef<HTMLTextAreaElement>(null);

    const [state, formAction] = useFormState(detailSubmitAction, { message: "" })

    const areachange = () => {
        arearef.current!.style.height = "auto";
        arearef.current!.style.height = (arearef.current!.scrollHeight) + "px";
    }
    const [formChanged, setFormChanged] = useState(false);

    const ref = useRef<HTMLDialogElement>(null);
    const [currentTags, setCurrentTags] = useState(tags);
    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
    function showTagModal() {
        ref.current!.showModal();
    }

    const tagAddRef = useRef<HTMLInputElement>(null);
    function tagAddHandler() {
        console.log("yes")
        const newTagValue = tagAddRef.current!.value;
        if (newTagValue.trim() == "") {
            return;
        }
        if (currentTags.find(tag => tag.value == newTagValue)) {
            return;
        }
        const newTag = allTags.find(tag => tag.value == newTagValue)
        if (!newTag)
            return;
        setCurrentTags([...currentTags, newTag]);
        tagAddRef.current!.value = "";
    }

    function deleteTag(tagId: string) {
        setCurrentTags(currentTags.filter(tag => tag.id != tagId));
    }

    return (
        <>
            <form onSubmit={() => setFormChanged(false)} action={formAction} onChange={() => setFormChanged(true)} className="*:py-2 hover:[&_input]:text-blue-400 [&_input]:transition-colors hover:[&_textarea]:text-blue-400 [&_textarea]:transition-colors">
                <div className="flex gap-8 p-[10px]">
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
                                <button type="button" onClick={() => showTagModal()} className="link italic opacity-50 hover:opacity-hover">(chỉnh sửa)</button>
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
            <dialog ref={ref} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Chỉnh sửa tag</h3>
                    <form method="dialog" className="absolute top-2 right-2"><button className="btn btn-sm btn-circle">X</button></form>
                    <form action="" onSubmit={submitHandler} >
                        <div className="py-4">
                            <div className="flex items-center gap-2 flex-wrap select-none">
                                {
                                    currentTags.length == 0 &&
                                    <span className="italic px-4">Không có tag nào...</span>
                                }
                                {currentTags.map((tag, index) => (
                                    <button key={tag.id} onClick={() => deleteTag(tag.id)} type="button" className="bg-gray-700 px-1 [&_span]:hover:ml-1 [&_span]:hover:opacity-100">{tag.value}<span className="w-0 -ml-3 transition-all opacity-0">&#10006;</span></button>
                                ))}
                            </div>
                        </div>
                        <label className="input flex items-center gap-2">
                            Thêm tag mới
                            <input ref={tagAddRef} list="tag-notadded" type="text" onSubmit={(e) => e.preventDefault()} className="flex-grow" />
                            <button type="button" onClick={() => tagAddHandler()}>+</button>
                        </label>
                        <div className="modal-action items-center gap-2">
                            <div className="text-error"></div>
                            <button className="btn btn-secondary" type="button" onClick={() => setCurrentTags(tags)}>Reset</button>
                            <button className="btn btn-primary">Cập nhật</button>
                        </div>
                    </form>
                </div>
                <datalist id="tag-notadded">
                    {allTags.filter((v) => !currentTags.find((v2) => v.id === v2.id)).map((tag) => (
                        <option key={tag.id} value={tag.value} />
                    ))}
                </datalist>
                <form method="dialog" className="modal-backdrop"><button></button></form>
            </dialog>
        </>
    )
}

export function StaffEpisodeEdit({ episodeServerList, movieId }: { episodeServerList: EpisodeServer[], movieId: string }) {
    const router = useRouter()
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
    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (event.type === "submit") {
            const data = event.target as unknown as {
                id: {
                    name: string,
                    value: string,
                },
                name: {
                    name: string,
                    value: string,
                },
                embed: {
                    name: string,
                    value: string,
                },
            }
            episodeServerList[episodeServer].episodeList[episodeId].id = data.id.value;
            episodeServerList[episodeServer].episodeList[episodeId].name = data.name.value;
            episodeServerList[episodeServer].episodeList[episodeId].embed = data.embed.value;
            editModal.current!.close();
            console.log(movieId)
            setEpisodeServerList(movieId, episodeServerList).then((success) => {
                if (success) {
                    alert("Cập nhật thành công");
                    router.refresh();
                } else {
                    alert("Có lỗi xảy ra");
                }
            });
        }
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
                    <form action="" onSubmit={submitHandler} >
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